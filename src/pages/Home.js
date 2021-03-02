import MovieList from "components/MovieList/MovieList";
import React from "react";
import useFetch from "hooks/useFetch";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8080/movies");
  return (
    <div>
      {error && error}
      {isLoading && <div>Loading...</div>}
      {data && (
        <>
          <MovieList movies={data} title="Daily Trending" />
          <MovieList movies={data} title="Daily Trending" />
        </>
      )}
    </div>
  );
};

export default Home;
