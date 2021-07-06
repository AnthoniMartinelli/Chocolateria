import { makeStyles } from "@material-ui/core";
import React, { Suspense, lazy } from "react";
import { primary } from "../atoms/tema";
import Spinner from "../molecules/Spinner";
/* import CarrosselOfertas from "../molecules/CarrosselOfertas";
import NovoProduto from "../molecules/NovoProduto";
import Franquia from "../atoms/Franquia";
import Ofertas from "../organisms/Ofertas"; */
const CarrosselOfertas = lazy(() => import("../organisms/CarrosselOfertas"));
const NovoProduto = lazy(() => import("../organisms/NovoProduto"));
const Franquia = lazy(() => import("../organisms/Franquia"));
const Ofertas = lazy(() => import("../templates/Ofertas"));

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
