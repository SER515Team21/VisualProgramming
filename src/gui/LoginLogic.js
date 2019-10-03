/* global document */
/* global UserDb */

async function sendLoginRequest() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginSuccess = await UserDb.userExists(username, password);
    if (!loginSuccess) {
        document.getElementById("loginFail").hidden = false;
    }
    else {
        document.getElementById("loginFail").hidden = true;
        document.getElementById("login").hidden = true;
        document.getElementById("studentView").hidden = false;
    }
}

function switchSignUp(){
    document.getElementById("login").hidden = true;
    document.getElementById("signup").hidden = false;
}

function returnToLogin(){
    document.getElementById("login").hidden = false;
    document.getElementById("signup").hidden = true;
}

async function sendSignUpRequest() {
    const username = document.getElementById("signupUserName").value;
    const password = document.getElementById("signupPassword").value;
    const password2 = document.getElementById("signupPassword2").value;

    let error = await UserDb.addUser(username, password, password2);

    if(error === null){
        document.getElementById("signUpSuccess").hidden = false;
        document.getElementById("signUpError").hidden = true;
        document.getElementById("signUpError").value = "";
    }
    else{
        document.getElementById("signUpError").value = error;
        document.getElementById("signUpError").hidden = false;
    }
}
