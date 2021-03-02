import * as constants from "constants/urls";

import posterDefaultImg from "assets/posterDefault.svg";

export const getMoviePoster = (posterPath) => {
  let posterUrl;

  if (posterPath) {
    posterUrl = constants.TMDB_MOVIE_POSTER_URL + posterPath;
  } else {
    posterUrl = posterDefaultImg;
  }

  return posterUrl;
};

export const getImdbUrl = (imdbId) => constants.IMDB_MOVIE_URL + imdbId;

export const getCurrentPage = (location) => {
  const url = location.pathname;
  let page;

  if (url.indexOf("profile") === -1) {
    page = "home";
  } else {
    page = "profile";
  }

  return page;
};
