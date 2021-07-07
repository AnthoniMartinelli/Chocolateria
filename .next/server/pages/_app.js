(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4996:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T$": function() { return /* binding */ primary; }
/* harmony export */ });
/* unused harmony export secondary */
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["ZP"] = ((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({
  palette: {
    primary: {
      main: "#852508"
    },
    secondary: {
      main: "#1de9b6"
    }
  }
}));
const primary = "#852508";
const secondary = "#1de9b6";

/***/ }),

/***/ 286:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./src/atoms/firebase.jsx
var firebase = __webpack_require__(7966);
// EXTERNAL MODULE: ./src/atoms/tema.js
var tema = __webpack_require__(4996);
;// CONCATENATED MODULE: external "@material-ui/core/styles/makeStyles"
var makeStyles_namespaceObject = require("@material-ui/core/styles/makeStyles");;
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
;// CONCATENATED MODULE: ./src/molecules/BtnLoginLogout.jsx




const useStyles = (0,core_.makeStyles)(() => ({
  btnStyle: {
    float: "right",
    marginRight: "1%"
  }
}));
function BtnLoginLogout() {
  const classes = useStyles();
  const {
    currentUser,
    logout
  } = (0,firebase/* usarAutenticacao */.dB)();

  if (currentUser) {
    return /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
      variant: "contained",
      color: "secondary",
      className: classes.btnStyle,
      onClick: () => {
        logout();
        window.location.href = "/";
      },
      children: "Sair"
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
    variant: "contained",
    color: "secondary",
    className: classes.btnStyle,
    href: "/Login",
    children: "Login"
  });
}
;// CONCATENATED MODULE: ./src/organisms/Cabecario.jsx








const Cabecario_useStyles = makeStyles_default()(() => ({
  root: {
    backgroundColor: tema/* primary */.T$
  },
  btnHeaderStyle: {
    marginLeft: "1%"
  }
}));
function Cabecario() {
  const classes = Cabecario_useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
    container: true,
    spacing: 2,
    justify: "space-between",
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
      item: true,
      xs: 6,
      children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
        children: "Chocolates e Cia"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
      item: true,
      xs: 6,
      children: /*#__PURE__*/jsx_runtime_.jsx(BtnLoginLogout, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
      item: true,
      container: true,
      direction: "row",
      justify: "flex-end",
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        variant: "contained",
        color: "secondary",
        className: classes.btnHeaderStyle,
        href: "/",
        children: "Home"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        variant: "contained",
        color: "secondary",
        className: classes.btnHeaderStyle,
        children: "Produtos"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        variant: "contained",
        color: "secondary",
        className: classes.btnHeaderStyle,
        href: "/About",
        children: "Sobre n\xF3s"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        variant: "contained",
        color: "secondary",
        className: classes.btnHeaderStyle,
        children: "Encomende"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/pages/_app.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-props-no-spreading */





 // eslint-disable-next-line no-unused-vars

function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(firebase/* AuthProvider */.Ho, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.ThemeProvider, {
      theme: tema/* default */.ZP,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          charset: "UTF-8"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "viewport",
          content: "width=device-width"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          "http-Equiv": "X-UA-Compatible",
          content: "ie=edge"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        }), /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "Chocolates E Cia"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Cabecario, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 4047:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 9137:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ 2958:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ 3536:
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ 7005:
/***/ (function(module) {

"use strict";
module.exports = require("firebase");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [477,318,966], function() { return __webpack_exec__(286); });
module.exports = __webpack_exports__;

})();