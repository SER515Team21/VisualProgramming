/* global document */
/* global window */

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


function onLoad() {
    accordianListener();
    setDate();
}

window.onload = onLoad;
