const TMDB_DAILY_TRENDING_URL = {
  partOne: "https://api.themoviedb.org/3/trending/all/day?api_key=",
  apiKeyIndex: 0,
};
const TMDB_WEEKLY_TRENDING_URL = {
  partOne: "https://api.themoviedb.org/3/trending/all/week?api_key=",
  apiKeyIndex: 0,
};
const TMDB_VISIT_IMDB_URL = {
  partOne: "https://api.themoviedb.org/3/movie/",
  partTwo: "/external_ids?api_key=",
  apiKeyIndex: 1,
};
const TMDB_SINGLE_MOVIE_ID_SEARCH_URL = {
  partOne: "https://api.themoviedb.org/3/movie/",
  partTwo: "?api_key=",
  apiKeyIndex: 1,
};
const TMDB_MULTI_SEARCH_URL = {
  partOne: "https://api.themoviedb.org/3/search/multi?api_key=",
  partTwo: "&language=en-US&include_adult=false&query=",
  partThree: "&page=1",
  apiKeyIndex: 1,
};

module.exports = {
  TMDB_DAILY_TRENDING_URL,
  TMDB_WEEKLY_TRENDING_URL,
  TMDB_VISIT_IMDB_URL,
  TMDB_SINGLE_MOVIE_ID_SEARCH_URL,
  TMDB_MULTI_SEARCH_URL,
};
