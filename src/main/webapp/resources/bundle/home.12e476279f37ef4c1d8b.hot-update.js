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
					delete __webpack_require__.c[/*require.resolve*/(Object(function webpackMissingModule() { var e = new Error("Cannot find module './item/item-modify.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))]
			  	    Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module './item/item-modify.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9e03c05d136cc64a7f47")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS4xMmU0NzYyNzlmMzdlZjRjMWQ4Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JEO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvRUFBK0I7QUFDekUsT0FBTywwSkFBMkU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyw4RUFBb0M7QUFDOUUsVUFBVSxvS0FBcUY7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxnRUFBNkI7QUFDdkUsVUFBVSxzSkFBMEU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQywwREFBMEI7QUFDcEUsVUFBVSxnSkFBaUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvSkFBdUI7QUFDakUsVUFBVSxrS0FBb0U7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvREFBdUI7QUFDakUsVUFBVSwwSUFBb0U7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyw4RUFBb0M7QUFDOUUsVUFBVSwwS0FBZ0Y7QUFDMUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBOzs7Ozs7OztVQ3pIQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YWcgPSAnW1ZpZXddJ1xyXG5cclxubGV0IHByZXZVcmwgPSAnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGluaXQoZWwpIHtcclxuXHRcdGlmICghZWwpIHRocm93IGVsXHJcblx0XHR0aGlzLmVsID0gZWxcclxuXHRcdHJldHVybiB0aGlzXHJcblx0fSxcclxuXHJcblx0b24oZXZlbnQsIGhhbmRsZXIpIHtcclxuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcilcclxuXHRcdHJldHVybiB0aGlzXHJcblx0fSxcclxuXHJcblx0ZW1pdChldmVudCwgZGF0YSkge1xyXG5cdFx0Y29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7IGRldGFpbDogZGF0YSB9KVxyXG5cdFx0dGhpcy5lbC5kaXNwYXRjaEV2ZW50KGV2dClcclxuXHRcdHJldHVybiB0aGlzXHJcblx0fSxcclxuXHJcblx0aGlkZSgpIHtcclxuXHRcdHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cdCAgICByZXR1cm4gdGhpc1xyXG5cdH0sXHJcblx0XHJcblx0c2hvdygpIHtcclxuXHRcdHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICcnXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdH0sXHJcbiAgXHJcblx0Ly9lbnRyeSBwb2ludFxyXG5cdGluaXRpYWxSb3V0ZXMocGF0aE5hbWUsIHBhcmFtKSB7XHJcblx0XHQvL2hpc3Rvcnkg7LSI6riw7ZmUXHJcblx0XHR0aGlzLnJlbmRlckhUTUwocGF0aE5hbWUsIHBhcmFtKVxyXG5cdFx0d2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB0aGlzLnJlbmRlckhUTUwobG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywnJykpXHJcblx0fSxcclxuXHJcblx0Ly8gc2V0IGJyb3dzZXIgaGlzdG9yeVxyXG5cdGhpc3RvcnlSb3V0ZXJQdXNoKHBhdGhOYW1lLCBwYXJhbSkge1xyXG5cdFx0aWYocHJldlVybCAhPSBwYXRoTmFtZSl7XHJcblx0XHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aE5hbWV9LCAnJywgJyMnICsgcGF0aE5hbWUpXHJcblx0XHRcdHRoaXMucmVuZGVySFRNTChwYXRoTmFtZSwgcGFyYW0pXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly8gcmVuZGVyXHJcblx0cmVuZGVySFRNTChyb3V0ZSwgcGFyYW0pIHtcclxuXHRcdGlmKHJvdXRlID09ICcnKVxyXG5cdFx0XHRyb3V0ZSA9ICcvZGFzaGJvYXJkL2Rhc2hib2FyZCdcclxuXHRcdFx0XHJcblx0XHRpZihoaXN0b3J5LnN0YXRlICE9IG51bGwpe1xyXG5cdFx0XHRpZihoaXN0b3J5LnN0YXRlLnBhdGhOYW1lICE9IG51bGwpe1xyXG5cdFx0XHRcdHJvdXRlID0gaGlzdG9yeS5zdGF0ZS5wYXRoTmFtZVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoaGlzdG9yeS5zdGF0ZS5wcmV2VXJsICE9IG51bGwpe1xyXG5cdFx0XHRcdHJvdXRlID0gaGlzdG9yeS5zdGF0ZS5wcmV2VXJsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0JChcIiNwYWdlLWNvbnRlbnRcIikubG9hZChyb3V0ZSwgcGFyYW0sICgpID0+IHRoaXMucmVuZGVyTW9kdWxlKHJvdXRlKSlcclxuXHJcblx0XHRwcmV2VXJsID0gcm91dGVcclxuXHR9LFxyXG4gIFxyXG5cdHJlbmRlck1vZHVsZShyb3V0ZSl7XHJcblx0XHR2YXIgaW5kZXggPSByb3V0ZS5pbmRleE9mKFwiP1wiKVxyXG5cdFx0aWYoaW5kZXggPiAwKXtcclxuXHRcdFx0cm91dGUgPSByb3V0ZS5zdWJzdHJpbmcoMCwgaW5kZXgpXHJcblx0XHR9XHJcblx0XHJcblx0XHRzd2l0Y2gocm91dGUpe1xyXG5cdFx0XHRjYXNlICcvZGFzaGJvYXJkL2Rhc2hib2FyZCc6XHJcblx0XHRcdFx0aWYgKCQoJyNkYXNoYm9hcmQtY29udGVudCcpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuL2Rhc2hib2FyZC9EYXNoQ29udHJvbGxlci5qcycpXVxyXG5cdFx0XHRcdCAgXHRpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJEYXNoQm9hcmRcIiAqLyAnLi9kYXNoYm9hcmQvRGFzaENvbnRyb2xsZXIuanMnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlICcvc2hpcC9pZGVudGlmaWNhdGlvbic6XHJcblx0XHRcdFx0aWYgKCQoJyNpZGVudGlmaWNhdGlvbi1jb250ZW50JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4vc2hpcC9JZGVudGlmaWNhdGlvbkNvbnRyb2xsZXIuanMnKV1cclxuXHRcdFx0ICBcdCAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJJZGVudGlmaWNhdGlvblwiICovICcuL3NoaXAvSWRlbnRpZmljYXRpb25Db250cm9sbGVyLmpzJylcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlICcvaW5zcGVjdGlvbi9pbnNwZWN0aW9uJzpcclxuXHRcdFx0XHRpZiAoJCgnI2luc3BlY3Rpb24tY29udGVudCcpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuL2luc3BlY3Rpb24vSW5zcGVjdFZpZXcuanMnKV1cclxuXHRcdFx0ICBcdCAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJJbnNwZWN0aW9uXCIgKi8gJy4vaW5zcGVjdGlvbi9JbnNwZWN0Vmlldy5qcycpXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnL2l0ZW0vaXRlbV9saXN0JzpcclxuXHRcdFx0XHRpZiAoJCgnI2l0ZW0tY29udGVudCcpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuL2l0ZW0vaXRlbUNvbnRyb2xsZXIuanMnKV1cclxuXHRcdFx0ICBcdCAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJJdGVtXCIgKi8gJy4vaXRlbS9pdGVtQ29udHJvbGxlci5qcycpXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnL2l0ZW0vaXRlbV9tb2RpZnknOlxyXG5cdFx0XHRcdGlmICgkKCcjaXRlbS1jb250ZW50JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4vaXRlbS9pdGVtLW1vZGlmeS5qcycpXVxyXG5cdFx0XHQgIFx0ICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkl0ZW1Nb2RpZnlcIiAqLyAnLi9pdGVtL2l0ZW0tbW9kaWZ5LmpzJylcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlICcvaXRlbS9pdGVtX3JlZ2lzdGVyJzpcclxuXHRcdFx0XHRpZiAoJCgnI2l0ZW0tY29udGVudCcpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuL2l0ZW0vaXRlbS1yZWdpc3QuanMnKV1cclxuXHRcdFx0ICBcdCAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJJdGVtUmVnaXN0XCIgKi8gJy4vaXRlbS9pdGVtLXJlZ2lzdC5qcycpXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnL3dhcmVob3VzZS93YXJlaG91c2UnOlxyXG5cdFx0XHRcdGlmICgkKCcjd2FyZWhvdXNlLWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi93YXJlaG91c2UvV2FyZWhvdXNlQ29udHJvbGxlci5qcycpXVxyXG5cdFx0XHQgIFx0ICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIldhcmVIb3VzZVwiICovICcuL3dhcmVob3VzZS9XYXJlaG91c2VDb250cm9sbGVyLmpzJylcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0fVxyXG5cdH0sXHJcbiAgXHJcblx0cmVmcmVzaFBhZ2UoKXtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7cHJldlVybH0sICcnLCBcIiNcIiArIHByZXZVcmwpXHJcblx0fVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWUwM2MwNWQxMzZjYzY0YTdmNDdcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=