import * as movieCardIcons from "constants/movieCardIcons";

import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { getImdbUrl } from "utils/urlHelpers";
import imdbLogo from "assets/imdb.png";
import useStyles from "components/MovieCardIcons/MovieCardIconsStyles";

const MovieCardIcons = ({
  movie,
  icons,
  rank,
  setNotificationData,
  handleInsert,
  handleDelete,
  toggleDrawer,
}) => {
  if (icons === []) return null;

  const classes = useStyles();

  const handleAddToFavourites = async () => {
    const response = await fetch(`/movies/${movie.id}/12345`);
    const [data] = await response.json();
    let sortOrder = null;
    if (data) {
      ({ sort_order: sortOrder } = data);
    }

    if (!sortOrder) {
      toggleDrawer(movie);
    } else {
      const name = movie.name || movie.title;
      setNotificationData({
        status: "error",
        text: `${name} is already part of your favourite movies`,
      });
    }
  };

  const iconList = {
    [movieCardIcons.imdbIconName]: (
      <Tooltip key={movieCardIcons.imdbIconName} title="View on IMDB" arrow>
        <IconButton href={getImdbUrl(movie.imdb_id)} target="_blank">
          <Avatar className={classes.movieCardIcon} variant="rounded" alt="imdb" src={imdbLogo} />
        </IconButton>
      </Tooltip>
    ),
    [movieCardIcons.deleteIconName]: (
      <Tooltip key={movieCardIcons.deleteIconName} title="Delete" arrow>
        <IconButton onClick={() => handleDelete(movie.isDefault ? null : movie.id)}>
          <DeleteIcon className={classes.movieCardIcon} />
        </IconButton>
      </Tooltip>
    ),
    [movieCardIcons.favouriteIconName]: (
      <Tooltip key={movieCardIcons.favouriteIconName} title="Add to favourites" arrow>
        <IconButton onClick={handleAddToFavourites}>
          <FavoriteIcon className={classes.movieCardIcon} style={{ color: "#ffc0cb" }} />
        </IconButton>
      </Tooltip>
    ),
    [movieCardIcons.insertIconName]: (
      <Button
        key={movieCardIcons.insertIconName}
        className={classes.insertButton}
        onClick={() => handleInsert(rank)}
        fullWidth
        variant="contained"
      >
        Insert
      </Button>
    ),
  };

  return <div className={classes.movieCardIcons}>{icons.map((icon) => iconList[icon])}</div>;
};

export default MovieCardIcons;
