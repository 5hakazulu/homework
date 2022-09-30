function tipAmount(bill, levelOfService){
    if (levelOfService == 'good'){
        tip = bill *.2;
    }
    else if(levelOfService == 'fair'){
        tip =bill * .15;
    }
    else if (levelOfService == 'poor'){
        tip = bill * .1;
    }
    return tip;

}
console.log(`your tip amount is ${tipAmount(175, 'fair')}`);