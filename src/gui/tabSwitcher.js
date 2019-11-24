/* global document */

function tabSwitcher(elem) {
    const list = elem.parentElement.parentElement;

    for (let i = 0; i < list.children.length; i++) {
        if (list.children[i].children[0].classList.contains("active")) {
            list.children[i].children[0].classList.remove("active");
        }
        const viewID = list.children[i].children[0].getAttribute("data-for");
        document.getElementById(viewID).hidden = true;
        if (document.getElementById(viewID).classList.contains("active")) {
            document.getElementById(viewID).classList.remove("active");
        }
    }
    elem.classList.add("active");

    const elemViewID = elem.getAttribute("data-for");
    document.getElementById(elemViewID).hidden = false;
    document.getElementById(elemViewID).classList.add("active");

    if(elemViewID === "AdminCoursesListView"){
        adminCourseViewSwitch();
    }
    else if(elemViewID === "AdminTeachersList"){
        adminTeacherViewSwitch();
    }
    else if(elemViewID === "AdminStudentsList"){
        adminStudentViewSwitch();
    }
}

function adminCourseViewSwitch(){
    document.getElementById("AdminCourseViews").hidden = false;
    document.getElementById("AdminStudentViews").hidden = true;
    document.getElementById("AdminTeacherViews").hidden = true;
}

function adminTeacherViewSwitch(){
    document.getElementById("AdminCourseViews").hidden = true;
    document.getElementById("AdminStudentViews").hidden = true;
    document.getElementById("AdminTeacherViews").hidden = false;
}

function adminStudentViewSwitch(){
    document.getElementById("AdminCourseViews").hidden = true;
    document.getElementById("AdminStudentViews").hidden = false;
    document.getElementById("AdminTeacherViews").hidden = true;
}
