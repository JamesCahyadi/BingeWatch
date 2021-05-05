import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    marginBottom: "20px",
  },
  cardContentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default useStyles;
