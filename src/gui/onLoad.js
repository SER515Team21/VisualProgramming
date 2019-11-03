/* global document */
/* global window */
/* global UserDb */

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
    document.getElementById("date").textContent = new Date().toDateString();
}

function onLoad() {
    accordianListener();
    roleSelectListener();
    setDate();
}

window.onload = onLoad;
