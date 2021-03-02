import { createMuiTheme } from "@material-ui/core/styles";

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#005776",
    },
    secondary: {
      main: "#EBEBEB",
    },
    tertiary: {
      main: "#A9CAD6",
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        padding: "0",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#005776",
      },
      arrow: {
        color: "#005776",
      },
    },
  },
});

export default mainTheme;
