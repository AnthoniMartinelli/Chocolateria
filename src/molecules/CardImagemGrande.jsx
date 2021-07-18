import React from "react";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  CardStyle: {
    marginTop: "3%",
    marginBottom: "3%",
    height: "70%",
  },
  imgStyle: {
    height: "100%",
    width: "100%",
  },
}));

export default function CardImagemGrande({ imgTitulo, imgLink }) {
  const classes = styles();
  return (
    <Card className={classes.CardStyle}>
      <img alt={imgTitulo} src={imgLink} className={classes.imgStyle} />
    </Card>
  );
}

CardImagemGrande.propTypes = {
  imgTitulo: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
};
