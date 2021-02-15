import { createMuiTheme } from '@material-ui/core/styles';

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#EBEBEB"
    },
    secondary: {
      main: "#005776"
    }
  },
  typography: {
    fontFamily: "Roboto",
  },
});

export default mainTheme;