const favouriteMoviesQuery = "SELECT id FROM favourite_movies WHERE user_id = $1";

module.exports = {
  favouriteMoviesQuery,
};
