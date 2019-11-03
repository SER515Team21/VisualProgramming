function loadCourseStudentList(){
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/AdminViewStudentsScrollTable.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const students = [['asd', 'asad', 'asd'], ['Empty', 'Empty', 'Empty'], ['Empty', 'Empty', 'Empty'],
        ['123', '123', '123'], ['Empty', 'Empty', 'Empty'], ['Empty', 'Empty', 'Empty'],
        ['Empty', 'Empty', 'Empty'], ['Empty', 'Empty', 'Empty'], ['Empty', 'Empty', 'Empty'],
        ['Empty', 'Empty', 'Empty']];
    const scrolledTable = compiledFunction({
        students: students
    });
    document.getElementById("CourseEditorStudents").innerHTML = scrolledTable;
}

function loadAllCoursesList(){
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = ['asd', 'asad', 'asd', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', '123', '123', '123',
        'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty',
        'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty'];
    const listView = compiledFunction({
        rows: courses
    });
    console.log(listView);
    document.getElementById("AdminCoursesList").innerHTML = listView;
}