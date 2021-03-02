import { Redirect, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import Navbar from "components/Navbar";
import PageContainer from "components/PageContainer";
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
          <PageContainer>
            <Home />
          </PageContainer>
        </Route>
        <Route exact path="/profile/:id">
          <PageContainer>
            <Profile />
          </PageContainer>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
