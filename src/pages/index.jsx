import { makeStyles } from "@material-ui/core";
import React from "react";
import { background, primary } from "../atoms/tema";
import CarrosselOfertas from "../organisms/CarrosselOfertas";
import NovoProduto from "../organisms/NovoProduto";
import Franquia from "../organisms/Franquia";
import Ofertas from "../templates/Ofertas";

const styles = makeStyles(() => ({
  divHomeStyle: {
    backgroundColor: primary,
  },
  divOfertasStyle: {
    backgroundColor: background,
  },
}));

export default function Home() {
  const classes = styles();
  return (
    <>
      <div className={classes.divHomeStyle}>
        <CarrosselOfertas />
        <NovoProduto />
        <Franquia />
      </div>
      <div className={classes.divOfertasStyle}>
        <Ofertas />
      </div>
    </>
  );
}
