// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import "firebaseui/dist/firebaseui.css";
import * as firebaseui from "firebaseui";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// const firebase = require("firebase");

export const firebaseConfig = {
  apiKey: "AIzaSyDCQu2X-iD3tau0CHUxk_yuU-KPeAoefbI",
  authDomain: "chocolateria-e40ef.firebaseapp.com",
  projectId: "chocolateria-e40ef",
  storageBucket: "chocolateria-e40ef.appspot.com",
  messagingSenderId: "43905563529",
  appId: "1:43905563529:web:5f3ddc672322752d0c7f58",
  measurementId: "G-J65LJ7Y1N6",
};
// Initialize Firebase
const initialize = initializeApp(firebaseConfig);
const analytics = getAnalytics();
const auth = getAuth();

// Initialize the FirebaseUI Widget using Firebase.
// bote onde for fazer login
export const uiConfig = {
  signInSuccessUrl: "http://localhost:8080/",
  signInOptions: [
    window.fire
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};
export const ui = new firebaseui.auth.AuthUI(auth);

/* if (ui.isPendingRedirect()) {
  ui.start("#firebaseui-auth-container", uiConfig);
} */
// esperar o dom renderizar
ui.start("#firebaseui-auth-container", uiConfig);
