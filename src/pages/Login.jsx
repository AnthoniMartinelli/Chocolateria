import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Head from "next/head";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import {
  Button,
  createStyles,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import { verificarEmail, verificarSenha } from "../atoms/Verificacao";
import { obterContexto } from "../atoms/services/firebase";
import { background } from "../atoms/tema";

const styles = (theme) =>
  createStyles({
    CardStyle: {
      marginTop: "5%",
      [theme.breakpoints.up("xs")]: {
        marginBottom: "25%",
      },
      [theme.breakpoints.up("sm")]: {
        marginBottom: "5%",
      },
    },
    GridContainerStyle: {
      backgroundColor: background,
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

class Login extends Component {
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
      tipoText: "password",
      iconeSenha: <VisibilityIcon />,
    };

    this.handlerEmailChange = this.handlerEmailChange.bind(this);
    this.handlerSenhaChange = this.handlerSenhaChange.bind(this);
    this.handlerBtnIconeClick = this.handlerBtnIconeClick.bind(this);
    this.handlerBtnLoginClick = this.handlerBtnLoginClick.bind(this);
    this.handlerBtnLoginGoogleClick =
      this.handlerBtnLoginGoogleClick.bind(this);
  }

  handlerEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlerSenhaChange(event) {
    this.setState({ senha: event.target.value });
  }

  handlerBtnIconeClick() {
    const { tipoText } = this.state;
    if (tipoText === "") {
      this.setState({ tipoText: "password", iconeSenha: <VisibilityIcon /> });
    } else {
      this.setState({ tipoText: "", iconeSenha: <VisibilityOffIcon /> });
    }
  }

  handlerBtnLoginClick() {
    const { email, senha } = this.state;
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
    const { router } = this.props;
    const { login } = this.context;
    login(email, senha)
      .then((user) => {
        if (user.user.emailVerified) router.push("/");
        else router.push("/VerificarEmail");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/too-many-requests":
            this.setState({
              erroEmail: true,
              msgErroEmail: "este usuario foi bloqueado temporariamente",
            });
            break;
          case "auth/user-not-found":
            this.setState({
              erroEmail: true,
              msgErroEmail: "senha ou email incorretos",
            });
            break;
          case "auth/wrong-password":
            this.setState({
              erroEmail: true,
              msgErroEmail: "senha ou email incorretos",
            });
            break;
          default:
            console.log(error.code);
            console.log(error.message);
            this.setState({
              erroEmail: true,
              msgErroEmail: "Um erro desconhecido ocorreu",
            });
            break;
        }
      });
  }

  handlerBtnLoginGoogleClick() {
    const { loginGoogle, currentUser } = this.context;
    const { router } = this.props;
    loginGoogle();
    if (currentUser) return;
    router.push("/");
  }

  render() {
    const {
      email,
      erroEmail,
      msgErroEmail,
      senha,
      erroSenha,
      msgErroSenha,
      tipoText,
      iconeSenha,
    } = this.state;
    const { classes } = this.props;
    return (
      <>
        <Head>
          <title>Login - Chocolateria E CIA</title>
        </Head>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.GridContainerStyle}
        >
          <Card className={classes.CardStyle}>
            <CardContent>
              <form>
                <Grid item>
                  <Typography variant="h4" className={classes.TextLoginStyle}>
                    Login
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
                    type={tipoText}
                    value={senha}
                    onChange={this.handlerSenhaChange}
                    error={erroSenha}
                    helperText={msgErroSenha}
                  />
                  <Button
                    className={classes.BtnIconeStyle}
                    onClick={this.handlerBtnIconeClick}
                  >
                    {iconeSenha}
                  </Button>
                </Grid>
                <Grid item className={classes.GridBtnLoginStyle}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handlerBtnLoginClick}
                  >
                    Fazer Login
                  </Button>
                </Grid>
                <Grid item>
                  <Grid item className={classes.GridBtnLoginStyle}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.handlerBtnLoginGoogleClick}
                    >
                      Login Com Google
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>
                    Não tem uma conta? Clique{" "}
                    <Typography component="a" href="/SignIn">
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

Login.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  router: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Login));
