const form = document.querySelector("form");
const nameInput = document.querySelector("#name")

form.addEventListener("submit", event =>{
    event.preventDefault();
    console.log(nameInput.value.length);
    console.log("Submitting form");
    if(nameInput.value.length>15){
        nameInput.setCustomValidity('Must be less than 15 characters')
        nameInput.reportValidity();
    }
})