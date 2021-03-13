const { MAX_FAVOURITE_MOVIES } = require("../constants/numbers");
const { DEFAULT_MOVIE } = require("../constants/defaults");
const { TMDB_SINGLE_MOVIE_ID_SEARCH_URL } = require("../constants/urls");
const fetchData = require("./fetchData");
const { createUrl } = require("./urlHelpers");

// invalid movies have their success property set to false
// valid movies don't have a success property
const filterOutInvalidMovies = (movies) => movies.filter((movie) => movie.success !== false);

const extractMovieIds = (movies) =>
  movies.map((movie) => {
    const { id } = movie;
    return { id };
  });

const getSingleMovieData = async (movieIds) => {
  const moviePromises = movieIds.map((movie) => {
    const { id } = movie;
    const singleMovieUrl = createUrl(TMDB_SINGLE_MOVIE_ID_SEARCH_URL, [id]);
    return fetchData(singleMovieUrl);
  });

  const movies = await Promise.all(moviePromises);
  return filterOutInvalidMovies(movies);
};

const populateMovies = async (movieIds) => {
  const movies = await getSingleMovieData(movieIds);
  while (movies.length < MAX_FAVOURITE_MOVIES) {
    movies.push(DEFAULT_MOVIE);
  }

  return movies;
};

module.exports = {
  extractMovieIds,
  getSingleMovieData,
  populateMovies,
};
