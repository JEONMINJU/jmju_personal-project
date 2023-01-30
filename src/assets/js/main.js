/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dist/js/app.js":
/*!****************************!*\
  !*** ./src/dist/js/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _divide_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divide/layout */ "./src/dist/js/divide/layout.js");
/* harmony import */ var _exclude_exclude__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exclude/exclude */ "./src/dist/js/exclude/exclude.js");
// import {test} from '../js/test';

// window.addEventListener('DOMContentLoaded', () => {
//     const el = document.querySelector("#mj");
//     const minju = "민 주"
//     el.innerHTML = `
//         <h1>${test(minju, 123)} webpack 설정!!!</h1>
//     `
// });

/**
 * Created by jmju on 2023-01-26.
 */




const appMethods = {
    layout: _divide_layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    exclude: _exclude_exclude__WEBPACK_IMPORTED_MODULE_1__["default"]
};

const appInit = () => {
    const appName = document.querySelector('body');
    console.log(appName);

    if (appName) {
        [_divide_layout__WEBPACK_IMPORTED_MODULE_0__["default"], _exclude_exclude__WEBPACK_IMPORTED_MODULE_1__["default"], appMethods[appName]].forEach(method => {
            if (method) method();

            console.log(method);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    appInit();
});

/***/ }),

/***/ "./src/dist/js/divide/layout.js":
/*!**************************************!*\
  !*** ./src/dist/js/divide/layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by jmju on 2023-01-26.
 */
const layout = () => {
    /* 댓글 이벤트 */
    const commentEvent = () => {
        const currentText = document.getElementsByClassName("js__comment__byte");
        const textArea = document.getElementById("js__comment__textarea");

        /* 
            1. textarea의 입력되는 value값의 length를   
            2. js__comment__byte 에 뿌려준다.
            3.
        */

        textArea.addEventListener('input', () => {
            console.log("여기2@@@@@");
        });

        for (let i = 0; i < currentText.length; i++) {
            currentText[i].innerText;

            console.log(currentText[i]);
        };

        console.log(document.getElementById("header"));
    };

    const layout_init = () => {
        commentEvent();
    };

    layout_init();
};

/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ }),

/***/ "./src/dist/js/exclude/exclude.js":
/*!****************************************!*\
  !*** ./src/dist/js/exclude/exclude.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const exclude = () => {
    console.log("exclude testttt2");
};

/* harmony default export */ __webpack_exports__["default"] = (exclude);

/***/ }),

/***/ "./src/dist/scss/app.scss":
/*!********************************!*\
  !*** ./src/dist/scss/app.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./src/dist/js/app.js ./src/dist/scss/app.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/dist/js/app.js */"./src/dist/js/app.js");
module.exports = __webpack_require__(/*! ./src/dist/scss/app.scss */"./src/dist/scss/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map