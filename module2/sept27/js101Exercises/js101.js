function makeANumber(){
    const myNum = Math.floor(Math.random() * 100);
    // const myNum = 1
    return myNum;
}

function makeAnInteger(){
    const int = Math.floor(Math.random() * 100);
    return int;
}

function makeAFloat(){
    const myFloat = Math.floor(Math.random() * 100) + Math.random();
    return myFloat;
}

function zilch(){
    const zilch = 0;
    return zilch;
}

function makeNothing(){
    var huh ;
    return huh;
}

function makeBoolean(){
    var randNum = Math.random()
    var myBool;
    console.log(randNum);
    if (randNum > .5){
        myBool = true;
    }
    else{
        myBool = false;
    }
    return myBool;
}

function makeTrue(){
    const yep = true;
    return yep;
}

function makeFalse(){
    const nope = false;
    return nope;
}

function makeNull(){
    var nothingMuch = null;
    return nothingMuch;
}

function helloWorld(){
    return "Hello, world!";
}

function helloName(name){
    return `Hello ${name}! `
}

function abstractLength() {
    const tarPitAbstract = 'Complexity is the single major difficulty in the successful development of large-scale software systems. ' +
      'Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. ' +
      'We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. ' +
      'To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.'
  
    return tarPitAbstract.length;
}

function makeLoud() {
    var chorus = 'Who let the dogs out?';
    return chorus.toUpperCase();
} 

function makeQuiet(str) {
    return str.toLowerCase();
}

function add99(n) {
    return 99 + n;
}

function add(n, m) {
    return n + m;
}

function subtract(n, m) {
    return n - m;
}

function multiply(n, m) {
    return n * m;
}

function division(n, m) {
    return n/m;
}

function mod(n, m) {
    return n % m;
}

console.log(makeANumber());
console.log(makeAnInteger());                        
console.log(makeAFloat());
console.log(makeNothing());
console.log(makeBoolean());
console.log(makeTrue());
console.log(makeFalse());
console.log(makeNull());
console.log(helloWorld());
console.log(helloName("Josh"));
console.log(makeLoud());
console.log(makeQuiet("THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"));
let newRandNumA = Math.floor(Math.random() * 100)
let newRandNumB = Math.floor(Math.random() * 100)
console.log(`Your random numbers are: ${newRandNumA} and ${newRandNumB}.`)
console.log(add99(newRandNumA));
console.log(add(newRandNumA, newRandNumB));
console.log(subtract(newRandNumA, newRandNumB));
console.log(multiply(newRandNumA, newRandNumB));
console.log(division(newRandNumA, newRandNumB));
console.log(mod(newRandNumA, newRandNumB));




