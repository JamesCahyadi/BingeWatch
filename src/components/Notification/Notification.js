import React, { useEffect, useState } from "react";

import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import useStyles from "components/Notification/NotificationStyles";

const Notification = React.memo(({ isOpen, setNotificationData, text, status }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setNotificationData({ status: "", text: "" });
  };

  return (
    <Snackbar
      className={classes.snackbar}
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert severity={status}>{text}</Alert>
    </Snackbar>
  );
});

export default Notification;
