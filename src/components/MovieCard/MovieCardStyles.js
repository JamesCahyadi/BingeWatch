import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieCard: {
    width: "200px",
    overflow: "visible",
    boxSizing: "border-box",
    borderRadius: "2px",
    border: "linear-gradient(to bottom right, #ff3cac, #562b7c, #2b86c5);",
  },
  poster: {
    height: "225px",
    width: "150px",
  },
  movieActionIcon: {
    height: "30px",
    width: "30px",
  },
}));

export default useStyles;
