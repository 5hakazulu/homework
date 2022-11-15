
let currentPage = 1;
let maxPage =6
let searchBoxInput = ""
fetchPageAndImages();


function fetchPageAndImages(){
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchBoxInput}&page=${currentPage}&limit=16&fields=id,title,image_id`)
    .then((data) => { return data.json() })
    .then((completeData) => {
        let data1 = ""
        console.log(completeData.data);
        let currentPage = completeData.pagination.current_page
        // console.log(currentPage)
        completeData.data.map((values) => {
            data1 += `
            <div class="col-3 ">
                <div class="card  " style="width: 18rem;">
                    <img src="https://www.artic.edu/iiif/2/${values.image_id}/full/843,/0/default.jpg" class="card-img-top" alt="${values.title}">
                    <div class="card-body">
                        <h5 class="card-title">${values.title}</h5>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-primary">More Info</a>
                    </div>
                </div>
            </div>
            
          `
        })
        document.getElementById("cards").innerHTML = data1;
    })
    
}

const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit",function(event){
    event.preventDefault();
   
    searchBoxInput = document.getElementsByClassName("searchBar")[0].value
    console.log(searchBoxInput);
    fetchPageAndImages();
   
   
})

function nextPage(){
    console.log('going Foward');
    if(currentPage <= maxPage){
        currentPage++;
        // console.log(currentPage);
        fetchPageAndImages();
    }
}

function previousPage(){
    console.log('going Backward');
    if(currentPage > 0){
        currentPage--;
        console.log(currentPage);
        fetchPageAndImages();
    }
}

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
    if(event.target.classList.contains("page-item") && event.target.id != currentPage) {
        console.log("Hi there")
        removeActiveClass();
        currentPage = event.target.id;
        addActiveClass(currentPage); 
        fetchPageAndImages();
    }
})
document.getElementById('next').addEventListener('click',nextPage);
document.getElementById('previous').addEventListener('click',previousPage);
addActiveClass(currentPage);