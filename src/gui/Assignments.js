
/* global document */

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

function filterOperators(level) {
    console.log("filtering operators");
    const gradeLevels = ["first", "second", "third", "fourth", "fifth"];
    const nodeTemplates = document.getElementsByClassName("node");
    for (let i = 0; i < nodeTemplates.length; ++i) {
        nodeTemplates[i].style.visibility = "hidden";
        for (let j = 0; j < level; ++j) {
            if (nodeTemplates[i].classList.contains(gradeLevels[j])) {
                nodeTemplates[i].style.visibility = "visible";
            }
        }
    }
}
