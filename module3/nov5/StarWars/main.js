// https://swapi.dev/api/

let arrayOfPeople= [];
const subjectDropDownMenu = document.getElementById('subjectSelector');

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

async function fetchPeople(){
    let next = true;
    let page = 1;
    while(next){
        const result = await fetch(`https://swapi.dev/api/people/?page=${page}`);
        const resultJson = await result.json();

        arrayOfPeople =[...arrayOfPeople, ...resultJson.results];
        // for (let i= 0; i< resultJson.results.length; i++){
        //     arrayOfPeople.push(resultJson.results[i])
        // }
      
        next = resultJson.next;
        page++;
    }
    console.log(arrayOfPeople);
    renderName(arrayOfPeople);
   
}

function renderName(arrayOfResults){
    console.log('hi')
    const nameHTMLArray = arrayOfResults.map(function(result){
        
        return `
        <p>${result.name}</p>
        `
    })
    const nameHTML = nameHTMLArray.join('');
    const nameDiv =document.getElementById("people");
    nameDiv.innerHTML = nameHTML;
}

fetchPeople();
// console.log(arrayOfPeople);


// const myForm = document.getElementById("searchForm");

// let websiteName = '';
// const subjectCardTemplate = document.querySelector("[data-subject-template]")


// myForm.addEventListener("submit",function(e){
//     e.preventDefault();
//     // console.log("hi")
//     const searchString = document.getElementById('searchBar').value
//     const urlEncodedSearchString =encodeURIComponent(searchString);
//     fetch(websiteName +=urlEncodedSearchString)
//         .then(function(response){
//             return response.json();
//         })
//         // .then(function(data){

//         // })
//     console.log(response.json);
//     // if(){

//     // }
// })

// // document.getElementById("searchButton").addEventListener('button', function(){
// //     console.log("hi");
// // })

// function getOption(){
//     const selectElement = document.querySelector('#subjectSelector')
//     return selectElement.value;
// }



