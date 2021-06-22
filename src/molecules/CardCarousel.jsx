import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";

export default function CardCarousel(props) {
  const { CardMediaTitle, CardMediaLink, ContentTitle, ContentText } = props;
  return (
    <Card>
      <CardMedia title={CardMediaTitle} image={CardMediaLink} />
      <CardContent>
        <Typography variant="h6" component="h6">
          {ContentTitle}
        </Typography>
        <Typography component="p">{ContentText}</Typography>
      </CardContent>
    </Card>
  );
}

CardCarousel.propTypes = {
  CardMediaTitle: PropTypes.string.isRequired,
  CardMediaLink: PropTypes.string.isRequired,
  ContentTitle: PropTypes.string.isRequired,
  ContentText: PropTypes.string.isRequired,
};
