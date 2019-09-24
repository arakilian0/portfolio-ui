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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/main.js":
/*!************************************!*\
  !*** ./src/assets/scripts/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/index */ \"./src/assets/scripts/views/index.js\");\n/* harmony import */ var _views_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_index__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/info */ \"./src/assets/scripts/views/info.js\");\n/* harmony import */ var _views_info__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_info__WEBPACK_IMPORTED_MODULE_1__);\n\n \n\n\n//# sourceURL=webpack:///./src/assets/scripts/main.js?");

/***/ }),

/***/ "./src/assets/scripts/views/index.js":
/*!*******************************************!*\
  !*** ./src/assets/scripts/views/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let navBars = document.querySelector(\".nav-bars\");\nlet mobileHeader = document.querySelector(\".mobile-header\");\nlet mobileHeaderBody = document.querySelector(\".mobile-header-body\");\nlet navCloser = document.querySelector(\".nav-closer\");\nlet heroTitle = document.querySelector(\".hero-text-middle\");\nlet resumeBtn = document.querySelector(\".button-resume\");\nlet flipBox = document.querySelector(\".flip-box\");\nlet flipBoxFront = document.querySelector(\".flip-box-front\");\nlet flipBoxContainer = document.querySelector(\".flip-box-container\");\nlet flipBoxBackContent = document.querySelector(\".flip-box-back-content\");\nlet bodyTag = document.querySelector('body');\nlet resumeCloser = document.querySelector('.resume-closer');\nlet flippedFooter = document.querySelector('.flipped-footer');\nlet footerTag = document.querySelector('footer');\n\nnavBars.addEventListener(\"click\", function() {\n\tmobileHeader.classList.remove('mobile-header-close-animation');\n\tmobileHeader.style.display = \"block\";\n\theroTitle.style.display = \"none\";\n\tnavCloser.style.display = \"inline-block\";\n\tmobileHeaderBody.style.display = \"flex\";\n});\n\nnavCloser.addEventListener(\"click\", function() {\n\tsetTimeout(() => {\n\t\tmobileHeader.style.display = \"none\";\n\t},600);\n\tmobileHeader.classList.add('mobile-header-close-animation');\n\theroTitle.style.display = \"flex\";\n\tnavCloser.style.display = \"none\";\n\tmobileHeaderBody.style.display = \"none\";\n});\n\nresumeBtn.addEventListener(\"click\", function() {\n\tbodyTag.style.background = \"#4b367c\";\n\tflipBoxFront.style.display = \"none\";\n\tflipBoxContainer.style.transform = \"rotateY(-180deg)\";\n\tflipBoxContainer.style.transition = \"transform 1.3s\";\n\tflipBoxBackContent.style.display = \"block\";\n});\n\nresumeCloser.addEventListener(\"click\", function() {\n\tbodyTag.style.background = \"#19171c\";\n\tflipBoxContainer.style.transform = \"rotateY(0deg)\";\n\tflipBoxContainer.style.transition = \"transform 1.3s\";\n\t// flipBoxBackContent.style.display = \"none\";\n\tflippedFooter.style.display = \"block\";\n\tsetTimeout(flipBoxFront.style.display = \"block\",2000);\n\tsetTimeout(flipBoxBackContent.style.display = \"none\", 2000);\n\tfooterTag.style.display = \"none\";\n});\n\n\n//# sourceURL=webpack:///./src/assets/scripts/views/index.js?");

/***/ }),

/***/ "./src/assets/scripts/views/info.js":
/*!******************************************!*\
  !*** ./src/assets/scripts/views/info.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/scripts/views/info.js?");

/***/ })

/******/ });