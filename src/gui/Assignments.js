/* global Path */
/* global document */
/* global window */
/* global pug */
/* global AssignDb */
/* global NodeForest */
/* global CourseDb */

class Assignment {

    constructor(name, link, dueDate) {
        this.aName = name;
        this.aLink = link;
        this.dueDate = dueDate;
    }
}

const assignments = [
    new Assignment("Deliverable 2", "", new Date(2019, 10, 4)),
    new Assignment("Deliverable 3", "", new Date(2019, 11, 3)),
    new Assignment("Final Test", "", new Date(2019, 10, 15)),
];

/*
 Takes an array of assignment objects
 */
async function populateGrades(assignments = []) {
    const alist = document.getElementById("assignment_grades");
    assignments.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
    for (let i = 0; i < assignments.length; ++i) {
        const asgn = assignments[i];
        const date = asgn.dueDate;
        alist.insertAdjacentHTML("beforeend", `
            <div>
                <p data-for="${asgn.aLink}">${asgn.aName}</p>
                <p>Due date: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
                <hr />
            </div>
         `);
    }
}

async function submitAssignment() {
    const solutions = document.getElementsByClassName("solution");
    const answers = [];
    let doSave = true;

    // Collect all student answers from all questions
    for (let i = 0; i < solutions.length; i++) {
        if (solutions[i].firstChild.firstChild) {
            const test = solutions[i].firstChild.firstChild.getAttribute("id");
            const answer = NodeForest.getNode(test).getText();

            if (isNaN(answer)) {
                answers.push(0);
            }
            else {
                answers.push(answer);
            }
        }
        else {
            doSave = false;
        }
    }

    // If all questions are answered, submit the assignment and return to the main panel
    if (doSave) {
        const assignmentId = window.localStorage.getItem("currentAssignment");
        const studentId = window.localStorage.getItem("userID");
        await AssignDb.submitAssignment(assignmentId, studentId, answers);

        const studentSubmissionPane = document.getElementsByClassName("studentSubmissionPane")[0];
        studentSubmissionPane.parentElement.removeChild(studentSubmissionPane);
        const mainPanel = document.getElementsByClassName("MainPane")[0];
        mainPanel.hidden = false;
    }
    else {
        document.getElementById("couldNotSubmit").hidden = false;
    }
}

async function startAssignment(elem) {
    document.getElementById("studentView")
        .getElementsByClassName("MainPane")[0].hidden = true;
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/StudentAssignmentSubmission.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const assignmentId = elem.getAttribute("data-for");
    const assignment = await AssignDb.loadAssignment(assignmentId);
    const questions = assignment[0].assignment;
    const submissionPane = compiledFunction({
        questions
    });
    const template = document.createElement("template");
    template.innerHTML = submissionPane;
    document.getElementById("studentView")
        .getElementsByClassName("GenericDashboard")[0]
        .appendChild(template.content.firstChild);

    window.localStorage.setItem("currentAssignment", assignmentId);
}

function filterOperators(level) {
    const gradeLevels = ["first", "second", "third", "fourth", "fifth"];
    const nodeTemplates = document.getElementsByClassName("node");
    if (level < 1 || level > gradeLevels.length) {
        level = gradeLevels.length; // show everything if the level is invalid
    }
    for (let i = 0; i < nodeTemplates.length; ++i) {
        let shown = false;
        for (let j = 0; j < level; ++j) {
            if (nodeTemplates[i].classList.contains(gradeLevels[j])) {
                shown = true;
                break;
            }
        }
        if (!shown) {
            nodeTemplates[i].style.display = "none";
        }
        else {
            nodeTemplates[i].style.display = "block";
        }
    }
}

async function saveAssignment() {
    const teacherId = window.localStorage.getItem("userID");
    const courseName = document.getElementById("createAssignCourseSelect").value;
    const courseId = CourseDb.getCourseId(courseName);
    const assignName = document.getElementById("createAssignName").value;
    const description = document.getElementById("createAssignDescription").value;
    const dueDate = document.getElementById("createAssignDueDate").value;
    const points = 10;
    const questions = [];

    const questionElements = document.getElementById("createAssignmentQuestionList")
        .getElementsByTagName("textarea");

    for (let i = 0; i < questionElements.length; i++) {
        questions.push(questionElements.item(i));
    }

    await AssignDb.saveAssignment(
        assignName, description, courseId, teacherId, questions, dueDate, points);
    // if(assignment === null){
    //     document.getElementById("teacherAssignmentFail").hidden = false;
    // }
    // else{
    //     document.getElementById("teacherAssignmentFail").hidden = true;
    // }
}
