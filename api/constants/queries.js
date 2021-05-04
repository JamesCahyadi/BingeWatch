const getFavouriteMoviesQuery =
  "SELECT id, sort_order FROM favourite_movies WHERE user_id = $1 ORDER BY sort_order";
const updateFavouriteMoviesQuery =
  "INSERT INTO favourite_movies VALUES($1, $2, $3) ON CONFLICT (user_id, id) DO UPDATE SET sort_order = $3";
const insertFavouriteMovieQuery = "INSERT INTO favourite_movies VALUES($1, $2, $3)";
const deleteFavouriteMovieQuery = "DELETE FROM favourite_movies WHERE user_id = $1 and id = $2";
const getSingleFavouriteMovieQuery =
  "SELECT sort_order FROM favourite_movies WHERE user_id = $1 and id = $2";

const insertUserQuery =
  "INSERT INTO users(username, password) VALUES ($1, $2) returning id, username";
const getSingleUserQuery = "SELECT id, password FROM users WHERE username = $1";
const getUsersQuery = "SELECT username FROM users WHERE username ILIKE $1 || '%'";

module.exports = {
  getFavouriteMoviesQuery,
  updateFavouriteMoviesQuery,
  deleteFavouriteMovieQuery,
  insertFavouriteMovieQuery,
  getSingleFavouriteMovieQuery,
  insertUserQuery,
  getSingleUserQuery,
  getUsersQuery,
};
