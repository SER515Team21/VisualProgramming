/* global document */
/* global AssignDb */
/* global CourseDb */
/* global window */

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
