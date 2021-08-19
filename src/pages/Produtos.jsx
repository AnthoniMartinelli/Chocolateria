import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { v4 } from "uuid";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import Produto from "../atoms/Produto";
import CardCarousel from "../organisms/CardCarousel";
import { background } from "../atoms/tema";
import { usarAutenticacao } from "../atoms/services/firebase";

const styles = makeStyles((theme) => ({
  GridStyle: {
    backgroundColor: background,
    minHeight: "100vh",
  },
  GridItemStyle: {
    marginTop: "1%",
    marginBottom: "1%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "20%",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "8%",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "8%",
    },
  },
}));

export default function Produtos() {
  const classes = styles();
  const { lerProdutos } = usarAutenticacao();
  const [prods, setProds] = useState([new Produto("", "", "", "R$0,00", 0)]);
  useEffect(() => {
    lerProdutos().then((res) => {
      setProds(res);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Produtos - Chocolateria E CIA</title>
      </Head>
      <Grid container className={classes.GridStyle}>
        {prods.map((produto) => (
          <Grid key={v4()} item className={classes.GridItemStyle} lg={3}>
            <CardCarousel
              CardMediaTitle={produto.ImagemTitulo}
              CardMediaLink={produto.ImagemLink}
              ContentTitle={produto.ProdutoNome}
              ContentText={produto.Preco}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
