/* global Path */
/* global document */
/* global pug */
/* global AssignDb */

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

async function startAssignment(elem) {
    document.getElementById("studentView").getElementsByClassName("MainPane")[0].hidden = true;
    const pugPath = Path.relative(process.cwd(), "./src/gui/pug/StudentAssignmentSubmission.pug");
    const compiledFunction = pug.compileFile(pugPath);
    const assignment = await AssignDb.loadAssignment(elem.getAttribute("data-for"));
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
}
