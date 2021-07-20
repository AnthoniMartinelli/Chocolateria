import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ProdutoClasse from "../atoms/Produto";
import { usarAutenticacao } from "../atoms/services/firebase";
import CardImagemGrande from "../molecules/CardImagemGrande";

const styles = makeStyles(() => ({
  TypographyNomeStyle: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
}));

export default function Produto() {
  const classes = styles();
  const { lerProdutos } = usarAutenticacao();
  const router = useRouter();
  const { produto } = router.query;
  const [produtoCerto, setprodutoCerto] = useState(
    new ProdutoClasse("", "", "", "", 0)
  );
  useEffect(() => {
    lerProdutos().then((res) => {
      console.log(res);
      res.some((listaProduto) => {
        if (listaProduto.ProdutoNome === produto) {
          setprodutoCerto(listaProduto);
          return true;
        }
        return false;
      });
      console.log(produtoCerto);
    });
  }, []);

  return (
    <>
      <Head>
        <title>{produtoCerto.ProdutoNome} - Chocolateria E CIA</title>
      </Head>
      <Grid container alignContent="space-between" justify="space-between">
        <Grid item xs={6}>
          <CardImagemGrande
            imgTitulo={produtoCerto.ImagemTitulo}
            imgLink={produtoCerto.ImagemLink}
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
              {produtoCerto.ProdutoNome}
            </Typography>
          </Grid>
          <Grid container item alignItems="center" justify="center" spacing={5}>
            <Grid item>
              <Typography variant="h6">{produtoCerto.Preco}</Typography>
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
