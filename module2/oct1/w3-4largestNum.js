var sampleNums = [-5, -2, -6, 0, -1];
let currentNum = sampleNums[0]
for (i=0; i< sampleNums.length; i++){
    if (currentNum < sampleNums[i]){
        currentNum = sampleNums[i];
    }
    
}
console.log(currentNum);