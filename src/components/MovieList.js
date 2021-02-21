import PropTypes from "prop-types";
import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.results.map((movie) => (
        <div key={movie.id}>
          {movie.id}
          <div>{movie.title || movie.name}</div>
          <div>{movie.popularity}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        vote_average: PropTypes.number,
        poster_path: PropTypes.string,
        // eslint-disable-next-line comma-dangle
      })
    ),
  }).isRequired,
};
