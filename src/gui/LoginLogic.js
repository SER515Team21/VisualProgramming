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

async function sendNewAccountRequest() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //TODO Add element for role
    //const role = document.getElementById("role").value;

    await UserDb.addUser(username, password);
}
