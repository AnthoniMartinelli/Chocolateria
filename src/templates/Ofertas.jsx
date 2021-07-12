import React from "react";
import Carousel from "react-elastic-carousel";
import CardCarousel from "../organisms/CardCarousel";
import ListaProdutos from "../atoms/ListaProdutos";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 558, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1100, itemsToShow: 4 },
  /* { width: 1280, itemsToShow: 6 }, */
];

export default function Ofertas() {
  return (
    <Carousel breakPoints={breakPoints} pagination={false}>
      {ListaProdutos.map((produto) => (
        <CardCarousel
          CardMediaTitle={produto.tituloImg}
          CardMediaLink={produto.imgLink}
          ContentTitle={produto.nome}
          ContentText={produto.preco}
        />
      ))}
    </Carousel>
  );
}
