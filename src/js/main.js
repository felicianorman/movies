import { OmdbResponse } from "./models/OmdbResponse";

fetch("http://omdbapi.com?apikey=416ed51a&s=star")
  //fetch ger oss ett löfte som vi hanterar med .then. om anropet är framgångsrikt kör vi vår funktion response. json() kommer ta svaret vi fick från servern och göra om till json data. json är en asynkron operation, och kommer också ge oss ett löfte.
  .then((response) => response.json())
  .then((data) => {
    let result = new OmdbResponse(data.totalResults, data.Search);
    //skapar ett objekt i min klass omdbResponse. data.totalResults motsvarar amount och data.Search motsvarar movies. lagrar i variabeln result så jag kan komma åt dessa enkelt
    console.log(result);

    handleData(result.movies); //skickar med movies från min klass.
  });

function handleData(movies) { //tar emot result.movies som movies
  for (let i = 0; i < movies.lenght; i++) {
    let container = document.createElement("div");
    let title = document.createElement("h3");

    container.appendChild(title);
    document.body.appendChild(container);
  }

  console.log(movies);

}
