import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import MediaQuery from "react-responsive";
import { primary } from "../atoms/tema";
import CabecarioDesktop from "../organisms/CabecarioDesktop";
import CabecarioMobile from "../organisms/CabecarioMobile";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: primary,
  },
}));

export default function Cabecario() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MediaQuery minDeviceWidth={460}>
        <CabecarioDesktop />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={460}>
        <CabecarioMobile />
      </MediaQuery>
    </div>
  );
}
