/* global document */
/* global UserDb */

async function sendLoginRequest() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        document.getElementById("loginFail").hidden = false;
    } else {
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

    if(username === "" || password === "" || password2 === ""){
        document.getElementById("enterAllValues").hidden = false;
        document.getElementById("pwMatch").hidden = true;
        document.getElementById("usTaken").hidden = true;
    }
    else if(password !== password2){
        document.getElementById("enterAllValues").hidden = true;
        document.getElementById("pwMatch").hidden = false;
        document.getElementById("usTaken").hidden = true;
    }
    else {

        let success = await UserDb.addUser(username, password);

        if (success) {
            document.getElementById("enterAllValues").hidden = true;
            document.getElementById("pwMatch").hidden = true;
            document.getElementById("usTaken").hidden = true;

            document.getElementById("signUpSuccess").hidden = false;
            console.log("askjfkasdhf");
        }
        else {
            document.getElementById("enterAllValues").hidden = true;
            document.getElementById("pwMatch").hidden = true;
            document.getElementById("usTaken").hidden = false;
        }
    }
}
