import MovieList from "components/MovieList/MovieList";
import React from "react";
import useFetch from "hooks/useFetch";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8080/movies");
  return (
    <div>
      {error && error}
      {isLoading && <div>Loading...</div>}
      {data && <MovieList movies={data} />}
    </div>
  );
};

export default Home;
