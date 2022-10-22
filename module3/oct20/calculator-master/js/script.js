let numberArray = [];
//const createNumArr = (numberButtonClicked) => {
    //numberArray.splice(numberArray.length)}

function handleclick(event) {
    //console.log(event.target.innerHTML);
    numberArray.push(event.target.innerHTML)
}
console.log(numberArray)

const numberButton = document.getElementsByClassName("numbers");
console.log(numberButton[0].children[0]);
numberButton[0].children[0].addEventListener("click", event => handleclick(event))
numberButton[0].children[1].addEventListener("click", event => handleclick(event))
numberButton[0].children[2].addEventListener("click", event => handleclick(event))
numberButton[1].children[0].addEventListener("click", event => handleclick(event))