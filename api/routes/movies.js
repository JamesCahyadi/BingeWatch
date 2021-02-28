const express = require("express");
const fetchData = require("../utils/fetchData");
const {
  TMDB_DAILY_TRENDING_URL,
  TMDB_WEEKLY_TRENDING_URL,
  TMDB_VISIT_IMDB_URL,
} = require("../constants/urls");
const { createUrl } = require("../utils/urlHelpers");

const router = express.Router();

router.get("/movies", async (req, res) => {
  const weeklyTrendingURL = createUrl(TMDB_WEEKLY_TRENDING_URL);
  const dailyTrendingURL = createUrl(TMDB_DAILY_TRENDING_URL);

  console.log(dailyTrendingURL);
  const dailyTrendingData = await fetchData(dailyTrendingURL);
  const weeklyTrendingData = await fetchData(weeklyTrendingURL);

  console.log(dailyTrendingData);

  // res.send({ dailyTrendingData, weeklyTrendingData });
  res.send(dailyTrendingData.results);
});

module.exports = router;
