/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
import React, { forwardRef, useRef, useState } from "react";

import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Link from "@material-ui/core/Link";
import LockIcon from "@material-ui/icons/Lock";
import Notification from "components/Notification";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import useStyles from "components/LoginForm/LoginFormStyles";
import useUser from "context/UserContext";

const LoginField = forwardRef(({ icon, type, placeholder }, ref) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.formField}
      required
      inputRef={ref}
      type={type}
      placeholder={placeholder}
      InputProps={{
        startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
      }}
    />
  );
});

const LoginForm = () => {
  const [title, setTitle] = useState("Login");
  const [notificationData, setNotificationData] = useState({ status: "", text: "" });
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const classes = useStyles();
  const history = useHistory();
  const { setUser } = useUser();

  const handleChangeTitle = () => {
    if (title === "Login") {
      setTitle("Sign Up");
    } else {
      setTitle("Login");
    }
  };

  const goToHome = () => {
    history.push("/");
  };

  const validateLogin = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };
    const response = await fetch("/users/login", options);
    const data = await response.json();
    if (response.ok) {
      setUser(data);
      goToHome();
    } else {
      setNotificationData(data);
    }
  };

  const validateSignUp = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };
    const response = await fetch("/users", options);
    const data = await response.json();
    if (response.ok) {
      setUser(data);
      goToHome();
    } else {
      setNotificationData(data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "Login") {
      validateLogin();
    } else if (title === "Sign Up") {
      validateSignUp();
    }
  };

  const subtitle = {
    Login: "Don't have an account?",
    "Sign Up": "Already have an account?",
  };

  return (
    <>
      <Notification notificationData={notificationData} />
      <form onSubmit={(e) => handleSubmit(e)} className={classes.formContainer}>
        <LoginField
          ref={usernameRef}
          icon={<AssignmentIndIcon />}
          type="username"
          placeholder="Username"
        />
        <LoginField ref={passwordRef} icon={<LockIcon />} type="password" placeholder="Password" />
        <Button color="primary" variant="contained" type="submit">
          {title}
        </Button>
        <div>
          {`${subtitle[title]} `}
          <Link href="#" onClick={handleChangeTitle}>
            {title === "Login" ? "Sign up" : "Login"}
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
