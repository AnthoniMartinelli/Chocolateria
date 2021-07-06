exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 7966:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kr": function() { return /* binding */ obterContexto; },
/* harmony export */   "dB": function() { return /* binding */ usarAutenticacao; },
/* harmony export */   "Ho": function() { return /* binding */ AuthProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7005);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _molecules_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3786);




const contexto = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createContext();
function obterContexto() {
  return contexto;
}
const firebaseConfig = {
  apiKey: "AIzaSyDCQu2X-iD3tau0CHUxk_yuU-KPeAoefbI",
  authDomain: "chocolateria-e40ef.firebaseapp.com",
  projectId: "chocolateria-e40ef",
  storageBucket: "chocolateria-e40ef.appspot.com",
  messagingSenderId: "43905563529",
  appId: "1:43905563529:web:5f3ddc672322752d0c7f58",
  measurementId: "G-J65LJ7Y1N6"
};
const initialize = firebase__WEBPACK_IMPORTED_MODULE_1___default().initializeApp(firebaseConfig);
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

function usarAutenticacao() {
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(contexto);
} // eslint-disable-next-line react/prop-types

function AuthProvider({
  children
}) {
  const {
    0: currentUser,
    1: setCurrentUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: pending,
    1: setPending
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const auth = firebase__WEBPACK_IMPORTED_MODULE_1___default().auth();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    initialize.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_molecules_Spinner__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {});
  }

  function criarConta(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
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
    updatePassword
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexto.Provider, {
    value: value,
    children: children
  });
}

/***/ }),

/***/ 3786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Spinner; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5477);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);




const styles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(() => ({
  gridStyle: {
    width: "100%",
    height: "100%"
  }
}));
function Spinner() {
  const classes = styles();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    container: true,
    item: true,
    className: classes.gridStyle,
    xs: 12,
    justify: "center",
    alignItems: "center",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})
  });
}

/***/ })

};
;