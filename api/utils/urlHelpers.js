require("dotenv").config();

const { TMDB_KEY } = process.env;

const createUrl = (urlObj, urlParams = []) => {
  const { apiKeyIndex } = urlObj;
  // eslint-disable-next-line no-param-reassign
  delete urlObj.apiKeyIndex;

  const url = Object.values(urlObj).map((part, idx) => {
    let partialUrl;

    if (apiKeyIndex === idx) {
      partialUrl = part + TMDB_KEY;
    } else {
      partialUrl = part + urlParams[idx];
    }
    return partialUrl;
  });

  return url;
};

module.exports = {
  createUrl,
};
