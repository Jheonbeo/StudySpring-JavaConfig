/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./MainController.js":
/*!***************************!*\
  !*** ./MainController.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./View.js");


const tag = '[MainController]'
	
const MainController = Object.create(_View_js__WEBPACK_IMPORTED_MODULE_0__.default)
const contentDiv = document.getElementById('page-content');

initialRoutes(contentDiv)

window.onload = () => {
	//import(/* webpackChunkName: "DashBoard" */ './dashboard/DashController.js')
	//MainController.initialRoutes('/dashboard/dashboard', dashboardDiv)

    //$("#dashboard-content").load("/dashboard/dashboard")
	
	/*const dashIcon = document.getElementById('dashboard-icon');
	dashIcon.addEventListener('click', (evt) => {
        const pathName = evt.target.getAttribute('route')
        
        MainController.historyRouterPush(pathName, dashboardDiv)
    })*/

	historyRouterPush(pathName, historyAppDiv)
}

/***/ }),

/***/ "./View.js":
/*!*****************!*\
  !*** ./View.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const tag = '[View]'

const routes = {
    '/': '/dashboard/DashController.js'
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
  },
  
  //entry point
  initialRoutes(el) {
	  this.renderHTML(el, routes['/'])

      window.onpopstate = () => this.renderHTML(el, "#" + window.location.origin + pathname)
  },

  // set browser history
  historyRouterPush(pathName, el) {
	    window.history.pushState({}, pathName, "#" + window.location.origin + pathName)
	    renderHTML(el, window.location.origin + pathName)
  },

  // render
  renderHTML(el, route) {
    fetch(route)
        .then(function(response) {
            return response.text()
        })
        .then(function(html) {
            el.innerHTML = html
        })
        .catch(function(err) {
            console.log('Failed to fetch page: ', err);
        });
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./MainController.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9NYWluQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9WaWV3LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRCOztBQUU1Qjs7QUFFQSxxQ0FBcUMsNkNBQUk7QUFDekM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQzs7Ozs7O1VDNURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3LmpzJ1xyXG5cclxuY29uc3QgdGFnID0gJ1tNYWluQ29udHJvbGxlcl0nXHJcblx0XHJcbmNvbnN0IE1haW5Db250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShWaWV3KVxyXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY29udGVudCcpO1xyXG5cclxuaW5pdGlhbFJvdXRlcyhjb250ZW50RGl2KVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHQvL2ltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkRhc2hCb2FyZFwiICovICcuL2Rhc2hib2FyZC9EYXNoQ29udHJvbGxlci5qcycpXHJcblx0Ly9NYWluQ29udHJvbGxlci5pbml0aWFsUm91dGVzKCcvZGFzaGJvYXJkL2Rhc2hib2FyZCcsIGRhc2hib2FyZERpdilcclxuXHJcbiAgICAvLyQoXCIjZGFzaGJvYXJkLWNvbnRlbnRcIikubG9hZChcIi9kYXNoYm9hcmQvZGFzaGJvYXJkXCIpXHJcblx0XHJcblx0Lypjb25zdCBkYXNoSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXNoYm9hcmQtaWNvbicpO1xyXG5cdGRhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhdGhOYW1lID0gZXZ0LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3JvdXRlJylcclxuICAgICAgICBcclxuICAgICAgICBNYWluQ29udHJvbGxlci5oaXN0b3J5Um91dGVyUHVzaChwYXRoTmFtZSwgZGFzaGJvYXJkRGl2KVxyXG4gICAgfSkqL1xyXG5cclxuXHRoaXN0b3J5Um91dGVyUHVzaChwYXRoTmFtZSwgaGlzdG9yeUFwcERpdilcclxufSIsImNvbnN0IHRhZyA9ICdbVmlld10nXHJcblxyXG5jb25zdCByb3V0ZXMgPSB7XHJcbiAgICAnLyc6ICcvZGFzaGJvYXJkL0Rhc2hDb250cm9sbGVyLmpzJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaW5pdChlbCkge1xyXG4gICAgaWYgKCFlbCkgdGhyb3cgZWxcclxuICAgIHRoaXMuZWwgPSBlbFxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG5cclxuICBvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG5cclxuICBlbWl0KGV2ZW50LCBkYXRhKSB7XHJcbiAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHsgZGV0YWlsOiBkYXRhIH0pXHJcbiAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH0sXHJcblxyXG4gIHNob3coKSB7XHJcbiAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnJ1xyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9LFxyXG4gIFxyXG4gIC8vZW50cnkgcG9pbnRcclxuICBpbml0aWFsUm91dGVzKGVsKSB7XHJcblx0ICB0aGlzLnJlbmRlckhUTUwoZWwsIHJvdXRlc1snLyddKVxyXG5cclxuICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB0aGlzLnJlbmRlckhUTUwoZWwsIFwiI1wiICsgd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHBhdGhuYW1lKVxyXG4gIH0sXHJcblxyXG4gIC8vIHNldCBicm93c2VyIGhpc3RvcnlcclxuICBoaXN0b3J5Um91dGVyUHVzaChwYXRoTmFtZSwgZWwpIHtcclxuXHQgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBwYXRoTmFtZSwgXCIjXCIgKyB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgcGF0aE5hbWUpXHJcblx0ICAgIHJlbmRlckhUTUwoZWwsIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBwYXRoTmFtZSlcclxuICB9LFxyXG5cclxuICAvLyByZW5kZXJcclxuICByZW5kZXJIVE1MKGVsLCByb3V0ZSkge1xyXG4gICAgZmV0Y2gocm91dGUpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oaHRtbCkge1xyXG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gZmV0Y2ggcGFnZTogJywgZXJyKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL01haW5Db250cm9sbGVyLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==