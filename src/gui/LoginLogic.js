function sendLoginRequest(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    UserDb.userExists(username, password);
}