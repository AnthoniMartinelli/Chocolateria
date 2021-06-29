/* eslint-disable no-unused-vars */
import { Button, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { primary } from "../atoms/tema";
// import logo from "../atoms/img/logo.jpg";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: primary,
  },
  btnHeaderStyle: {
    marginLeft: "1%",
  },
  btnLoginStyle: {
    float: "right",
    marginRight: "1%",
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Grid
      container
      spacing={2}
      justify="space-between"
      className={classes.root}
    >
      <Grid item xs={6}>
        <Typography>Chocolates e Cia</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btnLoginStyle}
          href="/Login"
        >
          Login
        </Button>
      </Grid>
      <Grid item container direction="row" justify="flex-end">
        <Button
          variant="contained"
          color="secondary"
          className={classes.btnHeaderStyle}
          href="/"
        >
          Home
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btnHeaderStyle}
        >
          Produtos
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btnHeaderStyle}
        >
          Sobre nós
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btnHeaderStyle}
        >
          Encomende
        </Button>
      </Grid>
    </Grid>
  );
}
