import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { v4 } from "uuid";
import Produto from "../atoms/Produto";
import { usarAutenticacao } from "../atoms/services/firebase";
import CardCarousel from "../organisms/CardCarousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 558, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1100, itemsToShow: 4 },
  /* { width: 1280, itemsToShow: 6 }, */
];

export default function Ofertas() {
  const { lerQuantidadeProdutos } = usarAutenticacao();
  const [prods, setProds] = useState([new Produto("", "", "", "R$0,00", 0)]);
  useEffect(() => {
    lerQuantidadeProdutos(8).then((res) => {
      setProds(res);
    });
  }, []);
  return (
    <Carousel breakPoints={breakPoints} pagination={false}>
      {prods.map((produto) => (
        <CardCarousel
          key={v4()}
          CardMediaTitle={produto.ImagemTitulo}
          CardMediaLink={produto.ImagemLink}
          ContentTitle={produto.ProdutoNome}
          ContentText={produto.Preco}
        />
      ))}
    </Carousel>
  );
}
