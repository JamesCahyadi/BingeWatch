import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageTitleContainer: {
    display: "flex",
    alignItems: "flex-start",
    borderBottom: "1px solid #D3D3D3",
    marginBottom: "20px",
  },
  infoIcon: {
    height: "16px",
    marginTop: "6px",
    marginLeft: "-5px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  titleTooltip: {
    display: "inline-flex",
  },
  titleText: {
    margin: "0px !important",
    padding: "0 !important",
  },
}));

export default useStyles;
