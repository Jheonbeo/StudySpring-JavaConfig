/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"home": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"DashBoard":"DashBoard"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/resources/bundle/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./MainController.js":
/*!***************************!*\
  !*** ./MainController.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_FormView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/FormView.js */ "./dashboard/FormView.js");
/* harmony import */ var _inspection_InspectView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspection/InspectView.js */ "./inspection/InspectView.js");



const tag = '[MainController]'
	
/* harmony default export */ __webpack_exports__["default"] = ({
  init() {
	  console.log(tag, 'MainController.js')
	  //DashBoard
	  _dashboard_FormView_js__WEBPACK_IMPORTED_MODULE_0__["default"].setup(document.querySelector('#dashboard-icon'))
      	.on('@click', e => this.onClickIcon())
	  
	  _inspection_InspectView_js__WEBPACK_IMPORTED_MODULE_1__["default"].setup(document.querySelector('#inspection-content'))

	  this.renderView()
  },
  
  renderView(){
	  console.log(tag, 'rednerView()')
	  _dashboard_FormView_js__WEBPACK_IMPORTED_MODULE_0__["default"].render()
  },
  onClickIcon() {
	  this.renderView()
  },
});

/***/ }),

/***/ "./View.js":
/*!*****************!*\
  !*** ./View.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tag = '[View]'

/* harmony default export */ __webpack_exports__["default"] = ({
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  },

  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
});

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainController.js */ "./MainController.js");
//import LoginController from './login/LoginController.js'


__webpack_require__.p = '/resources/bundle/';

document.addEventListener('DOMContentLoaded', () => {
	_MainController_js__WEBPACK_IMPORTED_MODULE_0__["default"].init()
})

/***/ }),

/***/ "./dashboard/FormView.js":
/*!*******************************!*\
  !*** ./dashboard/FormView.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View.js */ "./View.js");

		
const tag = '[FormView]'

const FormView = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"])

FormView.setup = function (el) {
	this.init(el)
	return this
}

FormView.render = function(){
	$("#dashboard-content").load("/dashboard/dashboard", function(){
		__webpack_require__.e(/*! import() | DashBoard */ "DashBoard").then(__webpack_require__.bind(null, /*! ./DashController.js */ "./dashboard/DashController.js")).then(module => {
		    module.default.init();
		  });
	});
	
	/*let {default:DashController} = await import( webpackChunkName: "DashBoard"  './DashController.js')
	DashController.init()*/
}

FormView.bindClickEvent = function() {
	this.addEventListener('click', e => {
		this.onClickIcon()
	})
}

FormView.onClickIcon = function () {
	this.emit('@click', {})
}

/* harmony default export */ __webpack_exports__["default"] = (FormView);

/***/ }),

/***/ "./inspection/InspectView.js":
/*!***********************************!*\
  !*** ./inspection/InspectView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View.js */ "./View.js");
/* harmony import */ var _SearchView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchView.js */ "./inspection/SearchView.js");
/* harmony import */ var _TableView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableView.js */ "./inspection/TableView.js");




const tag = '[InspectView]'

const InspectView = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"])
	
InspectView.setup = function (el) {
	this.init(el)
	return this
}

/* harmony default export */ __webpack_exports__["default"] = (InspectView);
/*
export default {
  init() {
	  SearchView.setup(document.querySelector('#search-keyword'))
	  	.on('@search', e => this.onSearch(e.detail))
	  	
	  TableView.setup(document.querySelector('#table-body'))
	  
	  DateView.setup(document.querySelector('#datePicker'))
  },
  onSearch(keyword) {
	  console.log(tag, 'onSearch()', keyword)
	  TableView.render(keyword)
  }
}
$('#datePicker').datepicker({
    format: "yyyymmdd",
    setDate: new Date(),
    autoclose : true,
    language : "ko"
});*/

/***/ }),

/***/ "./inspection/SearchView.js":
/*!**********************************!*\
  !*** ./inspection/SearchView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View.js */ "./View.js");


const tag = '[SearchView]'

const SearchView = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"])
	
SearchView.setup = function (el) {
  this.init(el)
  this.dateEl = el.querySelector('#datePicker')
  this.cdItemEl = el.querySelector('#cd_item')
  this.cdLineEl = el.querySelector('#cd_line')
  this.barcodeEl = el.querySelector('#barcode')
  this.searchEl = el.querySelector('#search')
  this.bindEvents()
  return this
}

SearchView.bindEvents = function() {
	this.searchEl.addEventListener('click', e => this.onClickSearch())
}

SearchView.onClickSearch = function() {
	this.emit('@search', {date:this.dateEl.value, cditem:this.cdItemEl.value, 
		cdline:this.cdLineEl.value, barcode:this.barcodeEl.value})
}

/* harmony default export */ __webpack_exports__["default"] = (SearchView);

/***/ }),

/***/ "./inspection/TableView.js":
/*!*********************************!*\
  !*** ./inspection/TableView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View.js */ "./View.js");


const tag = '[TableView]'

const TableView = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"])


TableView.setup = function (el) {
	this.init(el)
	return this
}

TableView.render = function(data){
	var html = "";
	var form = {
			ACTION:"GET INSPECTION",
			CDITEM:data.cditem,
			CDLINE:data.cdline,
			CBARCODE:data.barcode,
			LOTDATE:data.date,
			ISCHECK:2
	};
	$.ajax({ 
	       url:'getInspection', 
	       dataType:'json',
	       contentType:'application/json',
	       data:JSON.stringify(form),
	       method:'POST', 
	       success:function(t){
				var itemData = t;

				data = itemData.length ? itemData.reduce((html, item, index) => {
					console.log(item.starttime)
					item.starttime = null ? undefined : item.starttime
					html += `<tr><td>${index+1}</td>
						<td>${item.lot}</td>
						<td>${item.cd_ITEM}</td>
						<td>${item.cd_LINE}</td>
						<td>${item.prod_NUMB}</td>
						<td>${item.all_COUNT}</td>
						<td>${item.ok}</td>
						<td>${item.ng}</td>
						<td>${item.starttime}</td>
						<td>${item.endtime}</td></tr>`
						return html
					}, '') : ''
				$('#table-body').html(data)
	       },
	       error:function(t){
	    	   console.error("Error! Item load fail.")
	       }
	}); 
}

/* harmony default export */ __webpack_exports__["default"] = (TableView);

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof moment === 'undefined') {var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = moment;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTWFpbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZGFzaGJvYXJkL0Zvcm1WaWV3LmpzIiwid2VicGFjazovLy8uL2luc3BlY3Rpb24vSW5zcGVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vaW5zcGVjdGlvbi9TZWFyY2hWaWV3LmpzIiwid2VicGFjazovLy8uL2luc3BlY3Rpb24vVGFibGVWaWV3LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0EseUNBQXlDLHdCQUF3QjtRQUNqRTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0EsaUNBQWlDOztRQUVqQztRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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UUFBUTtBQUNoQyxZQUFZLFNBQVM7QUFDckIsWUFBWSxhQUFhO0FBQ3pCLFlBQVksYUFBYTtBQUN6QixZQUFZLGVBQWU7QUFDM0IsWUFBWSxlQUFlO0FBQzNCLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxlQUFlO0FBQzNCLFlBQVksYUFBYTtBQUN6QjtBQUNBLE1BQU07QUFDTjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFQUFFLEU7QUFDRjs7QUFFZSx3RTs7Ozs7Ozs7Ozs7QUN0RGYsbUNBQW1DLGlEQUFpRCw2QkFBNkI7QUFDakgsd0IiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiaG9tZVwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wiRGFzaEJvYXJkXCI6XCJEYXNoQm9hcmRcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuY2h1bmsuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3Jlc291cmNlcy9idW5kbGUvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwLmpzXCIpO1xuIiwiaW1wb3J0IERhc2hCb2FyZFZpZXcgZnJvbSAnLi9kYXNoYm9hcmQvRm9ybVZpZXcuanMnXHJcbmltcG9ydCBJbnNwZWN0VmlldyBmcm9tICcuL2luc3BlY3Rpb24vSW5zcGVjdFZpZXcuanMnXHJcblxyXG5jb25zdCB0YWcgPSAnW01haW5Db250cm9sbGVyXSdcclxuXHRcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGluaXQoKSB7XHJcblx0ICBjb25zb2xlLmxvZyh0YWcsICdNYWluQ29udHJvbGxlci5qcycpXHJcblx0ICAvL0Rhc2hCb2FyZFxyXG5cdCAgRGFzaEJvYXJkVmlldy5zZXR1cChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFzaGJvYXJkLWljb24nKSlcclxuICAgICAgXHQub24oJ0BjbGljaycsIGUgPT4gdGhpcy5vbkNsaWNrSWNvbigpKVxyXG5cdCAgXHJcblx0ICBJbnNwZWN0Vmlldy5zZXR1cChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5zcGVjdGlvbi1jb250ZW50JykpXHJcblxyXG5cdCAgdGhpcy5yZW5kZXJWaWV3KClcclxuICB9LFxyXG4gIFxyXG4gIHJlbmRlclZpZXcoKXtcclxuXHQgIGNvbnNvbGUubG9nKHRhZywgJ3JlZG5lclZpZXcoKScpXHJcblx0ICBEYXNoQm9hcmRWaWV3LnJlbmRlcigpXHJcbiAgfSxcclxuICBvbkNsaWNrSWNvbigpIHtcclxuXHQgIHRoaXMucmVuZGVyVmlldygpXHJcbiAgfSxcclxufSIsImNvbnN0IHRhZyA9ICdbVmlld10nXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaW5pdChlbCkge1xyXG4gICAgaWYgKCFlbCkgdGhyb3cgZWxcclxuICAgIHRoaXMuZWwgPSBlbFxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG5cclxuICBlbWl0KGV2ZW50LCBkYXRhKSB7XHJcbiAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHsgZGV0YWlsOiBkYXRhIH0pXHJcbiAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH0sXHJcblxyXG4gIHNob3coKSB7XHJcbiAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnJ1xyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcbn0iLCIvL2ltcG9ydCBMb2dpbkNvbnRyb2xsZXIgZnJvbSAnLi9sb2dpbi9Mb2dpbkNvbnRyb2xsZXIuanMnXHJcbmltcG9ydCBNYWluQ29udHJvbGxlciBmcm9tICcuL01haW5Db250cm9sbGVyLmpzJ1xyXG5cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSAnL3Jlc291cmNlcy9idW5kbGUvJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblx0TWFpbkNvbnRyb2xsZXIuaW5pdCgpXHJcbn0pIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi4vVmlldy5qcydcclxuXHRcdFxyXG5jb25zdCB0YWcgPSAnW0Zvcm1WaWV3XSdcclxuXHJcbmNvbnN0IEZvcm1WaWV3ID0gT2JqZWN0LmNyZWF0ZShWaWV3KVxyXG5cclxuRm9ybVZpZXcuc2V0dXAgPSBmdW5jdGlvbiAoZWwpIHtcclxuXHR0aGlzLmluaXQoZWwpXHJcblx0cmV0dXJuIHRoaXNcclxufVxyXG5cclxuRm9ybVZpZXcucmVuZGVyID0gZnVuY3Rpb24oKXtcclxuXHQkKFwiI2Rhc2hib2FyZC1jb250ZW50XCIpLmxvYWQoXCIvZGFzaGJvYXJkL2Rhc2hib2FyZFwiLCBmdW5jdGlvbigpe1xyXG5cdFx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiRGFzaEJvYXJkXCIgKi8gJy4vRGFzaENvbnRyb2xsZXIuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcblx0XHQgICAgbW9kdWxlLmRlZmF1bHQuaW5pdCgpO1xyXG5cdFx0ICB9KTtcclxuXHR9KTtcclxuXHRcclxuXHQvKmxldCB7ZGVmYXVsdDpEYXNoQ29udHJvbGxlcn0gPSBhd2FpdCBpbXBvcnQoIHdlYnBhY2tDaHVua05hbWU6IFwiRGFzaEJvYXJkXCIgICcuL0Rhc2hDb250cm9sbGVyLmpzJylcclxuXHREYXNoQ29udHJvbGxlci5pbml0KCkqL1xyXG59XHJcblxyXG5Gb3JtVmlldy5iaW5kQ2xpY2tFdmVudCA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRcdHRoaXMub25DbGlja0ljb24oKVxyXG5cdH0pXHJcbn1cclxuXHJcbkZvcm1WaWV3Lm9uQ2xpY2tJY29uID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuZW1pdCgnQGNsaWNrJywge30pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1WaWV3IiwiaW1wb3J0IFZpZXcgZnJvbSAnLi4vVmlldy5qcydcclxuaW1wb3J0IFNlYXJjaFZpZXcgZnJvbSAnLi9TZWFyY2hWaWV3LmpzJ1xyXG5pbXBvcnQgVGFibGVWaWV3IGZyb20gJy4vVGFibGVWaWV3LmpzJ1xyXG5cclxuY29uc3QgdGFnID0gJ1tJbnNwZWN0Vmlld10nXHJcblxyXG5jb25zdCBJbnNwZWN0VmlldyA9IE9iamVjdC5jcmVhdGUoVmlldylcclxuXHRcclxuSW5zcGVjdFZpZXcuc2V0dXAgPSBmdW5jdGlvbiAoZWwpIHtcclxuXHR0aGlzLmluaXQoZWwpXHJcblx0cmV0dXJuIHRoaXNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zcGVjdFZpZXdcclxuLypcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGluaXQoKSB7XHJcblx0ICBTZWFyY2hWaWV3LnNldHVwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gta2V5d29yZCcpKVxyXG5cdCAgXHQub24oJ0BzZWFyY2gnLCBlID0+IHRoaXMub25TZWFyY2goZS5kZXRhaWwpKVxyXG5cdCAgXHRcclxuXHQgIFRhYmxlVmlldy5zZXR1cChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFibGUtYm9keScpKVxyXG5cdCAgXHJcblx0ICBEYXRlVmlldy5zZXR1cChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZVBpY2tlcicpKVxyXG4gIH0sXHJcbiAgb25TZWFyY2goa2V5d29yZCkge1xyXG5cdCAgY29uc29sZS5sb2codGFnLCAnb25TZWFyY2goKScsIGtleXdvcmQpXHJcblx0ICBUYWJsZVZpZXcucmVuZGVyKGtleXdvcmQpXHJcbiAgfVxyXG59XHJcbiQoJyNkYXRlUGlja2VyJykuZGF0ZXBpY2tlcih7XHJcbiAgICBmb3JtYXQ6IFwieXl5eW1tZGRcIixcclxuICAgIHNldERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBhdXRvY2xvc2UgOiB0cnVlLFxyXG4gICAgbGFuZ3VhZ2UgOiBcImtvXCJcclxufSk7Ki8iLCJpbXBvcnQgVmlldyBmcm9tICcuLi9WaWV3LmpzJ1xyXG5cclxuY29uc3QgdGFnID0gJ1tTZWFyY2hWaWV3XSdcclxuXHJcbmNvbnN0IFNlYXJjaFZpZXcgPSBPYmplY3QuY3JlYXRlKFZpZXcpXHJcblx0XHJcblNlYXJjaFZpZXcuc2V0dXAgPSBmdW5jdGlvbiAoZWwpIHtcclxuICB0aGlzLmluaXQoZWwpXHJcbiAgdGhpcy5kYXRlRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCcjZGF0ZVBpY2tlcicpXHJcbiAgdGhpcy5jZEl0ZW1FbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJyNjZF9pdGVtJylcclxuICB0aGlzLmNkTGluZUVsID0gZWwucXVlcnlTZWxlY3RvcignI2NkX2xpbmUnKVxyXG4gIHRoaXMuYmFyY29kZUVsID0gZWwucXVlcnlTZWxlY3RvcignI2JhcmNvZGUnKVxyXG4gIHRoaXMuc2VhcmNoRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJylcclxuICB0aGlzLmJpbmRFdmVudHMoKVxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcblNlYXJjaFZpZXcuYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuc2VhcmNoRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMub25DbGlja1NlYXJjaCgpKVxyXG59XHJcblxyXG5TZWFyY2hWaWV3Lm9uQ2xpY2tTZWFyY2ggPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmVtaXQoJ0BzZWFyY2gnLCB7ZGF0ZTp0aGlzLmRhdGVFbC52YWx1ZSwgY2RpdGVtOnRoaXMuY2RJdGVtRWwudmFsdWUsIFxyXG5cdFx0Y2RsaW5lOnRoaXMuY2RMaW5lRWwudmFsdWUsIGJhcmNvZGU6dGhpcy5iYXJjb2RlRWwudmFsdWV9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hWaWV3IiwiaW1wb3J0IFZpZXcgZnJvbSAnLi4vVmlldy5qcydcclxuXHJcbmNvbnN0IHRhZyA9ICdbVGFibGVWaWV3XSdcclxuXHJcbmNvbnN0IFRhYmxlVmlldyA9IE9iamVjdC5jcmVhdGUoVmlldylcclxuXHJcblxyXG5UYWJsZVZpZXcuc2V0dXAgPSBmdW5jdGlvbiAoZWwpIHtcclxuXHR0aGlzLmluaXQoZWwpXHJcblx0cmV0dXJuIHRoaXNcclxufVxyXG5cclxuVGFibGVWaWV3LnJlbmRlciA9IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdHZhciBodG1sID0gXCJcIjtcclxuXHR2YXIgZm9ybSA9IHtcclxuXHRcdFx0QUNUSU9OOlwiR0VUIElOU1BFQ1RJT05cIixcclxuXHRcdFx0Q0RJVEVNOmRhdGEuY2RpdGVtLFxyXG5cdFx0XHRDRExJTkU6ZGF0YS5jZGxpbmUsXHJcblx0XHRcdENCQVJDT0RFOmRhdGEuYmFyY29kZSxcclxuXHRcdFx0TE9UREFURTpkYXRhLmRhdGUsXHJcblx0XHRcdElTQ0hFQ0s6MlxyXG5cdH07XHJcblx0JC5hamF4KHsgXHJcblx0ICAgICAgIHVybDonZ2V0SW5zcGVjdGlvbicsIFxyXG5cdCAgICAgICBkYXRhVHlwZTonanNvbicsXHJcblx0ICAgICAgIGNvbnRlbnRUeXBlOidhcHBsaWNhdGlvbi9qc29uJyxcclxuXHQgICAgICAgZGF0YTpKU09OLnN0cmluZ2lmeShmb3JtKSxcclxuXHQgICAgICAgbWV0aG9kOidQT1NUJywgXHJcblx0ICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24odCl7XHJcblx0XHRcdFx0dmFyIGl0ZW1EYXRhID0gdDtcclxuXHJcblx0XHRcdFx0ZGF0YSA9IGl0ZW1EYXRhLmxlbmd0aCA/IGl0ZW1EYXRhLnJlZHVjZSgoaHRtbCwgaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGl0ZW0uc3RhcnR0aW1lKVxyXG5cdFx0XHRcdFx0aXRlbS5zdGFydHRpbWUgPSBudWxsID8gXCItXCIgOiBpdGVtLnN0YXJ0dGltZVxyXG5cdFx0XHRcdFx0aHRtbCArPSBgPHRyPjx0ZD4ke2luZGV4KzF9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPiR7aXRlbS5sb3R9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPiR7aXRlbS5jZF9JVEVNfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD4ke2l0ZW0uY2RfTElORX08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+JHtpdGVtLnByb2RfTlVNQn08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+JHtpdGVtLmFsbF9DT1VOVH08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+JHtpdGVtLm9rfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD4ke2l0ZW0ubmd9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPiR7aXRlbS5zdGFydHRpbWV9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPiR7aXRlbS5lbmR0aW1lfTwvdGQ+PC90cj5gXHJcblx0XHRcdFx0XHRcdHJldHVybiBodG1sXHJcblx0XHRcdFx0XHR9LCAnJykgOiAnJ1xyXG5cdFx0XHRcdCQoJyN0YWJsZS1ib2R5JykuaHRtbChkYXRhKVxyXG5cdCAgICAgICB9LFxyXG5cdCAgICAgICBlcnJvcjpmdW5jdGlvbih0KXtcclxuXHQgICAgXHQgICBjb25zb2xlLmVycm9yKFwiRXJyb3IhIEl0ZW0gbG9hZCBmYWlsLlwiKVxyXG5cdCAgICAgICB9XHJcblx0fSk7IFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVZpZXciLCJpZih0eXBlb2YgbW9tZW50ID09PSAndW5kZWZpbmVkJykge3ZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdtb21lbnQnXCIpOyBlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7IHRocm93IGU7fVxubW9kdWxlLmV4cG9ydHMgPSBtb21lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==