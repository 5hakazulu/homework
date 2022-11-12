// async function getArt(){
//     const result = await fetch('https://api.artic.edu/api/v1/artworks/search?q=house&page=&limit=16');
//     return await result.json();
//     // console.log(resultJson);
//     // return(resultJson);

// }
fetch('https://api.artic.edu/api/v1/artworks/search?q=park&page=&limit=16&fields=id,title,image_id').then((data)=>{return data.json()})
    .then((completeData)=>{
        let data1 =""
        console.log(completeData.data);
        completeData.data.map((values)=>{
            data1 +=`
            <div class="col-3">
                <div class="card" style="width: 18rem;">
                    <img src="https://www.artic.edu/iiif/2/${values.image_id}/full/843,/0/default.jpg" class="card-img-top" alt="${values.title}">
                    <div class="card-body">
                        <h5 class="card-title">${values.title}</h5>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            
          `
        })
        document.getElementById("cards").innerHTML =data1;
        
    })
    




// populateCards();
