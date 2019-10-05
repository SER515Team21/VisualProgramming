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

async function sendNewAccountRequest() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //TODO Add element for role and remove default
    const role = "student";
    //const role = document.getElementById("role").value;

    await UserDb.addUser(username, password, role);
}
