import Navbar from "components/Navbar";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "pages/Profile";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
