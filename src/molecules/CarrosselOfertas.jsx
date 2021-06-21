import React from "react";
import { v4 } from "uuid";
import Carousel from "react-material-ui-carousel";
import { Grid, makeStyles } from "@material-ui/core";
import Trufas from "../atoms/img/Trufas.png";
import Tabletes from "../atoms/img/Tabletes.png";
import Favoritos from "../atoms/img/Favoritos.png";

const styles = makeStyles(() => ({
  CarouselStyle: {},
  PaperStyle: {},
  imgStyle: {
    marginTop: "0.5%",
    width: "100%",
  },
}));

export default function CarrosselOfertas() {
  const classes = styles();
  const items = [
    {
      imagemLink: Trufas,
    },
    {
      imagemLink: Tabletes,
    },
    {
      imagemLink: Favoritos,
    },
  ];
  return (
    <Grid>
      <Carousel
        animation="slide"
        className={classes.CarouselStyle}
        autoPlay="true"
        interval="5000"
      >
        {items.map((item) => (
          <img
            key={v4()}
            alt="imagem de trufas"
            src={item.imagemLink}
            className={classes.imgStyle}
          />
        ))}
      </Carousel>
    </Grid>
  );
}
