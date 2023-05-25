
// GET DATA
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelector(".error");
const error2 = document.querySelector(".error2")
const error3 = document.querySelector(".error3")

// VALIDATE DATA
function validateForm(){

    clearMessage();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes.innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        error2.innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        error3.innerText = "Please enter a description";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Successfully Sent!"
    }
}

//Clear error / success messages
function clearMessage(){
    errorNodes.innerText = "";
    error2.innerText = "";
    error3.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
    success.innerText = "";
}

//Check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

























