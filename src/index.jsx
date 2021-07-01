/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { AuthProvider, firebaseConfig } from "./atoms/firebase/dados";
import Store from "./molecules/Store";
import Home from "./pages/Home";
import Cabecario from "./organisms/Cabecario";
import About from "./pages/About";
import theme from "./atoms/tema";
import Login from "./pages/Login";

import Trufas from "./atoms/img/Trufas.png";
import Tabletes from "./atoms/img/Tabletes.png";
import Favoritos from "./atoms/img/Favoritos.png";
import SignIn from "./pages/SignIn";

// fazer imports com lazy
console.log(process.env.REACT_APP_FIREBASE_KEY);
const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Cabecario />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/aboutus" component={About} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(
  <AuthProvider>
    <Provider store={Store}>
      <App />
    </Provider>
  </AuthProvider>,
  document.querySelector("#root")
);
