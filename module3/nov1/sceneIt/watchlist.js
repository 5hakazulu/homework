document.getElementById("home").onclick = function () {
    location.href = 'index.html'
}

document.addEventListener("DOMContentLoaded", function (e) {
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlistArray = JSON.parse(watchlistJSON);
    console.log(watchlistArray);
    e.preventDefault();
    console.log(renderMovies(watchlistArray))
    document.getElementById('moviesContainer').innerHTML = renderMovies(watchlistArray);

})

function renderMovies(movieArray) {
    console.log(movieArray);
    let movieHtmlArray = movieArray.map(function (currentMovie) {
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