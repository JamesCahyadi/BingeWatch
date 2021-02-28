import MovieCard from "components/MovieCard";
import React from "react";
import useStyles from "components/MovieList/MovieListStyles";

const MovieList = ({ movies }) => {
  const classes = useStyles();

  return (
    <div className={classes.movieListContainer}>
      {movies.map((movie, idx) => (
        <MovieCard key={idx} movie={movie} rank={idx + 1} />
      ))}
    </div>
  );
};

export default MovieList;
