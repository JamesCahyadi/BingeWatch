import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "styles/NavbarStyles";

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Navbar
        </Typography>
        <IconButton
          className={classes.profileIconContainer}
          classes={{ label: classes.label }}
          onClick={() => console.log("hi")}
          disableRipple
          color="secondary"
        >
          <AccountCircleIcon className={classes.profileIcon} />
          Login
        </IconButton>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
}
