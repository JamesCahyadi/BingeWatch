import * as constants from "constants/urls";

export const getMoviePoster = (movieId) => constants.TMDB_MOVIE_POSTER_URL + movieId;
