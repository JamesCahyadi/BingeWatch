const express = require("express");
const db = require("../db");
const {
  getFavouriteMoviesQuery,
  updateFavouriteMoviesQuery,
  deleteFavouriteMovieQuery,
} = require("../constants/queries");
const { populateMovies, generateDefaultMovie } = require("../utils/movieHelpers");

const router = express.Router();

router.get("/profile/:id", async (req, res) => {
  const { id: userId } = req.params;
  try {
    const { rows } = await db.query(getFavouriteMoviesQuery, [userId]);
    const topMovies = await populateMovies(rows);
    res.send(topMovies);
  } catch (err) {
    res.send(err.message);
  }
});

router.patch("/profile/:id", async (req, res) => {
  const { id: userId } = req.params;
  const { movieId, sortOrder } = req.body;

  try {
    await db.query(updateFavouriteMoviesQuery, [userId, movieId, sortOrder]);
    res.send();
  } catch (err) {
    res.send(err.message);
  }
});

router.delete("/profile/:id", async (req, res) => {
  const { id: userId } = req.params;
  const { movieId, sortOrder } = req.body;

  try {
    await db.query(deleteFavouriteMovieQuery, [userId, movieId]);
    const defaultMovie = generateDefaultMovie(sortOrder);
    res.send(defaultMovie);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
