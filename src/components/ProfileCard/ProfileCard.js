import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import useStyles from "components/ProfileCard/ProfileCardStyles";

const ProfileCard = ({ username }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <CardContent className={classes.cardContentContainer}>
        <Avatar className={classes.avatar} alt={username}>
          {username.charAt(0)}
        </Avatar>
        <h3>
          {`Welcome to your profile ${username}! Drag and drop the posters to rearrange your favourites.`}
        </h3>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
