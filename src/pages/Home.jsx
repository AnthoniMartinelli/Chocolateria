import { makeStyles } from "@material-ui/core";
import React from "react";
import CarrosselOfertas from "../molecules/CarrosselOfertas";
import NovoProduto from "../molecules/NovoProduto";
import Franquia from "../atoms/Franquia";
import Ofertas from "../organisms/Ofertas";
import { primary } from "../atoms/tema";

const styles = makeStyles(() => ({
  divHomeStyle: {
    backgroundColor: primary,
  },
}));

export default function Home() {
  const classes = styles();
  return (
    <div className={classes.divHomeStyle}>
      <CarrosselOfertas />
      <NovoProduto />
      <Franquia />
      <Ofertas />
    </div>
  );
}
