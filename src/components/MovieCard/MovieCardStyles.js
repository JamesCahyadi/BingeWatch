import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieCard: {
    width: "200px",
    overflow: "visible",
    boxSizing: "border-box",
    borderRadius: "0",
    boxShadow: "0",
    "&:hover": {
      background: theme.palette.tertiary.main,
    },
  },
  poster: {
    height: "225px",
    width: "150px",
  },
  rankBadge: {
    color: "red",
  },
  movieActionIcon: {
    height: "30px",
    width: "30px",
  },
}));

export default useStyles;
