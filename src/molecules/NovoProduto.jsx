import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Alfajor from "../atoms/img/Alfajor.png";

export default function NovoProduto() {
  return (
    <ScrollAnimation animateIn="fadeIn" duration={3} delay={500}>
      <Card>
        <CardMedia title="imagem alfajor" image={Alfajor} />
        <CardContent>
          <Typography variant="h5" component="h5">
            Compre o novo alfajor em uma loja próxima
          </Typography>
          <Typography variant="subtitle1">Apenas R$1,99</Typography>
        </CardContent>
      </Card>
    </ScrollAnimation>
  );
}
