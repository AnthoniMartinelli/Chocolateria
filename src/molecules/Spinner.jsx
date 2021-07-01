import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid, makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  gridStyle: {
    width: "100%",
    height: "100%",
  },
}));

export default function Spinner() {
  const classes = styles();
  return (
    <Grid
      container
      item
      className={classes.gridStyle}
      xs={12}
      justify="center"
      alignItems="center"
    >
      <CircularProgress />
    </Grid>
  );
}
