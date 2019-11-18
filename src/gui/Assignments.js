
/* global document */

class Assignment {

    constructor(name, link, dueDate) {
        this.aName = name;
        this.aLink = link;
        this.dueDate = dueDate;
    }
}

// const assignments = [
//     new Assignment("Deliverable 2", "", new Date(2019, 10, 4)),
//     new Assignment("Deliverable 3", "", new Date(2019, 11, 3)),
//     new Assignment("Final Test", "", new Date(2019, 10, 15)),
// ];

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
