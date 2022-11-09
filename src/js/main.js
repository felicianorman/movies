import { OmdbResponse } from "./models/OmdbResponse";

let myWrapper = document.getElementById("wrapper");

fetch("http://omdbapi.com?apikey=416ed51a&s=christmas")
  //fetch ger oss ett löfte som vi hanterar med .then. om anropet är framgångsrikt kör vi vår funktion response. json() kommer ta svaret vi fick från servern och göra om till json data. json är en asynkron operation, och kommer också ge oss ett löfte.
  .then((response) => response.json())
  .then((data) => {
    let result = new OmdbResponse(data.totalResults, data.Search);
    //skapar ett objekt i min klass omdbResponse. data.totalResults motsvarar amount och data.Search motsvarar movies. lagrar i variabeln result så jag kan komma åt dessa enkelt
    console.log(result);

    handleData(result.movies, result.amount); //skickar med movies från min klass.
  });

function handleData(movies, amount) { //tar emot result.movies som movies
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

  console.log(movies);
  console.log(amount);

}

