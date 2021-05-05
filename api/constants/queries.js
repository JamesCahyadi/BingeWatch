const GET_FAVOURITE_MOVIES_QUERY =
  "SELECT id, sort_order FROM favourite_movies WHERE user_id = $1 ORDER BY sort_order";
const UPDATE_FAVOURITE_MOVIES_QUERY =
  "INSERT INTO favourite_movies VALUES($1, $2, $3) ON CONFLICT (user_id, id) DO UPDATE SET sort_order = $3";
const INSERT_FAVOURITE_MOVIES_QUERY = "INSERT INTO favourite_movies VALUES($1, $2, $3)";
const DELETE_FAVOURITE_MOVIES_QUERY = "DELETE FROM favourite_movies WHERE user_id = $1 and id = $2";
const DELETE_FAVOURITE_MOVIES_BY_SORT_ORDER_QUERY =
  "DELETE FROM favourite_movies WHERE user_id = $1 and sort_order = $2";
const GET_SINGLE_FAVOURITE_MOVIE_QUERY =
  "SELECT sort_order FROM favourite_movies WHERE user_id = $1 and id = $2";

const INSERT_USER_QUERY =
  "INSERT INTO users(username, password) VALUES ($1, $2) returning id, username";
const GET_SINGLE_USER_QUERY = "SELECT id, password FROM users WHERE username = $1";
const GET_USERS_QUERY = "SELECT username FROM users WHERE username ILIKE $1 || '%'";

const GET_FEED_QUERY =
  "SELECT fm.user_id, fm.id, fm.sort_order, u.username FROM favourite_movies fm INNER JOIN users u ON u.id = fm.user_id";

module.exports = {
  GET_FAVOURITE_MOVIES_QUERY,
  UPDATE_FAVOURITE_MOVIES_QUERY,
  DELETE_FAVOURITE_MOVIES_QUERY,
  DELETE_FAVOURITE_MOVIES_BY_SORT_ORDER_QUERY,
  INSERT_FAVOURITE_MOVIES_QUERY,
  GET_SINGLE_FAVOURITE_MOVIE_QUERY,
  INSERT_USER_QUERY,
  GET_SINGLE_USER_QUERY,
  GET_USERS_QUERY,
  GET_FEED_QUERY,
};
