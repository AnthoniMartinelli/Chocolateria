import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { v4 } from "uuid";
import { makeStyles } from "@material-ui/core";
import Produto from "../atoms/Produto";
import CardCarousel from "../organisms/CardCarousel";
import { background } from "../atoms/tema";
import { usarAutenticacao } from "../atoms/services/firebase";

const styles = makeStyles((theme) => ({
  GridStyle: {
    backgroundColor: background,
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
  const { todosProdutos } = usarAutenticacao();
  const [prods, setProds] = useState([new Produto("", "", "", "R$0,00", 0)]);
  useEffect(() => {
    setProds(todosProdutos);
  }, []);
  return (
    <Grid container className={classes.GridStyle}>
      {prods.map((produto) => (
        <Grid key={v4()} item className={classes.GridItemStyle} lg={3}>
          {console.log(produto.ImagemTitulo)}
          <CardCarousel
            CardMediaTitle={produto.ImagemTitulo}
            CardMediaLink={produto.ImagemLink}
            ContentTitle={produto.ProdutoNome}
            ContentText={produto.Preco}
          />
        </Grid>
      ))}
    </Grid>
  );
}
