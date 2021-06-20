/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Paper, Typography } from "@material-ui/core";
import Image from "material-ui-image";

export default function PaperImagem(props) {
  console.log(props);
  return (
    <Paper>
      <Image src={props.imagemLink} />
    </Paper>
  );
}
