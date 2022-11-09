import { OmdbResponse } from "./models/OmdbResponse";

let myWrapper = document.getElementById("wrapper");

fetch("http://omdbapi.com?apikey=416ed51a&s=christmas")
  .then((response) => response.json())
  .then((data) => {
    let result = new OmdbResponse(data.Search);

    handleData(result.movies); 
  });

function handleData(movies) { 
  for (let i = 0; i < movies.length; i++) {
    let container = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");
  
    title.innerHTML = movies[i].title;
    container.appendChild(title);

    img.src = movies[i].imageUrl;
    img.alt = movies[i].title;
    container.appendChild(img);

    container.classList.add("container");
    myWrapper.appendChild(container);
  }
}

