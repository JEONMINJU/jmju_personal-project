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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

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
const dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");

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
        comment: _commentText,
        date: dayjs().format("YYYY.MM.DD HH:mm:ss")
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

  const headerMenu = () => {
    const $menu = document.getElementById('js__header__menu'); //입력된 텍스트
    const $menuDepth = document.getElementById('js__menu');
    $menu.addEventListener("click", function () {
      $menuDepth.classList.add('show');
    });
  };

  const layout_init = () => {
    searchEvent();
    storiesEvent();
    commentEvent();
    headerMenu();
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