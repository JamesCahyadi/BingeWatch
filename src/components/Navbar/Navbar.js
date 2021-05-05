import { loginStorageKey } from "constants/storage";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import useStyles from "components/Navbar/NavbarStyles";
import useUser from "context/UserContext";
import logo from "assets/logo.png";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user, setUser } = useUser();

  const goToProfile = () => {
    const { username } = user;
    history.push(`/profile/${username}`);
  };

  const goToFeed = () => {
    history.push("/feed");
  };

  const goToHome = () => {
    history.push("/");
  };

  const goToLogin = () => {
    history.push("/login");
  };

  const logout = () => {
    localStorage.removeItem(loginStorageKey);
    setUser({});
    goToHome();
  };

  return (
    <AppBar className={classes.navbar} position="static">
      <Toolbar className={classes.navIconsContainer}>
        <Button className={classes.title} onClick={goToHome} color="secondary">
          <img className={classes.logo} src={logo} alt="Logo" />
          <Typography variant="h6">BingeWatch</Typography>
        </Button>
        <div className={classes.mainNavIcons}>
          <IconButton
            className={classes.iconContainer}
            classes={{ label: classes.label }}
            onClick={goToHome}
            color="secondary"
          >
            <SearchIcon className={classes.icon} />
            Browse
          </IconButton>
          <IconButton
            className={classes.iconContainer}
            classes={{ label: classes.label }}
            onClick={goToFeed}
            color="secondary"
          >
            <PeopleAltIcon className={classes.icon} />
            Feed
          </IconButton>
          <IconButton
            className={classes.iconContainer}
            classes={{ label: classes.label }}
            onClick={user.username ? goToProfile : goToLogin}
            color="secondary"
          >
            <AccountCircleIcon className={classes.icon} />
            {user.username ? user.username : "Login"}
          </IconButton>
          {user.username && (
            <IconButton
              className={classes.iconContainer}
              classes={{ label: classes.label }}
              onClick={() => logout({ returnTo: window.location.origin })}
              color="secondary"
            >
              <ExitToAppIcon className={classes.icon} />
              Logout
            </IconButton>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
