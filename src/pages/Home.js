import MovieList from "components/MovieList/MovieList";
import React from "react";
import useFetch from "hooks/useFetch";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8080/movies");

  let dailyTrendingMoviesWithImdb;
  let weeklyTrendingMoviesWithImdb;
  if (data) {
    ({ dailyTrendingMoviesWithImdb } = data);
    ({ weeklyTrendingMoviesWithImdb } = data);
  }

  return (
    <div>
      {error && error}
      {isLoading && <div>Loading...</div>}
      {data && (
        <>
          <MovieList movies={dailyTrendingMoviesWithImdb} title="Daily Trending" />
          <MovieList movies={weeklyTrendingMoviesWithImdb} title="Weekly Trending" />
        </>
      )}
    </div>
  );
};

export default Home;
