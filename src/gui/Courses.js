/* global document */
/* global UserDb */
/* global CourseDb */
/* global loadAllCoursesList */
/* global pug */
/* global Path */

let newCourseStudents = {};

async function updateCourse(valueToUpdate) {
    // TODO
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

        newCourseStudents = [];
    }
}

async function addStudentToCourse() {
    // TODO
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
