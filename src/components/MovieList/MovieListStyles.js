import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieListContainer: {
    display: "flex",
    flexDirection: "column",
    overflowX: "auto",
    background: "#ffffff",
    padding: "20px",
    marginTop: "30px",
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
  movieListTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  movieCardsContainer: {
    display: "flex",
  },
}));

export default useStyles;
