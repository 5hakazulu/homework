// const students =[
//     David = {score: 80},
//     Vinoth={score: 77},
//     Divya= {score: 88},
//     Ishitha= {score: 95},
//     Thomas= {score: 68}
// ]

// let scoreSum = 0;
// let numOfStudents =0
// for (i =0; i< students.length; i++){
//     scoreSum += students[i].score;
//     numOfStudents ++;
      
// }
// const averageGrade = scoreSum/numOfStudents;
// console.log(`${averageGrade}% is the grade average`);

// for(i =0; i< students.length; i++){
    
//     if(students[i].score < 60 ){
//         students[i].grade = "F";
//     }
//     else if(students[i].score < 70){
//         students.grade = "D";
//     }
//     else if(students[i].score < 80){
//         students[i].grade = "C";
//     }
//     else if(students[i].score < 90){
//         students[i].grade = "B";
//     }
//     else if(students[i].score < 100){
//         students[i].grade = "A";
//     }
//     console.log(`${students[i]} got an ${students[i].grade}`)
// }

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

if (avg < 60){
    console.log("Grade : F");      
} 
else if (avg < 70) {
    console.log("Grade : D"); 
} 
else if (avg < 80) {
    console.log("Grade : C"); 
} 
else if (avg < 90) {
     console.log("Grade : B"); 
} 
else if (avg < 100) {
    console.log("Grade : A"); 
}
    
