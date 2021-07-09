import { Button, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useRouter } from "next/dist/client/router";
import BtnLoginLogout from "../molecules/BtnLoginLogout";

const useStyles = makeStyles(() => ({
  btnHeaderStyle: {
    marginLeft: "0.5%",
    marginRight: "1%",
    marginTop: "0.5%",
  },
}));

export default function CabecarioDesktop() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Grid container justify="space-between">
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
