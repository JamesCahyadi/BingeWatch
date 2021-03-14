const express = require("express");
const db = require("../db");
const { getFavouriteMoviesQuery, updateFavouriteMoviesQuery } = require("../constants/queries");
const { populateMovies } = require("../utils/movies");

const router = express.Router();

router.get("/profile/:id", async (req, res) => {
  console.log("hello");
  const { id: userId } = req.params;
  try {
    const { rows } = await db.query(getFavouriteMoviesQuery, [userId]);
    const topMovies = await populateMovies(rows);
    res.send(topMovies);
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/profile/:id", async (req, res) => {
  const { id: userId } = req.params;
  const { movieId, sortOrder } = req.body;

  console.log("im here");
  try {
    await db.query(updateFavouriteMoviesQuery, [userId, movieId, sortOrder]);
    res.send();
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
