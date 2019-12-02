/* global window */
/* global AssignDb */
/* global UserDb */
/* global loadAssignmentSubmissionsTeacher */
/* global pug */
/* global document */
/* global Path */

async function loadAssignmentGradesStudent() {
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/GradesList.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const assignments = await AssignDb.loadCurrentAssignments();
    const submissions = [];
    const user = window.localStorage.getItem("username");
    for (let i = 0; i < assignments.length; i++) {
        const assignment = assignments[i];
        if (assignment !== undefined && assignment.submissions !== undefined) {
            const users = await Promise.all(assignment.submissions.map(x =>
                UserDb.getUserWithId(x.studentId)));
            const usernames = users.map(x => x.username);
            for (let j = 0; j < assignment.submissions.length; ++j) {
                if (usernames[j] === user) {
                    if (assignment.submissions[j].grade !== undefined) {
                        submissions.push([assignment.name, `${assignment.submissions[j].grade} / ${assignment.points}`]);
                    }
                    else {
                        submissions.push([assignment.name, `X / ${assignment.points}`]);
                    }
                }
            }
        }
    }
    const scrolledTable = compiledFunction({ name: user, submissions });
    const assignmentGrades = document.getElementById("assignment_grades");
    assignmentGrades.innerHTML = scrolledTable;
}

