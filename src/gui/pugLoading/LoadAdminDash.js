/* global document */
/* global UserDb */
/* global pug */
/* global Path */

function loadCourseStudentList() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ViewStudentsScrollTable.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const students = [["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"]];
    const scrolledTable = compiledFunction({
        students
    });
    document.getElementById("CourseViewStudents").innerHTML = scrolledTable;
}

function loadAllCoursesList() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = ["Course", "ccours", "coursese", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2"];
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

function loadAllStudentsList() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = ["Studdent", "student also", "weee student", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2"];
    const listView = compiledFunction({
        rows: courses
    });
    document.getElementById("AdminStudentsList").innerHTML = listView;
}
