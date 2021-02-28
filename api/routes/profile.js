const express = require("express");
const db = require("../db");
const { favouriteMoviesQuery } = require("../constants/queries");
const { validateMovies } = require("../utils/movies");

const router = express.Router();

router.get("/profile/:id", async (req, res) => {
  const { id } = req.params;

  const { rows } = await db.query(favouriteMoviesQuery, [id]);

  const topMovies = validateMovies(rows);

  res.send(topMovies);
});

module.exports = router;
