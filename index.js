const express = require("express");
const cors = require("cors");
const useRoutes = require("./api/routes");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes Middleware
useRoutes(app);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log("Example app listening at localhost", PORT);
});
