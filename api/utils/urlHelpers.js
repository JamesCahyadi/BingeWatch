require("dotenv").config();

const { TMDB_KEY } = process.env;

const getUrlWithKey = (url) => url + TMDB_KEY;

const getUrlObjWithKey = (urlObj, id) => {
  const { prefix, suffix } = urlObj;

  return prefix + id + suffix + TMDB_KEY;
};

module.exports = {
  getUrlWithKey,
  getUrlObjWithKey,
};
