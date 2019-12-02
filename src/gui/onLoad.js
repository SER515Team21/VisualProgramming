/* global document */
/* global window */
/* global UserDb */
/* global AssignDb */
/* global CourseDb */
/* global populateGrades */
/* global startAssignment */
/* global filterOperators */

function accordianListener() {
    const acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            }
            else {
                panel.style.display = "block";
            }
        });
    }
}

function roleSelectListener() {
    const selects = document.getElementsByClassName("change-role");

    for (let i = 0; i < selects.length; i++) {
        selects[i].addEventListener("change", function () {
            // TODO get actual username
            const username = "";
            const option = this.value;
            // UserDb.updateRole(username, option);
        });
    }
}

function setDate() {
    // Changed to update all dates in DOM
    const dates = document.getElementsByClassName("date");
    for (let i = 0; i < dates.length; i++) {
        dates[i].textContent = new Date().toDateString();
    }
}

async function updateAssignments() {
    const elems = document.getElementsByClassName("assignmentsList");
    const courses = await CourseDb.getStudentCourses(window.localStorage.getItem("userID"));
    const assigns = await Promise.all(courses.map(course =>
        AssignDb.getAssignmentsByCourse(course)));
    for (let i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.innerHTML = "";
        for (let k = 0; k < courses.length; k++) {
            const list = document.createElement("ul");
            for (let j = 0; j < assigns[k].length; j++) {
                const assign = assigns[k][j];
                const item = document.createElement("li");
                const assignElem = document.createElement("div");
                const title = document.createElement("div");
                const date = document.createElement("div");
                const description = document.createElement("div");

                title.textContent = assign.name;
                date.textContent = assign.dueDate;
                description.textContent = assign.description;
                title.setAttribute("data-for", assign._id);

                assignElem.classList.add("assignment");
                title.classList.add("assignTitle");
                date.classList.add("assignDate");
                description.classList.add("assignDescription");

                title.onclick = function () {
                    startAssignment(title);
                };

                assignElem.appendChild(title);
                assignElem.appendChild(date);
                assignElem.appendChild(description);
                item.appendChild(assignElem);
                list.appendChild(item);
            }
            elem.appendChild(list);
        }
    }
}

async function adminViewStudentSelects() {
    // Load all students into select option for adding to courses
    const allStudents = await UserDb.getUsers("student");
    for (let i = 0; i < allStudents.length; i++) {
        const newCourseSelect = document.getElementById("newCourseStudentUserName");
        const existingCourseSelect = document.getElementById("existingCourseStudentUserName");
        const newOption = document.createElement("option");
        newOption.id = `addToNewCourse${allStudents[i]._id}`;
        newOption.value = allStudents[i]._id;
        newOption.text = allStudents[i].username;
        const existingOption = document.createElement("option");
        existingOption.id = `addToExistingCourse${allStudents[i]._id}`;
        existingOption.value = allStudents[i]._id;
        existingOption.text = allStudents[i].username;

        newCourseSelect.add(newOption);
        existingCourseSelect.add(existingOption);
    }
}

async function onLoad() {
    accordianListener();
    roleSelectListener();
    setDate();
    await populateGrades();
    await adminViewStudentSelects();
}

window.onload = onLoad;
