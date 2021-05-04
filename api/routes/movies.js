const express = require("express");
const db = require("../db");
const fetchData = require("../utils/fetchData");
const {
  TMDB_DAILY_TRENDING_URL,
  TMDB_WEEKLY_TRENDING_URL,
  TMDB_QUERY_SEARCH_URL,
} = require("../constants/urls");
const { insertFavouriteMovieQuery, getSingleFavouriteMovieQuery } = require("../constants/queries");
const { createUrl } = require("../utils/urlHelpers");
const { extractMovieIds, getFormattedMovies } = require("../utils/movies");

const router = express.Router();

router.get("/movies", async (req, res) => {
  const dailyTrendingURL = createUrl(TMDB_DAILY_TRENDING_URL);
  const { results: dailyTrendingMovies } = await fetchData(dailyTrendingURL);
  const dailyTrendingMovieIds = extractMovieIds(dailyTrendingMovies);
  const dailyTrendingMoviesWithImdb = await getFormattedMovies(dailyTrendingMovieIds);

  const weeklyTrendingURL = createUrl(TMDB_WEEKLY_TRENDING_URL);
  const { results: weeklyTrendingMovies } = await fetchData(weeklyTrendingURL);
  const weeklyTrendingMovieIds = extractMovieIds(weeklyTrendingMovies);
  const weeklyTrendingMoviesWithImdb = await getFormattedMovies(weeklyTrendingMovieIds);

  res.send({ dailyTrendingMoviesWithImdb, weeklyTrendingMoviesWithImdb });
});

router.get("/movies/:query", async (req, res) => {
  const { query } = req.params;
  const movieSearchURL = createUrl(TMDB_QUERY_SEARCH_URL, [query, 1]);
  const { results } = await fetchData(movieSearchURL);
  const searchedMovieIds = extractMovieIds(results);
  const searchedMoviesWithImdb = await getFormattedMovies(searchedMovieIds);
  res.send(searchedMoviesWithImdb);
});

router.get("/movies/:movieId/:userId", async (req, res) => {
  const { movieId, userId } = req.params;
  const { rows } = await db.query(getSingleFavouriteMovieQuery, [userId, movieId]);
  res.send(rows);
});

router.put("/movies", async (req, res) => {
  const { movieId, userId, sortOrder } = req.body;
  await db.query(insertFavouriteMovieQuery, [userId, movieId, sortOrder]);
  const [newlyAddedMovie] = await getFormattedMovies([{ id: movieId }]);
  res.send(newlyAddedMovie);
});

module.exports = router;
