function GCD(a, b){
    while (a != b){
        if(a>b){
            a = a-b;
        }else if(b>a){
            b = b-a;
        }
        var i = a;
    }
    console.log(`GCD is ${i}.`)
}

GCD(21, 30);
GCD(75, 20);
GCD(130, 268);