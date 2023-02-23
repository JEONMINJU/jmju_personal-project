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
  const appName = document.querySelector("body");
  console.log(appName);

  if (appName) {
    [_divide_layout__WEBPACK_IMPORTED_MODULE_0__["default"], appMethods[appName]].forEach(method => {
      if (method) method();
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
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
// const dayjs = require("dayjs");

const layout = () => {
  /* 상단 검색 */
  const searchEvent = () => {
    const storiesBox = document.getElementById("js__stories__box");
    const searchInput = document.getElementById("search");
    const searchBtn = document.getElementById("searchBtn");
    const searchReset = document.getElementById("searchReset");

    const showList = (_searchValue = "") => {
      storiesBox.innerHTML = "";
      const storiesArr = searchSample.forEach(test => {
        if (test.name.includes(_searchValue)) {
          const storiesList = document.createElement("li");
          storiesList.className = "stories__list js__stories__list";
          storiesList.innerHTML = `
                        <figure class="stories__img">
                            <img src='${test.url}' alt="">
                        </figure>
                        <p class="stories__name">${test.name}</p>
                    `;
          storiesBox.appendChild(storiesList);
        }
      });
    };

    showList(); //기본실행

    /* 검색 버튼 클릭시 */
    searchBtn.addEventListener("click", e => {
      e.preventDefault();

      let _searchValue = searchInput.value;
      showList(_searchValue);

      searchInput.value = "";

      console.log("검색어 : ", _searchValue);
    });

    /* 키보드 엔터시 */
    searchInput.addEventListener("keyup", function (e) {
      if (event.keyCode === 13) {
        e.preventDefault();
        searchBtn.click();
      }

      /* 검색어 입력시 리셋버튼 노출 */
      if (searchInput.value.length > 1) {
        searchReset.classList.add("show");
      } else {
        searchReset.classList.remove("show");
      }
    });

    /* 리셋 버튼 클릭시 */
    searchReset.addEventListener("click", function (e) {
      e.preventDefault();
      searchInput.value = "";
      searchReset.classList.remove("show");
    });
  };

  /* 상단 스토리 리스트 클릭 */
  const storiesEvent = () => {
    const $storyList = document.querySelectorAll(".js__stories__list");
    const $contentWrapper = document.querySelectorAll(".js__container__wrapper .js__container__inner");

    for (let i = 0; i < $storyList.length; i++) {
      $storyList[i].addEventListener("click", function () {
        console.log("클릭", i);
        /* 전체 remove on */
        $contentWrapper.forEach(element => {
          element.classList.remove("on");
        });

        /* addClass on */
        $contentWrapper[i].classList.add("on");
      });
    }
  };

  /* 댓글 이벤트 */
  const commentEvent = () => {
    const $currentText = document.getElementById("js__comment__byte"); //입력된 텍스트
    const $textArea = document.getElementById("js__comment__textarea"); //입력영역
    const $commentBox = document.querySelector(".js__comment__box"); //댓글박스
    const $submitButton = document.getElementById("submit"); //등록 버튼
    const comment_KEY = "comments";
    let commentArray = []; //빈배열 생성

    $textArea.addEventListener("input", event => {
      $currentText.innerText = event.target.value.length;
    });

    /* 등록된 댓글 저장 */
    const saveComments = () => {
      localStorage.setItem(comment_KEY, JSON.stringify(commentArray)); // 배열 저장
    };
    /* 함수선언식*/
    // function saveComments() {
    // };

    /* 리스트 delete */
    const deleteList = event => {
      const list = event.target.parentElement;
      list.remove();

      /* 클릭한 버튼의  id값이랑 로컬에 저장된 id값이 같으면 배열에 넣지 않는다. */
      const cleanArr = commentArray.filter(comment => comment.id !== parseInt(list.id));

      /* 필터로 만든 배열을 기본 배열에 다시 담아준다.  */
      commentArray = cleanArr;

      /* 저장을 꼭 해줘야함..  */
      saveComments();

      console.log(list.id, cleanArr);
    };

    /* 리스트 append */
    const appendList = object => {
      /* 리스트 태그 생성 */
      const li = document.createElement("li");
      const writeDate = document.createElement("span");
      const moreButton = document.createElement("span"); //더보기버튼
      const deleteButton = document.createElement("button"); //삭제버튼
      const content = document.createElement("span");
      li.id = object.id;

      moreButton.innerHTML = '<button class="comment__more js__comment__more">더보기</button>';
      deleteButton.innerText = "X";
      deleteButton.addEventListener("click", deleteList);
      writeDate.innerHTML = object.date;
      content.innerHTML = "<p>" + object.comment + "</p>";

      li.prepend(writeDate);
      li.prepend(moreButton);
      li.prepend(deleteButton);
      li.prepend(content);
      $commentBox.prepend(li);
    };

    /* 최종 서브밋 */
    const handleSubmit = () => {
      const commentId = commentArray.length;
      const _commentText = $textArea.value; //text값 가져오기

      $textArea.value = "";

      const object = {
        id: commentId,
        comment: _commentText
        // date: dayjs().format("YYYY.MM.DD HH:mm:ss"),
      };

      commentArray.push(object);

      /* 빈값 체크 */
      if (_commentText != "" && _commentText.length < 100) {
        appendList(object);
      } else {
        alert("텍스트를 1 ~ 100자 이하로 입력해주세요.");
      }
      saveComments(); //로컬스토리지 저장
    };

    const localStorage_Key = localStorage.getItem(comment_KEY);

    /* 로컬스토리지 저장된 값이 있으면 불러오기 */
    if (localStorage_Key !== null) {
      const getCommentList = JSON.parse(localStorage_Key);
      commentArray = getCommentList;
    }

    // getCommentList.forEach(appendList);

    console.log(commentArray, "로컬에 저장된 값");

    /* 등록 버튼 클릭 */
    $submitButton.addEventListener("click", () => {
      handleSubmit();
    });
  };

  const layout_init = () => {
    searchEvent();
    storiesEvent();
    commentEvent();
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