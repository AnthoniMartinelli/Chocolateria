import React from "react";
import { useRouter } from "next/dist/client/router";
import { Button, makeStyles } from "@material-ui/core";
import { usarAutenticacao } from "../atoms/services/firebase";

const useStyles = makeStyles(() => ({
  btnStyle: {
    float: "right",
    marginRight: "1%",
  },
}));

export default function BtnLoginLogout() {
  const classes = useStyles();
  const router = useRouter();
  const { currentUser, logout } = usarAutenticacao();
  if (currentUser) {
    return (
      <Button
        variant="contained"
        color="secondary"
        className={classes.btnStyle}
        onClick={() => {
          logout();
          router.push("/");
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
