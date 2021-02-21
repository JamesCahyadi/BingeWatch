const express = require("express");
const fetchData = require("../utils/fetchData");
const {
  TMDB_DAILY_TRENDING_URL,
  TMDB_WEEKLY_TRENDING_URL,
  TMDB_VISIT_IMDB_URL,
} = require("../constants/urls");
const { getUrlWithKey, getUrlObjWithKey } = require("../utils/urlHelpers");

const router = express.Router();

router.get("/movies", async (req, res) => {
  const dailyTrendingURL = getUrlWithKey(TMDB_DAILY_TRENDING_URL);
  const weeklyTrendingURL = getUrlWithKey(TMDB_WEEKLY_TRENDING_URL);

  const dailyTrendingData = await fetchData(dailyTrendingURL);
  const weeklyTrendingData = await fetchData(weeklyTrendingURL);

  // res.send({ dailyTrendingData, weeklyTrendingData });
  res.send(dailyTrendingData);
});

// router.get("/image", async (req, res) => {
//   const { id } = req.body;

//   const data = "https://image.tmdb.org/t/p/original";
//   res.end();
// });

module.exports = router;
