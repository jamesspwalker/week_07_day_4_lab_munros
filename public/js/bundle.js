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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Munro = __webpack_require__(/*! ./models/munro.js */ \"./src/models/munro.js\");\nconst MunroListView = __webpack_require__(/*! ./views/munro_list_view.js */ \"./src/views/munro_list_view.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const munroListContainer = document.querySelector('#munros')\n  const munroListView = new MunroListView(munroListContainer)\n  munroListView.bindEvents();\n\n  const munro = new Munro('https://munroapi.herokuapp.com/munros');\n  console.log(munro);\n  munro.getData();\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n publish: function (channel, payload) {\n   const event = new CustomEvent(channel, {\n     detail: payload\n   });\n   document.dispatchEvent(event);\n },\n subscribe: function (channel, callback) {\n   document.addEventListener(channel, callback);\n }\n}\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n return fetch(this.url)\n   .then(response => response.json())\n   .catch(err => console.log(\"Error in get:\", err))\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/munro.js":
/*!*****************************!*\
  !*** ./src/models/munro.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst Munro = function(url) {\n  this.url = url;\n  this.munros = [];\n};\n\nMunro.prototype.getData = function () {\n  const request = new RequestHelper(this.url);\n\n    request.get()\n      .then((data) => {\n        this.munros = data;\n        PubSub.publish('Munro:munro-data-ready', this.munros);\n        console.log(data);\n      })\n  };\n\nMunro.prototype.handleDataReady = function (munros) {\n  const munroNames = this.getMunroNames(munros);\n  console.log(munroNames);\n}\n\nMunro.prototype.getMunroNames = function (munros) {\n  return munros\n    .map(munro => munro.name)\n}\n\n\nmodule.exports = Munro;\n\n\n//# sourceURL=webpack:///./src/models/munro.js?");

/***/ }),

/***/ "./src/views/munro_list_view.js":
/*!**************************************!*\
  !*** ./src/views/munro_list_view.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst MunroView = __webpack_require__(/*! ./munro_view.js */ \"./src/views/munro_view.js\");\n\nconst MunroListView = function (container) {\n  this.container = container\n};\n\nMunroListView.prototype.bindEvents = function() {\n  PubSub.subscribe('Munro:munro-data-ready', (evt) =>{\n    this.munros = evt.detail;\n    console.log(this.munros);\n    this.render();\n  })\n}\n\nMunroListView.prototype.render = function() {\n  this.munros.forEach((munro) => {\n    const munroView = new MunroView(this.container, munro);\n    munroView.render();\n  });\n};\n\nmodule.exports = MunroListView;\n\n\n//# sourceURL=webpack:///./src/views/munro_list_view.js?");

/***/ }),

/***/ "./src/views/munro_view.js":
/*!*********************************!*\
  !*** ./src/views/munro_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst MunroView = function (container, munro) {\n  this.container = container;\n  this.munro = munro;\n};\n\nMunroView.prototype.render = function() {\n  const munroContainer = document.createElement('div');\n\n  const munroName = this.createMunroList();\n  munroContainer.appendChild(munroName)\n  console.log(munroName);\n  this.container.appendChild(munroContainer)\n\n\n}\n\n\nMunroView.prototype.createMunroList = function () {\n  const munroUl = document.createElement('ul');\n  this.populateListName(munroUl);\n  this.populateListHeight(munroUl);\n  this.populateListMeaning(munroUl);\n  return munroUl;\n}\n\nMunroView.prototype.populateListName = function(list) {\n    const munroListItem  = document.createElement('h3');\n    munroListItem.textContent = this.munro.name;\n    list.appendChild(munroListItem);\n    console.log('Munro list item', munroListItem.textContent);\n}\n\nMunroView.prototype.populateListHeight = function(list) {\n    const munroListItem  = document.createElement('li');\n    munroListItem.textContent = this.munro.height;\n    list.appendChild(munroListItem);\n    console.log('Munro list item', munroListItem.textContent);\n}\n\nMunroView.prototype.populateListMeaning = function(list) {\n    const munroListItem  = document.createElement('li');\n    munroListItem.textContent = this.munro.meaning;\n    list.appendChild(munroListItem);\n    console.log('Munro list item', munroListItem.textContent);\n}\n\n\n\nmodule.exports = MunroView;\n\n\n//# sourceURL=webpack:///./src/views/munro_view.js?");

/***/ })

/******/ });