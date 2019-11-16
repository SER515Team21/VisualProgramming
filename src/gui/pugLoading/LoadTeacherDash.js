/* global document */
/* global UserDb */
/* global pug */
/* global Path */

function loadCourseStudentListTeacher() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ViewStudentsScrollTable.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const students = [["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"]];
    const scrolledTable = compiledFunction({
        students
    });
    document.getElementById("courseStudents").innerHTML = scrolledTable;
}

function loadCourseAssignmentListTeacher() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ViewStudentsScrollTable.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const students = [["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"]];
    const scrolledTable = compiledFunction({
        students
    });
    document.getElementById("courseAssignments").innerHTML = scrolledTable;
}

function loadAllTeachersCoursesList() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = ["Course", "ccours", "coursese", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2"];
    const listView = compiledFunction({
        rows: courses
    });
    document.getElementById("teacherCourses").innerHTML = listView;
}

function loadAllTeachersStudentsList() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = ["Studdent", "student also", "weee student", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2"];
    const listView = compiledFunction({
        rows: courses
    });
    document.getElementById("teacherStudents").innerHTML = listView;
}
