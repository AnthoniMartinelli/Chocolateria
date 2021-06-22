import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ScrollAnimation from "react-animate-on-scroll";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

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
    paddingBottom: "20%",
    width: "30%",
  },
  TextPrecoStyle: {
    marginTop: "4rem",
  },
}));

export default function Encomende() {
  const classes = styles();
  return (
    <Card className={classes.CardStyle}>
      <CardContent>
        <CardMedia
          title="imagem alfajor"
          image="https://www.rbsdirect.com.br/imagesrc/24713450.jpg"
          className={classes.CardMediaStyle}
        />
        <div className={classes.CardDivStyle}>
          <ScrollAnimation animateIn="fadeIn" duration={2}>
            <Typography variant="h4" component="h4">
              Vire um dos nossos franquiados
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomIn" duration={2} delay={1000}>
            <Typography
              variant="h4"
              component="h4"
              className={classes.TextPrecoStyle}
            >
              email: chocolatesecia@gmail.com
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              className={classes.TextPrecoStyle}
            >
              telefone: (94)131412508
            </Typography>
          </ScrollAnimation>
        </div>
      </CardContent>
    </Card>
  );
}
