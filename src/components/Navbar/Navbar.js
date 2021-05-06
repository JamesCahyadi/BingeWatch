import { LOGIN_STORAGE_KEY } from "constants/storage";
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
import { useHistory, useLocation } from "react-router-dom";
import useStyles from "components/Navbar/NavbarStyles";
import useUser from "context/UserContext";
import logo from "assets/logo.png";
import { getCurrentPage } from "utils/urlHelpers";
import { isStringEqual } from "utils/stringHelpers";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user, setUser } = useUser();
  const isLoggedIn = !!user.username;

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
    localStorage.removeItem(LOGIN_STORAGE_KEY);
    setUser({});
    goToHome();
  };

  return (
    <AppBar className={classes.navbar} position="sticky">
      <Toolbar className={classes.navIconsContainer}>
        <Button className={classes.title} onClick={goToHome} color="secondary">
          <img className={classes.logo} src={logo} alt="Logo" />
          <Typography variant="h6">BingeWatch</Typography>
        </Button>
        <div className={classes.mainNavIcons}>
          <NavBarIcon text="Browse" onClickFunc={goToHome} Icon={SearchIcon} />
          <NavBarIcon text="Feed" onClickFunc={goToFeed} Icon={PeopleAltIcon} />
          <NavBarIcon
            text={isLoggedIn ? "Profile" : "Login"}
            onClickFunc={isLoggedIn ? goToProfile : goToLogin}
            Icon={AccountCircleIcon}
          />
          {isLoggedIn && (
            <NavBarIcon
              text="Logout"
              onClickFunc={() => logout({ returnTo: window.location.origin })}
              Icon={ExitToAppIcon}
            />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const NavBarIcon = ({ text, onClickFunc, Icon }) => {
  const classes = useStyles();
  const location = useLocation();
  const curPageName = getCurrentPage(location);
  const isCurPage = isStringEqual(text, curPageName);

  return (
    <IconButton
      className={`${classes.iconContainer} ${isCurPage ? classes.iconSelected : ""}`}
      classes={{ label: classes.label }}
      onClick={onClickFunc}
      color="secondary"
    >
      <Icon className={classes.icon} />
      {text}
    </IconButton>
  );
};

export default Navbar;
