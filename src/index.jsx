import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { AuthProvider } from "./atoms/firebase";
import theme from "./atoms/tema";
import Spinner from "./molecules/Spinner";
/* import Home from "./pages/Home";
import Cabecario from "./organisms/Cabecario";
import About from "./pages/About";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn"; */
const Cabecario = lazy(() => import("./organisms/Cabecario"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SignIn = lazy(() => import("./pages/SignIn"));
const About = lazy(() => import("./pages/About"));
const RotaPrivada = lazy(() => import("./molecules/RotaPrivada"));
const Membros = lazy(() => import("./pages/Membros"));

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Spinner />}>
        <Cabecario />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/About" component={About} />
          <RotaPrivada path="/Membros" component={Membros} />
        </Switch>
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.querySelector("#root")
);
