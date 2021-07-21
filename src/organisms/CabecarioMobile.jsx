import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DescriptionIcon from "@material-ui/icons/Description";
import { useRouter } from "next/dist/client/router";
import { Divider, makeStyles } from "@material-ui/core";
import BtnLoginLogout from "../molecules/BtnLoginLogout";
import { secondary } from "../atoms/tema";
import { usarAutenticacao } from "../atoms/services/firebase";

const styles = makeStyles(() => ({
  DrawerStyle: {
    backgroundColor: secondary,
  },
}));

export default function CabecarioMobile() {
  const { currentUser, logout } = usarAutenticacao();
  const classes = styles();
  const [menu, setMenu] = useState(false);
  const router = useRouter();
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
            <SwipeableDrawer
              onClose={() => {}}
              onOpen={() => {}}
              classes={{ paper: classes.DrawerStyle }}
              ModalProps={{ onBackdropClick: fecharMenu }}
              open={menu}
            >
              <List onClick={() => fecharMenu()}>
                {currentUser && (
                  <ListItem
                    button
                    onClick={() => {
                      logout();
                      router.push("/");
                    }}
                  >
                    <ListItemIcon>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sair" />
                  </ListItem>
                )}
                {!currentUser && (
                  <>
                    <ListItem button onClick={() => router.push("/Login")}>
                      <ListItemIcon>
                        <AccountCircleIcon />
                      </ListItemIcon>
                      <ListItemText primary="Fazer Login" />
                    </ListItem>
                    <ListItem button onClick={() => router.push("/SignIn")}>
                      <ListItemIcon>
                        <PersonAddIcon />
                      </ListItemIcon>
                      <ListItemText primary="Criar Conta" />
                    </ListItem>
                  </>
                )}
                <ListItem button onClick={() => router.push("/")}>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Carrinho" />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => router.push("/")}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={() => router.push("/Produtos")}>
                  <ListItemIcon>
                    <StoreIcon />
                  </ListItemIcon>
                  <ListItemText primary="Produtos" />
                </ListItem>
                <ListItem button onClick={() => router.push("/About")}>
                  <ListItemIcon>
                    <DescriptionIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sobre Nós" />
                </ListItem>
              </List>
            </SwipeableDrawer>
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
