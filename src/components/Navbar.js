import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useAuth0 } from "@auth0/auth0-react";
import useStyles from "styles/NavbarStyles";

export default function Navbar() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();

  if (isAuthenticated && !isLoading) {
    console.log(user);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Navbar
        </Typography>
        <IconButton
          className={classes.profileIconContainer}
          classes={{ label: classes.label }}
          onClick={loginWithRedirect}
          disableRipple
          color="secondary"
        >
          <AccountCircleIcon className={classes.profileIcon} />
          Login
        </IconButton>
        <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      </Toolbar>
    </AppBar>
  );
}
