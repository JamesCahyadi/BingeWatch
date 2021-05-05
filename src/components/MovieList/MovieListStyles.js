import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieListContainer: {
    display: "flex",
    flexDirection: "column",
    background: "#ffffff",
    padding: "20px",
    marginBottom: "30px",
    borderRadius: "40px",
  },
  movieListHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  movieListTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  fadeContainer: {
    position: "relative",
  },
  emptyMoviesContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  noResultsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    marginTop: "6px",
  },
  movieCardsContainer: {
    display: "flex",
    overflowX: "scroll",
    minHeight: "100px",
    "&::-webkit-scrollbar": {
      padding: "5px",
      height: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: theme.palette.secondary.main,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "5px",
      background: theme.palette.primary.main,
    },
  },
  fadeLeft: {
    "&::before": {
      content: "''",
      zIndex: "100",
      display: "block",
      position: "absolute",
      top: "0",
      left: "-3px",
      height: "100%",
      pointerEvents: "none",
      background: "linear-gradient(to left, rgba(255,255,255,0), #ffffff 100%)",
      paddingLeft: "15%",
    },
  },
  fadeRight: {
    "&::after": {
      content: "''",
      zIndex: "100",
      display: "block",
      position: "absolute",
      top: "0",
      right: "-3px",
      height: "100%",
      pointerEvents: "none",
      background: "linear-gradient(to right, rgba(255,255,255,0), #ffffff 100%)",
      paddingRight: "15%",
    },
  },
}));

export default useStyles;
