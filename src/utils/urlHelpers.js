import * as urls from "constants/urls";
import * as pages from "constants/pageNames";

import posterDefaultImg from "assets/posterDefault.svg";

export const getMoviePoster = (posterPath) => {
  let posterUrl;

  if (posterPath) {
    posterUrl = urls.TMDB_MOVIE_POSTER_URL + posterPath;
  } else {
    posterUrl = posterDefaultImg;
  }

  return posterUrl;
};

export const getImdbUrl = (imdbId) => urls.IMDB_MOVIE_URL + imdbId;

export const getCurrentPage = (location) => {
  const url = location.pathname;
  let page;

  for (let i = 0; i < pages.ALL_PAGES.length; i++) {
    if (url.includes(pages.ALL_PAGES[i])) {
      page = pages.ALL_PAGES[i];
      break;
    }
  }

  return page;
};
