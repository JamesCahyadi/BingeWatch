import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formField: {
    background: theme.palette.secondary.main,
    padding: "15px",
    borderRadius: "8px",
  },
  noBackground: {
    background: "none",
  },
}));

export default useStyles;
