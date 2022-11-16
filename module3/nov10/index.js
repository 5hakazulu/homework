
let currentPage = 1;
let maxPage = 6
let searchBoxInput = ""
fetchPageAndImages();


function fetchPageAndImages() {
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchBoxInput}&page=${currentPage}&limit=16&fields=id,title,image_id,date_start,artist_display,place_of_origin,dimensions,medium_display,credit_line`)
        .then((data) => { return data.json() })
        .then((completeData) => {
            let data1 = ""
            console.log(completeData.data);
            let currentPage = completeData.pagination.current_page
            // console.log(currentPage)
            completeData.data.map((values) => {
                data1 += `
                <div class="col-3">
                <div class="box ">
                  <div class="body">
                    <div class="imgContainer">
                      <img src="https://www.artic.edu/iiif/2/${values.image_id}/full/843,/0/default.jpg" alt="${values.title}">
                    </div>
                    <div class="content d-flex flex-column align-items-center justify-content-center">
                      <div>
                        <h5>${values.title}</h5>
                        <p>${values.artist_display}</p>
                        <p>${values.medium_display}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


                `

                //         `
                //     <div class="col-3 ">
                //         <div class="flip-card ">
                //             <div class="flip-card-inner ">
                //                 <div class="flip-card-front">
                //                     <img src="https://www.artic.edu/iiif/2/${values.image_id}/full/843,/0/default.jpg" alt="${values.title}">
                //                 </div>
                //                 <div class="flip-card-back">
                //                     <h3>${values.title}</h3>
                //                     <p>${values.artist_display}</p>
                //                     <p>${values.medium_display}</p>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>


                //   `

            })
            document.getElementById("cards").innerHTML = data1;
        })

}

const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    searchBoxInput = document.getElementsByClassName("searchBar")[0].value
    console.log(searchBoxInput);
    fetchPageAndImages();
    currentPage = 1;
    addActiveClass(currentPage)


})



const paginationContainer = document.getElementsByClassName("pagination")[0];

const removeActiveClass = () => {
    const currentActiveButton = document.getElementById(currentPage);
    currentActiveButton.className = "page-item";
}

const addActiveClass = (pageNumber) => {
    const newActiveButton = document.getElementById(pageNumber);
    newActiveButton.className = "active page-item"
}


paginationContainer.addEventListener("click", (event) => {
    console.log("dance")
    if (event.target.classList.contains("pageNumber") && event.target.id != currentPage) {
        console.log("hi")
        removeActiveClass();
        currentPage = event.target.id;
        console.log(currentPage);
        addActiveClass(currentPage)
        fetchPageAndImages()
    }
})


const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");

decrementButton.addEventListener("click", () => {
    if (currentPage > 1) {
        removeActiveClass();
        currentPage--
        addActiveClass(currentPage);
        fetchPageAndImages()
    }
})

incrementButton.addEventListener("click", () => {
    if (currentPage < 6) {
        removeActiveClass();
        currentPage++
        addActiveClass(currentPage);
        fetchPageAndImages()
    }
})
addActiveClass(currentPage);