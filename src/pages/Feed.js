import React from "react";
import useFetch from "hooks/useFetch";
import useUser from "context/UserContext";
import MovieList from "components/MovieList";
import { feedIcons } from "constants/movieCardIcons";

const Feed = () => {
  const { user } = useUser();
  const { data, isLoading: isFetchLoading, error } = useFetch("/users");

  if (isFetchLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  console.log(data);

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
