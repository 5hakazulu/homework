var myFriendsSchedule ={sunday: true, monday: false, tuesday: true, wednesday: true, thursday: false, friday: false, saturday: true};
var myMoneySchedule = {sunday: 10, monday: 0, tuesday: 0, wednesday: 10, thursday: 10, friday: 10, saturday: 10};

var DAYS_OF_WEEK =['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function canWeGoToTheMovies(){
    let whatDaysCanWeGoToTheMovies = '';
    var weeklength = DAYS_OF_WEEK.length
    for(let n=0; n< weeklength; n++ ){
        dayOfTheWeek = DAYS_OF_WEEK[n];
        //console.log(dayOfTheWeek);
        if(myFriendsSchedule[dayOfTheWeek] == true && myMoneySchedule[dayOfTheWeek] > 0){
            whatDaysCanWeGoToTheMovies += dayOfTheWeek +" ";
            //console.log(whatDaysCanWeGoToTheMovies);
            console.log("On " + dayOfTheWeek + "? Yes, lets go to the movies!!");
        }
        else if(myFriendsSchedule[dayOfTheWeek] ==  true || myMoneySchedule[dayOfTheWeek] > 0){
            console.log("On " + dayOfTheWeek + "? One of us can go to the movies");
        }
        else{
            console.log("On " + dayOfTheWeek + "? We can't go to the movies");
        }
        
    }
    return(whatDaysCanWeGoToTheMovies);
}

console.log(canWeGoToTheMovies());