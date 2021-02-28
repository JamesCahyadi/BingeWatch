const { MAX_FAVOURITE_MOVIES } = require("../constants/numbers");
const { DEFAULT_MOVIE } = require("../constants/defaults");

const validateMovies = (rows) => {
  const movies = [...rows];

  while (movies.length < MAX_FAVOURITE_MOVIES) {
    movies.push(DEFAULT_MOVIE);
  }

  return movies;
};

module.exports = {
  validateMovies,
};
