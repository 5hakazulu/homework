const arrayOfNums = [0, 4, 7, 18, 21, 19, 142, 3]
let largestNumber =arrayOfNums[0];

let allEvenNumbers = [];

function findLargestNumber(){
    for(i = 0; i< arrayOfNums.length; i++){
        if(arrayOfNums[i] > largestNumber){
            largestNumber = arrayOfNums[i];
        }
    }
    return largestNumber;
}

function findEvenNumbers(){
    let i = 0
    while(i < arrayOfNums.length){
        if(arrayOfNums[i] % 2 !== 0){
            allEvenNumbers.push(arrayOfNums[i]);
        }
        i++
    }
    return allEvenNumbers;
}
console.log(findLargestNumber());
console.log(findEvenNumbers());