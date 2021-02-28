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
