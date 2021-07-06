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
import { contexto } from "../atoms/firebase";

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
  static contextType = contexto;

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
      confirmarSenha: "",
      tipoText: "password",
      iconeSenha: <VisibilityIcon />,
    };

    this.handlerEmailChange = this.handlerEmailChange.bind(this);
    this.handlerSenhaChange = this.handlerSenhaChange.bind(this);
    this.handlerBtnIconeClick = this.handlerBtnIconeClick.bind(this);
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

  handlerBtnIconeClick() {
    const { tipoText } = this.state;
    if (tipoText === "") {
      this.setState({ tipoText: "password", iconeSenha: <VisibilityIcon /> });
    } else {
      this.setState({ tipoText: "", iconeSenha: <VisibilityOffIcon /> });
    }
  }

  handlerBtnSignInClick() {
    const { email, senha } = this.state;
    const { criarConta } = this.context;
    criarConta(email, senha);
    window.location.href = "/";
  }

  render() {
    const { email, senha, tipoText, iconeSenha, confirmarSenha } = this.state;
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
                />
                <Button
                  className={classes.BtnIconeStyle}
                  onClick={this.handlerBtnIconeClick}
                >
                  {iconeSenha}
                </Button>
              </Grid>
              <Grid item className={classes.GridSenhaStyle}>
                <TextField
                  required
                  label="Confirme senha"
                  variant="standard"
                  type={tipoText}
                  value={confirmarSenha}
                  onChange={this.handlerConfirmarSenhaChange}
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
    );
  }
}

SignIn.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
