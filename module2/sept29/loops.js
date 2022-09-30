let toDoList = [
    "Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

function checkChores(chores){
    let numberOfChores = chores.length;
    if (numberOfChores < 3){
        console.log("You can go play some video games!");
    }
    else {
        console.log("No games! Do some chores");
    }
}



let m =  toDoList.length
while (m > 2){
    toDoList.pop();
    console.log(toDoList);
    checkChores(toDoList);
    m--
}