/* global document */
/* global UserDb */
/* global pug */
/* global Path */
/* global CourseDb */
/* global UserDb */

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
    students = students == undefined ? [] : students;

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

function loadAllTeachersList() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/helpers/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = ["Teacher", "teacher2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2"];
    const listView = compiledFunction({
        rows: courses
    });
    document.getElementById("AdminTeachersList").innerHTML = listView;
}

async function loadAllStudentsList() {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/helpers/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = await CourseDb.getCourses();
    const courseId = await CourseDb.getCourseId(courses[0]);
    let students = await CourseDb.getStudents(courseId);
    students = students == undefined ? [] : students;
    const studentTable = [];
    for (let i = 0; i < students.length; i++) {
        // eslint-disable-next-line no-await-in-loop
        students[i] = await UserDb.getUserWithId(students[i]);
        studentTable.push(students[i][0].username);
    }

    const listView = compiledFunction({
        rows: studentTable
    });
    document.getElementById("AdminStudentsList").innerHTML = listView;
}

async function loadInfo(info) {
    if (await CourseDb.courseExists(info)) {
        await loadCourseStudentList(info);
    }
    else if (await UserDb.userExists(info)) {
        // TODO
    }
}

async function validateInput(course, grade, teacher) {
    document.getElementById("adminSaveNewCourse").disabled = !(course && grade && teacher);
}
