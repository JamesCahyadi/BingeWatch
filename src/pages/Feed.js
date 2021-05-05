import React from "react";
import useFetch from "hooks/useFetch";
import useUser from "context/UserContext";
import MovieList from "components/MovieList";
import { feedIcons } from "constants/movieCardIcons";
import Loader from "components/Loader";

const Feed = () => {
  const { user } = useUser();
  const { data, isLoading: isFetchLoading, error } = useFetch("/users");

  if (isFetchLoading) {
    return <Loader isCenterOnPage />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {data.map((feedInfo) => {
        const displayName = user.username === feedInfo.username ? "Your" : `${feedInfo.username}'s`;

        return (
          <MovieList
            movies={feedInfo.movies}
            title={`${displayName} Favourites`}
            icons={feedIcons}
          />
        );
      })}
    </>
  );
};

export default Feed;
