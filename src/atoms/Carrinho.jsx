import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import Produto from "./Produto";

const nomeCookie = "ProdutosChocolateriaECIA";
const contexto = React.createContext();

export function usarCarrinho() {
  return useContext(contexto);
}

export function CarrinhoProvider({ children }) {
  const [Carrinho, setCarrinho] = useState([]);
  useEffect(() => {
    let CarrinhoCookies = Cookies.get(nomeCookie);
    if (CarrinhoCookies) {
      CarrinhoCookies = JSON.parse(CarrinhoCookies);
      const produtos = [];
      CarrinhoCookies.map((produto) =>
        produtos.push(
          new Produto(
            produto.ImagemTitulo,
            produto.ImagemLink,
            produto.ProdutoNome,
            produto.Preco,
            produto.Quantidade
          )
        )
      );
      setCarrinho(produtos);
    }
  }, []);

  function adicionarProduto(novoProduto, qtd) {
    const n = new Produto(
      novoProduto.ImagemTitulo,
      novoProduto.ImagemLink,
      novoProduto.ProdutoNome,
      novoProduto.Preco,
      qtd
    );
    Carrinho.push(n);
    setCarrinho(Carrinho);
    Cookies.set(nomeCookie, Carrinho, { expires: 1 });
  }
  function removerProduto(produtoApagar) {
    if (Carrinho.length > 0) {
      let indice = -1;
      for (let i = 0; i < Carrinho.length; i++) {
        if (Carrinho[i].ProdutoNome === produtoApagar.ProdutoNome) {
          indice = i;
          break;
        }
      }
      if (indice > -1) {
        Carrinho.splice(indice, 1);
        setCarrinho(Carrinho);
      } else {
        // implementar erro
      }
    }
  }

  const value = {
    Carrinho,
    adicionarProduto,
    removerProduto,
  };
  return <contexto.Provider value={value}>{children}</contexto.Provider>;
}

CarrinhoProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
