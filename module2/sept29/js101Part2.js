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

console.log(indexAccess());
console.log(useLength());
console.log(usePush());
console.log(useIndexOf());