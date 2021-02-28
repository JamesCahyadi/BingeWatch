import { CssBaseline, ThemeProvider } from "@material-ui/core";

// eslint-disable-next-line import/order
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import mainTheme from "theme";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={`${window.location.origin}/movies`}
    >
      <CssBaseline />
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
