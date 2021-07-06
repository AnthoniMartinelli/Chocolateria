import firebase from "firebase";
import React, { useContext, useState, useEffect } from "react";
import Spinner from "../molecules/Spinner";

const contexto = React.createContext();

export { contexto };

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const initialize = firebase.initializeApp(firebaseConfig);

/* export function LoginComEmailSenha(email, senha) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, senha)
    .then((userCredentials) => {
      const { user } = userCredentials;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

export function SignInComEmailSenha(email, senha) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, senha)
    .then(({ user }) => {
      // Signed in
      const usuario = user;
      const unique = usuario.uid;
      console.log(unique);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
} */

export function usarAutenticacao() {
  return useContext(contexto);
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [pending, setPending] = useState(true);
  const auth = firebase.auth();
  useEffect(() => {
    initialize.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <Spinner />;
  }
  function criarConta(email, password) {
    try {
      auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      return error;
    }
    return "";
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
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

  const value = {
    currentUser,
    login,
    criarConta,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };
  return <contexto.Provider value={value}>{children}</contexto.Provider>;
}
