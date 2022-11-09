import { Movie } from "./movie";

export class OmdbResponse {
    constructor(movies) {
        this.movies = movies.map((movie) => {
            return new Movie(movie.Title, movie.Poster);
        })
    }
}

//map loopar värdena som vi vill ha ut från OmdbAPI - Title och Poster
//Vi returnerar till vår klass Movie där vi döper dem till title och imageUrl