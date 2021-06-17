/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PaperImagem from "../atoms/PaperImagem";

const useStyles = makeStyles(() => ({
  PaperStyle: {
    backgroundImage:
      "url('https://avongroup.vteximg.com.br/arquivos/DESK2_BannerHome_Especial_Renew_NewHome_Desk_v1.jpg?v=637592830181470000')",
  },
  classeh2: {},
  classep: {},
}));

export default function CarrosselOfertas() {
  const classes = useStyles();
  const items = [
    {
      classePaper: classes.PaperStyle,
      classeh2: classes.classeh2,
      classesp: classes.classep,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
        <PaperImagem key={i} item={item} />
      ))}
    </Carousel>
  );
}
