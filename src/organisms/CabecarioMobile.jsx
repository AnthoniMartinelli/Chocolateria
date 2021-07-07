import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import BtnLoginLogout from "../molecules/BtnLoginLogout";

export default function CabecarioMobile() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Typography variant="h6">Chocolates e Cia</Typography>
          <Grid item>
            <BtnLoginLogout />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
