import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Typography from "@material-ui/core/Typography";

const PercentBar = ({ user }) => {
  console.log(user);
  return (
    <div>
      <Card>
        <CardContent>
          <Avatar alt={user.name} src={user.picture} />
          <Typography>{user.name || user.nickname}</Typography>
          {user.sub}
        </CardContent>
        <CardActions>
          <Button>Connect</Button>
          <Button>0 connections</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PercentBar;
