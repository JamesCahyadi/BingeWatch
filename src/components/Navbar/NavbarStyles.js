import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navIconsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  mainNavIcons: {
    display: "flex",
    gap: "10px",
  },
  label: {
    flexDirection: "column",
    fontSize: "12px",
  },
  icon: {
    color: "#FFFFFF",
  },
  title: {
    textTransform: "none",
  },
  logo: {
    width: "32px",
    height: "32px",
    marginRight: "4px",
  },
}));

export default useStyles;
