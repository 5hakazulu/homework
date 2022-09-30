var info = {
    firstName: "Joshua",
    lastName: "Zuluaga",
    programmingLanguages: ["javaScript", "python", "c#"],
    currentDate: 29,
    randomPair: null
}

function introduction(){
    console.log(`hello! my name is ${info.firstName} ${info.lastName}.`);
    console.log(`the date is ${info.currentDate} of ${info["currentMonth"]}, ${info.currentYear}`);
    console.log(`I am currently learning to program in ${info.programmingLanguages[0]}`);
    info.programmingLanguages[0] = 'java';
    console.log(info.programmingLanguages[0]);
    console.log(`and I am learning stringArray[Index]`);
    console.log('I now know how to make variables and functions.');
    delete info.randomPair;
}

info.currentMonth ="September";
info["currentYear"] = 2022
console.log(info);
introduction();
