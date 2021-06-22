import React from "react";
import Carousel from "react-elastic-carousel";
import CardCarousel from "../molecules/CardCarousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 558, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1280, itemsToShow: 4 },
];

export default function Ofertas() {
  return (
    <Carousel breakPoints={breakPoints}>
      <CardCarousel
        CardMediaTitle="imagem Trufa Tradicional"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3b56fa2a/medium/1000111_1.png"
        ContentTitle="Trufa Tradicional 30g"
        ContentText="R$2,99"
      />
      <CardCarousel
        CardMediaTitle="imagem Trufa Tradicional"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3b56fa2a/medium/1000111_1.png"
        ContentTitle="Trufa Tradicional 30g"
        ContentText="R$2,99"
      />
      <CardCarousel
        CardMediaTitle="imagem Trufa Tradicional"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3b56fa2a/medium/1000111_1.png"
        ContentTitle="Trufa Tradicional 30g"
        ContentText="R$2,99"
      />
      <CardCarousel
        CardMediaTitle="imagem Trufa Tradicional"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3b56fa2a/medium/1000111_1.png"
        ContentTitle="Trufa Tradicional 30g"
        ContentText="R$2,99"
      />
      <CardCarousel
        CardMediaTitle="imagem Trufa Tradicional"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3b56fa2a/medium/1000111_1.png"
        ContentTitle="Trufa Tradicional 30g"
        ContentText="R$2,99"
      />
      <CardCarousel
        CardMediaTitle="imagem Trufa Tradicional"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3b56fa2a/medium/1000111_1.png"
        ContentTitle="Trufa Tradicional 30g"
        ContentText="R$2,99"
      />
      <CardCarousel
        CardMediaTitle="imagem Trufa Tradicional"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3b56fa2a/medium/1000111_1.png"
        ContentTitle="Trufa Tradicional 30g"
        ContentText="R$2,99"
      />
      <CardCarousel
        CardMediaTitle="imagem Trufa Tradicional"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3b56fa2a/medium/1000111_1.png"
        ContentTitle="Trufa Tradicional 30g"
        ContentText="R$2,99"
      />
      <CardCarousel
        CardMediaTitle="imagem Trufa Tradicional"
        CardMediaLink="https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw3b56fa2a/medium/1000111_1.png"
        ContentTitle="Trufa Tradicional 30g"
        ContentText="R$2,99"
      />
    </Carousel>
  );
}
