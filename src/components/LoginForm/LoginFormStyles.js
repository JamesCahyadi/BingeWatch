import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "30px",
    marginBottom: "10px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    background: "#ffffff",
    maxWidth: "400px",
    margin: "auto",
    padding: "16px",
    marginTop: "40px",
    boxShadow: "0 8px 6px -6px black",
    borderRadius: "4px",
  },
  formGrid: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginBottom: "10px",
    padding: "5px",
  },
}));

export default useStyles;
