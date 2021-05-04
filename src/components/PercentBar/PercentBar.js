import React from "react";
import { getRatingColour } from "utils/colourHelpers";
import useStyles from "components/PercentBar/PercentBarStyles";

const PercentBar = ({ rating }) => {
  const classes = useStyles();
  const colour = getRatingColour(rating);
  const percentRating = rating * 10;

  const barStyles = {
    "--width": `${percentRating}%`,
    "--colour": colour,
  };

  return (
    <div className={classes.percentBarContainer}>
      <div className={classes.ratingNumber}>{rating}</div>
      <div className={classes.ratingBarContainer}>
        <div className={classes.ratingBar} style={barStyles} />
        <div className={classes.ratingBarCapacity} />
      </div>
    </div>
  );
};

export default PercentBar;
