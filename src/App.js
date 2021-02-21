import Navbar from "components/Navbar";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "pages/Home";
import Profile from "pages/Profile";

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
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
