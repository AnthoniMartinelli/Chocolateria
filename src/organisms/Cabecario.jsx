/* eslint-disable no-unused-vars */
import { Button, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import { contexto } from "../atoms/firebase/dados";
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

export default function Cabecario() {
  const classes = useStyles();
  const { currentUser } = useContext(contexto);
  if (currentUser) {
    console.log("tá logado");
  }
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
          href="/About"
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
