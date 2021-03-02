import Grid from "@material-ui/core/Grid";
import React from "react";

const PageContainer = ({ children }) => {
  console.log(children);
  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        {children}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default PageContainer;
