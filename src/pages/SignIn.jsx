import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Head from "next/head";
import PropTypes from "prop-types";
import {
  Button,
  createStyles,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import { withRouter, NextRouter } from "next/router";
import { obterContexto } from "../atoms/firebase";
import { verificarEmail, verificarSenha } from "../atoms/Verificacao";

const styles = () =>
  createStyles({
    GridContainerStyle: {
      marginTop: "5%",
    },
    TextLoginStyle: {
      marginBottom: "3rem",
    },
    GridEmailStyle: {
      marginBottom: "2rem",
    },
    BtnIconeStyle: {
      marginTop: "1rem",
    },
    GridSenhaStyle: {
      marginBottom: "2rem",
    },
    GridBtnLoginStyle: {
      marginBottom: "1.5rem",
    },
  });

class SignIn extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = obterContexto();

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      erroEmail: false,
      msgErroEmail: "",
      senha: "",
      erroSenha: false,
      msgErroSenha: false,
      tipoTextSenha: "password",
      iconeSenha: <VisibilityIcon />,
      confirmarSenha: "",
      erroConfirmar: false,
      msgErroConfirmar: false,
      tipoTextConfirmar: "password",
      iconeConfirmar: <VisibilityIcon />,
    };

    this.handlerEmailChange = this.handlerEmailChange.bind(this);
    this.handlerSenhaChange = this.handlerSenhaChange.bind(this);
    this.handlerBtnIconeSenhaClick = this.handlerBtnIconeSenhaClick.bind(this);
    this.handlerConfirmarSenhaChange =
      this.handlerConfirmarSenhaChange.bind(this);
    this.handlerBtnIconeConfirmarClick =
      this.handlerBtnIconeConfirmarClick.bind(this);
    this.handlerBtnSignInClick = this.handlerBtnSignInClick.bind(this);
  }

  handlerEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlerSenhaChange(event) {
    this.setState({ senha: event.target.value });
  }

  handlerConfirmarSenhaChange(event) {
    this.setState({ confirmarSenha: event.target.value });
  }

  handlerBtnIconeSenhaClick() {
    const { tipoTextSenha } = this.state;
    if (tipoTextSenha === "") {
      this.setState({
        tipoTextSenha: "password",
        iconeSenha: <VisibilityIcon />,
      });
    } else {
      this.setState({ tipoTextSenha: "", iconeSenha: <VisibilityOffIcon /> });
    }
  }

  handlerBtnIconeConfirmarClick() {
    const { tipoTextConfirmar } = this.state;
    if (tipoTextConfirmar === "") {
      this.setState({
        tipoTextConfirmar: "password",
        iconeConfirmar: <VisibilityIcon />,
      });
    } else {
      this.setState({
        tipoTextConfirmar: "",
        iconeConfirmar: <VisibilityOffIcon />,
      });
    }
  }

  handlerBtnSignInClick() {
    const { email, senha, confirmarSenha } = this.state;
    if (senha !== confirmarSenha) {
      this.setState({
        erroConfirmar: true,
        msgErroConfirmar: "A senha não é igual",
      });
      return;
    }
    const verificacaoEmail = verificarEmail(email);
    const verificacaoSenha = verificarSenha(senha);
    if (verificacaoEmail !== "" || verificacaoSenha !== "") {
      if (verificacaoEmail !== "")
        this.setState({ erroEmail: true, msgErroEmail: verificacaoEmail });
      else this.setState({ erroEmail: false, msgErroEmail: "" });
      if (verificacaoSenha !== "")
        this.setState({ erroSenha: true, msgErroSenha: verificacaoSenha });
      else this.setState({ erroSenha: false, msgErroSenha: "" });
      return;
    }

    const { criarConta } = this.context;
    const { router } = this.props;
    criarConta(email, senha)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            this.setState({
              erroEmail: true,
              msgErroEmail: "já existe uma conta com esse email",
            });
            break;
          default:
            this.setState({
              erroEmail: true,
              msgErroEmail: "Um erro desconhecido ocorreu",
            });
            break;
        }
      });
  }

  render() {
    const {
      email,
      erroEmail,
      msgErroEmail,
      senha,
      erroSenha,
      msgErroSenha,
      tipoTextSenha,
      iconeSenha,
      confirmarSenha,
      erroConfirmar,
      msgErroConfirmar,
      iconeConfirmar,
      tipoTextConfirmar,
    } = this.state;
    const { classes } = this.props;
    return (
      <>
        <Head>
          <title>Criar Conta</title>
        </Head>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.GridContainerStyle}
        >
          <Card>
            <CardContent>
              <form>
                <Grid item>
                  <Typography variant="h4" className={classes.TextLoginStyle}>
                    Criar Conta
                  </Typography>
                </Grid>
                <Grid item className={classes.GridEmailStyle}>
                  <TextField
                    required
                    label="Email"
                    variant="standard"
                    value={email}
                    onChange={this.handlerEmailChange}
                    error={erroEmail}
                    helperText={msgErroEmail}
                    fullWidth
                  />
                </Grid>
                <Grid item className={classes.GridSenhaStyle}>
                  <TextField
                    required
                    label="Senha"
                    variant="standard"
                    type={tipoTextSenha}
                    value={senha}
                    error={erroSenha}
                    helperText={msgErroSenha}
                    onChange={this.handlerSenhaChange}
                  />
                  <Button
                    className={classes.BtnIconeStyle}
                    onClick={this.handlerBtnIconeSenhaClick}
                  >
                    {iconeSenha}
                  </Button>
                </Grid>
                <Grid item className={classes.GridSenhaStyle}>
                  <TextField
                    required
                    label="Confirme senha"
                    variant="standard"
                    type={tipoTextConfirmar}
                    value={confirmarSenha}
                    error={erroConfirmar}
                    helperText={msgErroConfirmar}
                    onChange={this.handlerConfirmarSenhaChange}
                  />
                  <Button
                    className={classes.BtnIconeStyle}
                    onClick={this.handlerBtnIconeConfirmarClick}
                  >
                    {iconeConfirmar}
                  </Button>
                </Grid>
                <Grid item className={classes.GridBtnLoginStyle}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handlerBtnSignInClick}
                  >
                    Criar Conta
                  </Button>
                </Grid>
                <Grid item>
                  <Typography>
                    Já tem uma conta? Clique{" "}
                    <Typography component="a" href="/Login">
                      aqui
                    </Typography>
                  </Typography>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </>
    );
  }
}

SignIn.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  router: PropTypes.instanceOf(NextRouter).isRequired,
};

export default withStyles(styles)(withRouter(SignIn));
