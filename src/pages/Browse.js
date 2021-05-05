import * as movieCardIcons from "constants/movieCardIcons";

import React, { useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import MovieList from "components/MovieList/MovieList";
import Notification from "components/Notification";
import useFetch from "hooks/useFetch";
import useUser from "context/UserContext";
import Loader from "components/Loader";

const Browse = () => {
  const { user } = useUser();
  const { data, isLoading, error } = useFetch("/movies");
  const [isShowingDrawer, setIsShowingDrawer] = useState(false);
  const [recentlyClickedMovie, setRecentlyClickedMovie] = useState({});
  const [notificationData, setNotificationData] = useState({ status: "", text: "" });
  const { data: drawerMovies, setData: setDrawerMovies } = useFetch(`/profile/${user.id}`);
  const { BROWSE_ICONS, ADD_TO_FAVOURITES_ICONS } = movieCardIcons;

  let dailyTrendingMoviesWithImdb;
  let weeklyTrendingMoviesWithImdb;
  if (data) {
    ({ dailyTrendingMoviesWithImdb } = data);
    ({ weeklyTrendingMoviesWithImdb } = data);
  }

  const toggleDrawer = (movie, newListOfMovies) => {
    if (movie) {
      setRecentlyClickedMovie(movie);
    } else if (newListOfMovies) {
      setDrawerMovies(newListOfMovies);
    }

    setIsShowingDrawer(!isShowingDrawer);
  };

  return (
    <div>
      {error && error}
      {isLoading && <Loader isCenterOnPage />}
      {data && (
        <>
          <MovieList
            toggleDrawer={toggleDrawer}
            movies={[]}
            title="Search for movies"
            icons={BROWSE_ICONS}
            setNotificationData={setNotificationData}
            hasSearch
          />
          <MovieList
            toggleDrawer={toggleDrawer}
            movies={dailyTrendingMoviesWithImdb}
            title="Daily Trending"
            icons={BROWSE_ICONS}
            setNotificationData={setNotificationData}
          />
          <MovieList
            toggleDrawer={toggleDrawer}
            movies={weeklyTrendingMoviesWithImdb}
            title="Weekly Trending"
            icons={BROWSE_ICONS}
            setNotificationData={setNotificationData}
          />
          <Drawer anchor="bottom" open={isShowingDrawer} onClose={toggleDrawer}>
            <MovieList
              toggleDrawer={toggleDrawer}
              movies={drawerMovies}
              title="Current Favourites"
              icons={ADD_TO_FAVOURITES_ICONS}
              recentlyClickedMovie={recentlyClickedMovie}
              setNotificationData={setNotificationData}
            />
          </Drawer>
          <Notification
            setNotificationData={setNotificationData}
            notificationData={notificationData}
          />
        </>
      )}
    </div>
  );
};

export default Browse;