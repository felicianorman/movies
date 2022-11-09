import { OmdbResponse } from "./models/OmdbResponse";

//Hämtar <div> från min HTML
let myWrapper = document.getElementById("wrapper");

fetch("http://omdbapi.com?apikey=416ed51a&s=christmas")
  .then((response) => response.json()) 
  .then((data) => {
    let result = new OmdbResponse(data.Search); //Skapar objekt från min klass OmdbResponse. Det är Search från Omdb API. Lagrar i en variabel för enkel åtkomst

    handleData(result.movies); //Skickar med variabeln result och movies från min OmdbResponse till funktionen som parameter
  });

function handleData(movies) {  //tar emot result.movies och döper till movies
  //loopar igenom och skapar HTML
  for (let i = 0; i < movies.length; i++) { 
    let container = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");
  
    //title och imgUrl från min Movie klass
    title.innerHTML = movies[i].title;
    container.appendChild(title);

    img.src = movies[i].imageUrl;
    img.alt = movies[i].title;
    container.appendChild(img);

    container.classList.add("container");
    myWrapper.appendChild(container);
  }
}

