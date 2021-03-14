/* eslint-disable react/jsx-props-no-spreading */

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React, { useEffect, useState } from "react";

import MovieCard from "components/MovieCard";
import { getCurrentPage } from "utils/urlHelpers";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "hooks/useFetch";
import { useLocation } from "react-router-dom";
import useStyles from "components/MovieList/MovieListStyles";

const MovieList = ({ movies, title }) => {
  const { user } = useAuth0();

  const classes = useStyles();
  const location = useLocation();
  const [shouldFadeLeft, setShouldFadeLeft] = useState(false);
  const [shouldFadeRight, setShouldFadeRight] = useState(true);
  const [listOfMovies, setListOfMovies] = useState(movies);

  const handlePost = (oldIdx, newIdx) => {
    const movie = listOfMovies[oldIdx];
    if (!movie.isDefault) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId: movie.id, sortOrder: newIdx + 1 }),
      };
      fetch(`/profile/${user.sub}`, options);
    }
  };

  const updateSortOrders = (oldMovies) =>
    oldMovies.map((movie, idx) => {
      let retval = movie;
      const rank = idx + 1;
      if (movie.sortOrder !== rank) {
        retval = { ...movie, sortOrder: rank };
        handlePost(movie.sortOrder - 1, idx);
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

    /* eslint-disable no-unused-expressions */
    reachedRightSide ? setShouldFadeRight(false) : setShouldFadeRight(true);
    reachedLeftSide ? setShouldFadeLeft(false) : setShouldFadeLeft(true);
    /* eslint-enable no-unused-expressions */
  };

  return (
    <div className={classes.movieListContainer}>
      <div className={classes.movieListTitle}>{title}</div>
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
                style={{ display: "flex" }}
                {...providedDroppable.droppableProps}
                ref={providedDroppable.innerRef}
              >
                {listOfMovies.map((movie, idx) => (
                  <Draggable
                    isDragDisabled={getCurrentPage(location) === "home"}
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
                        <MovieCard movie={movie} rank={idx + 1} />
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
