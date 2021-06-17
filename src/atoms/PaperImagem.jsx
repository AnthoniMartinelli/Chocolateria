/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Paper, Typography } from "@material-ui/core";

export default function PaperImagem(props) {
  return (
    <Paper className={props.item.classePaper}>
      {/* <Typography variant="h2" className={props.item.classeh2}>
        {props.item.mensagemPrincipal}
      </Typography>
      <Typography variant="p" className={props.item.classep}>
        {props.item.mensagemAuxiliar}
      </Typography>
      {props.item.componenteExtra} */}
    </Paper>
  );
}
