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
  props: {
    MuiButtonBase: {
      disableRipple: true,
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
        backgroundColor: "#005776E6",
      },
      arrow: {
        color: "#005776E6",
      },
    },
  },
});

export default mainTheme;
