import firebase from "firebase";
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "../../molecules/Spinner";

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
  // testar
  function loginGoogle() {
    const provider = auth.GoogleAuthProvider();
    auth().signInWithPopup(provider);
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
  // terminar
  function verificarEmail(email) {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: "http://localhost:3000/",
      // This must be true.
      handleCodeInApp: true,
      dynamicLinkDomain: "http://localhost:3000/",
    };
    auth.sendSignInLinkToEmail(email, actionCodeSettings);
  }

  const value = {
    currentUser,
    login,
    loginGoogle,
    criarConta,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    verificarEmail,
  };
  return <contexto.Provider value={value}>{children}</contexto.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
