/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid, makeStyles } from "@material-ui/core";
/* import PaperImagem from "../atoms/PaperImagem"; */
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
        className={classes.CarouselStyle}
        autoPlay="true"
        interval="5000"
      >
        {items.map((item, i) => (
          <img
            key={i}
            alt="imagem de trufas"
            src={item.imagemLink}
            className={classes.imgStyle}
          />
        ))}
      </Carousel>
    </Grid>
  );
}
