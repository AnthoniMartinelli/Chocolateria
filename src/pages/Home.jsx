import { makeStyles } from "@material-ui/core";
import React, { Suspense, lazy } from "react";
import { primary } from "../atoms/tema";
import Spinner from "../molecules/Spinner";
/* import CarrosselOfertas from "../molecules/CarrosselOfertas";
import NovoProduto from "../molecules/NovoProduto";
import Franquia from "../atoms/Franquia";
import Ofertas from "../organisms/Ofertas"; */
const CarrosselOfertas = lazy(() => import("../molecules/CarrosselOfertas"));
const NovoProduto = lazy(() => import("../molecules/NovoProduto"));
const Franquia = lazy(() => import("../atoms/Franquia"));
const Ofertas = lazy(() => import("../organisms/Ofertas"));

const styles = makeStyles(() => ({
  divHomeStyle: {
    backgroundColor: primary,
  },
}));

export default function Home() {
  const classes = styles();
  return (
    <div className={classes.divHomeStyle}>
      <Suspense fallback={<Spinner />}>
        <CarrosselOfertas />
        <NovoProduto />
        <Franquia />
        <Ofertas />
      </Suspense>
    </div>
  );
}
