import { Button, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useRouter } from "next/dist/client/router";
import BtnLoginLogout from "../molecules/BtnLoginLogout";

const useStyles = makeStyles(() => ({
  btnHeaderStyle: {
    marginRight: "1%",
  },
}));

export default function CabecarioDesktop() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Grid container spacing={2} justify="space-between">
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
          onClick={() => router.push("/")}
        >
          Home
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btnHeaderStyle}
          onClick={() => router.push("/Produtos")}
        >
          Produtos
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btnHeaderStyle}
          onClick={() => router.push("/About")}
        >
          Sobre nós
        </Button>
      </Grid>
    </Grid>
  );
}
