import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";
import {
  Button,
  createStyles,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import { verificarEmail, verificarSenha } from "../atoms/Verificacao";
import { contexto } from "../atoms/firebase/dados";

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

class Login extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = contexto;

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
    this.setState({
      erroSenha: false,
      msgErroSenha: "",
      erroEmail: false,
      msgErroEmail: "",
    });
    const { login } = this.context;
    login(email, senha);
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
    );
  }
}

Login.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
