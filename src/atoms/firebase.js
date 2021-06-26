import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDCQu2X-iD3tau0CHUxk_yuU-KPeAoefbI",
  authDomain: "chocolateria-e40ef.firebaseapp.com",
  projectId: "chocolateria-e40ef",
  storageBucket: "chocolateria-e40ef.appspot.com",
  messagingSenderId: "43905563529",
  appId: "1:43905563529:web:5f3ddc672322752d0c7f58",
  measurementId: "G-J65LJ7Y1N6",
};
// Inicialização do Firebase
const initialize = initializeApp(firebaseConfig);
const analytics = getAnalytics();
const auth = getAuth();
