"use strict";
self["webpackHotUpdate"]("home",{

/***/ "./View.js":
/*!*****************!*\
  !*** ./View.js ***!
  \*****************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tag = '[View]'

let prevUrl = ''

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
	initialRoutes(pathName, param) {
		//history 초기화
		this.renderHTML(pathName, param)
		window.onpopstate = () => this.renderHTML(location.hash.replace('#',''))
	},

	// set browser history
	historyRouterPush(pathName, param) {
		if(prevUrl != pathName){
			window.history.pushState({pathName}, '', '#' + pathName)
			this.renderHTML(pathName, param)
		}
	},

	// render
	renderHTML(route, param) {
		if(route == '')
			route = '/dashboard/dashboard'
	  
		if(history.state != null){
			if(history.state.pathName != null){
				route = history.state.pathName
			}
			else if(history.state.prevUrl != null){
				route = history.state.prevUrl
			}
		}
		$("#page-content").load(route, param, () => this.renderModule(route))

		prevUrl = route
	},
  
	renderModule(route){
		var index = route.indexOf("?")
		if(index > 0){
			route = route.substring(0, index)
		}
	
		switch(route){
			case '/dashboard/dashboard':
				if ($('#dashboard-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./dashboard/DashController.js */ "./dashboard/DashController.js")]
				  	Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/DashController.js */ "./dashboard/DashController.js"))
				    //clearInterval(checkExist)
				}
				break
			case '/ship/identification':
				if ($('#identification-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./ship/IdentificationController.js */ "./ship/IdentificationController.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./ship/IdentificationController.js */ "./ship/IdentificationController.js"))
				    //clearInterval(checkExist)
			    }
				break
			case '/item/item_list':
				if ($('#item-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./item/ItemController.js */ "./item/ItemController.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item/ItemController.js */ "./item/ItemController.js"))
				    //clearInterval(checkExist)
			    }
				break
			case '/item/item_modify':
				if ($('#item-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./item/item-modify.js */ "./item/item-modify.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item/item-modify.js */ "./item/item-modify.js"))
				    //clearInterval(checkExist)
			    }
				break
			case '/item/item_register':
				if ($('#item-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./item/item-regist.js */ "./item/item-regist.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item/item-regist.js */ "./item/item-regist.js"))
				    //clearInterval(checkExist)
			    }
				break
		}
	},
  
	refreshPage(){
		window.history.replaceState({prevUrl}, '', "#" + prevUrl)
	}
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e3e1b7d6424e18b4512a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS45MDY0ZjZiZjk1OTFlOTM1ZjUzZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JEO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxQkFBYSxDQUFDLG1CQUFlLENBQUMsb0VBQStCO0FBQ3pFLE9BQU8sMEpBQTJFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyw4RUFBb0M7QUFDOUUsVUFBVSxvS0FBcUY7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUJBQWEsQ0FBQyxtQkFBZSxDQUFDLDBEQUEwQjtBQUNwRSxVQUFVLGdKQUFpRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxQkFBYSxDQUFDLG1CQUFlLENBQUMsb0RBQXVCO0FBQ2pFLFVBQVUsMElBQW9FO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvREFBdUI7QUFDakUsVUFBVSwwSUFBb0U7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7Ozs7Ozs7O1VDakhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vVmlldy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhZyA9ICdbVmlld10nXHJcblxyXG5sZXQgcHJldlVybCA9ICcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0aW5pdChlbCkge1xyXG5cdFx0aWYgKCFlbCkgdGhyb3cgZWxcclxuXHRcdHRoaXMuZWwgPSBlbFxyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHR9LFxyXG5cclxuXHRvbihldmVudCwgaGFuZGxlcikge1xyXG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKVxyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHR9LFxyXG5cclxuXHRlbWl0KGV2ZW50LCBkYXRhKSB7XHJcblx0XHRjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHsgZGV0YWlsOiBkYXRhIH0pXHJcblx0XHR0aGlzLmVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHR9LFxyXG5cclxuXHRoaWRlKCkge1xyXG5cdFx0dGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0ICAgIHJldHVybiB0aGlzXHJcblx0fSxcclxuXHRcclxuXHRzaG93KCkge1xyXG5cdFx0dGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJydcclxuXHRcdHJldHVybiB0aGlzXHJcblx0fSxcclxuICBcclxuXHQvL2VudHJ5IHBvaW50XHJcblx0aW5pdGlhbFJvdXRlcyhwYXRoTmFtZSwgcGFyYW0pIHtcclxuXHRcdC8vaGlzdG9yeSDstIjquLDtmZRcclxuXHRcdHRoaXMucmVuZGVySFRNTChwYXRoTmFtZSwgcGFyYW0pXHJcblx0XHR3aW5kb3cub25wb3BzdGF0ZSA9ICgpID0+IHRoaXMucmVuZGVySFRNTChsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCcnKSlcclxuXHR9LFxyXG5cclxuXHQvLyBzZXQgYnJvd3NlciBoaXN0b3J5XHJcblx0aGlzdG9yeVJvdXRlclB1c2gocGF0aE5hbWUsIHBhcmFtKSB7XHJcblx0XHRpZihwcmV2VXJsICE9IHBhdGhOYW1lKXtcclxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtwYXRoTmFtZX0sICcnLCAnIycgKyBwYXRoTmFtZSlcclxuXHRcdFx0dGhpcy5yZW5kZXJIVE1MKHBhdGhOYW1lLCBwYXJhbSlcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvLyByZW5kZXJcclxuXHRyZW5kZXJIVE1MKHJvdXRlLCBwYXJhbSkge1xyXG5cdFx0aWYocm91dGUgPT0gJycpXHJcblx0XHRcdHJvdXRlID0gJy9kYXNoYm9hcmQvZGFzaGJvYXJkJ1xyXG5cdCAgXHJcblx0XHRpZihoaXN0b3J5LnN0YXRlICE9IG51bGwpe1xyXG5cdFx0XHRpZihoaXN0b3J5LnN0YXRlLnBhdGhOYW1lICE9IG51bGwpe1xyXG5cdFx0XHRcdHJvdXRlID0gaGlzdG9yeS5zdGF0ZS5wYXRoTmFtZVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoaGlzdG9yeS5zdGF0ZS5wcmV2VXJsICE9IG51bGwpe1xyXG5cdFx0XHRcdHJvdXRlID0gaGlzdG9yeS5zdGF0ZS5wcmV2VXJsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCQoXCIjcGFnZS1jb250ZW50XCIpLmxvYWQocm91dGUsIHBhcmFtLCAoKSA9PiB0aGlzLnJlbmRlck1vZHVsZShyb3V0ZSkpXHJcblxyXG5cdFx0cHJldlVybCA9IHJvdXRlXHJcblx0fSxcclxuICBcclxuXHRyZW5kZXJNb2R1bGUocm91dGUpe1xyXG5cdFx0dmFyIGluZGV4ID0gcm91dGUuaW5kZXhPZihcIj9cIilcclxuXHRcdGlmKGluZGV4ID4gMCl7XHJcblx0XHRcdHJvdXRlID0gcm91dGUuc3Vic3RyaW5nKDAsIGluZGV4KVxyXG5cdFx0fVxyXG5cdFxyXG5cdFx0c3dpdGNoKHJvdXRlKXtcclxuXHRcdFx0Y2FzZSAnL2Rhc2hib2FyZC9kYXNoYm9hcmQnOlxyXG5cdFx0XHRcdGlmICgkKCcjZGFzaGJvYXJkLWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi9kYXNoYm9hcmQvRGFzaENvbnRyb2xsZXIuanMnKV1cclxuXHRcdFx0XHQgIFx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiRGFzaEJvYXJkXCIgKi8gJy4vZGFzaGJvYXJkL0Rhc2hDb250cm9sbGVyLmpzJylcclxuXHRcdFx0XHQgICAgLy9jbGVhckludGVydmFsKGNoZWNrRXhpc3QpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJy9zaGlwL2lkZW50aWZpY2F0aW9uJzpcclxuXHRcdFx0XHRpZiAoJCgnI2lkZW50aWZpY2F0aW9uLWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi9zaGlwL0lkZW50aWZpY2F0aW9uQ29udHJvbGxlci5qcycpXVxyXG5cdFx0XHQgIFx0ICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIklkZW50aWZpY2F0aW9uXCIgKi8gJy4vc2hpcC9JZGVudGlmaWNhdGlvbkNvbnRyb2xsZXIuanMnKVxyXG5cdFx0XHRcdCAgICAvL2NsZWFySW50ZXJ2YWwoY2hlY2tFeGlzdClcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlICcvaXRlbS9pdGVtX2xpc3QnOlxyXG5cdFx0XHRcdGlmICgkKCcjaXRlbS1jb250ZW50JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4vaXRlbS9JdGVtQ29udHJvbGxlci5qcycpXVxyXG5cdFx0XHQgIFx0ICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkl0ZW1cIiAqLyAnLi9pdGVtL0l0ZW1Db250cm9sbGVyLmpzJylcclxuXHRcdFx0XHQgICAgLy9jbGVhckludGVydmFsKGNoZWNrRXhpc3QpXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnL2l0ZW0vaXRlbV9tb2RpZnknOlxyXG5cdFx0XHRcdGlmICgkKCcjaXRlbS1jb250ZW50JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4vaXRlbS9pdGVtLW1vZGlmeS5qcycpXVxyXG5cdFx0XHQgIFx0ICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkl0ZW1Nb2RpZnlcIiAqLyAnLi9pdGVtL2l0ZW0tbW9kaWZ5LmpzJylcclxuXHRcdFx0XHQgICAgLy9jbGVhckludGVydmFsKGNoZWNrRXhpc3QpXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnL2l0ZW0vaXRlbV9yZWdpc3Rlcic6XHJcblx0XHRcdFx0aWYgKCQoJyNpdGVtLWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi9pdGVtL2l0ZW0tcmVnaXN0LmpzJyldXHJcblx0XHRcdCAgXHQgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiSXRlbVJlZ2lzdFwiICovICcuL2l0ZW0vaXRlbS1yZWdpc3QuanMnKVxyXG5cdFx0XHRcdCAgICAvL2NsZWFySW50ZXJ2YWwoY2hlY2tFeGlzdClcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0fVxyXG5cdH0sXHJcbiAgXHJcblx0cmVmcmVzaFBhZ2UoKXtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7cHJldlVybH0sICcnLCBcIiNcIiArIHByZXZVcmwpXHJcblx0fVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTNlMWI3ZDY0MjRlMThiNDUxMmFcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=