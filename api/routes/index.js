const movies = require("./movies");
const profile = require("./profile");

module.exports = (app) => {
  app.use(movies);
  app.use(profile);
};
