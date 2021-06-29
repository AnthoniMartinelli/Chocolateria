import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyDCQu2X-iD3tau0CHUxk_yuU-KPeAoefbI",
  authDomain: "chocolateria-e40ef.firebaseapp.com",
  projectId: "chocolateria-e40ef",
  storageBucket: "chocolateria-e40ef.appspot.com",
  messagingSenderId: "43905563529",
  appId: "1:43905563529:web:5f3ddc672322752d0c7f58",
  measurementId: "G-J65LJ7Y1N6",
};
export function LoginComEmailSenha(email, senha) {
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
