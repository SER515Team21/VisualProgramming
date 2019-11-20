/* global Path */
/* global document */
/* global window */
/* global pug */
/* global AssignDb */
/* global NodeForest */

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
async function populateGrades() {
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
//        alist.appendChild(assignmentText);
    }
}

async function submitAssignment() {
    const solutions = document.getElementsByClassName("solution");
    const answers = [];

    for (let i = 0; i < solutions.length; i++) {
        if (solutions[i].firstChild.firstChild) {
            const test = solutions[i].firstChild.firstChild.getAttribute("id");
            const answer = NodeForest.getNode(test).getText();
            answers.push(answer);
        }
    }

    const assignmentId = window.localStorage.getItem("currentAssignment");
    const studentId = window.localStorage.getItem("userID");
    AssignDb.submitAssignment(assignmentId, studentId, answers);
}

async function startAssignment(elem) {
    document.getElementById("studentView").getElementsByClassName("MainPane")[0].hidden = true;
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
    console.log(template.content.firstChild);
    document.getElementById("studentView")
        .getElementsByClassName("GenericDashboard")[0]
        .appendChild(template.content.firstChild);

    window.localStorage.setItem("currentAssignment", assignmentId);
}
