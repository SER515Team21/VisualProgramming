/* global document */
/* global UserDb */
/* global CourseDb */
/* global loadAllCoursesList */
/* global loadCourseStudentList */
/* global pug */
/* global Path */
/* global window */

let newCourseStudents = {};

async function updateCourse() {
    const oldCourse = window.localStorage.getItem("currentCourse");
    const newCourseName = document.getElementById("editCourseName").value;
    const newCourseTeacherName = document.getElementById("editCourseTeacherName").value;
    const newCourseGrade = document.getElementById("editCourseGrade").value;

    const courseExists = await CourseDb.courseExists(oldCourse);
    if (courseExists) {
        if (newCourseName !== undefined && newCourseName !== null && newCourseName !== "") {
            const newNameExists = await CourseDb.courseExists(newCourseName);
            if (!newNameExists) {
                await CourseDb.editCourseName(oldCourse, newCourseName);
            }
        }
        if (newCourseTeacherName !== undefined && newCourseTeacherName !== null
            && newCourseTeacherName !== "") {
            const newCourseTeacherId = await UserDb.getUser(newCourseTeacherName);
            await CourseDb.editCourseTeacherId(oldCourse, newCourseTeacherId._id);
        }
        if (newCourseGrade !== undefined && newCourseGrade !== null && newCourseGrade !== "") {
            await CourseDb.editCourseGrade(oldCourse, newCourseGrade);
        }
    }
}

async function saveNewCourse() {
    const courseName = document.getElementById("newCourseName").value;
    const grade = document.getElementById("newCourseGrade").value;
    const teacherName = document.getElementById("newCourseTeacherUserName").value;
    const teacher = await UserDb.getUser(teacherName);

    if (teacher === undefined || teacher.role !== "teacher") {
        document.getElementById("teacherError").hidden = false;
    }
    else {
        document.getElementById("teacherError").hidden = true;

        const students = Object.keys(newCourseStudents);
        const teacherId = teacher._id;

        const result = await CourseDb.createCourse(courseName, grade, teacherId, students);

        if (result) {
            document.getElementById("newCourseError").hidden = true;
            await loadAllCoursesList();
        }
        else {
            document.getElementById("newCourseError").hidden = false;
        }

        await loadAllCoursesList();

        newCourseStudents = {};
    }
}

async function addStudentToCourse() {
    const newStudentId = document.getElementById("existingCourseStudentUserName").value;

    if (newStudentId !== null && newStudentId !== undefined) {
        const courseName = window.localStorage.getItem("currentCourse");
        const courseId = await CourseDb.getCourseId(courseName);
        await CourseDb.addStudent(courseId, newStudentId);

        await loadCourseStudentList(courseName);
    }
}

async function addStudentToNewCourse() {
    const studentId = document.getElementById("newCourseStudentUserName").value;
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ViewStudentsScrollTable.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const studentInfo = await UserDb.getUserWithId(studentId);
    const row = [studentInfo[0].username, studentInfo[0].username, studentId];

    if (!(studentId in Object.keys(newCourseStudents))) {
        newCourseStudents[studentId] = row;

        const scrolledTable = compiledFunction({
            students: newCourseStudents
        });

        document.getElementById("NewCourseStudents").innerHTML = scrolledTable;
        document.getElementById(`addToNewCourse${studentId}`).disabled = true;
    }
}
