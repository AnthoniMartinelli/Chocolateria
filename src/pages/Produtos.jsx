import React from "react";
import Grid from "@material-ui/core/Grid";
import { v4 } from "uuid";
import { makeStyles } from "@material-ui/core";
/* import ListaProdutos from "../atoms/ListaProdutos"; */
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
  return (
    <Grid container className={classes.GridStyle}>
      {todosProdutos.map((produto) => (
        <Grid key={v4()} item className={classes.GridItemStyle} lg={3}>
          <CardCarousel
            CardMediaTitle={produto.tituloImg}
            CardMediaLink={produto.imgLink}
            ContentTitle={produto.nome}
            ContentText={produto.preco}
          />
        </Grid>
      ))}
    </Grid>
  );
}
