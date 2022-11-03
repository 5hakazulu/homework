// const cardArea = document.getElementById("moviesContainer")
const myForm = document.getElementById("search-form");

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(renderMovies(movieData))
    document.getElementById('moviesContainer').innerHTML = renderMovies(movieData);
    
})

document.addEventListener("DOMContentLoaded", function(){
    // console.log(renderMovies(movieData))
    // document.getElementById('moviesContainer').innerHTML = renderMovies(movieData);
    document.addEventListener('click', function(event){
        if(event.target.classList.contains("addButton")){
            console.log("hi there");
            const movieID = event.target.dataset.imdbid;
            // console.log(movieID);
        }
    })
})

function saveToWatchlist(movieID){
    console.log(movieID);
    const movie =movieData.find(function(currentMovie){
        return currentMovie.imdbID == movieID;
    })
}

function renderMovies(movieArray){
   let movieHtmlArray= movieArray.map(function(currentMovie){
    return `<div class="movie col-4 mb-4">
    <div class="card" style="width: 18rem;">
      <img src="${currentMovie.Poster}" class="card-img-top" alt="${currentMovie.Title}">
      <div class="card-body">
        <h5 class="movieTitle">${currentMovie.Title}</h5>
        <p class="releaseDate">${currentMovie.Year}</p>
        <a href="#" class="btn btn-primary addButton" data-imdbid="${currentMovie.imdbID}">Add!</a>
      </div>
    </div>
  </div>
  
  `
   })

   return movieHtmlArray.join('');
}
