const express = require("express");
const cors = require("cors");
const movieRoutes = require("./api/routes/movieRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes Middleware
app.use(movieRoutes);

// const dotenv = require("dotenv");

// dotenv.config();

// export const getTrendingMovies = async (duration) => {
//   const dailyTrendingResponse = await fetch(dailyTrendingURL);
//   const dailyTrendingData = await dailyTrendingResponse.json();
// };

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log("Example app listening at localhost", PORT);
});
