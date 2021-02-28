const TMDB_DAILY_TRENDING_URL = "https://api.themoviedb.org/3/trending/all/day?api_key=";
const TMDB_WEEKLY_TRENDING_URL = "https://api.themoviedb.org/3/trending/all/week?api_key=";
const TMDB_VISIT_IMDB_URL = {
  partOne: "https://api.themoviedb.org/3/movie/",
  partTwo: "/external_ids?api_key=",
};
const TMDB_MOVIES_QUERY_SEARCH_URL = {
  partOne: "https://api.themoviedb.org/3/search/movie?api_key=",
  partTwo: "&query=",
  partThree: "& page=",
};
const TMDB_MOVIES_ID_SEARCH_URL = {
  partOne: "https://api.themoviedb.org/3/movie/",
  partTwo: "?api_key=",
};

module.exports = {
  TMDB_DAILY_TRENDING_URL,
  TMDB_WEEKLY_TRENDING_URL,
  TMDB_VISIT_IMDB_URL,
  TMDB_MOVIES_QUERY_SEARCH_URL,
  TMDB_MOVIES_ID_SEARCH_URL,
};
