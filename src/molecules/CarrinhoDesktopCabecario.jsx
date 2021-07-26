import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Badge from "@material-ui/core/Badge";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Card,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { usarCarrinho } from "../atoms/Carrinho";

const styles = makeStyles(() => ({
  badgeStyle: {
    float: "right",
    marginRight: "4%",
    marginTop: "2%",
    "&:hover": {
      cursor: "pointer",
    },
  },
  imgStyle: {
    width: "100px",
    height: "100px",
  },
}));

export default function CarrinhoDesktopCabecario() {
  const router = useRouter();
  const classes = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const { Carrinho, removerProduto, precoTotal } = usarCarrinho();
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handlerProdutoCarrinhoClick() {
    handleClose();
    router.push("/Compra");
  }

  function handlerTrashIconClick(event, produtoItem) {
    event.stopPropagation();
    removerProduto(produtoItem);
    handleClose();
  }

  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Carrinho.length ? (
          <div>
            <Typography align="center" onClick={handleClose}>
              <Link href="/Compra"> Ir para o carrinho</Link>
            </Typography>
            {Carrinho.map((produto) => (
              <MenuItem
                key={produto.ProdutoNome}
                onClick={handlerProdutoCarrinhoClick}
              >
                <ListItemIcon>
                  <img
                    src={produto.ImagemLink}
                    alt={produto.ImagemTitulo}
                    className={classes.imgStyle}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={produto.ProdutoNome}
                  secondary={`Quantidade: ${produto.Quantidade} preço unitário: ${produto.Preco}`}
                />
                <ListItemIcon>
                  <Grid container item justify="center">
                    <IconButton
                      onClick={(event) => handlerTrashIconClick(event, produto)}
                    >
                      <DeleteForeverIcon color="action" />
                    </IconButton>
                  </Grid>
                </ListItemIcon>
              </MenuItem>
            ))}
            <Typography align="center">
              Preço Total: R${precoTotal()}
            </Typography>
          </div>
        ) : (
          <Typography> O carrinho está vazio</Typography>
        )}
      </Menu>

      <Badge onClick={handleClick} className={classes.badgeStyle}>
        <Card>
          <ShoppingCartIcon fontSize="large" />
          <ExpandMoreIcon />
        </Card>
      </Badge>
    </div>
  );
}
