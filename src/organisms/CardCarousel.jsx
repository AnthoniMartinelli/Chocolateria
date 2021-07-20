import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";

const styles = makeStyles(() => ({
  CardStyle: {
    height: "150px",
    width: "230px",
    transition: "ease-in 0.5s",
    cursor: "default",
    "&:hover": {
      cursor: "pointer",
      fontSize: "1.1rem",
      transition: "ease-out 0.5s",
      textDecoration: "underline",
      width: "250px",
    },
  },
  CardMediaStyle: {
    paddingBottom: "30%",
    paddingTop: "0%",
  },
  CardContentStyle: {
    width: "80%",
  },
  ProdutoStyle: {
    textAlign: "center",
    fontSize: "12t",
  },
  PrecoStyle: {
    textAlign: "center",
  },
}));

export default function CardCarousel(props) {
  const { CardMediaTitle, CardMediaLink, ContentTitle, ContentText } = props;
  const router = useRouter();
  const classes = styles();

  function handlerCardClick() {
    const url = `/${ContentTitle.replace("%", "$")}`;
    router.push(url);
  }

  return (
    <Grid container item alignContent="stretch" justify="space-between">
      <Card className={classes.CardStyle} onClick={handlerCardClick}>
        <CardContent>
          <CardMedia
            title={CardMediaTitle}
            image={CardMediaLink}
            className={classes.CardMediaStyle}
          />
          <Typography component="h6" className={classes.ProdutoStyle}>
            {ContentTitle}
          </Typography>
          <Typography component="p" className={classes.PrecoStyle}>
            {ContentText}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

CardCarousel.propTypes = {
  CardMediaTitle: PropTypes.string.isRequired,
  CardMediaLink: PropTypes.string.isRequired,
  ContentTitle: PropTypes.string.isRequired,
  ContentText: PropTypes.string.isRequired,
};
