import * as movieCardIcons from "constants/movieCardIcons";

import React, { useEffect, useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import MovieList from "components/MovieList/MovieList";
import Notification from "components/Notification";
import useFetch from "hooks/useFetch";
import useUser from "context/UserContext";

const Home = () => {
  const { data, isLoading, error } = useFetch("/movies");
  const [isShowingDrawer, setIsShowingDrawer] = useState(false);
  const [recentlyClickedMovie, setRecentlyClickedMovie] = useState({});
  const [notificationData, setNotificationData] = useState({ status: "", text: "" });
  const { data: drawerMovies, setData: setDrawerMovies, isLoading: isFetchLoading } = useFetch(
    "/profile",
  );

  let dailyTrendingMoviesWithImdb;
  let weeklyTrendingMoviesWithImdb;
  if (data) {
    ({ dailyTrendingMoviesWithImdb } = data);
    ({ weeklyTrendingMoviesWithImdb } = data);
  }
  const { discoverIcons, addToFavouriteIcons } = movieCardIcons;

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
      {isLoading && <div>Loading...</div>}
      {data && (
        <>
          <MovieList
            toggleDrawer={toggleDrawer}
            movies={[]}
            title="Search for movies"
            icons={discoverIcons}
            setNotificationData={setNotificationData}
          />
          <MovieList
            toggleDrawer={toggleDrawer}
            movies={dailyTrendingMoviesWithImdb}
            title="Daily Trending"
            icons={discoverIcons}
            setNotificationData={setNotificationData}
          />
          <MovieList
            toggleDrawer={toggleDrawer}
            movies={weeklyTrendingMoviesWithImdb}
            title="Weekly Trending"
            icons={discoverIcons}
            setNotificationData={setNotificationData}
          />
          <Drawer anchor="bottom" open={isShowingDrawer} onClose={toggleDrawer}>
            <MovieList
              toggleDrawer={toggleDrawer}
              movies={drawerMovies}
              title="Current Favourites"
              icons={addToFavouriteIcons}
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

export default Home;
