const imageContainer =document.getElementById("imageContainer");

let imageURL

fetch("https://dog.ceo/api/breeds/image/random")
// .json returns another promise
.then(result=> result.json()
.then(result=> imageURL = result.message)
.then(()=> imageContainer.innerHTML = `<img src= "${imageURL}"></img>`));


