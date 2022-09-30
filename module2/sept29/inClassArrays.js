var infoStrings = ["Joshua", "Zuluaga", "Javascript"];
var infoNums = [9, 29, 2022];

function introduction(strArray, numArray){
    console.log(`Hello my name is ${strArray[0]} ${strArray[1]}!`);
    console.log(`The date is the ${numArray[1]} of ${numArray[0]}, ${numArray[2]}.`);
    console.log(`I am currently learning how to program in ${strArray[2]}.`);
    infoStrings[2]= 'html/css';
    console.log(`and I am learning ${strArray[2]}`);
    console.log(`I now know how to make a variables and functions`);
}

introduction(infoStrings, infoNums);

// What would be the length of the string array?
console.log(infoStrings.length);