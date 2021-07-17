import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { secondary } from "../atoms/tema";

const styles = makeStyles(() => ({
  CardStyle: {
    backgroundColor: secondary,
  },
}));

export default function Rodape() {
  const classes = styles();
  return (
    <Card className={classes.CardStyle}>
      <CardContent>
        <Grid container item justify="center">
          <Typography color="primary">
            Chocolates e Cia || {new Date(Date.now()).getFullYear()}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}
