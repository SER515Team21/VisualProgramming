/* global document */
/* global window */
/* global UserDb */
/* global AssignDb */
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
    // document.getElementById("date").textContent = new Date().toDateString();

    // Changed to update all dates in DOM
    const dates = document.getElementsByClassName("date");
    for (let i = 0; i < dates.length; i++) {
        dates[i].textContent = new Date().toDateString();
    }
}

async function updateAssignments() {
    const elems = document.getElementsByClassName("assignmentsList");
    const assigns = await AssignDb.loadCurrentAssignments();
    for (let i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.innerHTML = "";
        const list = document.createElement("ul");
        for (let j = 0; j < assigns.length; j++) {
            const assign = assigns[j];
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

async function onLoad() {
    accordianListener();
    roleSelectListener();
    setDate();
    await populateGrades();
    await updateAssignments();
    setInterval(updateAssignments, 300000);
}

window.onload = onLoad;
