import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import useStyles from "components/Navbar/NavbarStyles";
import useUser from "context/UserContext";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user, setUser } = useUser();

  const goToProfile = () => {
    const path = "/profile/12345";
    history.push(path);
  };

  const goToHome = () => {
    history.push("/");
  };

  const goToLogin = () => {
    history.push("/login");
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.title} onClick={goToHome} color="secondary">
          <Typography variant="h6">Navbar</Typography>
        </IconButton>
        <IconButton
          className={classes.profileIconContainer}
          classes={{ label: classes.label }}
          onClick={user ? goToProfile : goToLogin}
          color="secondary"
        >
          <AccountCircleIcon className={classes.profileIcon} />
          {user ? user.username : "Login"}
        </IconButton>
        <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
