import MovieCard from "components/MovieCard";
import React from "react";
import useStyles from "components/MovieList/MovieListStyles";

const MovieList = ({ movies, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.movieListContainer}>
      <div className={classes.movieListTitle}>{title}</div>
      <div className={classes.fadeContainer}>
        <div className={classes.movieCardsContainer}>
          {movies.map((movie, idx) => (
            <MovieCard key={idx} movie={movie} rank={idx + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
