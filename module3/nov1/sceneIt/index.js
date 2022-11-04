// const cardArea = document.getElementById("moviesContainer")
const myForm = document.getElementById("search-form");

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    const searchString = document.getElementById('searchBar').value
    const urlEncodedSearchString =encodeURIComponent(searchString);
    fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.getElementById('moviesContainer').innerHTML = renderMovies(data.Search);
            movieData = data.Search
        })
    console.log(searchString);


    // console.log(renderMovies(movieData))
    
    
})

document.getElementById("myWatchlist").onclick = function(){
    location.href = 'watchlist.html'
}



document.addEventListener("DOMContentLoaded", function(){
    // console.log(renderMovies(movieData))
    // document.getElementById('moviesContainer').innerHTML = renderMovies(movieData);
    document.addEventListener('click', function(event){
        if(event.target.classList.contains("addButton")){
            const movieID = event.target.dataset.imdbid;
            console.log(movieID);
            saveToWatchlist(movieID);
        }
    })
})

function saveToWatchlist(movieID){
    
    const movie =movieData.find(function(currentMovie){
        return currentMovie.imdbID == movieID;
    })
    // console.log(movie);
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if(watchlist === null){
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    

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
