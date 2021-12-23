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
					delete __webpack_require__.c[/*require.resolve*/(/*! ./item/Item_Modify.js */ "./item/Item_Modify.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item/Item_Modify.js */ "./item/Item_Modify.js"))
			    }
				break
			case '/item/item_register':
				if ($('#item-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./item/Item_Regist.js */ "./item/Item_Regist.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item/Item_Regist.js */ "./item/Item_Regist.js"))
			    }
				break
			case '/warehouse/warehouse':
				if ($('#warehouse-content').length) {
					delete __webpack_require__.c[/*require.resolve*/(/*! ./warehouse/WarehouseController.js */ "./warehouse/WarehouseController.js")]
			  	    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./warehouse/WarehouseController.js */ "./warehouse/WarehouseController.js"))
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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model.js */ "./Model.js");
/* harmony import */ var _vendor_chart_js_Chart_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vendor/chart.js/Chart.min.js */ "../vendor/chart.js/Chart.min.js");
/* harmony import */ var _vendor_chart_js_Chart_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_chart_js_Chart_min_js__WEBPACK_IMPORTED_MODULE_1__);



new Vue({
    el: '#warehouse-content',
    data: {
		main: '',
		wareList : [],
		countList : [],
		notStockList : []
    },
	mounted() {
		this.init()
	},
    methods: {
		init(){
			$("#main").load('/warehouse/wareMain', '', this.initData)
		},
		async initData(){
			await _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].regData('', '/warehouse/wareInfo').then((resolvedData)=> this.wareList = resolvedData)
			await _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].regData('', '/warehouse/domesticCount').then((resolvedData)=> this.countList = resolvedData)
			await _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].regData('', '/warehouse/domesticNotStockCount').then((resolvedData)=> this.notStockList = resolvedData)
		}, 
		test(){
			$("#ship").load('/warehouse/wareShip')
			delete __webpack_require__.c[/*require.resolve*/(Object(function webpackMissingModule() { var e = new Error("Cannot find module './warehouse/Warehouse_Ship.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))]
	  	    Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module './warehouse/Warehouse_Ship.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
		}
    },
	watch: {
		wareList(){
			$('#dataTable').DataTable({
				destroy: true,
				ordering: false,
				data:this.wareList,
        		lengthMenu:[15, 30, 50],
				columns: [
					{data:'yyyymmdd'},
					{data:'cd_ITEM'},
					{data:'box_SNP'},
					{data:'supp_FROM'},
					{data:'ware_TO'},
				]
			})
		},
		countList(){
			var canvas = document.getElementById("myPieChart");
			
			var config = {
			  type: 'doughnut',
			  data: {
			    labels: ["계획 입고", "미계획 입고", "미입고"],
			    datasets: [{
			      data: [this.countList[0].plan_STOCK_COUNT, 
			      		this.countList[0].not_PLAN_STOCK_COUNT, 
						(parseInt(this.countList[0].all_ORDER_COUNT) - (parseInt(this.countList[0].plan_STOCK_COUNT) + parseInt(this.countList[0].not_PLAN_STOCK_COUNT)))],
			      backgroundColor: ['#4e73df', '#1cc88a', '#d3d3d3'],
			      hoverBackgroundColor: ['#2e59d9', '#17a673', '#808080'],
			      hoverBorderColor: "rgba(234, 236, 244, 1)",
			    }],
			  },
			  options: {
			    maintainAspectRatio: false,
			    tooltips: {
			      backgroundColor: "rgb(255,255,255)",
			      bodyFontColor: "#858796",
			      borderColor: '#dddfeb',
			      borderWidth: 1,
			      xPadding: 15,
			      yPadding: 15,
			      displayColors: false,
			      caretPadding: 10,
			    },
			    legend: {
			      display: true
			    },
			    cutoutPercentage: 30,
			  },
			}
			let myBarChart = new (_vendor_chart_js_Chart_min_js__WEBPACK_IMPORTED_MODULE_1___default())(canvas, config)
		},
		notStockList(){
			$('#dataTableNotStock').DataTable({
				destroy: true,
				ordering: false,
				data:this.notStockList,
        		lengthMenu:[5, 10, 15],
				columns: [
					{data:'cd_ITEM'},
					{data:'box_SNP'},
					{data:'supp_FROM'},
				]
			})
		}
	}
})

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("06f767e9d92d14605fdd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5hMDM5ZDhjNDQ2MzM1YzE2ZGIwNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JEO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvRUFBK0I7QUFDekUsT0FBTywwSkFBMkU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyw4RUFBb0M7QUFDOUUsVUFBVSxvS0FBcUY7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxnRUFBNkI7QUFDdkUsVUFBVSxzSkFBMEU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQywwREFBMEI7QUFDcEUsVUFBVSxnSkFBaUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvREFBdUI7QUFDakUsVUFBVSwwSUFBb0U7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvREFBdUI7QUFDakUsVUFBVSwwSUFBb0U7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyw4RUFBb0M7QUFDOUUsVUFBVSxvS0FBZ0Y7QUFDMUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pIK0I7QUFDdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFNBQVMseURBQWE7QUFDdEIsU0FBUyx5REFBYTtBQUN0QixTQUFTLHlEQUFhO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsVUFBVSxxQkFBYSxDQUFDLG1CQUFlLENBQUMsNEpBQStCO0FBQ3ZFLFFBQVEsMEtBQStFO0FBQ3ZGO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdCQUFnQjtBQUN0QixNQUFNLGVBQWU7QUFDckIsTUFBTSxlQUFlO0FBQ3JCLE1BQU0saUJBQWlCO0FBQ3ZCLE1BQU0sZUFBZTtBQUNyQjtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esd0JBQXdCLHNFQUFLO0FBQzdCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZUFBZTtBQUNyQixNQUFNLGVBQWU7QUFDckIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDL0ZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vVmlldy5qcyIsIndlYnBhY2s6Ly8vLi93YXJlaG91c2UvV2FyZWhvdXNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhZyA9ICdbVmlld10nXHJcblxyXG5sZXQgcHJldlVybCA9ICcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0aW5pdChlbCkge1xyXG5cdFx0aWYgKCFlbCkgdGhyb3cgZWxcclxuXHRcdHRoaXMuZWwgPSBlbFxyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHR9LFxyXG5cclxuXHRvbihldmVudCwgaGFuZGxlcikge1xyXG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKVxyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHR9LFxyXG5cclxuXHRlbWl0KGV2ZW50LCBkYXRhKSB7XHJcblx0XHRjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHsgZGV0YWlsOiBkYXRhIH0pXHJcblx0XHR0aGlzLmVsLmRpc3BhdGNoRXZlbnQoZXZ0KVxyXG5cdFx0cmV0dXJuIHRoaXNcclxuXHR9LFxyXG5cclxuXHRoaWRlKCkge1xyXG5cdFx0dGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0ICAgIHJldHVybiB0aGlzXHJcblx0fSxcclxuXHRcclxuXHRzaG93KCkge1xyXG5cdFx0dGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJydcclxuXHRcdHJldHVybiB0aGlzXHJcblx0fSxcclxuICBcclxuXHQvL2VudHJ5IHBvaW50XHJcblx0aW5pdGlhbFJvdXRlcyhwYXRoTmFtZSwgcGFyYW0pIHtcclxuXHRcdC8vaGlzdG9yeSDstIjquLDtmZRcclxuXHRcdHRoaXMucmVuZGVySFRNTChwYXRoTmFtZSwgcGFyYW0pXHJcblx0XHR3aW5kb3cub25wb3BzdGF0ZSA9ICgpID0+IHRoaXMucmVuZGVySFRNTChsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCcnKSlcclxuXHR9LFxyXG5cclxuXHQvLyBzZXQgYnJvd3NlciBoaXN0b3J5XHJcblx0aGlzdG9yeVJvdXRlclB1c2gocGF0aE5hbWUsIHBhcmFtKSB7XHJcblx0XHRpZihwcmV2VXJsICE9IHBhdGhOYW1lKXtcclxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtwYXRoTmFtZX0sICcnLCAnIycgKyBwYXRoTmFtZSlcclxuXHRcdFx0dGhpcy5yZW5kZXJIVE1MKHBhdGhOYW1lLCBwYXJhbSlcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvLyByZW5kZXJcclxuXHRyZW5kZXJIVE1MKHJvdXRlLCBwYXJhbSkge1xyXG5cdFx0aWYocm91dGUgPT0gJycpXHJcblx0XHRcdHJvdXRlID0gJy9kYXNoYm9hcmQvZGFzaGJvYXJkJ1xyXG5cdFx0XHRcclxuXHRcdGlmKGhpc3Rvcnkuc3RhdGUgIT0gbnVsbCl7XHJcblx0XHRcdGlmKGhpc3Rvcnkuc3RhdGUucGF0aE5hbWUgIT0gbnVsbCl7XHJcblx0XHRcdFx0cm91dGUgPSBoaXN0b3J5LnN0YXRlLnBhdGhOYW1lXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZihoaXN0b3J5LnN0YXRlLnByZXZVcmwgIT0gbnVsbCl7XHJcblx0XHRcdFx0cm91dGUgPSBoaXN0b3J5LnN0YXRlLnByZXZVcmxcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQkKFwiI3BhZ2UtY29udGVudFwiKS5sb2FkKHJvdXRlLCBwYXJhbSwgKCkgPT4gdGhpcy5yZW5kZXJNb2R1bGUocm91dGUpKVxyXG5cclxuXHRcdHByZXZVcmwgPSByb3V0ZVxyXG5cdH0sXHJcbiAgXHJcblx0cmVuZGVyTW9kdWxlKHJvdXRlKXtcclxuXHRcdHZhciBpbmRleCA9IHJvdXRlLmluZGV4T2YoXCI/XCIpXHJcblx0XHRpZihpbmRleCA+IDApe1xyXG5cdFx0XHRyb3V0ZSA9IHJvdXRlLnN1YnN0cmluZygwLCBpbmRleClcclxuXHRcdH1cclxuXHRcclxuXHRcdHN3aXRjaChyb3V0ZSl7XHJcblx0XHRcdGNhc2UgJy9kYXNoYm9hcmQvZGFzaGJvYXJkJzpcclxuXHRcdFx0XHRpZiAoJCgnI2Rhc2hib2FyZC1jb250ZW50JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4vZGFzaGJvYXJkL0Rhc2hDb250cm9sbGVyLmpzJyldXHJcblx0XHRcdFx0ICBcdGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkRhc2hCb2FyZFwiICovICcuL2Rhc2hib2FyZC9EYXNoQ29udHJvbGxlci5qcycpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJy9zaGlwL2lkZW50aWZpY2F0aW9uJzpcclxuXHRcdFx0XHRpZiAoJCgnI2lkZW50aWZpY2F0aW9uLWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi9zaGlwL0lkZW50aWZpY2F0aW9uQ29udHJvbGxlci5qcycpXVxyXG5cdFx0XHQgIFx0ICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIklkZW50aWZpY2F0aW9uXCIgKi8gJy4vc2hpcC9JZGVudGlmaWNhdGlvbkNvbnRyb2xsZXIuanMnKVxyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJy9pbnNwZWN0aW9uL2luc3BlY3Rpb24nOlxyXG5cdFx0XHRcdGlmICgkKCcjaW5zcGVjdGlvbi1jb250ZW50JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4vaW5zcGVjdGlvbi9JbnNwZWN0Vmlldy5qcycpXVxyXG5cdFx0XHQgIFx0ICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkluc3BlY3Rpb25cIiAqLyAnLi9pbnNwZWN0aW9uL0luc3BlY3RWaWV3LmpzJylcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlICcvaXRlbS9pdGVtX2xpc3QnOlxyXG5cdFx0XHRcdGlmICgkKCcjaXRlbS1jb250ZW50JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4vaXRlbS9pdGVtQ29udHJvbGxlci5qcycpXVxyXG5cdFx0XHQgIFx0ICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkl0ZW1cIiAqLyAnLi9pdGVtL2l0ZW1Db250cm9sbGVyLmpzJylcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlICcvaXRlbS9pdGVtX21vZGlmeSc6XHJcblx0XHRcdFx0aWYgKCQoJyNpdGVtLWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi9pdGVtL0l0ZW1fTW9kaWZ5LmpzJyldXHJcblx0XHRcdCAgXHQgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiSXRlbU1vZGlmeVwiICovICcuL2l0ZW0vSXRlbV9Nb2RpZnkuanMnKVxyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJy9pdGVtL2l0ZW1fcmVnaXN0ZXInOlxyXG5cdFx0XHRcdGlmICgkKCcjaXRlbS1jb250ZW50JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4vaXRlbS9JdGVtX1JlZ2lzdC5qcycpXVxyXG5cdFx0XHQgIFx0ICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkl0ZW1SZWdpc3RcIiAqLyAnLi9pdGVtL0l0ZW1fUmVnaXN0LmpzJylcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlICcvd2FyZWhvdXNlL3dhcmVob3VzZSc6XHJcblx0XHRcdFx0aWYgKCQoJyN3YXJlaG91c2UtY29udGVudCcpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuL3dhcmVob3VzZS9XYXJlaG91c2VDb250cm9sbGVyLmpzJyldXHJcblx0XHRcdCAgXHQgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiV2FyZUhvdXNlXCIgKi8gJy4vd2FyZWhvdXNlL1dhcmVob3VzZUNvbnRyb2xsZXIuanMnKVxyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0fSxcclxuICBcclxuXHRyZWZyZXNoUGFnZSgpe1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHtwcmV2VXJsfSwgJycsIFwiI1wiICsgcHJldlVybClcclxuXHR9XHJcbn0iLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi4vTW9kZWwuanMnXHJcbmltcG9ydCBDaGFydCBmcm9tICcuLi8uLi92ZW5kb3IvY2hhcnQuanMvQ2hhcnQubWluLmpzJ1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgICBlbDogJyN3YXJlaG91c2UtY29udGVudCcsXHJcbiAgICBkYXRhOiB7XHJcblx0XHRtYWluOiAnJyxcclxuXHRcdHdhcmVMaXN0IDogW10sXHJcblx0XHRjb3VudExpc3QgOiBbXSxcclxuXHRcdG5vdFN0b2NrTGlzdCA6IFtdXHJcbiAgICB9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHR0aGlzLmluaXQoKVxyXG5cdH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0XHRpbml0KCl7XHJcblx0XHRcdCQoXCIjbWFpblwiKS5sb2FkKCcvd2FyZWhvdXNlL3dhcmVNYWluJywgJycsIHRoaXMuaW5pdERhdGEpXHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgaW5pdERhdGEoKXtcclxuXHRcdFx0YXdhaXQgTW9kZWwucmVnRGF0YSgnJywgJy93YXJlaG91c2Uvd2FyZUluZm8nKS50aGVuKChyZXNvbHZlZERhdGEpPT4gdGhpcy53YXJlTGlzdCA9IHJlc29sdmVkRGF0YSlcclxuXHRcdFx0YXdhaXQgTW9kZWwucmVnRGF0YSgnJywgJy93YXJlaG91c2UvZG9tZXN0aWNDb3VudCcpLnRoZW4oKHJlc29sdmVkRGF0YSk9PiB0aGlzLmNvdW50TGlzdCA9IHJlc29sdmVkRGF0YSlcclxuXHRcdFx0YXdhaXQgTW9kZWwucmVnRGF0YSgnJywgJy93YXJlaG91c2UvZG9tZXN0aWNOb3RTdG9ja0NvdW50JykudGhlbigocmVzb2x2ZWREYXRhKT0+IHRoaXMubm90U3RvY2tMaXN0ID0gcmVzb2x2ZWREYXRhKVxyXG5cdFx0fSwgXHJcblx0XHR0ZXN0KCl7XHJcblx0XHRcdCQoXCIjc2hpcFwiKS5sb2FkKCcvd2FyZWhvdXNlL3dhcmVTaGlwJylcclxuXHRcdFx0ZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuL3dhcmVob3VzZS9XYXJlaG91c2VfU2hpcC5qcycpXVxyXG5cdCAgXHQgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiV2FyZUhvdXNlU2hpcFwiICovICcuL3dhcmVob3VzZS9XYXJlaG91c2VfU2hpcC5qcycpXHJcblx0XHR9XHJcbiAgICB9LFxyXG5cdHdhdGNoOiB7XHJcblx0XHR3YXJlTGlzdCgpe1xyXG5cdFx0XHQkKCcjZGF0YVRhYmxlJykuRGF0YVRhYmxlKHtcclxuXHRcdFx0XHRkZXN0cm95OiB0cnVlLFxyXG5cdFx0XHRcdG9yZGVyaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRkYXRhOnRoaXMud2FyZUxpc3QsXHJcbiAgICAgICAgXHRcdGxlbmd0aE1lbnU6WzE1LCAzMCwgNTBdLFxyXG5cdFx0XHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0XHRcdHtkYXRhOid5eXl5bW1kZCd9LFxyXG5cdFx0XHRcdFx0e2RhdGE6J2NkX0lURU0nfSxcclxuXHRcdFx0XHRcdHtkYXRhOidib3hfU05QJ30sXHJcblx0XHRcdFx0XHR7ZGF0YTonc3VwcF9GUk9NJ30sXHJcblx0XHRcdFx0XHR7ZGF0YTond2FyZV9UTyd9LFxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRjb3VudExpc3QoKXtcclxuXHRcdFx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlQaWVDaGFydFwiKTtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBjb25maWcgPSB7XHJcblx0XHRcdCAgdHlwZTogJ2RvdWdobnV0JyxcclxuXHRcdFx0ICBkYXRhOiB7XHJcblx0XHRcdCAgICBsYWJlbHM6IFtcIuqzhO2ajSDsnoXqs6BcIiwgXCLrr7jqs4Ttmo0g7J6F6rOgXCIsIFwi66+47J6F6rOgXCJdLFxyXG5cdFx0XHQgICAgZGF0YXNldHM6IFt7XHJcblx0XHRcdCAgICAgIGRhdGE6IFt0aGlzLmNvdW50TGlzdFswXS5wbGFuX1NUT0NLX0NPVU5ULCBcclxuXHRcdFx0ICAgICAgXHRcdHRoaXMuY291bnRMaXN0WzBdLm5vdF9QTEFOX1NUT0NLX0NPVU5ULCBcclxuXHRcdFx0XHRcdFx0KHBhcnNlSW50KHRoaXMuY291bnRMaXN0WzBdLmFsbF9PUkRFUl9DT1VOVCkgLSAocGFyc2VJbnQodGhpcy5jb3VudExpc3RbMF0ucGxhbl9TVE9DS19DT1VOVCkgKyBwYXJzZUludCh0aGlzLmNvdW50TGlzdFswXS5ub3RfUExBTl9TVE9DS19DT1VOVCkpKV0sXHJcblx0XHRcdCAgICAgIGJhY2tncm91bmRDb2xvcjogWycjNGU3M2RmJywgJyMxY2M4OGEnLCAnI2QzZDNkMyddLFxyXG5cdFx0XHQgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogWycjMmU1OWQ5JywgJyMxN2E2NzMnLCAnIzgwODA4MCddLFxyXG5cdFx0XHQgICAgICBob3ZlckJvcmRlckNvbG9yOiBcInJnYmEoMjM0LCAyMzYsIDI0NCwgMSlcIixcclxuXHRcdFx0ICAgIH1dLFxyXG5cdFx0XHQgIH0sXHJcblx0XHRcdCAgb3B0aW9uczoge1xyXG5cdFx0XHQgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcblx0XHRcdCAgICB0b29sdGlwczoge1xyXG5cdFx0XHQgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI1NSwyNTUsMjU1KVwiLFxyXG5cdFx0XHQgICAgICBib2R5Rm9udENvbG9yOiBcIiM4NTg3OTZcIixcclxuXHRcdFx0ICAgICAgYm9yZGVyQ29sb3I6ICcjZGRkZmViJyxcclxuXHRcdFx0ICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcblx0XHRcdCAgICAgIHhQYWRkaW5nOiAxNSxcclxuXHRcdFx0ICAgICAgeVBhZGRpbmc6IDE1LFxyXG5cdFx0XHQgICAgICBkaXNwbGF5Q29sb3JzOiBmYWxzZSxcclxuXHRcdFx0ICAgICAgY2FyZXRQYWRkaW5nOiAxMCxcclxuXHRcdFx0ICAgIH0sXHJcblx0XHRcdCAgICBsZWdlbmQ6IHtcclxuXHRcdFx0ICAgICAgZGlzcGxheTogdHJ1ZVxyXG5cdFx0XHQgICAgfSxcclxuXHRcdFx0ICAgIGN1dG91dFBlcmNlbnRhZ2U6IDMwLFxyXG5cdFx0XHQgIH0sXHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IG15QmFyQ2hhcnQgPSBuZXcgQ2hhcnQoY2FudmFzLCBjb25maWcpXHJcblx0XHR9LFxyXG5cdFx0bm90U3RvY2tMaXN0KCl7XHJcblx0XHRcdCQoJyNkYXRhVGFibGVOb3RTdG9jaycpLkRhdGFUYWJsZSh7XHJcblx0XHRcdFx0ZGVzdHJveTogdHJ1ZSxcclxuXHRcdFx0XHRvcmRlcmluZzogZmFsc2UsXHJcblx0XHRcdFx0ZGF0YTp0aGlzLm5vdFN0b2NrTGlzdCxcclxuICAgICAgICBcdFx0bGVuZ3RoTWVudTpbNSwgMTAsIDE1XSxcclxuXHRcdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0XHR7ZGF0YTonY2RfSVRFTSd9LFxyXG5cdFx0XHRcdFx0e2RhdGE6J2JveF9TTlAnfSxcclxuXHRcdFx0XHRcdHtkYXRhOidzdXBwX0ZST00nfSxcclxuXHRcdFx0XHRdXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG59KSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA2Zjc2N2U5ZDkyZDE0NjA1ZmRkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9