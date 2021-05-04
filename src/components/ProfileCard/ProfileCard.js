import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Typography from "@material-ui/core/Typography";

const ProfileCard = ({ username }) => {
  // const isCurrentUser = user && user.username === username;

  return (
    <div>
      <Card>
        <CardContent>
          <Avatar alt={username}>{username.charAt(0)}</Avatar>
          <Typography>{username}</Typography>
        </CardContent>
        {/* <CardActions>
          <Button>0 connections</Button>
          {!isCurrentUser && <Button>Connect</Button>}
        </CardActions> */}
      </Card>
    </div>
  );
};

export default ProfileCard;
