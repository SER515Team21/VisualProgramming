
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
function populateAssignments() {
    console.log("called populateAssignments");
    const alist = document.getElementById("assignment_list");
function populateGrades() {
    const alist = document.getElementById("grades_list");
    assignments.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
    for (let i = 0; i < assignments.length; ++i) {
        console.log(`assignment ${i}`);
        const asgn = assignments[i];
        const date = asgn.dueDate;
        alist.insertAdjacentHTML("beforeend", `
            <div>
                <a href="${asgn.aLink}">${asgn.aName}</a>
                <p>Due date: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
            </div>
         `);
//        alist.appendChild(assignmentText);
    }
}
