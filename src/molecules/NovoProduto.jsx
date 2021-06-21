import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core";
import Alfajor from "../atoms/img/Alfajor.png";

const styles = makeStyles(() => ({
  CardStyle: {
    display: "flex",
    flex: "1 0 auto",
    flexDirection: "column",
  },
  CardDivStyle: {
    textAlign: "center",
  },
  CardMediaStyle: {
    float: "left",
    height: "100%",
    paddingBottom: "30%",
    width: "50%",
  },
}));

export default function NovoProduto() {
  const classes = styles();
  return (
    <ScrollAnimation animateIn="fadeIn" duration={3} delay={500}>
      <Card className={classes.CardStyle}>
        <CardContent>
          <CardMedia
            title="imagem alfajor"
            image={Alfajor}
            className={classes.CardMediaStyle}
          />
          <div className={classes.CardDivStyle}>
            <Typography variant="h5" component="h5">
              Compre o novo alfajor em uma loja próxima
            </Typography>
            <Typography variant="h2">Apenas R$1,99</Typography>
          </div>
        </CardContent>
      </Card>
    </ScrollAnimation>
  );
}
