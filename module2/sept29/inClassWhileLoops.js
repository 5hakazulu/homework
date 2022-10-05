var myFriendsSchedule ={sunday: true, monday: false, tuesday: true, wednesday: true, thursday: false, friday: false, saturday: true};
var myMoneySchedule = {sunday: 10, monday: 0, tuesday: 0, wednesday: 10, thursday: 10, friday: 10, saturday: 10};

var DAYS_OF_WEEK =['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function canWeGoToTheMovies(){
    var whatDaysCanWeGoToTheMovies ="";
    let indexNum = 0;
    

    while(indexNum < DAYS_OF_WEEK.length){
        let dayOfTheWeek = DAYS_OF_WEEK[indexNum]
        if(myFriendsSchedule[dayOfTheWeek] == true && myMoneySchedule[dayOfTheWeek] > 0){
            whatDaysCanWeGoToTheMovies += "On " + dayOfTheWeek + "? Yes, lets go to the movies!!\n";
        }
        indexNum ++
    }
    return(whatDaysCanWeGoToTheMovies);
}

console.log(canWeGoToTheMovies());