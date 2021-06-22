/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import Home from "./pages/Home";
import Cabecario from "./organisms/Cabecario";
import About from "./pages/About";
import Buy from "./pages/Buy";
import theme from "./atoms/tema";
import Trufas from "./atoms/img/Trufas.png";
import Tabletes from "./atoms/img/Tabletes.png";
import Favoritos from "./atoms/img/Favoritos.png";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Cabecario />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" component={About} />
        <Route path="/buy" component={Buy} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.querySelector("#root"));
