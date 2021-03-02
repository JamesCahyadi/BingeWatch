import React, { useState } from "react";

import MovieCard from "components/MovieCard";
import useStyles from "components/MovieList/MovieListStyles";

const MovieList = ({ movies, title }) => {
  const classes = useStyles();

  const [shouldFadeLeft, setShouldFadeLeft] = useState(false);
  const [shouldFadeRight, setShouldFadeRight] = useState(true);

  const handleScroll = (e) => {
    const reachedRightSide = e.target.scrollWidth - e.target.scrollLeft === e.target.clientWidth;
    const reachedLeftSide = e.target.scrollLeft === 0;

    /* eslint-disable no-unused-expressions */
    reachedRightSide ? setShouldFadeRight(false) : setShouldFadeRight(true);
    reachedLeftSide ? setShouldFadeLeft(false) : setShouldFadeLeft(true);
    /* eslint-enable no-unused-expressions */
  };

  return (
    <div className={classes.movieListContainer}>
      <div className={classes.movieListTitle}>{title}</div>
      <div className={classes.fadeContainer}>
        <div
          className={`${classes.movieCardsContainer} 
          ${shouldFadeRight ? classes.fadeRight : ""} ${shouldFadeLeft ? classes.fadeLeft : ""}`}
          onScroll={handleScroll}
        >
          {movies.map((movie, idx) => (
            <MovieCard key={idx} movie={movie} rank={idx + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
