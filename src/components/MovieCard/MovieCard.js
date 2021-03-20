import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import MovieCardIcons from "components/MovieCardIcons";
import PercentBar from "components/PercentBar";
import React from "react";
import { getMoviePoster } from "utils/urlHelpers";
import useStyles from "components/MovieCard/MovieCardStyles";

const MovieCard = ({
  movie,
  rank,
  icons,
  setNotificationData,
  handleInsert,
  handleDelete,
  toggleDrawer,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.movieCard}>
      <CardContent>
        <Badge
          color="primary"
          overlap="rectangle"
          badgeContent={rank}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          className={classes.rankBadge}
        >
          <img className={classes.poster} src={getMoviePoster(movie.poster_path)} alt="poster" />
        </Badge>
        <PercentBar rating={movie.vote_average} />
        <CardActions className={classes.movieCardIconsContainer}>
          <MovieCardIcons
            movie={movie}
            rank={rank}
            icons={icons}
            setNotificationData={setNotificationData}
            handleDelete={handleDelete}
            toggleDrawer={toggleDrawer}
            handleInsert={handleInsert}
          />
        </CardActions>
        <div className={classes.movieTitle}>{movie.title || movie.name}</div>
        <div>{movie.first_air_date || movie.release_date}</div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
