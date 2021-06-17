import { createStyles, withStyles } from "@material-ui/core";
import React from "react";
import CarrosselOfertas from "../molecules/CarrosselOfertas";
import NovoProduto from "../molecules/NovoProduto";
import Encomende from "../atoms/Encomende";
import Ofertas from "../organisms/Ofertas";

const styles = () =>
  createStyles({
    linksBtnsCabecarioStyle: {
      "&:hover": {
        textDecoration: "none",
      },
    },
  });

function Home() {
  // const { classes } = this.props;
  return (
    <>
      <CarrosselOfertas />
      <NovoProduto />
      <Encomende />
      <Ofertas />
    </>
  );
}

export default withStyles(styles)(Home);
