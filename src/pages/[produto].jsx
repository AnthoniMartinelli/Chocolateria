import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ProdutoClasse from "../atoms/Produto";
import { usarAutenticacao } from "../atoms/services/firebase";
import CardImagemGrande from "../molecules/CardImagemGrande";
import { background } from "../atoms/tema";
import Ofertas from "../templates/Ofertas";
import CardDadosProduto from "../molecules/CardDadosProduto";

const styles = makeStyles(() => ({
  BackgroundStyle: {
    backgroundColor: background,
  },
  GridItemStyle: {
    height: "80%",
  },
  CardStyle: {
    marginTop: "3%",
    height: "100%",
    paddingBottom: "58.5%",
  },
  TypographyNomeStyle: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
}));

export default function Produto() {
  const classes = styles();
  const { lerProdutos } = usarAutenticacao();
  const router = useRouter();
  let { produto } = router.query;
  produto = produto.replace("$", "%");
  const [produtoCerto, setprodutoCerto] = useState(
    new ProdutoClasse("", "", "", "", 0)
  );
  useEffect(() => {
    lerProdutos().then((res) => {
      res.some((listaProduto) => {
        if (listaProduto.ProdutoNome === produto) {
          setprodutoCerto(listaProduto);
          return true;
        }
        return false;
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>{produtoCerto.ProdutoNome} - Chocolateria E CIA</title>
      </Head>
      <div className={classes.BackgroundStyle}>
        <Paper>
          <Grid container alignContent="space-between" justify="space-between">
            <Grid item className={classes.GridItemStyle}>
              <CardImagemGrande
                imgTitulo={produtoCerto.ImagemTitulo}
                imgLink={produtoCerto.ImagemLink}
              />
            </Grid>
            <Grid item>
              <CardDadosProduto produto={produtoCerto} />
            </Grid>
          </Grid>
        </Paper>
      </div>
      <div className={classes.BackgroundStyle}>
        <Ofertas />
      </div>
    </>
  );
}
