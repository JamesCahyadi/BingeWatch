import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "components/Loader/LoaderStyles";

const Loader = ({ isCenterOnPage }) => {
  const classes = useStyles();

  return (
    <div
      className={`${classes.loaderContainer} ${isCenterOnPage ? classes.centerLoaderOnPage : ""}`}
    >
      <CircularProgress />
      <h4>Loading</h4>
    </div>
  );
};

export default Loader;
