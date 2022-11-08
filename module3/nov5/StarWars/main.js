// https://swapi.dev/api/

const myForm = document.getElementById("searchForm");
const subjectDropDownMenu = document.getElementById('subjectSelector');
let websiteName = '';
const subjectCardTemplate = document.querySelector("[data-subject-template]")


myForm.addEventListener("submit",function(e){
    e.preventDefault();
    // console.log("hi")
    const searchString = document.getElementById('searchBar').value
    const urlEncodedSearchString =encodeURIComponent(searchString);
    fetch(websiteName +=urlEncodedSearchString)
        .then(function(response){
            return response.json();
        })
        // .then(function(data){

        // })
    console.log(response.json);
    // if(){

    // }
})

// document.getElementById("searchButton").addEventListener('button', function(){
//     console.log("hi");
// })

function getOption(){
    const selectElement = document.querySelector('#subjectSelector')
    return selectElement.value;
}

subjectDropDownMenu.addEventListener('change', (event)=>{
    websiteName =`https://swapi.dev/api/${getOption()}/`;
    console.log(websiteName);
    
    fetch(websiteName)
        .then(res=> res.json())
       
        .then(data=> {
          
            console.log(data);
            data.results.forEach(element => {
                const card = subjectCardTemplate.content.cloneNode(true).children[0]
                if(getOption() === "films"){
                    console.log(element.title)
                }
                else{
                    console.log(element.name);
                }
                
            
            });
            
        })
    // return websiteName;
})

