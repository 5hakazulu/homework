let toDoList = [
    "Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

let m =  toDoList.length
while (m > 2){
    toDoList.pop();
    console.log(toDoList);
    checkChores(toDoList);
    m--
}