import { Button, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { primary } from "../atoms/tema";
import BtnLoginLogout from "../molecules/BtnLoginLogout";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: primary,
  },
  btnHeaderStyle: {
    marginLeft: "1%",
  },
}));

export default function Cabecario() {
  const classes = useStyles();
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
        <BtnLoginLogout />
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
