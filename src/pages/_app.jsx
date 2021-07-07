/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core";
import { AuthProvider } from "../atoms/firebase";
import theme from "../atoms/tema";

import Cabecario from "../organisms/Cabecario";

// eslint-disable-next-line no-unused-vars
function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <meta http-Equiv="X-UA-Compatible" content="ie=edge" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
          <title>Chocolates E Cia</title>
        </Head>
        <Cabecario />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
