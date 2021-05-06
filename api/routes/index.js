const users = require("./users");
const movies = require("./movies");
const profile = require("./profile");

module.exports = (app) => {
  app.use(users);
  app.use(movies);
  app.use(profile);
};
