import * as movieCardIcons from "constants/movieCardIcons";

import MovieList from "components/MovieList/MovieList";
import ProfileCard from "components/ProfileCard";
import React from "react";
import useFetch from "hooks/useFetch";
import { useLocation } from "react-router-dom";
import useUser from "context/UserContext";

const Profile = () => {
  const location = useLocation();
  const username = location.pathname.split("/")[2];
  const { user } = useUser();
  const { data: movies, isLoading: isFetchLoading, error } = useFetch(`/profile/${username}`);

  if (isFetchLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }
  const isCurrentUser = user && user.username === username;

  return (
    <div>
      <ProfileCard username={username} />
      <MovieList
        icons={isCurrentUser ? movieCardIcons.favouriteIcons : []}
        movies={movies}
        title={isCurrentUser ? "Your Favourites" : `${username}'s Favourites`}
        isDraggable={isCurrentUser}
      />
    </div>
  );
};

export default Profile;
