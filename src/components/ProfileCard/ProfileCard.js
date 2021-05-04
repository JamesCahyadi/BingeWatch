import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "components/ProfileCard/ProfileCardStyles";

const ProfileCard = ({ username }) => {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <CardContent className={classes.cardContentContainer}>
          <Avatar alt={username}>{username.charAt(0)}</Avatar>
          <Typography>{username}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
