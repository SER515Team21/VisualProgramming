/* global document */
/* global window */
/* global AssignDb */
/* global populateGrades */

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

            assignElem.classList.add("assignment");
            title.classList.add("assignTitle");
            date.classList.add("assignDate");
            description.classList.add("assignDescription");

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
    setDate();
    await populateGrades();
    await updateAssignments();
    setInterval(updateAssignments, 60000);
}

window.onload = onLoad;
