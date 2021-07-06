import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { usarAutenticacao } from "../atoms/firebase";

const useStyles = makeStyles(() => ({
  btnStyle: {
    float: "right",
    marginRight: "1%",
  },
}));

export default function BtnLoginLogout() {
  const classes = useStyles();
  const { currentUser, logout } = usarAutenticacao();
  if (currentUser) {
    return (
      <Button
        variant="contained"
        color="secondary"
        className={classes.btnStyle}
        onClick={() => {
          logout();
          window.location.href = "/";
        }}
      >
        Sair
      </Button>
    );
  }
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.btnStyle}
      href="/Login"
    >
      Login
    </Button>
  );
}
