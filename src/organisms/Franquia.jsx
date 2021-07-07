import React, { Suspense } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ScrollAnimation from "react-animate-on-scroll";
import Typography from "@material-ui/core/Typography";
import { Grid, makeStyles } from "@material-ui/core";
import Spinner from "../molecules/Spinner";

const styles = makeStyles((theme) => ({
  CardStyle: {
    display: "flex",
    backgroundColor: "#FFFFFF",
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
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      backgroundPosition: "center",
      height: "80%",
      paddingBottom: "18%",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundPosition: "right",
      height: "80%",
      paddingBottom: "30%",
    },
    [theme.breakpoints.up("md")]: {
      backgroundPosition: "right",
      height: "80%",
      paddingBottom: "20%",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundPosition: "right",
      height: "100%",
      paddingBottom: "10%",
    },
  },
  TextVireStyle: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "10pt",
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
      fontSize: "10pt",
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

export default function Franquia() {
  const classes = styles();

  return (
    <Card className={classes.CardStyle}>
      <CardContent className={classes.CardContentStyle}>
        <Grid container direction="row" justify="space-evenly">
          <Grid container item xs={4}>
            <Suspense fallback={<Spinner />}>
              <CardMedia
                title="imagem franquia"
                image="https://www.rbsdirect.com.br/imagesrc/24713450.jpg"
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
                className={classes.TextVireStyle}
              >
                Vire um dos nossos franquiados
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft" duration={1} delay={500}>
              <Typography
                variant="h4"
                component="h4"
                className={classes.TextPrecoStyle}
              >
                email: chocolatesecia@gmail.com
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInRight" duration={1} delay={500}>
              <Typography
                variant="h4"
                component="h4"
                className={classes.TextPrecoStyle}
              >
                telefone: (94)131412508
              </Typography>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
