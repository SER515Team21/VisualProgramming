/* global AssignDb */
/* global UserDb */
/* global loadAssignmentSubmissionsTeacher */
/* global pug */
/* global document */
/* global Path */


async function submitAssignmentGradeAsync(assignmentId, studentId) {
    const gradeInput = document.getElementById("assignmentGradeEntry");
    const commentInput = document.getElementById("assignmentCommentEntry");
    const grade = parseFloat(gradeInput.value);
    const comment = commentInput.value;
    await AssignDb.gradeSubmission(assignmentId, studentId, grade, comment);
    await loadAssignmentSubmissionsTeacher(assignmentId);
}

function submitAssignmentGrade(assignmentId, studentId) {
    submitAssignmentGradeAsync(assignmentId, studentId);
}


async function showGradingView(assignmentId, studentId) {
    const assignment = await AssignDb.getAssignmentById(assignmentId);
    const submissions = (await AssignDb.getSubmissions(assignmentId))
        .filter(x => (x.studentId === studentId));
    const studentName = (await UserDb.getUserWithId(studentId)).username;
    if (submissions.length === 1) {
        const pugPath = Path.relative(process.cwd(), "./src/gui/pug/GradeAssignment.pug");
        const compiledFunction = pug.compileFile(pugPath);
        const assignmentGrader = compiledFunction({
            assignmentId: assignmentId,
            studentId: studentId,
            assignmentName: assignment.name,
            studentName: studentName,
            questions: assignment.questions,
            answers: submissions[0].answers,
            points: assignment.points
        });
        const assignmentSubmissions = document.getElementById("teacherSubmissions");
        assignmentSubmissions.innerHTML = assignmentGrader;
    }
}
