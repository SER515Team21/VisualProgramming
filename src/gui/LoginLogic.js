async function sendLoginRequest(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("here");

    let loginSuccess = await UserDb.userExists(username, password);
    console.log("here2");
    if(!loginSuccess){
        document.getElementById("loginFail").hidden = false;
        console.log("fail");
    }
    else{
        document.getElementById("loginFail").hidden = true;
        console.log("true");
    }
}