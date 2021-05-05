import React from "react";
import useFetch from "hooks/useFetch";
import useUser from "context/UserContext";
import MovieList from "components/MovieList";
import { FEED_ICONS } from "constants/movieCardIcons";
import Loader from "components/Loader";
import PageInfoTitle from "components/PageInfoTitle";

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
      <PageInfoTitle
        titleText="Feed"
        tooltipText="View the favourite movies of all other bingewatchers!"
      />
      {data.map((feedInfo) => {
        const displayName = user.username === feedInfo.username ? "Your" : `${feedInfo.username}'s`;
        return (
          <MovieList
            movies={feedInfo.movies}
            title={`${displayName} Favourites`}
            icons={FEED_ICONS}
          />
        );
      })}
    </>
  );
};

export default Feed;
