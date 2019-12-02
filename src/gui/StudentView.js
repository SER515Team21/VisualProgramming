/* global AssignDb */
/* global UserDb */
/* global loadAssignmentSubmissionsTeacher */
/* global pug */
/* global document */
/* global Path */

async function loadAssignmentGradesStudent(assignmentId) {
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
            }
            else {
                submissions.push([usernames[i], `X / ${assignment.points}`]);
            }
        }
        const scrolledTable = compiledFunction({ name: assignment.name, submissions });
        const assignmentGrades = document.getElementById("assignment_grades");
        assignmentGrades.innerHTML = scrolledTable;

        const rows = Array.from(assignmentGrades.getElementsByTagName("tr"));
        for (let i = 0; i < assignment.submissions.length; i++) {
            const td = document.createElement("td");
            td.innerHTML = `<button onclick='showGradesView("${assignmentId}", "${assignment.submissions[i].studentId}")')>Grade</button>`;
            rows[i + 1].appendChild(td);
        }
    }
}

async function showGradesView(assignmentId, studentId) {
    const assignment = await AssignDb.getAssignmentById(assignmentId);
    const submissions = (await AssignDb.getSubmissions(assignmentId))
        .filter(x => (x.studentId === studentId));
    const studentName = (await UserDb.getUserWithId(studentId)).username;
    if (submissions.length === 1) {
        const pugPath = Path.relative(process.cwd(), "./src/gui/pug/GradeAssignment.pug");
        const compiledFunction = pug.compileFile(pugPath);
        const assignmentGrader = compiledFunction({
            assignmentId,
            studentId,
            assignmentName: assignment.name,
            studentName,
            questions: assignment.questions,
            answers: submissions[0].answers,
            points: assignment.points
        });
        const assignmentGrades = document.getElementById("assignment_grades");
        assignmentGrades.innerHTML = assignmentGrader;
    }
}


async function loadAllGradesList() {
    const assignments = await AssignDb.loadCurrentAssignments();
    for (let i = 0; i < assignments.length; i++) {
        loadAssignmentGradesStudent(assignments[i]._id);
    }
}
