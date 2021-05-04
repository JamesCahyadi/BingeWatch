/* eslint-disable react/jsx-props-no-spreading */

import { inputDebounceTime } from "constants/numbers";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React, { useState, useRef, useEffect } from "react";

import MovieCard from "components/MovieCard";
import composeRefs from "@seznam/compose-react-refs";
import useHorizontalScroll from "hooks/useHorizontalScroll";
import useStyles from "components/MovieList/MovieListStyles";
import InputField from "components/InputField";
import useUser from "context/UserContext";

const MovieList = ({
  movies,
  title,
  icons,
  recentlyClickedMovie,
  toggleDrawer,
  setNotificationData,
  isDraggable,
  hasSearch,
}) => {
  const classes = useStyles();
  const horizontalScrollRef = useHorizontalScroll();
  const [shouldFadeLeft, setShouldFadeLeft] = useState(false);
  const [shouldFadeRight, setShouldFadeRight] = useState(true);
  const [listOfMovies, setListOfMovies] = useState(movies);
  const [searchedMovie, setSearchedMovie] = useState("");
  const movieSearchRef = useRef(null);
  const { user } = useUser();

  console.log(movies);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetch(`/movies/${searchedMovie}`)
        .then((response) => response.json())
        .then((data) => {
          setListOfMovies(data);
        });
      // Send Axios request here
    }, inputDebounceTime);

    return () => clearTimeout(delayDebounceFn);
  }, [searchedMovie]);

  const handleRearrange = (oldIdx, newIdx) => {
    const movie = listOfMovies[oldIdx];
    if (!movie.isDefault) {
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId: movie.id, sortOrder: newIdx + 1 }),
      };
      fetch(`/profile/${user.id}`, options);
    }
  };

  const handleDelete = async (movieId) => {
    if (movieId) {
      const idx = listOfMovies.findIndex((movie) => movie.id === movieId);

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId, sortOrder: idx + 1 }),
      };
      const response = await fetch(`/profile/${user.id}`, options);
      const defaultMovie = await response.json();

      const listOfMoviesClone = [...listOfMovies];
      listOfMoviesClone.splice(idx, 1, defaultMovie);
      setListOfMovies(listOfMoviesClone);
    }
  };

  const handleInsert = async (sortOrder) => {
    const { id: movieId } = recentlyClickedMovie;
    const name = recentlyClickedMovie.name || recentlyClickedMovie.title;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieId, userId: user.id, sortOrder }),
    };
    const response = await fetch("/movies", options);
    const newlyAddedMovie = await response.json();

    const listOfMoviesClone = [...listOfMovies];
    listOfMoviesClone.splice(sortOrder - 1, 1, newlyAddedMovie);

    toggleDrawer(null, listOfMoviesClone);
    setNotificationData({ status: "success", text: `Added ${name} to favourite movies` });
  };

  const updateSortOrders = (oldMovies) =>
    oldMovies.map((movie, idx) => {
      let retval = movie;
      const rank = idx + 1;
      if (movie.sortOrder !== rank) {
        retval = { ...movie, sortOrder: rank };
        handleRearrange(movie.sortOrder - 1, idx);
      }
      return retval;
    });

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const {
      source: { index: sourceIndex },
      destination: { index: destinationIndex },
    } = result;

    const listOfMoviesClone = [...listOfMovies];
    const [reorderedMovie] = listOfMoviesClone.splice(sourceIndex, 1);
    listOfMoviesClone.splice(destinationIndex, 0, reorderedMovie);

    setListOfMovies(updateSortOrders(listOfMoviesClone));
  };

  const handleScroll = (e) => {
    const reachedRightSide = e.target.scrollWidth - e.target.scrollLeft === e.target.clientWidth;
    const reachedLeftSide = e.target.scrollLeft === 0;

    if (reachedRightSide && shouldFadeRight) {
      setShouldFadeRight(false);
    } else if (!shouldFadeRight) {
      setShouldFadeRight(true);
    }

    if (reachedLeftSide && shouldFadeLeft) {
      setShouldFadeLeft(false);
    } else if (!shouldFadeLeft) {
      setShouldFadeLeft(true);
    }
  };

  return (
    <div className={classes.movieListContainer}>
      <div className={classes.movieListHeader}>
        <div className={classes.movieListTitle}>{title}</div>
        {hasSearch && (
          <InputField
            onChangeFunc={(e) => {
              const query = e.target.value;
              if (query) {
                setSearchedMovie(query);
              }
            }}
            ref={movieSearchRef}
            placeholder="Search"
          />
        )}
      </div>
      <div className={classes.fadeContainer}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="movies" direction="horizontal">
            {(providedDroppable) => (
              <div
                className={`${classes.movieCardsContainer}
                  ${shouldFadeRight ? classes.fadeRight : ""} ${
                  shouldFadeLeft ? classes.fadeLeft : ""
                }`}
                onScroll={handleScroll}
                {...providedDroppable.droppableProps}
                ref={composeRefs(providedDroppable.innerRef, horizontalScrollRef)}
              >
                {listOfMovies.map((movie, idx) => (
                  <Draggable
                    isDragDisabled={!isDraggable}
                    key={movie.id}
                    index={idx}
                    draggableId={String(movie.id)}
                  >
                    {(providedDraggable) => (
                      <div
                        ref={providedDraggable.innerRef}
                        {...providedDraggable.draggableProps}
                        {...providedDraggable.dragHandleProps}
                      >
                        <MovieCard
                          movie={movie}
                          rank={idx + 1}
                          icons={movie.isDefault ? [] : icons}
                          setNotificationData={setNotificationData}
                          handleInsert={handleInsert}
                          handleDelete={handleDelete}
                          toggleDrawer={toggleDrawer}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {providedDroppable.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default MovieList;
