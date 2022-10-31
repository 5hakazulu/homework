const form =document.querySelector("form");
const nameInput = document.querySelector("#name");

function checkName(){
    const myRegex = /[A-Za-z]+/;
    if(!myRegex.test(nameInput.value)){
        nameInput.setCustomValidity("Please use only lower or uppercase letters.")
    }
    else{
        nameInput.setCustomValidity("");
    }
}
nameInput.addEventListener("change", checkName, false);