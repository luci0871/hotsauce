"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("hello")
    loadjson();

}
async function loadjson(){
    fetch("https://www.nepanime.dk/wp-json/wp/v2/Gallery/?_embed")
		.then(res => res.json())
		.then(handleData)
}
function handleData (myData) {
    //1. loop the data 
    myData.forEach(showVase);

}
function showVase(vase){
console.log(vase);
const imgPath = vase._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

    // 2. cloning template
    const template = document.querySelector(".myTemplate").content;
    const vaseCopy = template.cloneNode(true);

    // 3. cloning the data from json file
    vaseCopy.querySelector(".artist").innerHTML = vase.artist
    vaseCopy.querySelector(".vaseName").innerHTML = vase.vase_name
    vaseCopy.querySelector(".vaseMaterial").innerHTML = vase.material
    vaseCopy.querySelector(".desc").innerText   = vase.description
    vaseCopy.querySelector(".vaseSize").innerText   = vase.size

   const img = vaseCopy.querySelector("img");
	img.setAttribute("src", imgPath);
     img.setAttribute("alt", "image of the vase");
    
    // 4. append 
    document.querySelector(".vases").appendChild(vaseCopy);
}

