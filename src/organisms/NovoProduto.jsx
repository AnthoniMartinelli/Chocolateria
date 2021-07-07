import React, { Suspense } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Grid, makeStyles } from "@material-ui/core";
import Spinner from "../molecules/Spinner";

const styles = makeStyles((theme) => ({
  CardStyle: {
    display: "flex",
    backgroundColor: "#4BB9F0",
    [theme.breakpoints.up("xs")]: {
      paddingBottom: "0",
    },
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "30px",
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom: "80px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "80px",
    },
  },
  CardContentStyle: {
    width: "100%",
  },
  CardGridStyle: {
    textAlign: "center",
  },
  CardMediaStyle: {
    float: "left",
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      paddingBottom: "0%",
      padding: "0%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "30%",
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom: "20%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "15%",
    },
  },
  TextCompreStyle: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "14pt",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20pt",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "30pt",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "35pt",
    },
  },
  TextPrecoStyle: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "14pt",
      marginTop: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20pt",
      marginTop: "5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "25pt",
      marginTop: "5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "35pt",
      marginTop: "5rem",
    },
  },
}));

export default function NovoProduto() {
  const classes = styles();
  return (
    <Card className={classes.CardStyle}>
      <CardContent className={classes.CardContentStyle}>
        <Grid container direction="row" justify="space-evenly">
          <Grid container item xs={4}>
            <Suspense fallback={<Spinner />}>
              <CardMedia
                title="imagem alfajor"
                image="https://brasilcacau.vteximg.com.br/arquivos/ids/155602/Banners_Vitrine_v3_Variedades.png"
                className={classes.CardMediaStyle}
              />
            </Suspense>
          </Grid>
          <Grid item className={classes.CardGridStyle} xs={8}>
            <ScrollAnimation animateIn="fadeIn" duration={2}>
              <Typography
                variant="h4"
                component="h4"
                color="primary"
                className={classes.TextCompreStyle}
              >
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
