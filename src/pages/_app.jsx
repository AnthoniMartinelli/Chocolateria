import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AuthProvider } from "../atoms/services/firebase";
import theme from "../atoms/tema";
import Cabecario from "../templates/Cabecario";
import Rodape from "../molecules/Rodape";
import { CarrinhoProvider } from "../atoms/Carrinho";

function App({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <CarrinhoProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width" />
            <meta http-Equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
            />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
            <title>Chocolates E Cia</title>
          </Head>
          <CssBaseline />
          <Cabecario />
          <Component {...pageProps} />
          <Rodape />
        </ThemeProvider>
      </AuthProvider>
    </CarrinhoProvider>
  );
}

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Component: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

export default App;
