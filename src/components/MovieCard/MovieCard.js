import React, { useState } from "react";
import { getImdbUrl, getMoviePoster } from "utils/urlHelpers";

import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import imdbLogo from "assets/imdb.png";
import useStyles from "components/MovieCard/MovieCardStyles";

const MovieCard = ({ movie, rank }) => {
  const [isHover, setIsHover] = useState(false);
  const classes = useStyles();

  return (
    <Card
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      raised={isHover}
      className={classes.movieCard}
    >
      <CardContent>
        <Badge
          color="secondary"
          overlap="circle"
          badgeContent={rank}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <img className={classes.poster} src={getMoviePoster(movie.poster_path)} alt="poster" />
        </Badge>
        <CardActions>
          <IconButton href={getImdbUrl(movie.imdb_id)} target="_blank">
            <Avatar
              className={classes.movieActionIcon}
              variant="rounded"
              alt="imdb"
              src={imdbLogo}
            />
          </IconButton>
        </CardActions>
        <div>{movie.title || movie.name}</div>
        <div>{movie.first_air_date || movie.release_date}</div>
        <div>{movie.vote_average}</div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
