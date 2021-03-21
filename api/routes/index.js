const movies = require("./movies");
const profile = require("./profile");
const users = require("./users");

module.exports = (app) => {
  app.use(movies);
  app.use(profile);
  app.use(users);
};
