/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import firebase from "firebase";
import { firebaseConfig } from "./atoms/firebase/dados";
import Store from "./molecules/Store";
import Home from "./pages/Home";
import Cabecario from "./organisms/Cabecario";
import About from "./pages/About";
import Buy from "./pages/Buy";
import theme from "./atoms/tema";
import Login from "./pages/Login";

import Trufas from "./atoms/img/Trufas.png";
import Tabletes from "./atoms/img/Tabletes.png";
import Favoritos from "./atoms/img/Favoritos.png";
import SignIn from "./pages/SignIn";

// fazer imports com lazy

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Cabecario />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/aboutus" component={About} />
        <Route path="/buy" component={Buy} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);
const initialize = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const auth = firebase.auth();
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
