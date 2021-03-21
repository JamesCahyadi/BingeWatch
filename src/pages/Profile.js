import * as movieCardIcons from "constants/movieCardIcons";

import MovieList from "components/MovieList/MovieList";
import ProfileCard from "components/ProfileCard";
import React from "react";
import useFetch from "hooks/useFetch";

const Profile = () => {
  const { data: movies, isLoading: isFetchLoading, error } = useFetch("/profile/12345");

  if (isFetchLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <ProfileCard />
      <MovieList
        icons={movieCardIcons.favouriteIcons}
        movies={movies}
        title="Favourites"
        isDraggable
      />
    </div>
  );
};

export default Profile;
