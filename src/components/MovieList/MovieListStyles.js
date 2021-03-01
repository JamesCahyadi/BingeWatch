import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieListContainer: {
    display: "flex",
    overflowX: "auto",
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
}));

export default useStyles;
