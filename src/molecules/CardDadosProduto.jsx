import React from "react";
import PropType from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Produto from "../atoms/Produto";

const styles = makeStyles(() => ({
  GridItemStyle: {
    height: "80%",
  },
  CardStyle: {
    marginTop: "3%",
    height: "80%",
    /*     paddingBottom: "58.5%", */
  },
  TypographyNomeStyle: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
}));

export default function CardDadosProduto({ produto }) {
  const classes = styles();
  return (
    <Card className={classes.CardStyle}>
      <Grid
        container
        xs={6}
        direction="column"
        justify="space-between"
        cclassName={classes.CardStyle}
      >
        <Grid item>
          <Typography
            color="secondary"
            align="center"
            variant="h2"
            className={classes.TypographyNomeStyle}
          >
            {produto.ProdutoNome}
          </Typography>
        </Grid>
        <Grid container item alignItems="center" justify="center" spacing={5}>
          <Grid item>
            <Typography variant="h6">{produto.Preco}</Typography>
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained">
              Comprar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

CardDadosProduto.propTypes = {
  produto: PropType.objectOf(Produto).isRequired,
};
