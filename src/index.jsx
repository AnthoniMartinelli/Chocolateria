import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { AuthProvider } from "./atoms/firebase/dados";
import Store from "./molecules/Store";
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

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Spinner />}>
        <Cabecario />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/aboutus" component={About} />
        </Switch>
      </Suspense>
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
