/* global document */
/* global window */
/* global UserDb */
/* global loadAllCoursesList */
/* global loadCourseStudentList */
/* global loadAllTeachersList */
/* global loadAllStudentsList */
/* global loadCourseStudentListTeacher */
/* global loadCourseAssignmentListTeacher */
/* global loadAllTeachersCoursesList */
/* global loadAllTeachersStudentsList */

async function sendLoginRequest() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        document.getElementById("loginFail").hidden = false;
    }
    else {
        const loginSuccess = await UserDb.userExists(username, password);
        if (!loginSuccess) {
            document.getElementById("loginFail").hidden = false;
        }
        else {
            const user = await UserDb.getUser(username);
            window.localStorage.setItem("username", user.username);
            window.localStorage.setItem("userID", user._id);
            document.getElementById("loginFail").hidden = true;
            document.getElementById("login").hidden = true;
            if (user.role === "admin") {
                document.getElementById("AdminView").hidden = false;

                loadAllCoursesList();
                loadCourseStudentList();
                loadAllTeachersList();
                loadAllStudentsList();
            }
            else if (user.role === "teacher") {
                document.getElementById("TeacherView").hidden = false;

                loadCourseStudentListTeacher();
                loadCourseAssignmentListTeacher();
                loadAllTeachersCoursesList();
                loadAllTeachersStudentsList();
            }
            else {
                document.getElementById("studentView").hidden = false;
            }
        }
    }
}

function getUserId() {
    return window.localStorage.getItem("username");
}


function switchSignUp() {
    document.getElementById("login").hidden = true;
    document.getElementById("signup").hidden = false;
}

function returnToLogin() {
    document.getElementById("login").hidden = false;
    document.getElementById("signup").hidden = true;
}

async function sendSignUpRequest() {
    const username = document.getElementById("signupUserName").value;
    const password = document.getElementById("signupPassword").value;
    const password2 = document.getElementById("signupPassword2").value;

    if (username === "" || password === "" || password2 === "") {
        document.getElementById("enterAllValues").hidden = false;
        document.getElementById("pwMatch").hidden = true;
        document.getElementById("usTaken").hidden = true;
    }
    else if (password !== password2) {
        document.getElementById("enterAllValues").hidden = true;
        document.getElementById("pwMatch").hidden = false;
        document.getElementById("usTaken").hidden = true;
    }
    else {
        const success = await UserDb.addUser(username, password);

        if (success) {
            document.getElementById("enterAllValues").hidden = true;
            document.getElementById("pwMatch").hidden = true;
            document.getElementById("usTaken").hidden = true;

            document.getElementById("signUpSuccess").hidden = false;
        }
        else {
            document.getElementById("enterAllValues").hidden = true;
            document.getElementById("pwMatch").hidden = true;
            document.getElementById("usTaken").hidden = false;
        }
    }
}
