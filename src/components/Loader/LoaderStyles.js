import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  centerLoaderOnPage: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default useStyles;
