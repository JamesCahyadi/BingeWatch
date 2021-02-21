import MovieList from "components/MovieList";
import React from "react";
import useFetch from "hooks/useFetch";

const Home = () => {
  const movies = useFetch("http://localhost:8080/movies");

  return (
    <div>
      <div>d</div>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
