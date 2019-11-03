/* global document */
/* global UserDb */
/* global pug */
/* global Path */

function loadCourseStudentList() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/AdminViewStudentsScrollTable.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const students = [];
    const scrolledTable = compiledFunction({
        students
    });
    document.getElementById("CourseEditorStudents").innerHTML = scrolledTable;
}

function loadAllCoursesList() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = [];
    const listView = compiledFunction({
        rows: courses
    });
    document.getElementById("AdminCoursesList").innerHTML = listView;
}

function loadAllTeachersList() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = ["Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2"];
    const listView = compiledFunction({
        rows: courses
    });
    document.getElementById("AdminCoursesList").innerHTML = listView;
}
