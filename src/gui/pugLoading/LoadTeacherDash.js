/* global document */
/* global window */
/* global CourseDb */
/* global AssignDb */
/* global UserDb */
/* global pug */
/* global Path */
/* global tabSwitcher */

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
        students[i] = [students[i].username, students[i].username, students[i].username];
        studentTable.push(students[i]);
    }


    const scrolledTable = compiledFunction({
        students
    });
    document.getElementById("courseStudents").innerHTML = scrolledTable;
}

async function loadAssignmentSubmissionsTeacher(assignmentId) {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/SubmissionList.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const assignment = await AssignDb.loadAssignment(assignmentId);
    if (assignment !== undefined && assignment.submissions !== undefined) {
        const users = await Promise.all(assignment.submissions.map(x =>
            UserDb.getUserWithId(x.studentId)));
        const usernames = users.map(x => x.username);
        const submissions = [];
        for (let i = 0; i < assignment.submissions.length; ++i) {
            if (assignment.submissions[i].grade !== undefined) {
                submissions.push([usernames[i], `${assignment.submissions[i].grade} / ${assignment.points}`]);
            } else {
                submissions.push([usernames[i], `X / ${assignment.points}`]);
            }
        }
        const scrolledTable = compiledFunction({name: assignment.name, submissions});
        const assignmentSubmissions = document.getElementById("teacherSubmissions");
        assignmentSubmissions.innerHTML = scrolledTable;

        const rows = Array.from(assignmentSubmissions.getElementsByTagName("tr"));
        for (let i = 0; i < assignment.submissions.length; i++) {
            const td = document.createElement("td");
            const studentId =
                td.innerHTML = `<button onclick='showGradingView("${assignmentId}", "${assignment.submissions[i].studentId}")')>Grade</button>`;
            rows[i+1].appendChild(td);
        }
    }

    const submitButton = document.querySelectorAll("[data-for='teacherSubmissions']")[0];
    tabSwitcher(submitButton);
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
        const clickHandler =
            function (id) {
                return function () {
                    loadAssignmentSubmissionsTeacher(id);
                };
            };
        rows[i].firstChild.onclick = clickHandler(ids[i - 1]);
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
