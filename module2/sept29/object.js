let newObject ={
    fullName : "Joshua Zuluaga",
    age: 33,
    faveColor: "Blue",
    likesPizza : true
}

//let favoriteColor = newObject.faveColor;
let favoriteColor = newObject["faveColor"]
newObject.fullName = "Zuluaga"
delete newObject.likesPizza;
newObject.likesCookie = true;

console.log(favoriteColor);
console.log(newObject);
console.log(newObject.fullName);
