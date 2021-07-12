import { useRouter } from "next/router";
import CardMedia from "@material-ui/core/CardMedia";
import React, { useState, useEffect } from "react";
import ListaProdutos from "../atoms/ListaProdutos";

export default function Produto() {
  const router = useRouter();
  const { produto } = router.query;
  const [produtoCerto, setprodutoCerto] = useState({
    tituloImg: "",
    imgLink: "",
    nome: "",
    preco: "",
  });
  useEffect(() => {
    ListaProdutos.some((listaProduto) => {
      if (listaProduto.nome === produto) {
        setprodutoCerto(listaProduto);
        return true;
      }
      return false;
    });
    console.log(produtoCerto);
  }, []);

  return (
    <div>
      <img src={produtoCerto.imgLink} alt={produtoCerto.tituloImg} />
      <p>{produtoCerto.nome}</p>
      <p>{produtoCerto.preco}</p>
    </div>
  );
}
