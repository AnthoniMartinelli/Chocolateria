import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  CardStyle: {
    height: "150px",
    width: "250px",
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
  const classes = styles();
  return (
    <Grid container item alignContent="stretch" justify="space-between">
      <Card className={classes.CardStyle}>
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
