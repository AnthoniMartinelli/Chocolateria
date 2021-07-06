import { makeStyles } from "@material-ui/core";
import React from "react";
import { primary } from "../atoms/tema";
import CarrosselOfertas from "../organisms/CarrosselOfertas";
import NovoProduto from "../organisms/NovoProduto";
import Franquia from "../organisms/Franquia";
import Ofertas from "../templates/Ofertas";

const styles = makeStyles(() => ({
  divHomeStyle: {
    backgroundColor: primary,
  },
}));

export default function Home() {
  const classes = styles();
  console.log(process.env.REACT_APP_FIREBASE_KEY);
  return (
    <div className={classes.divHomeStyle}>
      <CarrosselOfertas />
      <NovoProduto />
      <Franquia />
      <Ofertas />
    </div>
  );
}
