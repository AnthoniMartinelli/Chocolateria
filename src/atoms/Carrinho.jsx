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
  // retorna undefined se não encontra
  function buscarProduto(nome) {
    for (let i = 0; i < Carrinho.length; i++) {
      if (Carrinho[i].ProdutoNome === nome) return Carrinho[i];
    }
    return undefined;
  }

  function adicionarProduto(novoProduto, qtd) {
    const produtoNoCarrinho = buscarProduto(novoProduto.ProdutoNome);
    const n = new Produto(
      novoProduto.ImagemTitulo,
      novoProduto.ImagemLink,
      novoProduto.ProdutoNome,
      novoProduto.Preco,
      qtd
    );
    if (produtoNoCarrinho === undefined) {
      Carrinho.push(n);
    } else {
      n.Quantidade =
        parseInt(produtoNoCarrinho.Quantidade, 10) + parseInt(n.Quantidade, 10);
      Carrinho.splice(Carrinho.indexOf(produtoNoCarrinho), 1, n);
    }
    setCarrinho(Carrinho);
    Cookies.set(nomeCookie, Carrinho, { expires: 1 });
  }

  function atualizarCarrinho(carrinho) {
    setCarrinho(carrinho);
  }
  // melhorar
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
        Cookies.set(nomeCookie, Carrinho, { expires: 1 });
      } else {
        // implementar erro
      }
    }
  }

  function precoTotal() {
    let valorTotal = 0;
    // eslint-disable-next-line array-callback-return
    Carrinho.map((produto) => {
      valorTotal +=
        parseFloat(produto.Preco.substring(2).replace(",", ".")) *
        produto.Quantidade;
    });
    return valorTotal.toFixed(2);
  }
  function alterarProdutoCarrinho(produto) {
    const produtoNoCarrinho = buscarProduto(produto.ProdutoNome);
    if (produtoNoCarrinho) {
      Carrinho.splice(Carrinho.indexOf(produtoNoCarrinho), 1, produto);
      console.log(Carrinho);
      setCarrinho(Carrinho);
      console.log(Carrinho);
    } else {
      // mensagem de erro
    }
  }

  const value = {
    Carrinho,
    atualizarCarrinho,
    adicionarProduto,
    removerProduto,
    precoTotal,
    alterarProdutoCarrinho,
  };
  return <contexto.Provider value={value}>{children}</contexto.Provider>;
}

CarrinhoProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
