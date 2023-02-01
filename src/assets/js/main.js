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
    layout: _divide_layout__WEBPACK_IMPORTED_MODULE_0__["default"]
};

const appInit = () => {
    const appName = document.querySelector('body');
    console.log(appName);

    if (appName) {
        [_divide_layout__WEBPACK_IMPORTED_MODULE_0__["default"], appMethods[appName]].forEach(method => {
            if (method) method();
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
        const $currentText = document.getElementById("js__comment__byte"); //입력된 텍스트
        const $textArea = document.getElementById("js__comment__textarea"); //입력영역
        const $commentBox = document.querySelector(".js__comment__box"); //댓글박스
        const $submitButton = document.getElementById("submit"); //등록 버튼

        $textArea.addEventListener('input', event => {
            $currentText.innerText = event.target.value.length;
        });

        /* 리스트 append */
        function appendList(_commentText) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.innerHTML = _commentText;
            li.appendChild(span);
            $commentBox.appendChild(li);
        }

        /* 텍스트 value */
        function getTextValue() {
            const _commentText = $textArea.value;
            appendList(_commentText);

            $textArea.value = "";
        }

        /* 등록 버튼 클릭 */
        $submitButton.addEventListener("click", () => {
            getTextValue();
        });
    };

    /* 상단 스토리 리스트 클릭 */
    const storiesEvent = () => {
        const $storyList = document.querySelectorAll(".js__stories__list");
        const $contentWrapper = document.querySelectorAll(".mj__container__wrapper .mj__container__inner");

        for (let i = 0; i < $storyList.length; i++) {
            $storyList[i].addEventListener("click", function () {
                /* 전체 remove on */
                $contentWrapper.forEach(element => {
                    element.classList.remove("on");
                });
                $contentWrapper[i].classList.add("on");
            });
        };
    };

    const layout_init = () => {
        commentEvent();
        storiesEvent();
    };

    layout_init();
};

/* harmony default export */ __webpack_exports__["default"] = (layout);

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