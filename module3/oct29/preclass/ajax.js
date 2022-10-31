
// use the XMLRequest object
const request = new XMLHttpRequest();
// then use the event listener:
request.onreadystatechange =function(){
    console.log(this);
};
request.open("GET", "./sample.txt");
request.send();