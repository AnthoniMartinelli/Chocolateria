import React, { Suspense } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core";
import Spinner from "./Spinner";

const styles = makeStyles(() => ({
  CardStyle: {
    display: "flex",
    flex: "1 0 auto",
    flexDirection: "column",
    backgroundColor: "#4BB9F0",
  },
  CardDivStyle: {
    textAlign: "center",
  },
  CardMediaStyle: {
    float: "left",
    height: "100%",
    paddingBottom: "20%",
    width: "30%",
  },
  TextPrecoStyle: {
    marginTop: "4rem",
  },
}));

export default function NovoProduto() {
  const classes = styles();
  return (
    <Card className={classes.CardStyle}>
      <CardContent>
        <Suspense fallback={<Spinner />}>
          <CardMedia
            title="imagem alfajor"
            image="https://brasilcacau.vteximg.com.br/arquivos/ids/155602/Banners_Vitrine_v3_Variedades.png"
            className={classes.CardMediaStyle}
          />
        </Suspense>
        <div className={classes.CardDivStyle}>
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <Typography variant="h4" component="h4" color="primary">
              Compre o novo alfajor em uma loja próxima
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomIn" duration={2} delay={1000}>
            <Typography
              variant="h2"
              component="h2"
              className={classes.TextPrecoStyle}
              color="primary"
            >
              Apenas R$1,99
            </Typography>
          </ScrollAnimation>
        </div>
      </CardContent>
    </Card>
  );
}
