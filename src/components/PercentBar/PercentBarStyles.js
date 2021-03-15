import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  percentBarContainer: {
    display: "flex",
    background: "#A9CAD6",
    padding: "5px",
    gap: "3px",
  },
  ratingNumber: {
    background: "rgba(0,0,0,0.1)",
    color: "#ffffff",
    padding: "4px",
    fontSize: "11px",
  },
  ratingBarContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    position: "relative",
    background: "rgba(0,0,0,0.1)",
    border: "5px solid rgba(0,0,0,0)",
  },
  ratingBar: {
    background: "var(--colour)",
    height: "8px",
    width: "var(--width)",
    borderRadius: "10px",
    zIndex: "10",
  },
  ratingBarCapacity: {
    background: "rgba(0,0,0,0.4)",
    height: "8px",
    width: "100%",
    position: "absolute",
    borderRadius: "10px",
  },
}));

export default useStyles;
