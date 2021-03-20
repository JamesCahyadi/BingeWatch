const getFavouriteMoviesQuery =
  "SELECT id, sort_order FROM favourite_movies WHERE user_id = $1 ORDER BY sort_order";
const updateFavouriteMoviesQuery =
  "INSERT INTO favourite_movies VALUES($1, $2, $3) ON CONFLICT (user_id, id) DO UPDATE SET sort_order = $3";
const insertFavouriteMovieQuery = "INSERT INTO favourite_movies VALUES($1, $2, $3)";
const deleteFavouriteMovieQuery = "DELETE FROM favourite_movies WHERE user_id = $1 and id = $2";
const getSingleFavouriteMovieQuery =
  "SELECT sort_order FROM favourite_movies WHERE user_id = $1 and id = $2";

module.exports = {
  getFavouriteMoviesQuery,
  updateFavouriteMoviesQuery,
  deleteFavouriteMovieQuery,
  insertFavouriteMovieQuery,
  getSingleFavouriteMovieQuery,
};
