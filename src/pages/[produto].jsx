import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ProdutoClasse from "../atoms/Produto";
import { usarAutenticacao } from "../atoms/services/firebase";
import { background } from "../atoms/tema";
import Ofertas from "../templates/Ofertas";
import CardDadosProduto from "../molecules/CardDadosProduto";

const styles = makeStyles((theme) => ({
  BackgroundStyle: {
    backgroundColor: background,
    width: "100%",
  },
  GridItemStyle: {
    height: "80%",
  },
  imgStyle: {
    height: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "500px",
    },
  },
  PaperStyle: {
    marginBottom: "1%",
    marginLeft: "2%",
    marginTop: "1%",
    width: "96%",
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
        <Paper className={classes.PaperStyle}>
          <Grid container alignContent="space-between" justify="space-between">
            <Grid item className={classes.GridItemStyle} xs={5}>
              <img
                alt={produtoCerto.ImagemTitulo}
                src={produtoCerto.ImagemLink}
                className={classes.imgStyle}
              />
            </Grid>
            <Grid item xs={7}>
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
