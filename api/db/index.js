const { Pool } = require("pg");
require("dotenv").config();

const config = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
};

const pool = new Pool(config);

module.exports = pool;
