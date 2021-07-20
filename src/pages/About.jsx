import React from "react";
import Head from "next/dist/next-server/lib/head";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { background } from "../atoms/tema";

const styles = makeStyles(() => ({
  CardStyle: {
    width: "50%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  GridStyle: {
    backgroundColor: background,
  },
}));

function Aboutus() {
  const classes = styles();
  return (
    <>
      <Head>
        <title>Sobre nós - Chocolateria E CIA</title>
      </Head>
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        className={classes.GridStyle}
      >
        <Card className={classes.CardStyle}>
          <CardContent>
            <Typography variant="h5" align="center">
              Nos Conheça
            </Typography>
            <Typography align="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nemo
              dolorum molestiae similique incidunt obcaecati dignissimos veniam
              at eum in ipsa neque, asperiores rem quae corrupti dicta ab
              mollitia a Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Itaque exercitationem cupiditate officia impedit! Ullam et
              soluta temporibus itaque distinctio. Veritatis ipsum
              exercitationem voluptatum harum accusamus similique earum ea
              distinctio inventore Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi libero, assumenda neque voluptatum ab
              quaerat magnam totam nam quas aliquam voluptas corrupti nostrum
              voluptatibus laborum similique. Ab nisi ratione consequuntur Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Voluptate rem
              nostrum dolores sunt odio. Aspernatur numquam temporibus
              voluptatum vero minima animi sit dolorum similique corrupti
              veniam, placeat ea sunt soluta?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Optio doloribus quasi libero iste,
              quibusdam iusto deleniti esse quis voluptate numquam, sit
              sapiente, possimus consectetur hic neque! Quisquam laboriosam
              libero quasi.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
export default Aboutus;
