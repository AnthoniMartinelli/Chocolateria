import {
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { v4 } from "uuid";
import React from "react";
import { background } from "../atoms/tema";
import { usarCarrinho } from "../atoms/Carrinho";

const styles = makeStyles(() => ({
  GridStyle: {
    backgroundColor: background,
  },
  PaperStyle: {
    marginBottom: "1%",
    marginLeft: "1%",
    marginTop: "1%",
    width: "98%",
  },
  imgStyle: {
    height: "200px",
    marginLeft: "1%",
    width: "200px",
  },
  TypographyPrecoTotalStyle: {
    float: "right",
  },
}));

export default function Compra() {
  const { Carrinho, alterarProdutoCarrinho, precoTotal } = usarCarrinho();
  const classes = styles();

  function handleChange(event, produto) {
    // eslint-disable-next-line no-param-reassign
    produto.Quantidade = event.target.value;
    alterarProdutoCarrinho(produto);
  }

  function quantidadesPossiveis() {
    const itens = [];
    for (let i = 1; i < 100; i++) {
      itens.push(
        <MenuItem key={v4()} value={i}>
          {i}
        </MenuItem>
      );
    }
    return itens;
  }

  return (
    <Grid container item xs={12} className={classes.GridStyle}>
      <Paper className={classes.PaperStyle}>
        <Grid container direction="column">
          {Carrinho.map((produto) => (
            <Grid item key={v4()}>
              <Grid
                container
                justify="center"
                alignContent="center"
                alignItems="center"
              >
                <Grid item xs={3}>
                  <img
                    className={classes.imgStyle}
                    src={produto.ImagemLink}
                    alt={produto.ImagemTitulo}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography>{produto.ProdutoNome}</Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  container
                  direction="row"
                  justify="space-evenly"
                >
                  <Grid item>
                    <Typography>Quantidade: </Typography>
                  </Grid>
                  <Grid item>
                    <Select
                      value={produto.Quantidade}
                      onChange={(event) => handleChange(event, produto)}
                      displayEmpty
                    >
                      {quantidadesPossiveis()}
                    </Select>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Typography align="center">
                    Preço: {produto.precoTotal()}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
            </Grid>
          ))}
          <Grid item>
            <Grid
              container
              justify="space-evenly"
              alignContent="center"
              alignItems="center"
            >
              <Grid item>
                <Button variant="contained" color="primary">
                  Comprar
                </Button>
              </Grid>
              <Grid item>
                <Typography className={classes.TypographyPrecoTotalStyle}>
                  Preço Total: {`R$ ${precoTotal().replace(".", ",")}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
