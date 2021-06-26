import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
    };
  }

  handlerEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlerSenhaChange(event) {
    this.setState({ senha: event.target.value });
  }

  render() {
    const { email, senha } = this.state;
    return (
      <section>
        <Card>
          <CardContent>
            <form>
              <TextField
                required
                label="Emali"
                variant="standard"
                value={email}
                onChange={this.handlerEmailChange}
              />
              <TextField
                required
                label="senha"
                variant="standard"
                type="password"
                value={senha}
                onChange={this.handlerSenhaChange}
              />
            </form>
          </CardContent>
        </Card>
      </section>
    );
  }
}
