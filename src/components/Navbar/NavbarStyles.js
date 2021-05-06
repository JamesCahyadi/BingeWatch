import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    marginBottom: "30px",
  },
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
  iconContainer: {
    opacity: "0.7",
  },
  iconSelected: {
    opacity: "1",
  },
}));

export default useStyles;
