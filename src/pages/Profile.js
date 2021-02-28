import { Movie } from "@material-ui/icons";
import MovieList from "components/MovieList/MovieList";
import ProfileCard from "components/ProfileCard";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "hooks/useFetch";

const Profile = () => {
  const { user, isAuthenticated, isLoading: isAuthLoading } = useAuth0();
  const { data: movies, isLoading: isFetchLoading, error } = useFetch(
    "http://localhost:8080/profile/google-oauth2|110432547213216868876",
  );

  console.log(movies);
  if (isAuthLoading || isFetchLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <ProfileCard user={user} />
        <MovieList movies={movies} />
      </div>
    )
  );
};

export default Profile;
