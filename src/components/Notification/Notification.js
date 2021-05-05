import React, { useEffect, useState } from "react";

import { Alert } from "@material-ui/lab";
import { NOTIFICATION_DURATION_TIME } from "constants/numbers";
import Snackbar from "@material-ui/core/Snackbar";
import useStyles from "components/Notification/NotificationStyles";

const Notification = ({ notificationData, setNotificationData }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isData = notificationData.status !== "";
    setOpen(isData);
  }, [notificationData]);

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
      autoHideDuration={NOTIFICATION_DURATION_TIME}
      onClose={handleClose}
    >
      <Alert severity={notificationData.status}>{notificationData.text}</Alert>
    </Snackbar>
  );
};

export default Notification;
