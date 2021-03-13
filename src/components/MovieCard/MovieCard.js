import * as constants from "constants/movieCardIcons";

import React, { useEffect, useState } from "react";
import { getCurrentPage, getMoviePoster } from "utils/urlHelpers";

import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import MovieCardIcons from "components/MovieCardIcons";
import { useLocation } from "react-router-dom";
import useStyles from "components/MovieCard/MovieCardStyles";

const MovieCard = ({ movie, rank }) => {
  const classes = useStyles();
  const location = useLocation();

  const pages = ["home", "profile"];
  const [icons, setIcons] = useState(constants.homeMovieIcons);
  const [curPage, setCurPage] = useState(pages[0]);

  useEffect(() => {
    setCurPage(getCurrentPage(location));
    if (curPage === pages[0]) {
      setIcons(constants.homeMovieIcons);
    } else {
      setIcons(constants.profileMovieIcons);
    }
  }, [curPage]);

  const poster = (
    <img className={classes.poster} src={getMoviePoster(movie.poster_path)} alt="poster" />
  );

  return (
    <Card className={classes.movieCard}>
      <CardContent>
        {curPage === pages[1] ? (
          <Badge
            color="error"
            overlap="rectangle"
            badgeContent={rank}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            className={classes.rankBadge}
          >
            {poster}
          </Badge>
        ) : (
          <>{poster}</>
        )}
        <CardActions className={classes.movieCardIconsContainer}>
          <MovieCardIcons movie={movie} icons={icons} />
        </CardActions>
        <div className={classes.movieTitle}>{movie.title || movie.name}</div>
        <div>{movie.first_air_date || movie.release_date}</div>
        <div>{movie.vote_average}</div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
