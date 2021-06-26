import React from "react";
import Carousel from "react-elastic-carousel";
import CardCarousel from "../molecules/CardCarousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 558, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1280, itemsToShow: 6 },
];

export default function Ofertas() {
  return (
    <Carousel breakPoints={breakPoints} pagination={false}>
      <CardCarousel
        CardMediaTitle="imagem Trufa Tradicional"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3b56fa2a/medium/1000111_1.png"
        ContentTitle="Trufa Tradicional 30g"
        ContentText="R$2,99"
      />
      <CardCarousel
        CardMediaTitle="imagem Trufa Morango"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwdce72a58/medium/1000106_1.png"
        ContentTitle="Trufa Morango 30g"
        ContentText="R$2,99"
      />
      <CardCarousel
        CardMediaTitle="imagem Trufa zero açucar"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw49f9898d/medium/1000110_1.png"
        ContentTitle="Trufa zero açucar 30g"
        ContentText="R$3,50"
      />
      <CardCarousel
        CardMediaTitle="imagem Tablete 55% cacau"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw6e17ca08/medium/1000175_1.png"
        ContentTitle="Tablete 55% cacau 20g"
        ContentText="R$3,00"
      />
      <CardCarousel
        CardMediaTitle="imagem Tablete Castanha de caju"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw74f90275/medium/1000151_1.png"
        ContentTitle="Tablete castanha caju 20g"
        ContentText="R$2,70"
      />
      <CardCarousel
        CardMediaTitle="imagem Tablete crocante"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dweb855062/medium/1000155_1.png"
        ContentTitle="Tablete crocante 20g"
        ContentText="R$2,70"
      />
      <CardCarousel
        CardMediaTitle="imagem Tablete laranja"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw5e962c72/medium/1000168_1.png"
        ContentTitle="Tablete laranja 20g"
        ContentText="R$2,79"
      />
      <CardCarousel
        CardMediaTitle="imagem Trufa artesanal"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwe96bc8ee/medium/1000104_1.png"
        ContentTitle="Trufa artesanal 30g"
        ContentText="R$3,49"
      />
      <CardCarousel
        CardMediaTitle="imagem Tablete ao leite"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwe836a4ec/medium/1000144_1.png"
        ContentTitle="Tablete ao leite 20g"
        ContentText="R$2,00"
      />
    </Carousel>
  );
}
