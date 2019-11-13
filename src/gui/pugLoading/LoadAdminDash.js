/* global document */
/* global UserDb */
/* global pug */
/* global Path */
/* global CourseDb */
/* global UserDb */

async function loadCourseStudentList() {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/AdminViewStudentsScrollTable.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = await CourseDb.getCourses();
    let courseId = "";
    if (courses[0] !== undefined) {
        courseId = await CourseDb.getCourseId(courses[0]);
    }
    const students = await CourseDb.getStudents(courseId);
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
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = await CourseDb.getCourses();
    const listView = compiledFunction({
        rows: courses
    });
    document.getElementById("AdminCoursesList").innerHTML = listView;
}

function loadAllTeachersList() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = ["Teacher", "teacher2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2"];
    const listView = compiledFunction({
        rows: courses
    });
    document.getElementById("AdminTeachersList").innerHTML = listView;
}

async function loadAllStudentsList() {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = await CourseDb.getCourses();
    const courseId = await CourseDb.getCourseId(courses[0]);
    const students = await CourseDb.getStudents(courseId);
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
