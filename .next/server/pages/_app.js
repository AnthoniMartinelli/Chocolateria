(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4996:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T$": function() { return /* binding */ primary; },
/* harmony export */   "BD": function() { return /* binding */ secondary; }
/* harmony export */ });
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

/***/ 3672:
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
// EXTERNAL MODULE: ./src/atoms/services/firebase.jsx
var firebase = __webpack_require__(3468);
// EXTERNAL MODULE: ./src/atoms/tema.js
var tema = __webpack_require__(4996);
;// CONCATENATED MODULE: external "@material-ui/core/styles/makeStyles"
var makeStyles_namespaceObject = require("@material-ui/core/styles/makeStyles");;
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_namespaceObject);
;// CONCATENATED MODULE: external "react-responsive"
var external_react_responsive_namespaceObject = require("react-responsive");;
var external_react_responsive_default = /*#__PURE__*/__webpack_require__.n(external_react_responsive_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(4651);
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
;// CONCATENATED MODULE: ./src/organisms/CabecarioDesktop.jsx








const CabecarioDesktop_useStyles = makeStyles_default()(() => ({
  btnHeaderStyle: {
    marginLeft: "1%"
  }
}));
function CabecarioDesktop() {
  const classes = CabecarioDesktop_useStyles();
  const router = (0,client_router.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
    container: true,
    spacing: 2,
    justify: "space-between",
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
        onClick: () => router.push("/"),
        children: "Home"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        variant: "contained",
        color: "secondary",
        className: classes.btnHeaderStyle,
        onClick: () => router.push("/Produtos"),
        children: "Produtos"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        variant: "contained",
        color: "secondary",
        className: classes.btnHeaderStyle,
        onClick: () => router.push("/About"),
        children: "Sobre n\xF3s"
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        variant: "contained",
        color: "secondary",
        className: classes.btnHeaderStyle,
        onClick: () => router.push("/Encomende"),
        children: "Encomende"
      })]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(5258);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeableDrawer.js + 6 modules
var SwipeableDrawer = __webpack_require__(1571);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(8358);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
;// CONCATENATED MODULE: external "@material-ui/icons/Menu"
var Menu_namespaceObject = require("@material-ui/icons/Menu");;
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(2822);
;// CONCATENATED MODULE: external "@material-ui/icons/Home"
var Home_namespaceObject = require("@material-ui/icons/Home");;
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Store"
var Store_namespaceObject = require("@material-ui/icons/Store");;
var Store_default = /*#__PURE__*/__webpack_require__.n(Store_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(6869);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(5757);
;// CONCATENATED MODULE: external "@material-ui/icons/Description"
var Description_namespaceObject = require("@material-ui/icons/Description");;
var Description_default = /*#__PURE__*/__webpack_require__.n(Description_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/ShoppingCart"
var ShoppingCart_namespaceObject = require("@material-ui/icons/ShoppingCart");;
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_namespaceObject);
;// CONCATENATED MODULE: ./src/organisms/CabecarioMobile.jsx






















const styles = (0,core_.makeStyles)(() => ({
  DrawerStyle: {
    backgroundColor: tema/* secondary */.BD
  }
}));
function CabecarioMobile() {
  const classes = styles();
  const {
    0: menu,
    1: setMenu
  } = (0,external_react_.useState)(false);
  const router = (0,client_router.useRouter)();

  const abrirMenu = () => {
    setMenu(true);
  };

  const fecharMenu = () => {
    setMenu(false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(AppBar/* default */.Z, {
    position: "static",
    children: /*#__PURE__*/jsx_runtime_.jsx(Toolbar/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        justify: "space-between",
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          item: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(SwipeableDrawer/* default */.Z, {
            classes: {
              paper: classes.DrawerStyle
            },
            ModalProps: {
              onBackdropClick: fecharMenu
            },
            open: menu,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(List/* default */.Z, {
              onClick: () => fecharMenu(),
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem/* default */.Z, {
                button: true,
                onClick: () => router.push("/"),
                children: [/*#__PURE__*/jsx_runtime_.jsx(ListItemIcon/* default */.Z, {
                  children: /*#__PURE__*/jsx_runtime_.jsx((Home_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
                  primary: "Home"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem/* default */.Z, {
                button: true,
                onClick: () => router.push("/Produtos"),
                children: [/*#__PURE__*/jsx_runtime_.jsx(ListItemIcon/* default */.Z, {
                  children: /*#__PURE__*/jsx_runtime_.jsx((Store_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
                  primary: "Produtos"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem/* default */.Z, {
                button: true,
                onClick: () => router.push("/About"),
                children: [/*#__PURE__*/jsx_runtime_.jsx(ListItemIcon/* default */.Z, {
                  children: /*#__PURE__*/jsx_runtime_.jsx((Description_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
                  primary: "Sobre N\xF3s"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListItem/* default */.Z, {
                button: true,
                onClick: () => router.push("/Encomende"),
                children: [/*#__PURE__*/jsx_runtime_.jsx(ListItemIcon/* default */.Z, {
                  children: /*#__PURE__*/jsx_runtime_.jsx((ShoppingCart_default()), {})
                }), /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
                  primary: "Encomende"
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
            onClick: () => abrirMenu(),
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            children: /*#__PURE__*/jsx_runtime_.jsx((Menu_default()), {})
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
          variant: "h6",
          children: "Chocolates e Cia"
        }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(BtnLoginLogout, {})
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/templates/Cabecario.jsx








const Cabecario_useStyles = makeStyles_default()(() => ({
  root: {
    backgroundColor: tema/* primary */.T$
  }
}));
function Cabecario() {
  const classes = Cabecario_useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_responsive_default()), {
      minDeviceWidth: 460,
      children: /*#__PURE__*/jsx_runtime_.jsx(CabecarioDesktop, {})
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_responsive_default()), {
      maxDeviceWidth: 460,
      children: /*#__PURE__*/jsx_runtime_.jsx(CabecarioMobile, {})
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

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ 2268:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ 3810:
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [263,228,485,400,468], function() { return __webpack_exec__(3672); });
module.exports = __webpack_exports__;

})();