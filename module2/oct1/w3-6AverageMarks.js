const students =[
    David = {score: 80},
    Vinoth={score: 77},
    Divya= {score: 88},
    Ishitha= {score: 95},
    Thomas= {score: 68}
]

let scoreSum = 0;
let numOfStudents =0
for (i =0; i< students.length; i++){
    scoreSum += students[i].score;
    numOfStudents ++;
      
}
const averageGrade = scoreSum/numOfStudents;
console.log(`${averageGrade}% is the grade average`);

for(i =0; i< students.length; i++){
    
    if(students[i].score < 60 ){
        students[i].grade = "F";
    }
    else if(students[i].score < 70){
        students.grade = "D";
    }
    else if(students[i].score < 80){
        students[i].grade = "C";
    }
    else if(students[i].score < 90){
        students[i].grade = "B";
    }
    else if(students[i].score < 100){
        students[i].grade = "A";
    }
    console.log(`${students[i]} got an ${students[i].grade}`)
}