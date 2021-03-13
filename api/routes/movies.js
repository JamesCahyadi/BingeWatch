const express = require("express");
const fetchData = require("../utils/fetchData");
const {
  TMDB_DAILY_TRENDING_URL,
  TMDB_WEEKLY_TRENDING_URL,
  TMDB_VISIT_IMDB_URL,
} = require("../constants/urls");
const { createUrl } = require("../utils/urlHelpers");
const { extractMovieIds, getSingleMovieData } = require("../utils/movies");

const router = express.Router();

router.get("/movies", async (req, res) => {
  const dailyTrendingURL = createUrl(TMDB_DAILY_TRENDING_URL);
  const { results: dailyTrendingMovies } = await fetchData(dailyTrendingURL);
  const dailyTrendingMovieIds = extractMovieIds(dailyTrendingMovies);
  const dailyTrendingMoviesWithImdb = await getSingleMovieData(dailyTrendingMovieIds);

  const weeklyTrendingURL = createUrl(TMDB_WEEKLY_TRENDING_URL);
  const { results: weeklyTrendingMovies } = await fetchData(weeklyTrendingURL);
  const weeklyTrendingMovieIds = extractMovieIds(weeklyTrendingMovies);
  const weeklyTrendingMoviesWithImdb = await getSingleMovieData(weeklyTrendingMovieIds);

  res.send({ dailyTrendingMoviesWithImdb, weeklyTrendingMoviesWithImdb });
});

module.exports = router;
