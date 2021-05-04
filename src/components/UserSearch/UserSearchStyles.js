import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  userList: {
    zIndex: "100",
    position: "absolute",
    background: "#ffffff",
  },
  listItem: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default useStyles;
