function sum(num1, num2){
    let newNum = num1+num2;
    // console.log(newNum)
    
    if(newNum >50 && newNum <80){
        return 65;
    }
    else{
        return 80;
    }

}
console.log(sum(1,2));
console.log(sum(30,28));
console.log(sum(12,28));



