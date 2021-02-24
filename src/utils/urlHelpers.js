import * as constants from "constants/urls";

export const getMoviePoster = (posterPath) => constants.TMDB_MOVIE_POSTER_URL + posterPath;
