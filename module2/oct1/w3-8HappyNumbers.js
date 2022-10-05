function happyNumbers(num){
   var m, n;
   var c =[];

   while (num !=1 && c[num]!== true){
    c[num] = true;
    m = 0;
    while(num>0){
        n = num%10;
        m += n*n;
        num = (num -n)/10
    }
    num =m;
   }
   return(num ==1);
}

var cnt = 5;
var number =1;
var first5 ='';
while (cnt-- >0){
    while(!happyNumbers(number)){
        number++
    }
    first5 = first5+(number+ ", ");
        number ++
}

console.log('First 5 happy numbers are : '+first5);
