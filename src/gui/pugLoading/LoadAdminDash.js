/* global document */
/* global UserDb */
/* global pug */
/* global Path */
/* global CourseDb */
/* global UserDb */
/* global loadCourseStudentListTeacher */
/* global window */

async function loadCourseStudentList(course) {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ViewStudentsScrollTable.pug");
    const compiledFunction = pug.compileFile(pugPath);

    let courseId = "";

    if (course === undefined) {
        const courses = await CourseDb.getCourses();
        if (courses[0] !== undefined) {
            courseId = await CourseDb.getCourseId(courses[0]);
        }
    }
    else {
        courseId = await CourseDb.getCourseId(course);
    }

    let students = await CourseDb.getStudents(courseId);
    students = students === undefined ? [] : students;

    const studentTable = [];
    for (let i = 0; i < students.length; i++) {
        // eslint-disable-next-line no-await-in-loop
        students[i] = await UserDb.getUserWithId(students[i]);
        students[i] = [students[i][0].username, students[i][0].username, students[i][0].username];
        studentTable.push(students[i][0]);
    }

    const scrolledTable = compiledFunction({
        students
    });
    document.getElementById("CourseViewStudents").innerHTML = scrolledTable;
    document.getElementById("CourseEditorStudents").innerHTML = scrolledTable;

    if (course !== undefined) {
        document.getElementById("editCourseName").value = course;
        document.getElementById("editCourseGrade").value =
            parseInt(await CourseDb.getCourseGrade(course), 10);
        const teacherId = await CourseDb.getCourseTeacherId(course);
        const teacher = await UserDb.getUserWithId(teacherId);
        document.getElementById("editCourseTeacherName").value = teacher[0].username;

        document.getElementById("CurrentCourseName").innerText = course;
        document.getElementById("CurrentCourseTeacher").innerText = teacher[0].username;
        document.getElementById("CurrentCourseGrade").innerText =
            await CourseDb.getCourseGrade(course);
    }
}

async function loadAllCoursesList() {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/helpers/ListViewSelect.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = await CourseDb.getCourses();
    const listView = compiledFunction({
        rows: courses
    });
    document.getElementById("AdminCoursesList").innerHTML = listView;
}

async function loadAllTeachersList() {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/helpers/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const teachers = await UserDb.getUsers("teacher");
    const teacherNames = [];
    for (let i = 0; i < teachers.length; i++) {
        teacherNames.push(teachers[i].username);
    }
    const listView = compiledFunction({
        rows: teacherNames
    });
    document.getElementById("AdminTeachersList").innerHTML = listView;
}

async function loadAllStudentsList() {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/helpers/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);

    const students = await UserDb.getUsers("student");
    const studentNames = [];
    for (let i = 0; i < students.length; i++) {
        studentNames.push(students[i].username);
    }
    const listView = compiledFunction({
        rows: studentNames
    });
    document.getElementById("AdminStudentsList").innerHTML = listView;
}

async function loadInfo(info) {
    if (await CourseDb.courseExists(info)) {
        window.localStorage.setItem("currentCourse", info);
        await loadCourseStudentList(info);
        await loadCourseStudentListTeacher(info);
    }
    else if (await UserDb.userExists(info)) {
        // TODO
    }
}

async function validateInput(course, grade, teacher) {
    document.getElementById("adminSaveNewCourse").disabled = !(course && grade && teacher);
}
