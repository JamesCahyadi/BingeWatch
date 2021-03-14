const { v4: uuid } = require("uuid");
const { MAX_FAVOURITE_MOVIES } = require("../constants/numbers");
const { DEFAULT_MOVIE } = require("../constants/defaults");
const { TMDB_SINGLE_MOVIE_ID_SEARCH_URL } = require("../constants/urls");
const fetchData = require("./fetchData");
const { createUrl } = require("./urlHelpers");

// invalid movies have their success property set to false
// valid movies don't have a success property
const filterOutInvalidMovies = (movies) => movies.filter((movie) => movie.success !== false);

const extractMovieIds = (movies) => movies.map((movie) => ({ id: movie.id }));

const appendSortOrder = (movies, movieObj) =>
  movies.map((movie, idx) => ({ ...movie, sortOrder: movieObj[idx].sort_order }));

const getSingleMovieData = async (movieObj) => {
  const moviePromises = movieObj.map((movie) => {
    const { id } = movie;
    const singleMovieUrl = createUrl(TMDB_SINGLE_MOVIE_ID_SEARCH_URL, [id]);
    return fetchData(singleMovieUrl);
  });

  const movies = await Promise.all(moviePromises);
  const filteredMovies = filterOutInvalidMovies(movies);
  const filteredMoviesWithSortOrder = appendSortOrder(filteredMovies, movieObj);
  return filteredMoviesWithSortOrder;
};

const populateMovies = async (movieObj) => {
  const movies = await getSingleMovieData(movieObj);
  const sortedMovies = [];
  let moviesIdx = 0;

  for (let i = 1; i <= MAX_FAVOURITE_MOVIES; i++) {
    if (movies[moviesIdx] && movies[moviesIdx].sortOrder === i) {
      sortedMovies.push(movies[moviesIdx]);
      moviesIdx++;
    } else {
      sortedMovies.push({ ...DEFAULT_MOVIE, sortOrder: i, id: uuid() });
    }
  }

  return sortedMovies;
};

module.exports = {
  extractMovieIds,
  getSingleMovieData,
  populateMovies,
};
