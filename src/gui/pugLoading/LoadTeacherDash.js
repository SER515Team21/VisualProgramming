/* global document */
/* global window */
/* global CourseDb */
/* global UserDb */
/* global pug */
/* global Path */

async function loadCourseStudentListTeacher(course) {
    // TODO: FINISH
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
    document.getElementById("courseStudents").innerHTML = scrolledTable;
}

function loadCourseAssignmentListTeacher() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ViewAssignmentsScrollTable.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const assigns = [["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"], ["Test", "Name", "And Id"]];
    const scrolledTable = compiledFunction({
        assigns
    });
    document.getElementById("courseAssignments").innerHTML = scrolledTable;
}

async function loadAllTeachersCoursesList() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/helpers/ListViewSelect.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const teacherId = window.localStorage.getItem("userID");
    const courses = await CourseDb.getCourses(teacherId);
    const listView = compiledFunction({
        rows: courses
    });
    document.getElementById("teacherCourses").innerHTML = listView;
}

function loadAllTeachersStudentsList() {
    // TODO: FINISH
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/helpers/ListView.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courses = ["Studdent", "student also", "weee student", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2", "Test", "test2"];
    const listView = compiledFunction({
        rows: courses
    });
    document.getElementById("teacherStudents").innerHTML = listView;
}
