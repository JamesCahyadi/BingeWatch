const getFavouriteMoviesQuery =
  "SELECT id, sort_order FROM favourite_movies WHERE user_id = $1 ORDER BY sort_order";
const updateFavouriteMoviesQuery =
  "INSERT INTO favourite_movies VALUES($1, $2, $3) ON CONFLICT (user_id, id) DO UPDATE SET sort_order = $3";

module.exports = {
  getFavouriteMoviesQuery,
  updateFavouriteMoviesQuery,
};
