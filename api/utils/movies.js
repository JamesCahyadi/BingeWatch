const { MAX_FAVOURITE_MOVIES } = require("../constants/numbers");
const { DEFAULT_MOVIE } = require("../constants/defaults");
const { TMDB_SINGLE_MOVIE_ID_SEARCH_URL } = require("../constants/urls");
const fetchData = require("./fetchData");
const { createUrl } = require("./urlHelpers");

const populateMovies = async (rows) => {
  const moviePromises = rows.map((movie) => {
    const { id } = movie;
    const singleMovieUrl = createUrl(TMDB_SINGLE_MOVIE_ID_SEARCH_URL, [id]);
    return fetchData(singleMovieUrl);
  });

  const movies = await Promise.all(moviePromises);

  while (movies.length < MAX_FAVOURITE_MOVIES) {
    movies.push(DEFAULT_MOVIE);
  }

  return movies;
};

module.exports = {
  populateMovies,
};
