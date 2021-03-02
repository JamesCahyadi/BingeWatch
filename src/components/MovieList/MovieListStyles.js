import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieListContainer: {
    display: "flex",
    flexDirection: "column",
    background: "#ffffff",
    padding: "20px",
    marginTop: "30px",
    borderRadius: "40px",
  },
  movieListTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  fadeContainer: {
    position: "relative",
  },
  movieCardsContainer: {
    display: "flex",
    overflowX: "scroll",
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
    // "&::before": {
    //   content: "''",
    //   display: "block",
    //   position: "absolute",
    //   top: "0",
    //   right: "0",
    //   height: "100%",
    //   paddingRight: "10%",
    //   pointerEvents: "none",
    //   background: "linear-gradient(to right, rgba(255,255,255,0), red 85%)",
    // },
    "&::after": {
      content: "''",
      zIndex: "1",
      display: "block",
      position: "absolute",
      top: "0",
      right: "0",
      height: "100%",
      width: "10%",
      pointerEvents: "none",
      background: "linear-gradient(to right, rgba(255,255,255,0), #ffffff 100%)",
    },
  },
}));

export default useStyles;
