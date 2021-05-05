import { Redirect, Route, Switch } from "react-router-dom";
import Browse from "pages/Browse";
import Login from "pages/Login";
import Feed from "pages/Feed";
import Navbar from "components/Navbar";
import React, { useEffect } from "react";
import PageContainer from "components/PageContainer";
import Profile from "pages/Profile";
import useUser from "context/UserContext";
import { LOGIN_STORAGE_KEY } from "constants/storage";

const App = () => {
  const { setUser } = useUser();

  useEffect(() => {
    const userInfo = localStorage.getItem(LOGIN_STORAGE_KEY);

    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/movies" />
        </Route>
        <Route exact path="/login">
          <PageContainer>
            <Login />
          </PageContainer>
        </Route>
        <Route exact path="/movies">
          <PageContainer>
            <Browse />
          </PageContainer>
        </Route>
        <Route exact path="/feed">
          <PageContainer>
            <Feed />
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
};

export default App;
