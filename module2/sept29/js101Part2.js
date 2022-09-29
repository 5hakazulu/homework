function threeFruits(){
    var fruits = ["apple", "Banana", "Cherry"];
    return fruits;
}

function multipleTypes(){
    var diverseArray = ['Skateboard', null, 8.75, 'Eiffel Tower', 44, 7, true, null ];
    return diverseArray;
}

function indexAccess(){
    var people = ['Josh', "Dario", "Everly", "Kylie", "Dallen", "Nathan"];
    return people[2];
}

function useLength(){
    var arr = ['a', 'b', 'c'];
    return arr.length;
}

function usePush(){
    var arr = ['a', 'b', 'c'];
    arr.push('d');
    return arr;
}

function useIndexOf(){
    var arr = ['C', 'A', 'G', 'T', 'A', 'A', 'G', 'T'];
    return arr.indexOf('T');
}
function useJoin(){
    var arr =['a', 'b', 'c', 'd', 'e', 'f'];
    return arr.join('');
}

function manyTypes () {
    const bestFruit = { name: 'banana', count: 42, isDelicious: true };
    console.assert(bestFruit['name'] === 'banana');
    console.assert(bestFruit['count'] === 42);
    console.assert(bestFruit['isDelicious'] === true); 
    bestFruit.color = "yellow"; 
    return bestFruit;
}

function largeObject() {
    const bootcampInstructor = {
        name: 'Susan',
        email: 'susan@bootcamp.digitalcrafts',
        age: 32,
        heightFeet: 5.5,
        favoriteColor: 'green',
        homeTown: 'Houston',
        pet: 'cat',
        ownsCar: true
    }
  
    // create a bootcampStudent object here similar to bootcampInstructor and return it
    const bootcampStudent = {
        name: "Joshua",
        email: "jdzulu89@gmail.com",
        age: 33,
        heightFeet: 5.5,
        favoriteColor: "Blue",
        homeTown: "Murray",
        pet: null,
        ownsCar: true
    } 
    return bootcampStudent;
}

function nestedArray(){
    const bootcampInstructor ={
        _name: 'Susan',
        favoriteColor: 'green',
        favoriteFoods: [
            'chicken pot pie',
            'salmon',
            'pho'
        ]
    }
    return `One of ${bootcampInstructor["_name"]}'s favorite food ${bootcampInstructor['favoriteFoods'][1]}`;
}

function dotNotation () {
    const bootcampInstructor = {
        name: 'Susan',
        favoriteColor: 'green',
        favoriteFoods: [
            'chicken pot pie',
            'salmon',
            'pho'
        ]
    }
    return "your name is: " + bootcampInstructor.name;
}

console.log(indexAccess());
console.log(useLength());
console.log(usePush());
console.log(useIndexOf());
console.log(useJoin());
console.log(manyTypes());
console.log(largeObject());
console.log(nestedArray());
console.log(dotNotation());