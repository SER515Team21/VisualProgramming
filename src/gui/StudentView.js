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
    const user = window.localStorage.getItem("username");
    const userID = window.localStorage.getItem("userID");
    const submissions = assignments.map((assignment) => {
        if (assignment.submissions === undefined) {
            assignment.submissions = [];
        }
        return assignment;
    })
        .map((assignment) => {
            assignment.submissions.forEach((submission) => {
                submission.name = assignment.name;
                submission.points = assignment.points;
            });
            return assignment.submissions;
        })
        .flat()
        .filter(submission => submission.studentId === userID)
        .map((submission) => {
            if (submission.grade !== undefined) {
                return [submission.name, `${submission.grade} / ${submission.points}`];
            }
            return [submission.name, `X / ${submission.points}`];
        });
    const scrolledTable = compiledFunction({ name: user, submissions });
    const assignmentGrades = document.getElementById("assignment_grades");
    assignmentGrades.innerHTML = scrolledTable;
}

