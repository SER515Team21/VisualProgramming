/* global document */
/* global AssignDb */
/* global window */

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

async function saveAssignment(){
    const teacherId = window.localStorage.getItem("userID");
    const courseName = document.getElementById("createAssignCourseSelect").value;
    const courseId = CourseDb.getCourseId(courseName);
    const assignName = document.getElementById("createAssignName").value;
    const description = document.getElementById("createAssignDescription").value;
    const dueDate = document.getElementById("createAssignDueDate").value;;
    const points = 10;
    let questions = [];

    const questionElements = document.getElementById("createAssignmentQuestionList")
        .getElementsByTagName("textarea");

    for(let questionElem in questionElements){
        questions.push(questionElem.value)
    }

    const assignment = await AssignDb.saveAssignment(assignName, description,courseId, teacherId, questions, dueDate, points);
    // if(assignment === null){
    //     document.getElementById("teacherAssignmentFail").hidden = false;
    // }
    // else{
    //     document.getElementById("teacherAssignmentFail").hidden = true;
    // }
}
