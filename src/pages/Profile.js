import * as movieCardIcons from "constants/movieCardIcons";

import MovieList from "components/MovieList/MovieList";
import ProfileCard from "components/ProfileCard";
import React from "react";
import useFetch from "hooks/useFetch";
import useUser from "context/UserContext";

const Profile = () => {
  const { user } = useUser();
  const { data: movies, isLoading: isFetchLoading, error } = useFetch(`/profile/${user.id}`);

  if (isFetchLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <ProfileCard username={user.username} />
      <MovieList
        icons={movieCardIcons.favouriteIcons}
        movies={movies}
        title="Your Favourites"
        isDraggable
      />
    </div>
  );
};

export default Profile;
