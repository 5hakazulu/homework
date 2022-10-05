function threeDigitArmstongNumber(){
    for(var i = 1; i< 10; i++){
        for(var j = 0; j<10; j++){
            for(var k =0; k<10; k ++){
                var pow=((i*i*i)+ (j*j*j)+(k*k*k));
                var plus=(i*100 + j*10 + k);
                if(pow == plus){
                    console.log(pow);
                }
            }
        }
    }
}

threeDigitArmstongNumber();