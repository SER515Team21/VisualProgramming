/* global document */
/* global window */
/* global CourseDb */
/* global AssignDb */
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

async function loadCourseAssignmentListTeacher(course) {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/ViewAssignmentsScrollTable.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const courseID = await CourseDb.getCourseId(course);
    let assignments = await AssignDb.getAssignmentsByCourse(courseID);
    const ids = assignments.map(assign => assign._id);
    assignments = assignments.map(assign => [assign.name, assign.dueDate, assign.points]);
    const scrolledTable = compiledFunction({
        assigns: assignments
    });
    const courseAssignments = document.getElementById("courseAssignments");
    courseAssignments.innerHTML = scrolledTable;

    const rows = Array.from(courseAssignments.getElementsByTagName("tr"));
    for (let i = 1; i < rows.length; i++) {
        const td = document.createElement("td");
        td.innerHTML = `<button onclick='(function(){AssignDb.deleteAssignment("${ids[i - 1]}"); loadCourseAssignmentListTeacher();})()'>X</button>`;
        rows[i].appendChild(td);
    }
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
