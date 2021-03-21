const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");
const { insertUserQuery, getSingleUserQuery } = require("../constants/queries");

const router = express.Router();

router.post("/users/login", async (req, res) => {
  const { username, password } = req.body;

  const { rows } = await db.query(getSingleUserQuery, [username]);

  if (rows.length === 0) {
    res.status(404).send({ status: "error", text: "No account exists with that username" });
  }

  const { id, password: hash } = rows[0];
  const isValid = await bcrypt.compare(password, hash);

  if (isValid) {
    res.send({ id, username });
  } else {
    res.status(404).send({ status: "error", text: "Incorrect password" });
  }
});

router.post("/users", async (req, res) => {
  const { username, password } = req.body;
  const saltRounds = 10;

  const { rows } = await db.query(getSingleUserQuery, [username]);
  if (rows.length !== 0) {
    res.status(409).send({
      status: "error",
      text: "Username is already taken",
    });
  }

  const hash = await bcrypt.hash(password, saltRounds);

  const { rows: userInfo } = await db.query(insertUserQuery, [username, hash]);
  const { id, username: newUserName } = userInfo;
  res.send({ id, username: newUserName });
});

module.exports = router;
