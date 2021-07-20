import firebase from "firebase";
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../../molecules/Spinner";
import Produto from "../Produto";

const contexto = React.createContext();

export function obterContexto() {
  return contexto;
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export function usarAutenticacao() {
  return useContext(contexto);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [pending, setPending] = useState(true);
  let inicializar;
  if (!firebase.apps.length) {
    inicializar = firebase.initializeApp(firebaseConfig);
  } else {
    inicializar = firebase.app(); // if already initialized, use that one
  }
  const db = firebase.firestore();

  const auth = firebase.auth();
  useEffect(() => {
    inicializar.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <Spinner />;
  }
  function criarConta(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function loginGoogle() {
    // define com o que vai logar
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);
  }
  function loginGoogleRedirect() {
    return auth.getRedirectResult();
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  function verificarEmail() {
    currentUser.sendEmailVerification();
  }
  function lerProdutos() {
    return db
      .collection("produtos")
      .get()
      .then((querySnapshot) => {
        const temp = [];
        querySnapshot.forEach((doc) =>
          temp.push(
            new Produto(
              doc.data().ImagemTitulo,
              doc.data().ImagemLink,
              doc.data().ProdutoNome,
              doc.data().Preco,
              doc.data().Quantidade
            )
          )
        );
        return temp;
      });
  }
  function lerQuantidadeProdutos(quantidade) {
    return db
      .collection("produtos")
      .get()
      .then((querySnapshot) => {
        const temp = [];
        let i = 0;
        querySnapshot.forEach((doc) => {
          if (quantidade >= i)
            temp.push(
              new Produto(
                doc.data().ImagemTitulo,
                doc.data().ImagemLink,
                doc.data().ProdutoNome,
                doc.data().Preco,
                doc.data().Quantidade
              )
            );
          i += 1;
        });
        return temp;
      });
  }

  const value = {
    currentUser,
    login,
    loginGoogle,
    loginGoogleRedirect,
    criarConta,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    lerProdutos,
    lerQuantidadeProdutos,
    verificarEmail,
  };
  return <contexto.Provider value={value}>{children}</contexto.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
