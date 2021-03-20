import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieCardIcons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  movieCardIcon: {
    height: "30px",
    width: "30px",
  },
  insertButton: {
    backgroundColor: "#66bb6a",
    "&:hover": {
      backgroundColor: "#66bb6a",
    },
  },
}));

export default useStyles;
