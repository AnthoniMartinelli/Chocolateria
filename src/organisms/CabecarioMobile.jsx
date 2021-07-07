import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
/* import Divider from "@material-ui/core/Divider"; */
import ListItem from "@material-ui/core/ListItem";
/* import ListItemIcon from "@material-ui/core/ListItemIcon"; */
import ListItemText from "@material-ui/core/ListItemText";
/* import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail"; */
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import BtnLoginLogout from "../molecules/BtnLoginLogout";

export default function CabecarioMobile() {
  const [menu, setMenu] = useState(false);
  const abrirMenu = () => {
    setMenu(true);
  };

  const fecharMenu = () => {
    setMenu(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <ClickAwayListener>
              <SwipeableDrawer
                ModalProps={{ onBackdropClick: fecharMenu }}
                open={menu}
              >
                <List>
                  <ListItem button>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Sobre" />
                  </ListItem>
                </List>
              </SwipeableDrawer>
            </ClickAwayListener>
            <IconButton
              onClick={() => abrirMenu()}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
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
