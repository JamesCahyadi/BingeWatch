import * as constants from "constants/movieCardIcons";

import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { getImdbUrl } from "utils/urlHelpers";
import imdbLogo from "assets/imdb.png";
import useStyles from "components/MovieCardIcons/MovieCardIconsStyles";

const MovieCardIcons = ({ movie, icons }) => {
  const classes = useStyles();

  const iconList = {
    [constants.imdbIconName]: (
      <Tooltip key={constants.imdbIconName} title="View on IMDB" arrow>
        <IconButton href={getImdbUrl(movie.imdb_id)} target="_blank">
          <Avatar className={classes.movieCardIcon} variant="rounded" alt="imdb" src={imdbLogo} />
        </IconButton>
      </Tooltip>
    ),
    [constants.deleteIconName]: (
      <Tooltip key={constants.deleteIconName} title="Delete" arrow>
        <IconButton>
          <DeleteIcon className={classes.movieCardIcon} />
        </IconButton>
      </Tooltip>
    ),
    [constants.favouriteIconName]: (
      <Tooltip key={constants.favouriteIconName} title="Add to favourites" arrow>
        <IconButton>
          <FavoriteIcon className={classes.movieCardIcon} style={{ color: "#ffc0cb" }} />
        </IconButton>
      </Tooltip>
    ),
  };

  return <div className={classes.movieCardIcons}>{icons.map((icon) => iconList[icon])}</div>;
};

export default MovieCardIcons;
