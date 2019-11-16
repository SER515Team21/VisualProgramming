/* global window */
/* global document */
/* global CourseDb */

async function updateCourses(elem) {
    if (elem.innerHTML !== "") {
        return;
    }
    const userID = window.localStorage.getItem("userID");
    const courses = await CourseDb.getCourses(userID);
    for (let i = 0; i < courses.length; i++) {
        const option = document.createElement("option");
        option.textContent = courses[i];
        option.value = courses[i];
        elem.appendChild(option);
    }
}

function addQuestion(button) {
    const forID = button.getAttribute("data-for");
    const forElem = document.getElementById(forID);
    forElem.innerHTML += "<li class='question'><label class='XButton' onclick='deleteQuestion(this)'>X</label><label>Q</label><textarea></textarea></li>";
}

function deleteQuestion(elem) {
    elem.parentElement.parentElement.removeChild(elem.parentElement);
}
