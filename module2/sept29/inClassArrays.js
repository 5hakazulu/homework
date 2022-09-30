var infoStrings = ["Joshua", "Zuluaga", "Javascript"];
var infoNums = [9, 29, 2022];
var programmingLanguages =["HTML", "CSS", "JavaScript", "React", "Bananas"]

function introduction(strArray, numArray){
    console.log(`Hello my name is ${strArray[0]} ${strArray[1]}!`);
    console.log(`The date is the ${numArray[1]} of ${numArray[0]}, ${numArray[2]}.`);
    console.log(`I am currently learning how to program in ${strArray[2]}.`);
    infoStrings[2]= 'html/css';
    console.log(`and I am learning ${strArray[2]}`);
    console.log(`I now know how to make a variables and functions`);
}

function reintroduction(){
    console.log(`I want everyone to know that I am learning ${programmingLanguages}`);
    console.log(`Wait! I'm not learning ${programmingLanguages.pop()}!`)
    programmingLanguages.push("Node")
    console.log(`I am leaning this ${programmingLanguages.join(", ")}`)
}

introduction(infoStrings, infoNums);
reintroduction();

// What would be the length of the string array?
    // console.log(infoStrings.length);
// In the reintroduceMyself function what would happen if we called the stringArray variable that we defined in the function block?
    // if we called it before we called the function it would not exist