const numberButton = document.getElementsByClassName("numbers");
const operatorButtons = document.getElementsByClassName("operators");
const equalButton = document.getElementById('result');

let numberArray = [];
// let operatorArray =[];


//const createNumArr = (numberButtonClicked) => {
    //numberArray.splice(numberArray.length)}

function doTheMath(){
    for(let i =0; i< numberArray.length; i++){

    }
}
function handleClick(event) {
    
    if(event.target.innerHTML ==="C"){
        numberArray = [];
    }
    else if (event.target.innerHTML ==="."&& numberArray[numberArray.length-1]  === "." ){
        
        numberArray.push(event.target.innerHTML);
        console.log(numberArray);
        console.log("there are 2 periods in a row.")
        numberArray.pop();
        console.log(numberArray);
    }
    
    else if(event.target.innerHTML === "+"|| event.target.innerHTML === "-" || event.target.innerHTML === "*" || event.target.innerHTML === "/" ){
        console.log("operator used.");
        if(numberArray.length>0){
            if(numberArray[numberArray.length-1]=== '+' ){
                console.log("can't use two operators.")
            }
            else if(numberArray[numberArray.length-1]=== '-' ){
                console.log("can't use two operators.")
            }
            else if(numberArray[numberArray.length-1]=== '*' ){
                console.log("can't use two operators.")
            }
            else if(numberArray[numberArray.length-1]=== '/' ){
                console.log("can't use two operators.")
            }
            else{
                numberArray.push(event.target.innerHTML);
                console.log(numberArray);
            }
        }
    }
    else if(event.target.innerHTML === "="){
        console.log("ready to Math!")
        for(let i =0; i<numberArray.length; i++){
            
        }
    }
    else{
        numberArray.push(event.target.innerHTML)
        console.log(event.target.innerHTML)
        console.log(numberArray); 
    }
}
// console.log(numberArray)



for(let i =0; i < numberButton.length; i++){
    for(k= 0; k < numberButton[i].children.length; k++){
        console.log(numberButton[i].children[k]);
        numberButton[i].children[k].addEventListener("click", event => handleClick(event));
    }
}

for(let j =0; j< operatorButtons.length; j++){
    console.log(operatorButtons[j]);
    operatorButtons[j].addEventListener("click", event => handleClick(event))
}

if(numberArray[numberArray.length-1]  === "."){
    console.log(numberArray);
    console.log("there are 2 periods in a row.")
}

equalButton.addEventListener("click", event => handleClick(event));
