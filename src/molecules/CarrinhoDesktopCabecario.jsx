import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Badge from "@material-ui/core/Badge";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import { usarCarrinho } from "../atoms/Carrinho";

const styles = makeStyles(() => ({
  badgeStyle: {
    float: "right",
    marginRight: "4%",
    marginTop: "2%",
  },
  imgStyle: {
    width: "100px",
    height: "100px",
  },
}));

export default function CarrinhoDesktopCabecario() {
  const classes = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const { Carrinho } = usarCarrinho();
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handlerTrashIconClick(event, produtoItem) {
    event.stopPropagation();
    console.log(produtoItem);
  }

  function handlerProdutoCarrinhoClick(event, produtoItem) {
    console.log(produtoItem);
  }

  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Carrinho.map((produto) => (
          <MenuItem
            key={produto.ProdutoNome}
            onClick={(event) => handlerProdutoCarrinhoClick(event, produto)}
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
              secondary={produto.Preco}
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
      </Menu>

      <Badge
        onClick={handleClick}
        className={classes.badgeStyle}
        color="error"
        variant="dot"
      >
        <ShoppingCartIcon fontSize="large" />
      </Badge>
    </div>
  );
}
