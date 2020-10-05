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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTWFpbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZGFzaGJvYXJkL0Zvcm1WaWV3LmpzIiwid2VicGFjazovLy8uL2luc3BlY3Rpb24vSW5zcGVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vaW5zcGVjdGlvbi9TZWFyY2hWaWV3LmpzIiwid2VicGFjazovLy8uL2luc3BlY3Rpb24vVGFibGVWaWV3LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0EseUNBQXlDLHdCQUF3QjtRQUNqRTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0EsaUNBQWlDOztRQUVqQztRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFDaEMsWUFBWSxTQUFTO0FBQ3JCLFlBQVksYUFBYTtBQUN6QixZQUFZLGFBQWE7QUFDekIsWUFBWSxlQUFlO0FBQzNCLFlBQVksZUFBZTtBQUMzQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksZUFBZTtBQUMzQixZQUFZLGFBQWE7QUFDekI7QUFDQSxNQUFNO0FBQ047QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSxFO0FBQ0Y7O0FBRWUsd0U7Ozs7Ozs7Ozs7O0FDdERmLG1DQUFtQyxpREFBaUQsNkJBQTZCO0FBQ2pILHdCIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImhvbWVcIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcIkRhc2hCb2FyZFwiOlwiRGFzaEJvYXJkXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmNodW5rLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9yZXNvdXJjZXMvYnVuZGxlL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC5qc1wiKTtcbiIsImltcG9ydCBEYXNoQm9hcmRWaWV3IGZyb20gJy4vZGFzaGJvYXJkL0Zvcm1WaWV3LmpzJ1xyXG5pbXBvcnQgSW5zcGVjdFZpZXcgZnJvbSAnLi9pbnNwZWN0aW9uL0luc3BlY3RWaWV3LmpzJ1xyXG5cclxuY29uc3QgdGFnID0gJ1tNYWluQ29udHJvbGxlcl0nXHJcblx0XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBpbml0KCkge1xyXG5cdCAgY29uc29sZS5sb2codGFnLCAnTWFpbkNvbnRyb2xsZXIuanMnKVxyXG5cdCAgLy9EYXNoQm9hcmRcclxuXHQgIERhc2hCb2FyZFZpZXcuc2V0dXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rhc2hib2FyZC1pY29uJykpXHJcbiAgICAgIFx0Lm9uKCdAY2xpY2snLCBlID0+IHRoaXMub25DbGlja0ljb24oKSlcclxuXHQgIFxyXG5cdCAgSW5zcGVjdFZpZXcuc2V0dXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luc3BlY3Rpb24tY29udGVudCcpKVxyXG5cclxuXHQgIHRoaXMucmVuZGVyVmlldygpXHJcbiAgfSxcclxuICBcclxuICByZW5kZXJWaWV3KCl7XHJcblx0ICBjb25zb2xlLmxvZyh0YWcsICdyZWRuZXJWaWV3KCknKVxyXG5cdCAgRGFzaEJvYXJkVmlldy5yZW5kZXIoKVxyXG4gIH0sXHJcbiAgb25DbGlja0ljb24oKSB7XHJcblx0ICB0aGlzLnJlbmRlclZpZXcoKVxyXG4gIH0sXHJcbn0iLCJjb25zdCB0YWcgPSAnW1ZpZXddJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGluaXQoZWwpIHtcclxuICAgIGlmICghZWwpIHRocm93IGVsXHJcbiAgICB0aGlzLmVsID0gZWxcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfSxcclxuXHJcbiAgb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcilcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfSxcclxuXHJcbiAgZW1pdChldmVudCwgZGF0YSkge1xyXG4gICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7IGRldGFpbDogZGF0YSB9KVxyXG4gICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KGV2dClcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfSxcclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG5cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJydcclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG59IiwiaW1wb3J0IE1haW5Db250cm9sbGVyIGZyb20gJy4vTWFpbkNvbnRyb2xsZXIuanMnXHJcblxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9ICcvcmVzb3VyY2VzL2J1bmRsZS8nO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHRNYWluQ29udHJvbGxlci5pbml0KClcclxufSkiLCJpbXBvcnQgVmlldyBmcm9tICcuLi9WaWV3LmpzJ1xyXG5cdFx0XHJcbmNvbnN0IHRhZyA9ICdbRm9ybVZpZXddJ1xyXG5cclxuY29uc3QgRm9ybVZpZXcgPSBPYmplY3QuY3JlYXRlKFZpZXcpXHJcblxyXG5Gb3JtVmlldy5zZXR1cCA9IGZ1bmN0aW9uIChlbCkge1xyXG5cdHRoaXMuaW5pdChlbClcclxuXHRyZXR1cm4gdGhpc1xyXG59XHJcblxyXG5Gb3JtVmlldy5yZW5kZXIgPSBmdW5jdGlvbigpe1xyXG5cdCQoXCIjZGFzaGJvYXJkLWNvbnRlbnRcIikubG9hZChcIi9kYXNoYm9hcmQvZGFzaGJvYXJkXCIsIGZ1bmN0aW9uKCl7XHJcblx0XHRpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJEYXNoQm9hcmRcIiAqLyAnLi9EYXNoQ29udHJvbGxlci5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuXHRcdCAgICBtb2R1bGUuZGVmYXVsdC5pbml0KCk7XHJcblx0XHQgIH0pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8qbGV0IHtkZWZhdWx0OkRhc2hDb250cm9sbGVyfSA9IGF3YWl0IGltcG9ydCggd2VicGFja0NodW5rTmFtZTogXCJEYXNoQm9hcmRcIiAgJy4vRGFzaENvbnRyb2xsZXIuanMnKVxyXG5cdERhc2hDb250cm9sbGVyLmluaXQoKSovXHJcbn1cclxuXHJcbkZvcm1WaWV3LmJpbmRDbGlja0V2ZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cdFx0dGhpcy5vbkNsaWNrSWNvbigpXHJcblx0fSlcclxufVxyXG5cclxuRm9ybVZpZXcub25DbGlja0ljb24gPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5lbWl0KCdAY2xpY2snLCB7fSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVZpZXciLCJpbXBvcnQgVmlldyBmcm9tICcuLi9WaWV3LmpzJ1xyXG5pbXBvcnQgU2VhcmNoVmlldyBmcm9tICcuL1NlYXJjaFZpZXcuanMnXHJcbmltcG9ydCBUYWJsZVZpZXcgZnJvbSAnLi9UYWJsZVZpZXcuanMnXHJcblxyXG5jb25zdCB0YWcgPSAnW0luc3BlY3RWaWV3XSdcclxuXHJcbmNvbnN0IEluc3BlY3RWaWV3ID0gT2JqZWN0LmNyZWF0ZShWaWV3KVxyXG5cdFxyXG5JbnNwZWN0Vmlldy5zZXR1cCA9IGZ1bmN0aW9uIChlbCkge1xyXG5cdHRoaXMuaW5pdChlbClcclxuXHRyZXR1cm4gdGhpc1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnNwZWN0Vmlld1xyXG4vKlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaW5pdCgpIHtcclxuXHQgIFNlYXJjaFZpZXcuc2V0dXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1rZXl3b3JkJykpXHJcblx0ICBcdC5vbignQHNlYXJjaCcsIGUgPT4gdGhpcy5vblNlYXJjaChlLmRldGFpbCkpXHJcblx0ICBcdFxyXG5cdCAgVGFibGVWaWV3LnNldHVwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZS1ib2R5JykpXHJcblx0ICBcclxuXHQgIERhdGVWaWV3LnNldHVwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlUGlja2VyJykpXHJcbiAgfSxcclxuICBvblNlYXJjaChrZXl3b3JkKSB7XHJcblx0ICBjb25zb2xlLmxvZyh0YWcsICdvblNlYXJjaCgpJywga2V5d29yZClcclxuXHQgIFRhYmxlVmlldy5yZW5kZXIoa2V5d29yZClcclxuICB9XHJcbn1cclxuJCgnI2RhdGVQaWNrZXInKS5kYXRlcGlja2VyKHtcclxuICAgIGZvcm1hdDogXCJ5eXl5bW1kZFwiLFxyXG4gICAgc2V0RGF0ZTogbmV3IERhdGUoKSxcclxuICAgIGF1dG9jbG9zZSA6IHRydWUsXHJcbiAgICBsYW5ndWFnZSA6IFwia29cIlxyXG59KTsqLyIsImltcG9ydCBWaWV3IGZyb20gJy4uL1ZpZXcuanMnXHJcblxyXG5jb25zdCB0YWcgPSAnW1NlYXJjaFZpZXddJ1xyXG5cclxuY29uc3QgU2VhcmNoVmlldyA9IE9iamVjdC5jcmVhdGUoVmlldylcclxuXHRcclxuU2VhcmNoVmlldy5zZXR1cCA9IGZ1bmN0aW9uIChlbCkge1xyXG4gIHRoaXMuaW5pdChlbClcclxuICB0aGlzLmRhdGVFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJyNkYXRlUGlja2VyJylcclxuICB0aGlzLmNkSXRlbUVsID0gZWwucXVlcnlTZWxlY3RvcignI2NkX2l0ZW0nKVxyXG4gIHRoaXMuY2RMaW5lRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCcjY2RfbGluZScpXHJcbiAgdGhpcy5iYXJjb2RlRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCcjYmFyY29kZScpXHJcbiAgdGhpcy5zZWFyY2hFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKVxyXG4gIHRoaXMuYmluZEV2ZW50cygpXHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuU2VhcmNoVmlldy5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dGhpcy5zZWFyY2hFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5vbkNsaWNrU2VhcmNoKCkpXHJcbn1cclxuXHJcblNlYXJjaFZpZXcub25DbGlja1NlYXJjaCA9IGZ1bmN0aW9uKCkge1xyXG5cdHRoaXMuZW1pdCgnQHNlYXJjaCcsIHtkYXRlOnRoaXMuZGF0ZUVsLnZhbHVlLCBjZGl0ZW06dGhpcy5jZEl0ZW1FbC52YWx1ZSwgXHJcblx0XHRjZGxpbmU6dGhpcy5jZExpbmVFbC52YWx1ZSwgYmFyY29kZTp0aGlzLmJhcmNvZGVFbC52YWx1ZX0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFZpZXciLCJpbXBvcnQgVmlldyBmcm9tICcuLi9WaWV3LmpzJ1xyXG5cclxuY29uc3QgdGFnID0gJ1tUYWJsZVZpZXddJ1xyXG5cclxuY29uc3QgVGFibGVWaWV3ID0gT2JqZWN0LmNyZWF0ZShWaWV3KVxyXG5cclxuXHJcblRhYmxlVmlldy5zZXR1cCA9IGZ1bmN0aW9uIChlbCkge1xyXG5cdHRoaXMuaW5pdChlbClcclxuXHRyZXR1cm4gdGhpc1xyXG59XHJcblxyXG5UYWJsZVZpZXcucmVuZGVyID0gZnVuY3Rpb24oZGF0YSl7XHJcblx0dmFyIGh0bWwgPSBcIlwiO1xyXG5cdHZhciBmb3JtID0ge1xyXG5cdFx0XHRBQ1RJT046XCJHRVQgSU5TUEVDVElPTlwiLFxyXG5cdFx0XHRDRElURU06ZGF0YS5jZGl0ZW0sXHJcblx0XHRcdENETElORTpkYXRhLmNkbGluZSxcclxuXHRcdFx0Q0JBUkNPREU6ZGF0YS5iYXJjb2RlLFxyXG5cdFx0XHRMT1REQVRFOmRhdGEuZGF0ZSxcclxuXHRcdFx0SVNDSEVDSzoyXHJcblx0fTtcclxuXHQkLmFqYXgoeyBcclxuXHQgICAgICAgdXJsOidnZXRJbnNwZWN0aW9uJywgXHJcblx0ICAgICAgIGRhdGFUeXBlOidqc29uJyxcclxuXHQgICAgICAgY29udGVudFR5cGU6J2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdCAgICAgICBkYXRhOkpTT04uc3RyaW5naWZ5KGZvcm0pLFxyXG5cdCAgICAgICBtZXRob2Q6J1BPU1QnLCBcclxuXHQgICAgICAgc3VjY2VzczpmdW5jdGlvbih0KXtcclxuXHRcdFx0XHR2YXIgaXRlbURhdGEgPSB0O1xyXG5cclxuXHRcdFx0XHRkYXRhID0gaXRlbURhdGEubGVuZ3RoID8gaXRlbURhdGEucmVkdWNlKChodG1sLCBpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coaXRlbS5zdGFydHRpbWUpXHJcblx0XHRcdFx0XHRpdGVtLnN0YXJ0dGltZSA9IG51bGwgPyBcIi1cIiA6IGl0ZW0uc3RhcnR0aW1lXHJcblx0XHRcdFx0XHRodG1sICs9IGA8dHI+PHRkPiR7aW5kZXgrMX08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+JHtpdGVtLmxvdH08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+JHtpdGVtLmNkX0lURU19PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPiR7aXRlbS5jZF9MSU5FfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD4ke2l0ZW0ucHJvZF9OVU1CfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD4ke2l0ZW0uYWxsX0NPVU5UfTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD4ke2l0ZW0ub2t9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPiR7aXRlbS5uZ308L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+JHtpdGVtLnN0YXJ0dGltZX08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+JHtpdGVtLmVuZHRpbWV9PC90ZD48L3RyPmBcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGh0bWxcclxuXHRcdFx0XHRcdH0sICcnKSA6ICcnXHJcblx0XHRcdFx0JCgnI3RhYmxlLWJvZHknKS5odG1sKGRhdGEpXHJcblx0ICAgICAgIH0sXHJcblx0ICAgICAgIGVycm9yOmZ1bmN0aW9uKHQpe1xyXG5cdCAgICBcdCAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciEgSXRlbSBsb2FkIGZhaWwuXCIpXHJcblx0ICAgICAgIH1cclxuXHR9KTsgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlVmlldyIsImlmKHR5cGVvZiBtb21lbnQgPT09ICd1bmRlZmluZWQnKSB7dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ21vbWVudCdcIik7IGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJzsgdGhyb3cgZTt9XG5tb2R1bGUuZXhwb3J0cyA9IG1vbWVudDsiXSwic291cmNlUm9vdCI6IiJ9