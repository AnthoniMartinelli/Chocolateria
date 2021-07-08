import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { useRouter } from "next/dist/client/router";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { usarAutenticacao } from "../atoms/services/firebase";

const styles = makeStyles(() => ({
  CardStyle: {
    marginTop: "5%",
    width: "50%",
  },
  BtnStyle: {
    marginTop: "10%",
    width: "50%",
  },
  TextStyle: {
    marginTop: "5%",
  },
}));

export default function VerificarEmail() {
  const router = useRouter();
  const classes = styles();
  const [NaoClicado, setNaoClicado] = useState(true);
  const { currentUser, verificarEmail } = usarAutenticacao();
  if (!currentUser || currentUser.emailVerified) {
    router.push("/");
    return (
      <h1>
        Acesso Negado você não está logado ou seu email já está verificado
      </h1>
    );
  }
  function handlerBtnEnviarEmail() {
    setNaoClicado(false);
    verificarEmail();
  }
  return (
    <Grid container item alignItems="center" justify="center">
      <Card className={classes.CardStyle}>
        <CardContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h5">
                Você precisa verificar seu Email
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.TextStyle} align="center">
                Para verificá-lo clique no botão abaixo
              </Typography>
            </Grid>
            {NaoClicado && (
              <Grid container justify="center" item>
                <Button
                  className={classes.BtnStyle}
                  variant="contained"
                  color="secondary"
                  onClick={() => handlerBtnEnviarEmail()}
                >
                  Mandar email de verificação
                </Button>
              </Grid>
            )}
            {!NaoClicado && (
              <Grid container justify="center" direction="column">
                <Typography className={classes.TextStyle} align="center">
                  Email enviado
                </Typography>
                <Grid container justify="center" item>
                  <Button
                    className={classes.BtnStyle}
                    variant="contained"
                    color="secondary"
                    onClick={() => handlerBtnEnviarEmail()}
                  >
                    Reenviar email
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
