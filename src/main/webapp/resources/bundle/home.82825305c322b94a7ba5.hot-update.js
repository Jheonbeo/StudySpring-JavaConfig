self["webpackHotUpdate"]("home",{

/***/ "./View.js":
/*!*****************!*\
  !*** ./View.js ***!
  \*****************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
				}
				break
			case '/ship/identification':
				if ($('#identification-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./ship/IdentificationController.js */ "./ship/IdentificationController.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./ship/IdentificationController.js */ "./ship/IdentificationController.js"))
			    }
				break
			case '/inspection/inspection':
				if ($('#inspection-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./inspection/InspectView.js */ "./inspection/InspectView.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./inspection/InspectView.js */ "./inspection/InspectView.js"))
			    }
				break
			case '/item/item_list':
				if ($('#item-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./item/itemController.js */ "./item/itemController.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item/itemController.js */ "./item/itemController.js"))
			    }
				break
			case '/item/item_modify':
				if ($('#item-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./item/item-modify.js */ "./item/item-modify.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item/item-modify.js */ "./item/item-modify.js"))
			    }
				break
			case '/item/item_register':
				if ($('#item-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./item/item-regist.js */ "./item/item-regist.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item/item-regist.js */ "./item/item-regist.js"))
			    }
				break
			case '/warehouse/warehouse':
				if ($('#warehouse-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./warehouse/WarehouseController.js */ "./warehouse/WarehouseController.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./warehouse/WarehouseController.js */ "./warehouse/WarehouseController.js", 23))
			    }
				break
		}
	},
  
	refreshPage(){
		window.history.replaceState({prevUrl}, '', "#" + prevUrl)
	}
});

/***/ }),

/***/ "./warehouse/WarehouseController.js":
/*!******************************************!*\
  !*** ./warehouse/WarehouseController.js ***!
  \******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unsyntactic break (28:3)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| \t\t\tdelete require.cache[require.resolve('./warehouse/Warehouse-Ship.js')]\n| \t  \t    import(/* webpackChunkName: \"WareHouseShip\" */ './warehouse/Warehouse-Ship.js')\n> \t\t\tbreak\n| \t\t}\n|     },");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/create fake namespace object */
/******/ (() => {
/******/ 	var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 	var leafPrototypes;
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 16: return value when it's Promise-like
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = this(value);
/******/ 		if(mode & 8) return value;
/******/ 		if(typeof value === 'object' && value) {
/******/ 			if((mode & 4) && value.__esModule) return value;
/******/ 			if((mode & 16) && typeof value.then === 'function') return value;
/******/ 		}
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		var def = {};
/******/ 		leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 		for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 			Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 		}
/******/ 		def['default'] = () => (value);
/******/ 		__webpack_require__.d(ns, def);
/******/ 		return ns;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ef65db9c23f81ccd179e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS44MjgyNTMwNWMzMjJiOTRhN2JhNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JEO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvRUFBK0I7QUFDekUsT0FBTywwSkFBMkU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyw4RUFBb0M7QUFDOUUsVUFBVSxvS0FBcUY7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxnRUFBNkI7QUFDdkUsVUFBVSxzSkFBMEU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQywwREFBMEI7QUFDcEUsVUFBVSxnSkFBaUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvREFBdUI7QUFDakUsVUFBVSwwSUFBb0U7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvREFBdUI7QUFDakUsVUFBVSwwSUFBb0U7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyw4RUFBb0M7QUFDOUUsVUFBVSwwS0FBZ0Y7QUFDMUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6SEE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0Esc0RBQXNEO1VBQ3RELHNDQUFzQyxpRUFBaUU7VUFDdkc7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOzs7OztVQ3pCQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFnID0gJ1tWaWV3XSdcclxuXHJcbmxldCBwcmV2VXJsID0gJydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRpbml0KGVsKSB7XHJcblx0XHRpZiAoIWVsKSB0aHJvdyBlbFxyXG5cdFx0dGhpcy5lbCA9IGVsXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdH0sXHJcblxyXG5cdG9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdH0sXHJcblxyXG5cdGVtaXQoZXZlbnQsIGRhdGEpIHtcclxuXHRcdGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudCwgeyBkZXRhaWw6IGRhdGEgfSlcclxuXHRcdHRoaXMuZWwuZGlzcGF0Y2hFdmVudChldnQpXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdH0sXHJcblxyXG5cdGhpZGUoKSB7XHJcblx0XHR0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHQgICAgcmV0dXJuIHRoaXNcclxuXHR9LFxyXG5cdFxyXG5cdHNob3coKSB7XHJcblx0XHR0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnJ1xyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHR9LFxyXG4gIFxyXG5cdC8vZW50cnkgcG9pbnRcclxuXHRpbml0aWFsUm91dGVzKHBhdGhOYW1lLCBwYXJhbSkge1xyXG5cdFx0Ly9oaXN0b3J5IOy0iOq4sO2ZlFxyXG5cdFx0dGhpcy5yZW5kZXJIVE1MKHBhdGhOYW1lLCBwYXJhbSlcclxuXHRcdHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4gdGhpcy5yZW5kZXJIVE1MKGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsJycpKVxyXG5cdH0sXHJcblxyXG5cdC8vIHNldCBicm93c2VyIGhpc3RvcnlcclxuXHRoaXN0b3J5Um91dGVyUHVzaChwYXRoTmFtZSwgcGFyYW0pIHtcclxuXHRcdGlmKHByZXZVcmwgIT0gcGF0aE5hbWUpe1xyXG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe3BhdGhOYW1lfSwgJycsICcjJyArIHBhdGhOYW1lKVxyXG5cdFx0XHR0aGlzLnJlbmRlckhUTUwocGF0aE5hbWUsIHBhcmFtKVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8vIHJlbmRlclxyXG5cdHJlbmRlckhUTUwocm91dGUsIHBhcmFtKSB7XHJcblx0XHRpZihyb3V0ZSA9PSAnJylcclxuXHRcdFx0cm91dGUgPSAnL2Rhc2hib2FyZC9kYXNoYm9hcmQnXHJcblx0XHRcdFxyXG5cdFx0aWYoaGlzdG9yeS5zdGF0ZSAhPSBudWxsKXtcclxuXHRcdFx0aWYoaGlzdG9yeS5zdGF0ZS5wYXRoTmFtZSAhPSBudWxsKXtcclxuXHRcdFx0XHRyb3V0ZSA9IGhpc3Rvcnkuc3RhdGUucGF0aE5hbWVcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKGhpc3Rvcnkuc3RhdGUucHJldlVybCAhPSBudWxsKXtcclxuXHRcdFx0XHRyb3V0ZSA9IGhpc3Rvcnkuc3RhdGUucHJldlVybFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdCQoXCIjcGFnZS1jb250ZW50XCIpLmxvYWQocm91dGUsIHBhcmFtLCAoKSA9PiB0aGlzLnJlbmRlck1vZHVsZShyb3V0ZSkpXHJcblxyXG5cdFx0cHJldlVybCA9IHJvdXRlXHJcblx0fSxcclxuICBcclxuXHRyZW5kZXJNb2R1bGUocm91dGUpe1xyXG5cdFx0dmFyIGluZGV4ID0gcm91dGUuaW5kZXhPZihcIj9cIilcclxuXHRcdGlmKGluZGV4ID4gMCl7XHJcblx0XHRcdHJvdXRlID0gcm91dGUuc3Vic3RyaW5nKDAsIGluZGV4KVxyXG5cdFx0fVxyXG5cdFxyXG5cdFx0c3dpdGNoKHJvdXRlKXtcclxuXHRcdFx0Y2FzZSAnL2Rhc2hib2FyZC9kYXNoYm9hcmQnOlxyXG5cdFx0XHRcdGlmICgkKCcjZGFzaGJvYXJkLWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi9kYXNoYm9hcmQvRGFzaENvbnRyb2xsZXIuanMnKV1cclxuXHRcdFx0XHQgIFx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiRGFzaEJvYXJkXCIgKi8gJy4vZGFzaGJvYXJkL0Rhc2hDb250cm9sbGVyLmpzJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnL3NoaXAvaWRlbnRpZmljYXRpb24nOlxyXG5cdFx0XHRcdGlmICgkKCcjaWRlbnRpZmljYXRpb24tY29udGVudCcpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuL3NoaXAvSWRlbnRpZmljYXRpb25Db250cm9sbGVyLmpzJyldXHJcblx0XHRcdCAgXHQgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiSWRlbnRpZmljYXRpb25cIiAqLyAnLi9zaGlwL0lkZW50aWZpY2F0aW9uQ29udHJvbGxlci5qcycpXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnL2luc3BlY3Rpb24vaW5zcGVjdGlvbic6XHJcblx0XHRcdFx0aWYgKCQoJyNpbnNwZWN0aW9uLWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi9pbnNwZWN0aW9uL0luc3BlY3RWaWV3LmpzJyldXHJcblx0XHRcdCAgXHQgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiSW5zcGVjdGlvblwiICovICcuL2luc3BlY3Rpb24vSW5zcGVjdFZpZXcuanMnKVxyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJy9pdGVtL2l0ZW1fbGlzdCc6XHJcblx0XHRcdFx0aWYgKCQoJyNpdGVtLWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi9pdGVtL2l0ZW1Db250cm9sbGVyLmpzJyldXHJcblx0XHRcdCAgXHQgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiSXRlbVwiICovICcuL2l0ZW0vaXRlbUNvbnRyb2xsZXIuanMnKVxyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJy9pdGVtL2l0ZW1fbW9kaWZ5JzpcclxuXHRcdFx0XHRpZiAoJCgnI2l0ZW0tY29udGVudCcpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuL2l0ZW0vaXRlbS1tb2RpZnkuanMnKV1cclxuXHRcdFx0ICBcdCAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJJdGVtTW9kaWZ5XCIgKi8gJy4vaXRlbS9pdGVtLW1vZGlmeS5qcycpXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnL2l0ZW0vaXRlbV9yZWdpc3Rlcic6XHJcblx0XHRcdFx0aWYgKCQoJyNpdGVtLWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi9pdGVtL2l0ZW0tcmVnaXN0LmpzJyldXHJcblx0XHRcdCAgXHQgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiSXRlbVJlZ2lzdFwiICovICcuL2l0ZW0vaXRlbS1yZWdpc3QuanMnKVxyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJy93YXJlaG91c2Uvd2FyZWhvdXNlJzpcclxuXHRcdFx0XHRpZiAoJCgnI3dhcmVob3VzZS1jb250ZW50JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4vd2FyZWhvdXNlL1dhcmVob3VzZUNvbnRyb2xsZXIuanMnKV1cclxuXHRcdFx0ICBcdCAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJXYXJlSG91c2VcIiAqLyAnLi93YXJlaG91c2UvV2FyZWhvdXNlQ29udHJvbGxlci5qcycpXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdH1cclxuXHR9LFxyXG4gIFxyXG5cdHJlZnJlc2hQYWdlKCl7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe3ByZXZVcmx9LCAnJywgXCIjXCIgKyBwcmV2VXJsKVxyXG5cdH1cclxufSIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVmNjVkYjljMjNmODFjY2QxNzllXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9