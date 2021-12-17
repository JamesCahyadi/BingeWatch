const express = require("express");
const cors = require("cors");
const path = require("path");
const useRoutes = require("./api/routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));

app.use(cors());
app.use(express.json());

useRoutes(app);

app.get("*", (req, res) => {
  // if user goes to any other url, redirect to home
  res.redirect("/");
});

app.listen(PORT);
