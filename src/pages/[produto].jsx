import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ListaProdutos from "../atoms/ListaProdutos";
import CardImagemGrande from "../molecules/CardImagemGrande";

const styles = makeStyles(() => ({
  TypographyNomeStyle: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
}));

export default function Produto() {
  const classes = styles();
  const router = useRouter();
  const { produto } = router.query;
  const [produtoCerto, setprodutoCerto] = useState({
    tituloImg: "",
    imgLink: "",
    nome: "",
    preco: "",
  });
  useEffect(() => {
    ListaProdutos.some((listaProduto) => {
      if (listaProduto.nome === produto) {
        setprodutoCerto(listaProduto);
        return true;
      }
      return false;
    });
    console.log(produtoCerto);
  }, []);

  return (
    <>
      <Head>
        <title>{produtoCerto.nome} - Chocolateria E CIA</title>
      </Head>
      <Grid container>
        <Grid item xs={6} alignContent="space-between" justify="space-between">
          <CardImagemGrande
            imgTitulo={produtoCerto.tituloImg}
            imgLink={produtoCerto.imgLink}
          />
        </Grid>
        <Grid container item xs={6} direction="column">
          <Grid item>
            <Typography
              color="secondary"
              align="center"
              variant="h2"
              className={classes.TypographyNomeStyle}
            >
              {produtoCerto.nome}
            </Typography>
          </Grid>
          <Grid container item alignItems="center" justify="center" spacing={5}>
            <Grid item>
              <Typography variant="h6">{produtoCerto.preco}</Typography>
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained">
                Comprar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
