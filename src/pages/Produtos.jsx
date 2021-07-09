import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import CardCarousel from "../organisms/CardCarousel";
import { background } from "../atoms/tema";

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
  return (
    <Grid container className={classes.GridStyle}>
      <Grid item className={classes.GridItemStyle} lg={3}>
        <CardCarousel
          CardMediaTitle="imagem Trufa Tradicional"
          CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3b56fa2a/medium/1000111_1.png"
          ContentTitle="Trufa Tradicional 30g"
          ContentText="R$2,99"
        />
      </Grid>
      <Grid item className={classes.GridItemStyle} lg={3}>
        <CardCarousel
          CardMediaTitle="imagem Trufa Morango"
          CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwdce72a58/medium/1000106_1.png"
          ContentTitle="Trufa Morango 30g"
          ContentText="R$2,99"
        />
      </Grid>
      <Grid item className={classes.GridItemStyle} lg={3}>
        <CardCarousel
          CardMediaTitle="imagem Trufa zero açucar"
          CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw49f9898d/medium/1000110_1.png"
          ContentTitle="Trufa zero açucar 30g"
          ContentText="R$3,50"
        />
      </Grid>
      <Grid item className={classes.GridItemStyle} lg={3}>
        <CardCarousel
          CardMediaTitle="imagem Tablete 55% cacau"
          CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw6e17ca08/medium/1000175_1.png"
          ContentTitle="Tablete 55% cacau 20g"
          ContentText="R$3,00"
        />
      </Grid>
      <Grid item className={classes.GridItemStyle} lg={3}>
        <CardCarousel
          CardMediaTitle="imagem Tablete Castanha de caju"
          CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw74f90275/medium/1000151_1.png"
          ContentTitle="Tablete castanha caju 20g"
          ContentText="R$2,70"
        />
      </Grid>
      <Grid item className={classes.GridItemStyle} lg={3}>
        <CardCarousel
          CardMediaTitle="imagem Tablete crocante"
          CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dweb855062/medium/1000155_1.png"
          ContentTitle="Tablete crocante 20g"
          ContentText="R$2,70"
        />
      </Grid>
      <Grid item className={classes.GridItemStyle} lg={3}>
        <CardCarousel
          CardMediaTitle="imagem Tablete laranja"
          CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw5e962c72/medium/1000168_1.png"
          ContentTitle="Tablete laranja 20g"
          ContentText="R$2,79"
        />
      </Grid>
      <Grid item className={classes.GridItemStyle} lg={3}>
        <CardCarousel
          CardMediaTitle="imagem Trufa artesanal"
          CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwe96bc8ee/medium/1000104_1.png"
          ContentTitle="Trufa artesanal 30g"
          ContentText="R$3,49"
        />
      </Grid>
      <Grid item className={classes.GridItemStyle} lg={3}>
        <CardCarousel
          CardMediaTitle="imagem Tablete ao leite"
          CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwe836a4ec/medium/1000144_1.png"
          ContentTitle="Tablete ao leite 20g"
          ContentText="R$2,00"
        />
      </Grid>
    </Grid>
  );
}
