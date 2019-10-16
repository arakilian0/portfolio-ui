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

/***/ "./src/assets/scripts/lib/loader.js":
/*!******************************************!*\
  !*** ./src/assets/scripts/lib/loader.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let loaderContainer = document.querySelector(\".loader-container\");\nlet loaderIcon = document.querySelector(\".loader-icon\");\nlet htmlTag = document.querySelector(\"html\");\nlet docsMenu = document.querySelector(\".docs-fixed-container\");\nlet docsMenuDropdownTrigger1 = document.getElementById(\"#docsMenuDropdownTrigger1\");\nlet docsMenuDropdownTrigger2 = document.getElementById(\"#docsMenuDropdownTrigger2\");\nlet docsMenuDropdownTrigger3 = document.getElementById(\"#docsMenuDropdownTrigger3\");\nlet docsMenuDropdownTrigger4 = document.getElementById(\"#docsMenuDropdownTrigger4\");\nlet docsMenuDropdownTrigger5 = document.getElementById(\"#docsMenuDropdownTrigger5\");\nlet docsMenuDropdown1 = document.getElementById(\"#docsMenuDropdown1\");\nlet docsMenuDropdown2 = document.getElementById(\"#docsMenuDropdown2\");\nlet docsMenuDropdown3 = document.getElementById(\"#docsMenuDropdown3\");\nlet docsMenuDropdown4 = document.getElementById(\"#docsMenuDropdown4\");\nlet docsMenuDropdown5 = document.getElementById(\"#docsMenuDropdown5\");\nlet download1 = document.querySelector('#download1');\nlet download2 = document.querySelector('#download2');\nlet download3 = document.querySelector('#download3');\nlet downloadTrigger1 = document.querySelector('#downloadTrigger1');\nlet downloadTrigger2 = document.querySelector('#downloadTrigger2');\nlet downloadTrigger3 = document.querySelector('#downloadTrigger3');\n\nfunction downloadMenuTogglers() {\n\tdownload1.style.display = \"block\";\n\tdownloadTrigger1.style.background = \"rgba(75,54,124,0.25)\";\n\n\tdownloadTrigger1.addEventListener('click', () => {\n\t\tdownload1.style.display = \"block\";\n\t\tdownload2.style.display = \"none\";\n\t\tdownload3.style.display = \"none\";\n\t\tdownloadTrigger1.style.background = \"rgba(75,54,124,0.25)\";\n\t\tdownloadTrigger2.style.background = \"#4b367c\";\n\t\tdownloadTrigger3.style.background = \"#4b367c\";\n\t});\n\tdownloadTrigger2.addEventListener('click', () => {\n\t\tdownload1.style.display = \"none\";\n\t\tdownload2.style.display = \"block\";\n\t\tdownload3.style.display = \"none\";\n\t\tdownloadTrigger1.style.background = \"#4b367c\";\n\t\tdownloadTrigger2.style.background = \"rgba(75,54,124,0.25)\";\n\t\tdownloadTrigger3.style.background = \"#4b367c\";\n\t});\n\tdownloadTrigger3.addEventListener('click', () => {\n\t\tdownload1.style.display = \"none\";\n\t\tdownload2.style.display = \"none\";\n\t\tdownload3.style.display = \"block\";\n\t\tdownloadTrigger1.style.background = \"#4b367c\";\n\t\tdownloadTrigger2.style.background = \"#4b367c\";\n\t\tdownloadTrigger3.style.background = \"rgba(75,54,124,0.25)\";\n\t});\n}\n\nfunction docsMenuItemTogglers() {\n\tif(\n\t\tdocsMenuDropdown1 &&\n\t\tdocsMenuDropdown2 &&\n\t\tdocsMenuDropdown3 &&\n\t\tdocsMenuDropdown4 &&\n\t\tdocsMenuDropdown5 &&\n\t\tdocsMenuDropdownTrigger1 &&\n\t\tdocsMenuDropdownTrigger2 &&\n\t\tdocsMenuDropdownTrigger3 &&\n\t\tdocsMenuDropdownTrigger4 &&\n\t\tdocsMenuDropdownTrigger5\n\t) {\n\t\tdocsMenuDropdown1.style.display = 'block';\n\t\tdocsMenuDropdownTrigger1.childNodes[0].className = 'fa fa-caret-down';\n\t\tdocsMenuDropdownTrigger1.addEventListener('click', () => {\n\t\t\tif(docsMenuDropdown1.style.display == 'block') {\n\t\t\t\tdocsMenuDropdownTrigger1.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdown1.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown2.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown3.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown4.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown5.style.display = \"none\";\n\t\t\t}\n\t\t\telse {\n\t\t\t\tdocsMenuDropdownTrigger1.firstChild.className = 'fa fa-caret-down';\n\t\t\t\tdocsMenuDropdownTrigger2.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger3.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger4.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger5.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdown1.style.display = \"block\";\n\t\t\t\tdocsMenuDropdown2.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown3.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown4.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown5.style.display = \"none\";\n\t\t\t}\n\t\t});\n\t\tdocsMenuDropdownTrigger2.addEventListener('click', () => {\n\t\t\tif(docsMenuDropdown2.style.display == 'block') {\n\t\t\t\tdocsMenuDropdownTrigger2.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdown1.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown2.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown3.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown4.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown5.style.display = \"none\";\n\t\t\t}\n\t\t\telse {\n\t\t\t\tdocsMenuDropdownTrigger1.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger2.firstChild.className = 'fa fa-caret-down';\n\t\t\t\tdocsMenuDropdownTrigger3.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger4.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger5.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdown1.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown2.style.display = \"block\";\n\t\t\t\tdocsMenuDropdown3.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown4.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown5.style.display = \"none\";\n\t\t\t}\n\t\t});\n\t\tdocsMenuDropdownTrigger3.addEventListener('click', () => {\n\t\t\tif(docsMenuDropdown3.style.display == 'block') {\n\t\t\t\tdocsMenuDropdownTrigger3.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdown1.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown2.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown3.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown4.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown5.style.display = \"none\";\n\t\t\t}\n\t\t\telse {\n\t\t\t\tdocsMenuDropdownTrigger1.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger2.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger3.firstChild.className = 'fa fa-caret-down';\n\t\t\t\tdocsMenuDropdownTrigger4.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger5.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdown1.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown2.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown3.style.display = \"block\";\n\t\t\t\tdocsMenuDropdown4.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown5.style.display = \"none\";\n\t\t\t}\n\t\t});\n\t\tdocsMenuDropdownTrigger4.addEventListener('click', () => {\n\t\t\tif(docsMenuDropdown4.style.display == 'block') {\n\t\t\t\tdocsMenuDropdownTrigger4.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdown1.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown2.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown3.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown4.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown5.style.display = \"none\";\n\t\t\t}\n\t\t\telse {\n\t\t\t\tdocsMenuDropdownTrigger1.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger2.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger3.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger4.firstChild.className = 'fa fa-caret-down';\n\t\t\t\tdocsMenuDropdownTrigger5.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdown1.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown2.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown3.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown4.style.display = \"block\";\n\t\t\t\tdocsMenuDropdown5.style.display = \"none\";\n\t\t\t}\n\t\t});\n\t\tdocsMenuDropdownTrigger5.addEventListener('click', () => {\n\t\t\tif(docsMenuDropdown5.style.display == 'block') {\n\t\t\t\tdocsMenuDropdownTrigger5.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdown1.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown2.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown3.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown4.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown5.style.display = \"none\";\n\t\t\t}\n\t\t\telse {\n\t\t\t\tdocsMenuDropdownTrigger1.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger2.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger3.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger4.firstChild.className = 'fa fa-caret-right';\n\t\t\t\tdocsMenuDropdownTrigger5.firstChild.className = 'fa fa-caret-down';\n\t\t\t\tdocsMenuDropdown1.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown2.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown3.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown4.style.display = \"none\";\n\t\t\t\tdocsMenuDropdown5.style.display = \"block\";\n\t\t\t}\n\t\t});\n\t}\n}\n\nfunction spinLoader() {\n\t// console.log(loaderIcon);\n\tlet startDeg = 0;\n\tlet loaderAnimation = setInterval(function() {\n\t\tstartDeg += 20;\n\t\t// console.log(startDeg);\n\t\tloaderIcon.style.transform = `rotate(${startDeg}deg)`;\n\t}, 60);\n\tsetTimeout(function() {\n\t\tclearInterval(loaderAnimation);\n\t}, 15000);\n};\n\nfunction closeLoader() {\n\tloaderContainer.classList.add(\"loader-closer-animation\");\n\tsetTimeout(function() {\n\t\tloaderContainer.style.display = \"none\";\n\t}, 800);\n};\n\nif(document.readyState === \"ready\" || document.readyState === \"complete\") {\n\tcloseLoader();\n\tdocsMenuItemTogglers();\n\tdownloadMenuTogglers();\n\thtmlTag.classList.remove(\"overflow-hidden\");\n\tif(docsMenu) {\n\t\tdocsMenu.style.display = \"block\";\n\t}\n} else {\n\tspinLoader();\n  document.onreadystatechange = function () {\n    if (document.readyState == \"complete\") {\n      closeLoader();\n\t\t\thtmlTag.classList.remove(\"overflow-hidden\");\n\t\t\tdocsMenuItemTogglers();\n\t\t\tdownloadMenuTogglers();\n\t\t\tif(docsMenu) {\n\t\t\t\tdocsMenu.style.display = \"block\";\n\t\t\t}\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/assets/scripts/lib/loader.js?");

/***/ }),

/***/ "./src/assets/scripts/main.js":
/*!************************************!*\
  !*** ./src/assets/scripts/main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/loader */ \"./src/assets/scripts/lib/loader.js\");\n/* harmony import */ var _lib_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_loader__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/index */ \"./src/assets/scripts/views/index.js\");\n/* harmony import */ var _views_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_index__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/info */ \"./src/assets/scripts/views/info.js\");\n/* harmony import */ var _views_info__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_info__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _views_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/tools */ \"./src/assets/scripts/views/tools.js\");\n/* harmony import */ var _views_tools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_tools__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _views_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/projects */ \"./src/assets/scripts/views/projects.js\");\n/* harmony import */ var _views_projects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_views_projects__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _views_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/contact */ \"./src/assets/scripts/views/contact.js\");\n/* harmony import */ var _views_contact__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_views_contact__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _views_projects_gulpify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/projects/gulpify */ \"./src/assets/scripts/views/projects/gulpify.js\");\n/* harmony import */ var _views_projects_gulpify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_views_projects_gulpify__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _views_projects_gulpify_cli__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/projects/gulpify-cli */ \"./src/assets/scripts/views/projects/gulpify-cli.js\");\n/* harmony import */ var _views_projects_gulpify_cli__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_views_projects_gulpify_cli__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _views_tools_recognition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/tools/recognition */ \"./src/assets/scripts/views/tools/recognition.js\");\n/* harmony import */ var _views_tools_recognition__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_views_tools_recognition__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _views_projects_cola_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/projects/cola-css */ \"./src/assets/scripts/views/projects/cola-css.js\");\n/* harmony import */ var _views_projects_cola_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_views_projects_cola_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _views_projects_cola_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/projects/cola-js */ \"./src/assets/scripts/views/projects/cola-js.js\");\n/* harmony import */ var _views_projects_cola_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_views_projects_cola_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _views_tools_gamestats__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/tools/gamestats */ \"./src/assets/scripts/views/tools/gamestats.js\");\n/* harmony import */ var _views_tools_gamestats__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_views_tools_gamestats__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _views_projects_gulpify_docs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/projects/gulpify/docs */ \"./src/assets/scripts/views/projects/gulpify/docs.js\");\n/* harmony import */ var _views_projects_gulpify_docs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_views_projects_gulpify_docs__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _views_projects_gulpify_download__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/projects/gulpify/download */ \"./src/assets/scripts/views/projects/gulpify/download.js\");\n/* harmony import */ var _views_projects_gulpify_download__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_views_projects_gulpify_download__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n//# sourceURL=webpack:///./src/assets/scripts/main.js?");

/***/ }),

/***/ "./src/assets/scripts/views/contact.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/views/contact.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let formSubmitBtn = document.querySelector('#contactPageFormSubmitBtn');\nlet formName = document.querySelector('#contactPageFormName');\nlet formContact = document.querySelector('#contactPageFormContact');\nlet formMessage = document.querySelector('#contactPageFormMessage');\nlet form = document.querySelector('#contactPageForm');\nlet valMsg = document.querySelectorAll('.contact-form-val-msg');\nlet successMsg = document.querySelector('.success-message-container');\nlet successMsgCloser = document.querySelector('#successMsgCloser');\nlet post_url = \"https://dev.arakilian0.com/contact\";\n\nif(formSubmitBtn) {\n\tsuccessMsgCloser.addEventListener(\"click\", function() {\n\t\tsuccessMsg.style.display = 'none';\n\t});\n\n\tformSubmitBtn.addEventListener(\"click\", function() {\n\t\tlet params = `?name=${formName.value}&contact=${formContact.value}&message=${formMessage.value}`;\n\t\tvar http = new XMLHttpRequest();\n\t\thttp.open(\"POST\", post_url+params);\n\t\thttp.onload = function(event){\n\t\t\tlet data = JSON.parse(event.target.response);\n\t\t\t// form success\n\t\t\tif(data.validation.status == \"success\") {\n\t\t\t\tform.reset();\n\t\t\t\tvalMsg.forEach((idx) => {\n\t\t\t\t\tidx.style.display = \"none\";\n\t\t\t\t});\n\t\t\t\tsuccessMsg.style.display = 'block';\n\t\t\t\tlet url = location.href;\n\t\t\t\tlocation.href = \"#success\";\n\t\t\t}\n\t\t\t// form error\n\t\t\telse {\n\t\t\t\tvalMsg.forEach((val) => {\n\t\t\t\t\tval.style.display = \"block\";\n\t\t\t\t\t// name validation handler\n\t\t\t\t\tif(val.previousElementSibling.id == \"contactPageFormName\") {\n\t\t\t\t\t\tif(data.validation.object[0].valid) { val.innerHTML = \"\" }\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tconsole.log(data.validation.object[0]);\n\t\t\t\t\t\t\tif(!data.validation.object[0].min) {\n\t\t\t\t\t\t\t\tval.innerHTML = \"Did not meet min requirement (3)\";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif(!data.validation.object[0].max) {\n\t\t\t\t\t\t\t\tval.innerHTML = \"Exceeded max allowed (25)\";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t// contact validation handler\n\t\t\t\t\tif(val.previousElementSibling.id == \"contactPageFormContact\") {\n\t\t\t\t\t\tif(data.validation.object[1].valid) { val.innerHTML = \"\" }\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tconsole.log(data.validation.object[1]);\n\t\t\t\t\t\t\tif(!data.validation.object[1].email && !data.validation.object[1].phone) {\n\t\t\t\t\t\t\t\tval.innerHTML = \"Email or phone number invalid\";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t// message validation handler\n\t\t\t\t\tif(val.previousElementSibling.id == \"contactPageFormMessage\") {\n\t\t\t\t\t\tif(data.validation.object[2].valid) { val.innerHTML = \"\" }\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tconsole.log(data.validation.object[2]);\n\t\t\t\t\t\t\tif(!data.validation.object[2].min) {\n\t\t\t\t\t\t\t\tval.innerHTML = \"Did not meet min requirement (10)\";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif(!data.validation.object[2].max) {\n\t\t\t\t\t\t\t\tval.innerHTML = \"Exceeded max allowed (255)\";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t};\n\t\tvar formData = new FormData(form);\n\t\thttp.send(form);\n\t});\n}\n\n\n//# sourceURL=webpack:///./src/assets/scripts/views/contact.js?");

/***/ }),

/***/ "./src/assets/scripts/views/index.js":
/*!*******************************************!*\
  !*** ./src/assets/scripts/views/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let navBars = document.querySelector(\".nav-bars\");\nlet mobileHeader = document.querySelector(\".mobile-header\");\nlet mobileHeaderContainer = document.querySelector(\".mobile-header-container\");\nlet mobileHeaderBody = document.querySelector(\".mobile-header-body\");\nlet navCloser = document.querySelector(\".nav-closer\");\nlet heroTitle = document.querySelector(\".hero-text-middle\");\nlet resumeBtn = document.querySelector(\".button-resume\");\nlet flipBox = document.querySelector(\".flip-box\");\nlet flipBoxFront = document.querySelector(\".flip-box-front\");\nlet flipBoxContainer = document.querySelector(\".flip-box-container\");\nlet flipBoxBackContent = document.querySelector(\".flip-box-back-content\");\nlet bodyTag = document.querySelector('body');\nlet htmlTag = document.querySelector('html');\nlet resumeCloser = document.querySelector('.resume-closer');\nlet flippedFooter = document.querySelector('.flipped-footer');\nlet footerTag = document.querySelector('footer');\nlet stars1 = document.querySelector('#stars');\nlet stars2 = document.querySelector('#stars2');\nlet stars3 = document.querySelector('#stars3');\nlet docsMenuAnimation = document.querySelector('.docs-fixed-container');\n\nwindow.addEventListener('scroll', () => {\n\tmoveDocsMenuOnScroll(window.pageYOffset);\n});\n\nfunction moveDocsMenuOnScroll(offset) {\n\tconst target = 64;\n\n\tif(offset >= target) {\n\t\tdocsMenuAnimation.style.top = \"0\";\n\t}\n\telse {\n\t\tdocsMenuAnimation.style.top = \"108px\";\n\t}\n}\n\nnavBars.addEventListener(\"click\", function() {\n\tmobileHeader.classList.remove('mobile-header-close-animation');\n\tmobileHeader.style.display = \"block\";\n\theroTitle.style.display = \"none\";\n\tnavCloser.style.display = \"inline-block\";\n\tmobileHeaderBody.style.display = \"flex\";\n});\n\nnavCloser.addEventListener(\"click\", function() {\n\tsetTimeout(() => {\n\t\tmobileHeader.style.display = \"none\";\n\t},600);\n\tmobileHeader.classList.add('mobile-header-close-animation');\n\theroTitle.style.display = \"flex\";\n\tnavCloser.style.display = \"none\";\n\tmobileHeaderBody.style.display = \"none\";\n});\n\nresumeBtn.addEventListener(\"click\", function() {\n\tif(docsMenuAnimation) {\n\t\tdocsMenuAnimation.style.animation = 'docsMenuAnimationAlt 0.6s';\n\t}\n\t// footerTag.style.opacity = \"0\";\n\tflipBoxContainer.style.transform = \"rotateY(-180deg)\";\n\tflipBoxContainer.style.transition = \"transform 1.6s\";\n\t// flippedFooter.style.display = \"block\";\n\tflipBoxBackContent.style.animation = \"animFlipBackBoxContentOP 0.8s\";\n\tflipBoxFront.style.animation = \"animFlipBackBoxContent 0.8s\";\n\tsetTimeout(function() {\n\t\t// footerTag.style.display = \"none\";\n\t\tflipBoxBackContent.style.display = \"block\";\n\t\t// flippedFooter.style.display = \"none\";\n\t\tif(docsMenuAnimation) {\n\t\t\tdocsMenuAnimation.style.display = 'none';\n\t\t}\n\t\tflipBoxFront.style.display = \"none\";\n\t\tif(stars1 && stars2 && stars3) {\n\t\t\tstars1.style.width = \"0\";stars1.style.height = \"0\";\n\t\t\tstars2.style.width = \"0\";stars2.style.height = \"0\";\n\t\t\tstars3.style.width = \"0\";stars3.style.height = \"0\";\n\t\t}\n\t}, 600);\n});\n\nresumeCloser.addEventListener(\"click\", function() {\n\tflipBoxContainer.style.transform = \"rotateY(0deg)\";\n\tflipBoxContainer.style.transition = \"transform 1.6s\";\n\t// flipBoxBackContent.style.display = \"none\";\n\t// footerTag.style.display = \"none\";\n\t// flipBoxBackContent.style.animation = \"animFlipBackBoxContent 0.6s\";\n\tflipBoxBackContent.style.animation = \"animFlipBackBoxContent 0.6s\";\n\tflipBoxFront.style.animation = \"animFlipBackBoxContentOP 0.6s\";\n\tsetTimeout(function() {\n\t\tif(docsMenuAnimation) {\n\t\t\tdocsMenuAnimation.style.animation = 'docsMenuAnimation 0.8s';\n\t\t\tdocsMenuAnimation.style.display = 'block';\n\t\t}\n\t\tflipBoxFront.style.display = \"block\";\n\t\tflipBoxBackContent.style.display = \"none\";\n\t\t// flippedFooter.style.display = \"block\";\n\t\tif(stars1 && stars2 && stars3) {\n\t\t\tstars1.style.width = \"1px\";stars1.style.height = \"1px\";\n\t\t\tstars2.style.width = \"2px\";stars2.style.height = \"2px\";\n\t\t\tstars3.style.width = \"2.5px\";stars3.style.height = \"2.5px\";\n\t\t}\n\t}, 600);\n});\n\n\n//# sourceURL=webpack:///./src/assets/scripts/views/index.js?");

/***/ }),

/***/ "./src/assets/scripts/views/info.js":
/*!******************************************!*\
  !*** ./src/assets/scripts/views/info.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let resumeDocxDownloader = document.getElementById('resumeDocxDownloader');\nlet resumePdfOpener = document.getElementById('resumePdfOpener');\n\nlet pdfUrl = \"https://cdn.arakilian0.com/pdf/1/resume-v2.pdf\";\nlet docxUrl = \"https://cdn.arakilian0.com/docx/1/resume-v2.docx\";\n\nresumePdfOpener.addEventListener('click', function() {\n\tvar win = window.open(pdfUrl, '_blank');\n\twin.focus();\n});\n\nresumeDocxDownloader.addEventListener('click', function() {\n\tvar win = window.open(docxUrl, '_self');\n});\n\n\n//# sourceURL=webpack:///./src/assets/scripts/views/info.js?");

/***/ }),

/***/ "./src/assets/scripts/views/projects.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/views/projects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/scripts/views/projects.js?");

/***/ }),

/***/ "./src/assets/scripts/views/projects/cola-css.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/views/projects/cola-css.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/scripts/views/projects/cola-css.js?");

/***/ }),

/***/ "./src/assets/scripts/views/projects/cola-js.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/views/projects/cola-js.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/scripts/views/projects/cola-js.js?");

/***/ }),

/***/ "./src/assets/scripts/views/projects/gulpify-cli.js":
/*!**********************************************************!*\
  !*** ./src/assets/scripts/views/projects/gulpify-cli.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/scripts/views/projects/gulpify-cli.js?");

/***/ }),

/***/ "./src/assets/scripts/views/projects/gulpify.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/views/projects/gulpify.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let projectContributerControl = document.querySelectorAll('.project-contributer-control');\n\nprojectContributerControl.forEach((e) => {\n\n\te.addEventListener('mouseover', function(event) {\n\t\tlet firstChild = e.firstChild.nextElementSibling;\n\t\tfirstChild.style.display = \"block\";\n\t});\n\n\te.addEventListener('mouseout', function(event) {\n\t\tlet firstChild = e.firstChild.nextElementSibling;\n\t\tfirstChild.style.display = \"none\";\n\t});\n\n});\n\n\n//# sourceURL=webpack:///./src/assets/scripts/views/projects/gulpify.js?");

/***/ }),

/***/ "./src/assets/scripts/views/projects/gulpify/docs.js":
/*!***********************************************************!*\
  !*** ./src/assets/scripts/views/projects/gulpify/docs.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/scripts/views/projects/gulpify/docs.js?");

/***/ }),

/***/ "./src/assets/scripts/views/projects/gulpify/download.js":
/*!***************************************************************!*\
  !*** ./src/assets/scripts/views/projects/gulpify/download.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/scripts/views/projects/gulpify/download.js?");

/***/ }),

/***/ "./src/assets/scripts/views/tools.js":
/*!*******************************************!*\
  !*** ./src/assets/scripts/views/tools.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/scripts/views/tools.js?");

/***/ }),

/***/ "./src/assets/scripts/views/tools/gamestats.js":
/*!*****************************************************!*\
  !*** ./src/assets/scripts/views/tools/gamestats.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/scripts/views/tools/gamestats.js?");

/***/ }),

/***/ "./src/assets/scripts/views/tools/recognition.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/views/tools/recognition.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/scripts/views/tools/recognition.js?");

/***/ })

/******/ });