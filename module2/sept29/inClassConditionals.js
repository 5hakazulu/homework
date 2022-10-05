var myFriendsSchedule ={sunday: true, monday: false, tuesday: true, wednesday: true, thursday: false, friday: false, saturday: true};
var myMoneySchedule = {sunday: 10, monday: 0, tuesday: 0, wednesday: 10, thursday: 10, friday: 10, saturday: 10};

function canWeGoToTheMovies(dayOfTheWeek){
    if(myFriendsSchedule[dayOfTheWeek] == true && myMoneySchedule[dayOfTheWeek] > 0){
        return("On " + dayOfTheWeek + "? Yes, lets go to the movies!!");
    }
    else if(myFriendsSchedule[dayOfTheWeek] ==  true || myMoneySchedule[dayOfTheWeek] > 0){
        return("On " + dayOfTheWeek + "? One of us can go to the movies");
    }
    else{
        return("On " + dayOfTheWeek + "? We can't go to the movies");
    }
} 

console.log(canWeGoToTheMovies("sunday"));
console.log(canWeGoToTheMovies("monday"));
console.log(canWeGoToTheMovies("friday"));