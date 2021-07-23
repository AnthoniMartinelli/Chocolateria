export default class Produto {
  constructor(imgTitulo, imgLink, nome, preco, quantidade) {
    this.ImagemTitulo = imgTitulo;
    this.ImagemLink = imgLink;
    this.ProdutoNome = nome;
    this.Preco = preco;
    this.Quantidade = quantidade;
  }

  precoTotal() {
    const total =
      parseFloat(this.Preco.substring(2).replace(",", ".")) * this.Quantidade;
    return `R$ ${total.toFixed(2).replace(".", ",")}`;
  }
}
