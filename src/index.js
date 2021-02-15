import { CssBaseline, ThemeProvider } from "@material-ui/core";

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import mainTheme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
