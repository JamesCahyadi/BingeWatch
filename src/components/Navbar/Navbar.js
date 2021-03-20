import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import useStyles from "components/Navbar/NavbarStyles";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const classes = useStyles();
  const history = useHistory();

  const goToProfile = () => {
    const path = `/profile/${user.sub}`;
    history.push(path);
  };

  const goToHome = () => history.push("/");

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.title} onClick={goToHome} color="secondary">
          <Typography variant="h6">Navbar</Typography>
        </IconButton>
        <IconButton
          className={classes.profileIconContainer}
          classes={{ label: classes.label }}
          onClick={isAuthenticated ? goToProfile : loginWithRedirect}
          color="secondary"
        >
          <AccountCircleIcon className={classes.profileIcon} />
          {isAuthenticated ? "Me" : "Login"}
        </IconButton>
        <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
