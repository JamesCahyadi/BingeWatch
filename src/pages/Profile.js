import * as movieCardIcons from "constants/movieCardIcons";

import MovieList from "components/MovieList/MovieList";
import ProfileCard from "components/ProfileCard";
import React from "react";
import useFetch from "hooks/useFetch";
import useUser from "context/UserContext";
import Loader from "components/Loader";

const Profile = () => {
  const { user } = useUser();
  const { data: movies, isLoading: isFetchLoading, error } = useFetch(`/profile/${user.id}`);

  if (isFetchLoading) {
    return <Loader isCenterOnPage />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ProfileCard username={user.username} />
      {movies && (
        <MovieList
          icons={movieCardIcons.FAVOURITE_ICONS}
          movies={movies}
          title="Your Favourites"
          isDraggable
        />
      )}
    </div>
  );
};

export default Profile;
