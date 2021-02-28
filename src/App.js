import { Redirect, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import Navbar from "components/Navbar/Navbar";
import Profile from "pages/Profile";
import React from "react";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/movies" />
        </Route>
        <Route exact path="/movies">
          <Home />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
