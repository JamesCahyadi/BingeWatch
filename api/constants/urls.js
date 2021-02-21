const TMDB_DAILY_TRENDING_URL = "https://api.themoviedb.org/3/trending/all/day?api_key=";
const TMDB_WEEKLY_TRENDING_URL = "https://api.themoviedb.org/3/trending/all/week?api_key=";
const TMDB_VISIT_IMDB_URL = {
  prefix: "https://api.themoviedb.org/3/movie/",
  suffix: "/external_ids?api_key=",
};

module.exports = {
  TMDB_DAILY_TRENDING_URL,
  TMDB_WEEKLY_TRENDING_URL,
  TMDB_VISIT_IMDB_URL,
};
