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

/***/ "./item/Item_Modify.js":
/*!*****************************!*\
  !*** ./item/Item_Modify.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model.js */ "./Model.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View.js */ "./View.js");



new Vue({
	el: '#item-content',
	data: {
		tag: '아이템 수정창',
		cd_item: $('#cdItem').val(),
		supplier: $('#supplier').val(),
		customer: $('#customer').val(),
		seg_asset: $('#segAsset').val(),
		cdSubs: ['', 'PRSTBT', 'PRABDR', 'PRABPS', 'PRABSD'],
		cbUnits: ['', 'KG', 'MR', 'PC'],
		stopProduct: '',
		cd_type: ''
	},
	mounted(){
		this.init()
	},
	methods:{
		init(){
			$('#myModal').on("hidden.bs.modal", this.backItemMaster)
			
			$('input[type="text"]').keydown(e => {
				if (e.keyCode === 13) {
					e.preventDefault()
				}
			})
			
			var radio = $("div[name = 'radioGroup']")
			var radio2 = $("div[name = 'radioGroup2']")
			radio.find("label:eq(1)").css("transform", "translateX(30%)")
			radio.find("label:eq(2)").css("transform", "translateX(60%)")
			radio2.find("label:eq(1)").css("transform", "translateX(90%)")
			radio2.find("label:eq(2)").css("transform", "translateX(120%)")
			
			this.loadItem("4", this.cd_item, this.seg_asset, this.supplier, this.customer)
		},
		loadItem(action, item, type, supplier, customer){
			var itemData
			var param = {
					ACTION:action,
					CD_ITEM:item,
					CD_TYPE:type,
					CD_SUPPLIER:supplier != null ? supplier : '',
					CD_CUSTOMER:customer != null ? customer : ''
			}
			
			_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].regData(param, '/item/getItem').then((resolvedData)=>{
				itemData = resolvedData
				
				if(this.seg_asset == "30"){
					$("input[name = 'SEG_ASSET'][value='30']").prop("checked", true);
					$("#txtParallel").val(itemData[0].parallel) * 100;
					$("#txtSafetyPrdersent").val(itemData[0].safety_PERCENT) * 100;
					if(itemData[0].free_AREA === "유검사")
						$("input[name = 'Check'][value='rbCheck']").prop("checked", true);
					else
						$("input[name = 'SEG_ASSET'][value='rbUnCheck']").prop("checked", true);
				}
				else if(this.seg_asset == "50"){
					$("input[name = 'SEG_ASSET'][value='50']").prop("checked", true);
					$("#txtParallel").val(itemData[0].parallel) * 100;
					$("#txtSafetyPrdersent").val(itemData[0].safety_PERCENT) * 100;
					if(itemData[0].free_AREA === "유검사")
						$("input[name = 'Check'][value='rbCheck']").prop("checked", true);
					else
						$("input[name = 'SEG_ASSET'][value='rbUnCheck']").prop("checked", true);
				}
				else if(this.seg_asset == "60"){
					$("input[name = 'SEG_ASSET'][value='60']").prop("checked", true);
				}
				
				if(this.customer == null || this.customer == "")
					$('#checkBoxDepoItem').attr("disabled", true)
				else
					$('#checkBoxDepoItem').attr("disabled", false)
					
				if(this.supplier != ''){
					$("#supplierBox").val(itemData[0].cd_SUPPLIER + " : " + itemData[0].nm_SUPPLIER)
				}
				if(this.customer != ''){
					$("#customerBox").val(itemData[0].cd_CUSTOMER + " : " + itemData[0].nm_CUSTOMER)
				}else{
					$('#checkBoxDepoItem').attr("disabled", true)
				}
				
				$("#txtItemNum").val(this.cd_item);
				$("#txtItemNM").val(itemData[0].nm_ITEM);
				$("#txtLeadTime").val(itemData[0].lead_TIME);
				$("#txtSafty").val(itemData[0].safety_STOCK);
				$("#txtFlatCar").val(itemData[0].flatcar);
				$("#txtMinProd").val(itemData[0].production_MINIMUM);
				$("#txtMinAmount").val(itemData[0].minimum_STOCK);
				$("#cbUnit").val(itemData[0].unt_UNIT);
				$("#cdSub").val(itemData[0].cd_SUB);
				$("#txtSNP").val(itemData[0].box_SNP);
				$("#txtExportSnp").val(itemData[0].export_SNP);
				$("#txtSmallSNP").val(itemData[0].small_SNP);
				$("#txtUPH").val(itemData[0].item_UPH);
				$("#txtItemPeriodStart").val(itemData[0].dts_START);
				$("#txtItemPeriodEnd").val(itemData[0].dts_END);
				if(itemData[0].stop_PRODUCTION === "OK")
					document.getElementById("checkBoxStopItem").checked = true
					
				if(itemData[0].cd_TYPE === "DEPO")
					document.getElementById("checkBoxDepoItem").checked = true
				else
					document.getElementById("checkBoxDepoItem").checked = false
					
				if(itemData[0].back_FLUSH == "OK")
					$("input[name = 'BomReg'][value='OK']").prop("checked", true)
				else
					$("input[name = 'BomReg'][value='NG']").prop("checked", true)
					
				if(itemData[0].warehouse == null || itemData[0].warehouse.includes('P1'))
					$("input[name = 'WAREHOUSE'][value='P1']").prop("checked", true)
				else
					$("input[name = 'WAREHOUSE'][value='P2']").prop("checked", true)
				$("#comboLine1").val(itemData[0].prod_LINE01 == null ? "" : itemData[0].prod_LINE01)
				$("#comboLine2").val(itemData[0].prod_LINE02 == null ? "" : itemData[0].prod_LINE02)
				$("#comboLine3").val(itemData[0].prod_LINE03 == null ? "" : itemData[0].prod_LINE03)
				$("#comboLine4").val(itemData[0].prod_LINE04 == null ? "" : itemData[0].prod_LINE04)
				$("#comboLine5").val(itemData[0].prod_LINE05 == null ? "" : itemData[0].prod_LINE05)
				$("#comboTomasLine").val(itemData[0].cd_LINE == null ? "" : itemData[0].cd_LINE)
				$("#comboTomasWare").val(itemData[0].cd_STOCK == null ? "" : itemData[0].cd_STOCK)
				if(itemData[0].other == "P1"){
					document.getElementById("rbPbomAllReg").checked = true;
					document.getElementById("rbPbomOnlyReg").checked = false;
				}
				else if(itemData[0].other == "P2"){
					document.getElementById("rbPbomAllReg").checked = false;
					document.getElementById("rbPbomOnlyReg").checked = true;
				}
				else{
					document.getElementById("rbPbomAllReg").checked = false;
					document.getElementById("rbPbomOnlyReg").checked = false;
				}
				if(itemData[0].processing1 == "X")
					$("input[name = 'PROCESSING1'][value='X']").prop("checked", true);
				else
					$("input[name = 'PROCESSING1'][value='O']").prop("checked", true);
				if(itemData[0].processing2 == "X")
					$("input[name = 'PROCESSING2'][value='X']").prop("checked", true);
				else
					$("input[name = 'PROCESSING2'][value='O']").prop("checked", true);
				if(itemData[0].processing3 == "X")
					$("input[name = 'PROCESSING3'][value='X']").prop("checked", true);
				else
					$("input[name = 'PROCESSING3'][value='O']").prop("checked", true);
				if(itemData[0].processing4 == "X")
					$("input[name = 'PROCESSING4'][value='X']").prop("checked", true);
				else
					$("input[name = 'PROCESSING4'][value='O']").prop("checked", true);
				if(itemData[0].processing5 == "X")
					$("input[name = 'PROCESSING5'][value='X']").prop("checked", true);
				else
					$("input[name = 'PROCESSING5'][value='O']").prop("checked", true);
				if(itemData[0].processing6 == "X")
					$("input[name = 'PROCESSING6'][value='X']").prop("checked", true);
				else
					$("input[name = 'PROCESSING6'][value='O']").prop("checked", true); 
					
				$("#txtPackingInfo").val(itemData[0].packaging_INFO)
				$("#txtReplacementItem").val(itemData[0].replacement_ITEM)
				$("#txtReplacementItem1").val(itemData[0].replacement_ITEM1)
				$("#txtReplacementItem2").val(itemData[0].replacement_ITEM2)
				$("#txtReplacementItem3").val(itemData[0].replacement_ITEM3)
				$("#txtReplacementItem4").val(itemData[0].replacement_ITEM4)
				$("#txtCycleTime").val(itemData[0].cycle_TIME)
			})
		},
		OnlyReg(){
			if($('#rbPbomAllReg').is(':checked')){
				document.getElementById("rbPbomRegHidden").disabled = true;
				document.getElementById("rbPbomAllReg").checked = false;
			}
			else if($('#rbPbomOnlyReg').is(':checked')){
				document.getElementById("rbPbomRegHidden").disabled = true;
			}
			else if($('#rbPbomOnlyReg').is(':checked') == false && $('#rbPbomAllReg').is(':checked') == false){
				document.getElementById("rbPbomRegHidden").disabled = false;
			}
		},
		AllReg(){
			if($('#rbPbomOnlyReg').is(':checked')){
				document.getElementById("rbPbomRegHidden").disabled = true;
				document.getElementById("rbPbomOnlyReg").checked = false;
			}
			else if($('#rbPbomOnlyReg').is(':checked') == false && $('#rbPbomAllReg').is(':checked') == false){
				document.getElementById("rbPbomRegHidden").disabled = false;
			}
		},
		backItemMaster(){
			//Post 방식
			var param = {CD_ITEM:this.cd_item}
			_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].historyRouterPush('/item/item_list', param)
		},
		sendPost(){
            var obj = null
            var arr = $('#itemModifyForm').serializeArray()

            if (arr) {
                obj = {};
                jQuery.each(arr, function() {
                    if (this.name.toUpperCase() == 'NM_ITEM')
                        obj[this.name.toUpperCase()] = this.value
                    else
                        obj[this.name.toUpperCase()] = encodeURI(this.value)

                    if (this.name.toUpperCase() == 'WAREHOUSE'){
						if(obj["SEG_ASSET"] == "60")
							obj[this.name.toUpperCase()] = this.value + "FGWH"
						else
							obj[this.name.toUpperCase()] = this.value + "SUWH"
					}
                });
            }

			_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].regData(obj, '/item/setItem').then((result)=>{
	            if (result != null) {
	                $(".modal-title").html("등록 성공")
	                $(".modal-body").html("품번 " + this.cd_item + "가 등록(갱신)되었습니다.")
	                $("#myModal").modal("show")
	            } else {
	                $(".modal-title").html("등록 실패")
	                $(".modal-body").html("품번 등록 에러")
	                $("#myModal").modal("show")
	            }
			})
		}
	},
	watch: {
		cd_type(){
			if(this.cd_type == "" || this.cd_type == null)
				$('#checkBoxDepoItemHidden').attr("disabled", false)
			else
				$('#checkBoxDepoItemHidden').attr("disabled", true)
		},
		stopProduct(){
			if(this.stopProduct == "" || this.stopProduct == null)
				$('#checkBoxStopItemHidden').attr("disabled", false)
			else
				$('#checkBoxStopItemHidden').attr("disabled", true)
		}
	}
})

/***/ }),

/***/ "./item/Item_Regist.js":
/*!*****************************!*\
  !*** ./item/Item_Regist.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model.js */ "./Model.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View.js */ "./View.js");



new Vue({
	el: '#item-content',
	data: {
		tag : '아이템 등록창',
		cd_item: '',
		supplier: '',
		customer: '',
		comboCdItem: '',
		cd_type: '',
		cdSubs: ['', 'PRSTBT', 'PRABDR', 'PRABPS', 'PRABSD'],
		cbUnits: ['', 'KG', 'MR', 'PC'],
		dataList: [],
		stopProduct: ''
	},
	mounted(){
		this.init()
	},
	methods:{
		init(){
			$('input[type="text"]').keydown(e => {
				if (e.keyCode === 13) {
					e.preventDefault()
				}
			})
			
			var radio = $("div[name = 'radioGroup']")
			var radio2 = $("div[name = 'radioGroup2']")
			radio.find("label:eq(1)").css("transform", "translateX(30%)")
			radio.find("label:eq(2)").css("transform", "translateX(60%)")
			radio2.find("label:eq(1)").css("transform", "translateX(90%)")
			radio2.find("label:eq(2)").css("transform", "translateX(120%)")
			
			$("#SEG_ASSET")[0].checked = true
			$('#checkBoxDepoItem').attr("disabled", true)
		},
		backItemMaster(){
			//Post 방식
			var param = {CD_ITEM:this.cd_item}
			_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].historyRouterPush('/item/item_list', param)
		},
		btnLoadItem(){
			if(!this.comboCdItem){
				alert("품번 입력이 필요합니다.");
				return;
			}
			
			var param = {
				ACTION : "1",
				CD_TYPE : "0", 
				CD_ITEM : this.comboCdItem
			}
			
			_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].regData(param, '/item/getItem').then((resolvedData)=>{
				this.dataList = resolvedData
			})
		},
		trLoadItem(e){
			var td = e.children()
			var itemData
	
			if(td.eq(0).text() == "품번")
				return
			
			var param = {
					ACTION:"4",
					CD_ITEM:td.eq(0).text(),
					CD_TYPE:td.eq(1).text(),
					CD_SUPPLIER:td.eq(2).text(),
					CD_CUSTOMER:td.eq(3).text()
			}
			
			_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].regData(param, '/item/getItem').then((resolvedData)=>{
				//다음 item 정보 load
				itemData = resolvedData
				
				if(param.CD_TYPE == "30"){
					$("input[name = 'SEG_ASSET'][value='30']").prop("checked", true)
					$("#txtParallel").val(itemData[0].parallel) * 100
					$("#txtSafetyPrdersent").val(itemData[0].safety_PERCENT) * 100
					if(itemData[0].free_AREA === "유검사")
						$("input[name = 'Check'][value='rbCheck']").prop("checked", true);
					else
						$("input[name = 'SEG_ASSET'][value='rbUnCheck']").prop("checked", true);
				}
				else if(param.CD_TYPE == "50"){
					$("input[name = 'SEG_ASSET'][value='50']").prop("checked", true)
					$("#txtParallel").val(itemData[0].parallel) * 100
					$("#txtSafetyPrdersent").val(itemData[0].safety_PERCENT) * 100
					if(itemData[0].free_AREA === "유검사")
						$("input[name = 'Check'][value='rbCheck']").prop("checked", true)
					else
						$("input[name = 'SEG_ASSET'][value='rbUnCheck']").prop("checked", true)
				}
				else if(param.CD_TYPE == "60"){
					$("input[name = 'SEG_ASSET'][value='60']").prop("checked", true)
				}
				this.supplier = itemData[0].cd_SUPPLIER == null ? "" : itemData[0].cd_SUPPLIER
				this.customer = itemData[0].cd_CUSTOMER == null ? "" : itemData[0].cd_CUSTOMER
				
				$("#txtItemNum").val(param.CD_ITEM)
				this.cd_item = param.CD_ITEM
				$("#txtItemNM").val(itemData[0].nm_ITEM)
				$("#txtLeadTime").val(itemData[0].lead_TIME)
				$("#txtSafty").val(itemData[0].safety_STOCK)
				$("#txtFlatCar").val(itemData[0].flatcar)
				$("#txtMinProd").val(itemData[0].production_MINIMUM)
				$("#txtMinAmount").val(itemData[0].minimum_STOCK)
				$("#cbUnit").val(itemData[0].unt_UNIT)
				$("#cdSub").val(itemData[0].cd_SUB)
				$("#txtSNP").val(itemData[0].box_SNP)
				$("#txtExportSnp").val(itemData[0].export_SNP)
				$("#txtSmallSNP").val(itemData[0].small_SNP)
				$("#txtUPH").val(itemData[0].item_UPH)
				$("#txtItemPeriodStart").val(itemData[0].dts_START)
				$("#txtItemPeriodEnd").val(itemData[0].dts_END)
				if(itemData[0].stop_PRODUCTION === "OK")
					document.getElementById("checkBoxStopItem").checked = true
				else 
					document.getElementById("checkBoxStopItem").checked = false
					
				if(itemData[0].cd_TYPE === "DEPO")
					document.getElementById("checkBoxDepoItem").checked = true
				else
					document.getElementById("checkBoxDepoItem").checked = false
					
				if(itemData[0].back_FLUSH == "OK")
					$("input[name = 'BomReg'][value='OK']").prop("checked", true)
				else
					$("input[name = 'BomReg'][value='NG']").prop("checked", true)
				if(itemData[0].warehouse == null || itemData[0].warehouse.includes('P1'))
				
					$("input[name = 'WAREHOUSE'][value='P1']").prop("checked", true)
				else
					$("input[name = 'WAREHOUSE'][value='P2']").prop("checked", true)
				$("#comboLine1").val(itemData[0].prod_LINE01 == null ? "" : itemData[0].prod_LINE01)
				$("#comboLine2").val(itemData[0].prod_LINE02 == null ? "" : itemData[0].prod_LINE02)
				$("#comboLine3").val(itemData[0].prod_LINE03 == null ? "" : itemData[0].prod_LINE03)
				$("#comboLine4").val(itemData[0].prod_LINE04 == null ? "" : itemData[0].prod_LINE04)
				$("#comboLine5").val(itemData[0].prod_LINE05 == null ? "" : itemData[0].prod_LINE05)
				$("#comboTomasLine").val(itemData[0].cd_LINE == null ? "" : itemData[0].cd_LINE)
				$("#comboTomasWare").val(itemData[0].cd_STOCK == null ? "" : itemData[0].cd_STOCK)
				if(itemData[0].other == "P1"){
					document.getElementById("rbPbomAllReg").checked = true
					document.getElementById("rbPbomOnlyReg").checked = false
				}
				else if(itemData[0].other == "P2"){
					document.getElementById("rbPbomAllReg").checked = false;
					document.getElementById("rbPbomOnlyReg").checked = true
				}
				else{
					document.getElementById("rbPbomAllReg").checked = false
					document.getElementById("rbPbomOnlyReg").checked = false
				}
				if(itemData[0].processing1 == "X")
					$("input[name = 'PROCESSING1'][value='X']").prop("checked", true)
				else
					$("input[name = 'PROCESSING1'][value='O']").prop("checked", true)
				if(itemData[0].processing2 == "X")
					$("input[name = 'PROCESSING2'][value='X']").prop("checked", true)
				else
					$("input[name = 'PROCESSING2'][value='O']").prop("checked", true)
				if(itemData[0].processing3 == "X")
					$("input[name = 'PROCESSING3'][value='X']").prop("checked", true)
				else
					$("input[name = 'PROCESSING3'][value='O']").prop("checked", true)
				if(itemData[0].processing4 == "X")
					$("input[name = 'PROCESSING4'][value='X']").prop("checked", true)
				else
					$("input[name = 'PROCESSING4'][value='O']").prop("checked", true)
				if(itemData[0].processing5 == "X")
					$("input[name = 'PROCESSING5'][value='X']").prop("checked", true)
				else
					$("input[name = 'PROCESSING5'][value='O']").prop("checked", true)
				if(itemData[0].processing6 == "X")
					$("input[name = 'PROCESSING6'][value='X']").prop("checked", true)
				else
					$("input[name = 'PROCESSING6'][value='O']").prop("checked", true)
					
				$("#txtPackingInfo").val(itemData[0].packaging_INFO)
				$("#txtReplacementItem").val(itemData[0].replacement_ITEM)
				$("#txtReplacementItem1").val(itemData[0].replacement_ITEM1)
				$("#txtReplacementItem2").val(itemData[0].replacement_ITEM2)
				$("#txtReplacementItem3").val(itemData[0].replacement_ITEM3)
				$("#txtReplacementItem4").val(itemData[0].replacement_ITEM4)
				$("#txtCycleTime").val(itemData[0].cycle_TIME)
			})
			.catch((err)=>console.log(err))
		},
		sendPost(){
            var obj = null
            var arr = $('#itemRegistForm').serializeArray()

            if (arr) {
                obj = {};
                jQuery.each(arr, function() {
					if(this.name.toUpperCase() == 'CD_ITEM')
                        obj[this.name.toUpperCase()] = this.value.toUpperCase()

                    if (this.name.toUpperCase() == 'NM_ITEM')
                        obj[this.name.toUpperCase()] = this.value
                    else
                        obj[this.name.toUpperCase()] = encodeURI(this.value)

                    if (this.name.toUpperCase() == 'WAREHOUSE'){
						if(obj["SEG_ASSET"] == "60")
							obj[this.name.toUpperCase()] = this.value + "FGWH"
						else
							obj[this.name.toUpperCase()] = this.value + "SUWH"
					}
                })
            }
			
			_Model_js__WEBPACK_IMPORTED_MODULE_0__["default"].regData(obj, '/item/setItem').then((result)=>{
	            if (result != null) {
	                $(".modal-title").html("등록 성공")
	                $(".modal-body").html("품번 " + this.cd_item + "가 등록(갱신)되었습니다.")
	                $("#myModal").modal("show")
	            } else {
	                $(".modal-title").html("등록 실패")
	                $(".modal-body").html("품번 등록 에러")
	                $("#myModal").modal("show")
	            }
			})
		},
		OnlyReg(){
			if($('#rbPbomAllReg').is(':checked')){
				document.getElementById("rbPbomRegHidden").disabled = true;
				document.getElementById("rbPbomAllReg").checked = false;
			}
			else if($('#rbPbomOnlyReg').is(':checked')){
				document.getElementById("rbPbomRegHidden").disabled = true;
			}
			else if($('#rbPbomOnlyReg').is(':checked') == false && $('#rbPbomAllReg').is(':checked') == false){
				document.getElementById("rbPbomRegHidden").disabled = false;
			}
		},
		AllReg(){
			if($('#rbPbomOnlyReg').is(':checked')){
				document.getElementById("rbPbomRegHidden").disabled = true;
				document.getElementById("rbPbomOnlyReg").checked = false;
			}
			else if($('#rbPbomAllReg').is(':checked')){
				document.getElementById("rbPbomRegHidden").disabled = true;
			}
			else if($('#rbPbomOnlyReg').is(':checked') == false && $('#rbPbomAllReg').is(':checked') == false){
				document.getElementById("rbPbomRegHidden").disabled = false;
			}
		},
		backItemMaster(){
			_View_js__WEBPACK_IMPORTED_MODULE_1__["default"].historyRouterPush('/item/item_list', '')
		}
	},
	watch: {
		cd_type(){
			if(this.cd_type == "" || this.cd_type == null)
				$('#checkBoxDepoItemHidden').attr("disabled", false)
			else
				$('#checkBoxDepoItemHidden').attr("disabled", true)
		},
		stopProduct(){
			if(this.stopProduct == "" || this.stopProduct == null)
				$('#checkBoxStopItemHidden').attr("disabled", false)
			else
				$('#checkBoxStopItemHidden').attr("disabled", true)
		},
		customer(){
			if(this.customer == null || this.customer == "")
				$('#checkBoxDepoItem').attr("disabled", true)
			else
				$('#checkBoxDepoItem').attr("disabled", false)
		},
		dataList(){
			var html = "";
			html+="<thead style=\"position:sticky;top:0;background:#f2f2f2\">"
			html+="<tr><th>품번</th><th>구분</th><th>협력사</th><th>고객사</th></tr>"
			html+="</thead>"
			html+="<tbody>"
			
			for(var i=0; i<this.dataList.length; i++){
				var supplier = (!this.dataList[i].cd_SUPPLIER) ? "" : this.dataList[i].cd_SUPPLIER
				var customer = (!this.dataList[i].cd_CUSTOMER) ? "" : this.dataList[i].cd_CUSTOMER

				html+="<tr>"
				html+="<td>" + this.dataList[i].cd_ITEM + "</td>"
				html+="<td>" + this.dataList[i].seg_ASSET + "</td>"
				html+="<td>" + supplier + "</td>"
				html+="<td>" + customer + "</td>"
				html+="</tr>"
			}
			html+="</tbody>"
			
			$(".scrollTable").html(html)
			$("table tr").click((e)=>this.trLoadItem($(e.currentTarget)))
		}
	}
})

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a039d8c446335c16db06")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5lOGMwMWZkZDM5MzgzZmE4MGZmYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JEO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvRUFBK0I7QUFDekUsT0FBTywwSkFBMkU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyw4RUFBb0M7QUFDOUUsVUFBVSxvS0FBcUY7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxnRUFBNkI7QUFDdkUsVUFBVSxzSkFBMEU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQywwREFBMEI7QUFDcEUsVUFBVSxnSkFBaUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvREFBdUI7QUFDakUsVUFBVSwwSUFBb0U7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyxvREFBdUI7QUFDakUsVUFBVSwwSUFBb0U7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFhLENBQUMsbUJBQWUsQ0FBQyw4RUFBb0M7QUFDOUUsVUFBVSwwS0FBZ0Y7QUFDMUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBOzs7Ozs7Ozs7Ozs7O0FDekgrQjtBQUNGO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHlEQUFhO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLEdBQUcsa0VBQXNCO0FBQ3pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEdBQUcseURBQWE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RQOEI7QUFDRjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsR0FBRyxrRUFBc0I7QUFDekIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcseURBQWE7QUFDaEI7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcseURBQWE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEdBQUcseURBQWE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUcsa0VBQXNCO0FBQ3pCO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHlDQUF5QyxNQUFNO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDMVNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9pdGVtL0l0ZW1fTW9kaWZ5LmpzIiwid2VicGFjazovLy8uL2l0ZW0vSXRlbV9SZWdpc3QuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YWcgPSAnW1ZpZXddJ1xyXG5cclxubGV0IHByZXZVcmwgPSAnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGluaXQoZWwpIHtcclxuXHRcdGlmICghZWwpIHRocm93IGVsXHJcblx0XHR0aGlzLmVsID0gZWxcclxuXHRcdHJldHVybiB0aGlzXHJcblx0fSxcclxuXHJcblx0b24oZXZlbnQsIGhhbmRsZXIpIHtcclxuXHRcdHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcilcclxuXHRcdHJldHVybiB0aGlzXHJcblx0fSxcclxuXHJcblx0ZW1pdChldmVudCwgZGF0YSkge1xyXG5cdFx0Y29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7IGRldGFpbDogZGF0YSB9KVxyXG5cdFx0dGhpcy5lbC5kaXNwYXRjaEV2ZW50KGV2dClcclxuXHRcdHJldHVybiB0aGlzXHJcblx0fSxcclxuXHJcblx0aGlkZSgpIHtcclxuXHRcdHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cdCAgICByZXR1cm4gdGhpc1xyXG5cdH0sXHJcblx0XHJcblx0c2hvdygpIHtcclxuXHRcdHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICcnXHJcblx0XHRyZXR1cm4gdGhpc1xyXG5cdH0sXHJcbiAgXHJcblx0Ly9lbnRyeSBwb2ludFxyXG5cdGluaXRpYWxSb3V0ZXMocGF0aE5hbWUsIHBhcmFtKSB7XHJcblx0XHQvL2hpc3Rvcnkg7LSI6riw7ZmUXHJcblx0XHR0aGlzLnJlbmRlckhUTUwocGF0aE5hbWUsIHBhcmFtKVxyXG5cdFx0d2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB0aGlzLnJlbmRlckhUTUwobG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywnJykpXHJcblx0fSxcclxuXHJcblx0Ly8gc2V0IGJyb3dzZXIgaGlzdG9yeVxyXG5cdGhpc3RvcnlSb3V0ZXJQdXNoKHBhdGhOYW1lLCBwYXJhbSkge1xyXG5cdFx0aWYocHJldlVybCAhPSBwYXRoTmFtZSl7XHJcblx0XHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7cGF0aE5hbWV9LCAnJywgJyMnICsgcGF0aE5hbWUpXHJcblx0XHRcdHRoaXMucmVuZGVySFRNTChwYXRoTmFtZSwgcGFyYW0pXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly8gcmVuZGVyXHJcblx0cmVuZGVySFRNTChyb3V0ZSwgcGFyYW0pIHtcclxuXHRcdGlmKHJvdXRlID09ICcnKVxyXG5cdFx0XHRyb3V0ZSA9ICcvZGFzaGJvYXJkL2Rhc2hib2FyZCdcclxuXHRcdFx0XHJcblx0XHRpZihoaXN0b3J5LnN0YXRlICE9IG51bGwpe1xyXG5cdFx0XHRpZihoaXN0b3J5LnN0YXRlLnBhdGhOYW1lICE9IG51bGwpe1xyXG5cdFx0XHRcdHJvdXRlID0gaGlzdG9yeS5zdGF0ZS5wYXRoTmFtZVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoaGlzdG9yeS5zdGF0ZS5wcmV2VXJsICE9IG51bGwpe1xyXG5cdFx0XHRcdHJvdXRlID0gaGlzdG9yeS5zdGF0ZS5wcmV2VXJsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0JChcIiNwYWdlLWNvbnRlbnRcIikubG9hZChyb3V0ZSwgcGFyYW0sICgpID0+IHRoaXMucmVuZGVyTW9kdWxlKHJvdXRlKSlcclxuXHJcblx0XHRwcmV2VXJsID0gcm91dGVcclxuXHR9LFxyXG4gIFxyXG5cdHJlbmRlck1vZHVsZShyb3V0ZSl7XHJcblx0XHR2YXIgaW5kZXggPSByb3V0ZS5pbmRleE9mKFwiP1wiKVxyXG5cdFx0aWYoaW5kZXggPiAwKXtcclxuXHRcdFx0cm91dGUgPSByb3V0ZS5zdWJzdHJpbmcoMCwgaW5kZXgpXHJcblx0XHR9XHJcblx0XHJcblx0XHRzd2l0Y2gocm91dGUpe1xyXG5cdFx0XHRjYXNlICcvZGFzaGJvYXJkL2Rhc2hib2FyZCc6XHJcblx0XHRcdFx0aWYgKCQoJyNkYXNoYm9hcmQtY29udGVudCcpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuL2Rhc2hib2FyZC9EYXNoQ29udHJvbGxlci5qcycpXVxyXG5cdFx0XHRcdCAgXHRpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJEYXNoQm9hcmRcIiAqLyAnLi9kYXNoYm9hcmQvRGFzaENvbnRyb2xsZXIuanMnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlICcvc2hpcC9pZGVudGlmaWNhdGlvbic6XHJcblx0XHRcdFx0aWYgKCQoJyNpZGVudGlmaWNhdGlvbi1jb250ZW50JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4vc2hpcC9JZGVudGlmaWNhdGlvbkNvbnRyb2xsZXIuanMnKV1cclxuXHRcdFx0ICBcdCAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJJZGVudGlmaWNhdGlvblwiICovICcuL3NoaXAvSWRlbnRpZmljYXRpb25Db250cm9sbGVyLmpzJylcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlICcvaW5zcGVjdGlvbi9pbnNwZWN0aW9uJzpcclxuXHRcdFx0XHRpZiAoJCgnI2luc3BlY3Rpb24tY29udGVudCcpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuL2luc3BlY3Rpb24vSW5zcGVjdFZpZXcuanMnKV1cclxuXHRcdFx0ICBcdCAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJJbnNwZWN0aW9uXCIgKi8gJy4vaW5zcGVjdGlvbi9JbnNwZWN0Vmlldy5qcycpXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnL2l0ZW0vaXRlbV9saXN0JzpcclxuXHRcdFx0XHRpZiAoJCgnI2l0ZW0tY29udGVudCcpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuL2l0ZW0vaXRlbUNvbnRyb2xsZXIuanMnKV1cclxuXHRcdFx0ICBcdCAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJJdGVtXCIgKi8gJy4vaXRlbS9pdGVtQ29udHJvbGxlci5qcycpXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnL2l0ZW0vaXRlbV9tb2RpZnknOlxyXG5cdFx0XHRcdGlmICgkKCcjaXRlbS1jb250ZW50JykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcmVxdWlyZS5jYWNoZVtyZXF1aXJlLnJlc29sdmUoJy4vaXRlbS9JdGVtX01vZGlmeS5qcycpXVxyXG5cdFx0XHQgIFx0ICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkl0ZW1Nb2RpZnlcIiAqLyAnLi9pdGVtL0l0ZW1fTW9kaWZ5LmpzJylcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlICcvaXRlbS9pdGVtX3JlZ2lzdGVyJzpcclxuXHRcdFx0XHRpZiAoJCgnI2l0ZW0tY29udGVudCcpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHJlcXVpcmUuY2FjaGVbcmVxdWlyZS5yZXNvbHZlKCcuL2l0ZW0vSXRlbV9SZWdpc3QuanMnKV1cclxuXHRcdFx0ICBcdCAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJJdGVtUmVnaXN0XCIgKi8gJy4vaXRlbS9JdGVtX1JlZ2lzdC5qcycpXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnL3dhcmVob3VzZS93YXJlaG91c2UnOlxyXG5cdFx0XHRcdGlmICgkKCcjd2FyZWhvdXNlLWNvbnRlbnQnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSByZXF1aXJlLmNhY2hlW3JlcXVpcmUucmVzb2x2ZSgnLi93YXJlaG91c2UvV2FyZWhvdXNlQ29udHJvbGxlci5qcycpXVxyXG5cdFx0XHQgIFx0ICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIldhcmVIb3VzZVwiICovICcuL3dhcmVob3VzZS9XYXJlaG91c2VDb250cm9sbGVyLmpzJylcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0XHRicmVha1xyXG5cdFx0fVxyXG5cdH0sXHJcbiAgXHJcblx0cmVmcmVzaFBhZ2UoKXtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7cHJldlVybH0sICcnLCBcIiNcIiArIHByZXZVcmwpXHJcblx0fVxyXG59IiwiaW1wb3J0IE1vZGVsIGZyb20gJy4uL01vZGVsLmpzJ1xyXG5pbXBvcnQgVmlldyBmcm9tICcuLi9WaWV3LmpzJ1xyXG5cclxubmV3IFZ1ZSh7XHJcblx0ZWw6ICcjaXRlbS1jb250ZW50JyxcclxuXHRkYXRhOiB7XHJcblx0XHR0YWc6ICfslYTsnbTthZwg7IiY7KCV7LC9JyxcclxuXHRcdGNkX2l0ZW06ICQoJyNjZEl0ZW0nKS52YWwoKSxcclxuXHRcdHN1cHBsaWVyOiAkKCcjc3VwcGxpZXInKS52YWwoKSxcclxuXHRcdGN1c3RvbWVyOiAkKCcjY3VzdG9tZXInKS52YWwoKSxcclxuXHRcdHNlZ19hc3NldDogJCgnI3NlZ0Fzc2V0JykudmFsKCksXHJcblx0XHRjZFN1YnM6IFsnJywgJ1BSU1RCVCcsICdQUkFCRFInLCAnUFJBQlBTJywgJ1BSQUJTRCddLFxyXG5cdFx0Y2JVbml0czogWycnLCAnS0cnLCAnTVInLCAnUEMnXSxcclxuXHRcdHN0b3BQcm9kdWN0OiAnJyxcclxuXHRcdGNkX3R5cGU6ICcnXHJcblx0fSxcclxuXHRtb3VudGVkKCl7XHJcblx0XHR0aGlzLmluaXQoKVxyXG5cdH0sXHJcblx0bWV0aG9kczp7XHJcblx0XHRpbml0KCl7XHJcblx0XHRcdCQoJyNteU1vZGFsJykub24oXCJoaWRkZW4uYnMubW9kYWxcIiwgdGhpcy5iYWNrSXRlbU1hc3RlcilcclxuXHRcdFx0XHJcblx0XHRcdCQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykua2V5ZG93bihlID0+IHtcclxuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHJhZGlvID0gJChcImRpdltuYW1lID0gJ3JhZGlvR3JvdXAnXVwiKVxyXG5cdFx0XHR2YXIgcmFkaW8yID0gJChcImRpdltuYW1lID0gJ3JhZGlvR3JvdXAyJ11cIilcclxuXHRcdFx0cmFkaW8uZmluZChcImxhYmVsOmVxKDEpXCIpLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZVgoMzAlKVwiKVxyXG5cdFx0XHRyYWRpby5maW5kKFwibGFiZWw6ZXEoMilcIikuY3NzKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlWCg2MCUpXCIpXHJcblx0XHRcdHJhZGlvMi5maW5kKFwibGFiZWw6ZXEoMSlcIikuY3NzKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlWCg5MCUpXCIpXHJcblx0XHRcdHJhZGlvMi5maW5kKFwibGFiZWw6ZXEoMilcIikuY3NzKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlWCgxMjAlKVwiKVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5sb2FkSXRlbShcIjRcIiwgdGhpcy5jZF9pdGVtLCB0aGlzLnNlZ19hc3NldCwgdGhpcy5zdXBwbGllciwgdGhpcy5jdXN0b21lcilcclxuXHRcdH0sXHJcblx0XHRsb2FkSXRlbShhY3Rpb24sIGl0ZW0sIHR5cGUsIHN1cHBsaWVyLCBjdXN0b21lcil7XHJcblx0XHRcdHZhciBpdGVtRGF0YVxyXG5cdFx0XHR2YXIgcGFyYW0gPSB7XHJcblx0XHRcdFx0XHRBQ1RJT046YWN0aW9uLFxyXG5cdFx0XHRcdFx0Q0RfSVRFTTppdGVtLFxyXG5cdFx0XHRcdFx0Q0RfVFlQRTp0eXBlLFxyXG5cdFx0XHRcdFx0Q0RfU1VQUExJRVI6c3VwcGxpZXIgIT0gbnVsbCA/IHN1cHBsaWVyIDogJycsXHJcblx0XHRcdFx0XHRDRF9DVVNUT01FUjpjdXN0b21lciAhPSBudWxsID8gY3VzdG9tZXIgOiAnJ1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRNb2RlbC5yZWdEYXRhKHBhcmFtLCAnL2l0ZW0vZ2V0SXRlbScpLnRoZW4oKHJlc29sdmVkRGF0YSk9PntcclxuXHRcdFx0XHRpdGVtRGF0YSA9IHJlc29sdmVkRGF0YVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKHRoaXMuc2VnX2Fzc2V0ID09IFwiMzBcIil7XHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdTRUdfQVNTRVQnXVt2YWx1ZT0nMzAnXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdCQoXCIjdHh0UGFyYWxsZWxcIikudmFsKGl0ZW1EYXRhWzBdLnBhcmFsbGVsKSAqIDEwMDtcclxuXHRcdFx0XHRcdCQoXCIjdHh0U2FmZXR5UHJkZXJzZW50XCIpLnZhbChpdGVtRGF0YVswXS5zYWZldHlfUEVSQ0VOVCkgKiAxMDA7XHJcblx0XHRcdFx0XHRpZihpdGVtRGF0YVswXS5mcmVlX0FSRUEgPT09IFwi7Jyg6rKA7IKsXCIpXHJcblx0XHRcdFx0XHRcdCQoXCJpbnB1dFtuYW1lID0gJ0NoZWNrJ11bdmFsdWU9J3JiQ2hlY2snXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnU0VHX0FTU0VUJ11bdmFsdWU9J3JiVW5DaGVjayddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHRoaXMuc2VnX2Fzc2V0ID09IFwiNTBcIil7XHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdTRUdfQVNTRVQnXVt2YWx1ZT0nNTAnXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdCQoXCIjdHh0UGFyYWxsZWxcIikudmFsKGl0ZW1EYXRhWzBdLnBhcmFsbGVsKSAqIDEwMDtcclxuXHRcdFx0XHRcdCQoXCIjdHh0U2FmZXR5UHJkZXJzZW50XCIpLnZhbChpdGVtRGF0YVswXS5zYWZldHlfUEVSQ0VOVCkgKiAxMDA7XHJcblx0XHRcdFx0XHRpZihpdGVtRGF0YVswXS5mcmVlX0FSRUEgPT09IFwi7Jyg6rKA7IKsXCIpXHJcblx0XHRcdFx0XHRcdCQoXCJpbnB1dFtuYW1lID0gJ0NoZWNrJ11bdmFsdWU9J3JiQ2hlY2snXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnU0VHX0FTU0VUJ11bdmFsdWU9J3JiVW5DaGVjayddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHRoaXMuc2VnX2Fzc2V0ID09IFwiNjBcIil7XHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdTRUdfQVNTRVQnXVt2YWx1ZT0nNjAnXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYodGhpcy5jdXN0b21lciA9PSBudWxsIHx8IHRoaXMuY3VzdG9tZXIgPT0gXCJcIilcclxuXHRcdFx0XHRcdCQoJyNjaGVja0JveERlcG9JdGVtJykuYXR0cihcImRpc2FibGVkXCIsIHRydWUpXHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0JCgnI2NoZWNrQm94RGVwb0l0ZW0nKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRpZih0aGlzLnN1cHBsaWVyICE9ICcnKXtcclxuXHRcdFx0XHRcdCQoXCIjc3VwcGxpZXJCb3hcIikudmFsKGl0ZW1EYXRhWzBdLmNkX1NVUFBMSUVSICsgXCIgOiBcIiArIGl0ZW1EYXRhWzBdLm5tX1NVUFBMSUVSKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZih0aGlzLmN1c3RvbWVyICE9ICcnKXtcclxuXHRcdFx0XHRcdCQoXCIjY3VzdG9tZXJCb3hcIikudmFsKGl0ZW1EYXRhWzBdLmNkX0NVU1RPTUVSICsgXCIgOiBcIiArIGl0ZW1EYXRhWzBdLm5tX0NVU1RPTUVSKVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0JCgnI2NoZWNrQm94RGVwb0l0ZW0nKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JChcIiN0eHRJdGVtTnVtXCIpLnZhbCh0aGlzLmNkX2l0ZW0pO1xyXG5cdFx0XHRcdCQoXCIjdHh0SXRlbU5NXCIpLnZhbChpdGVtRGF0YVswXS5ubV9JVEVNKTtcclxuXHRcdFx0XHQkKFwiI3R4dExlYWRUaW1lXCIpLnZhbChpdGVtRGF0YVswXS5sZWFkX1RJTUUpO1xyXG5cdFx0XHRcdCQoXCIjdHh0U2FmdHlcIikudmFsKGl0ZW1EYXRhWzBdLnNhZmV0eV9TVE9DSyk7XHJcblx0XHRcdFx0JChcIiN0eHRGbGF0Q2FyXCIpLnZhbChpdGVtRGF0YVswXS5mbGF0Y2FyKTtcclxuXHRcdFx0XHQkKFwiI3R4dE1pblByb2RcIikudmFsKGl0ZW1EYXRhWzBdLnByb2R1Y3Rpb25fTUlOSU1VTSk7XHJcblx0XHRcdFx0JChcIiN0eHRNaW5BbW91bnRcIikudmFsKGl0ZW1EYXRhWzBdLm1pbmltdW1fU1RPQ0spO1xyXG5cdFx0XHRcdCQoXCIjY2JVbml0XCIpLnZhbChpdGVtRGF0YVswXS51bnRfVU5JVCk7XHJcblx0XHRcdFx0JChcIiNjZFN1YlwiKS52YWwoaXRlbURhdGFbMF0uY2RfU1VCKTtcclxuXHRcdFx0XHQkKFwiI3R4dFNOUFwiKS52YWwoaXRlbURhdGFbMF0uYm94X1NOUCk7XHJcblx0XHRcdFx0JChcIiN0eHRFeHBvcnRTbnBcIikudmFsKGl0ZW1EYXRhWzBdLmV4cG9ydF9TTlApO1xyXG5cdFx0XHRcdCQoXCIjdHh0U21hbGxTTlBcIikudmFsKGl0ZW1EYXRhWzBdLnNtYWxsX1NOUCk7XHJcblx0XHRcdFx0JChcIiN0eHRVUEhcIikudmFsKGl0ZW1EYXRhWzBdLml0ZW1fVVBIKTtcclxuXHRcdFx0XHQkKFwiI3R4dEl0ZW1QZXJpb2RTdGFydFwiKS52YWwoaXRlbURhdGFbMF0uZHRzX1NUQVJUKTtcclxuXHRcdFx0XHQkKFwiI3R4dEl0ZW1QZXJpb2RFbmRcIikudmFsKGl0ZW1EYXRhWzBdLmR0c19FTkQpO1xyXG5cdFx0XHRcdGlmKGl0ZW1EYXRhWzBdLnN0b3BfUFJPRFVDVElPTiA9PT0gXCJPS1wiKVxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja0JveFN0b3BJdGVtXCIpLmNoZWNrZWQgPSB0cnVlXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRpZihpdGVtRGF0YVswXS5jZF9UWVBFID09PSBcIkRFUE9cIilcclxuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tCb3hEZXBvSXRlbVwiKS5jaGVja2VkID0gdHJ1ZVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tCb3hEZXBvSXRlbVwiKS5jaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGlmKGl0ZW1EYXRhWzBdLmJhY2tfRkxVU0ggPT0gXCJPS1wiKVxyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnQm9tUmVnJ11bdmFsdWU9J09LJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSlcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdCb21SZWcnXVt2YWx1ZT0nTkcnXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0aWYoaXRlbURhdGFbMF0ud2FyZWhvdXNlID09IG51bGwgfHwgaXRlbURhdGFbMF0ud2FyZWhvdXNlLmluY2x1ZGVzKCdQMScpKVxyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnV0FSRUhPVVNFJ11bdmFsdWU9J1AxJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSlcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdXQVJFSE9VU0UnXVt2YWx1ZT0nUDInXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKVxyXG5cdFx0XHRcdCQoXCIjY29tYm9MaW5lMVwiKS52YWwoaXRlbURhdGFbMF0ucHJvZF9MSU5FMDEgPT0gbnVsbCA/IFwiXCIgOiBpdGVtRGF0YVswXS5wcm9kX0xJTkUwMSlcclxuXHRcdFx0XHQkKFwiI2NvbWJvTGluZTJcIikudmFsKGl0ZW1EYXRhWzBdLnByb2RfTElORTAyID09IG51bGwgPyBcIlwiIDogaXRlbURhdGFbMF0ucHJvZF9MSU5FMDIpXHJcblx0XHRcdFx0JChcIiNjb21ib0xpbmUzXCIpLnZhbChpdGVtRGF0YVswXS5wcm9kX0xJTkUwMyA9PSBudWxsID8gXCJcIiA6IGl0ZW1EYXRhWzBdLnByb2RfTElORTAzKVxyXG5cdFx0XHRcdCQoXCIjY29tYm9MaW5lNFwiKS52YWwoaXRlbURhdGFbMF0ucHJvZF9MSU5FMDQgPT0gbnVsbCA/IFwiXCIgOiBpdGVtRGF0YVswXS5wcm9kX0xJTkUwNClcclxuXHRcdFx0XHQkKFwiI2NvbWJvTGluZTVcIikudmFsKGl0ZW1EYXRhWzBdLnByb2RfTElORTA1ID09IG51bGwgPyBcIlwiIDogaXRlbURhdGFbMF0ucHJvZF9MSU5FMDUpXHJcblx0XHRcdFx0JChcIiNjb21ib1RvbWFzTGluZVwiKS52YWwoaXRlbURhdGFbMF0uY2RfTElORSA9PSBudWxsID8gXCJcIiA6IGl0ZW1EYXRhWzBdLmNkX0xJTkUpXHJcblx0XHRcdFx0JChcIiNjb21ib1RvbWFzV2FyZVwiKS52YWwoaXRlbURhdGFbMF0uY2RfU1RPQ0sgPT0gbnVsbCA/IFwiXCIgOiBpdGVtRGF0YVswXS5jZF9TVE9DSylcclxuXHRcdFx0XHRpZihpdGVtRGF0YVswXS5vdGhlciA9PSBcIlAxXCIpe1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYlBib21BbGxSZWdcIikuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJiUGJvbU9ubHlSZWdcIikuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKGl0ZW1EYXRhWzBdLm90aGVyID09IFwiUDJcIil7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJiUGJvbUFsbFJlZ1wiKS5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJiUGJvbU9ubHlSZWdcIikuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJiUGJvbUFsbFJlZ1wiKS5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJiUGJvbU9ubHlSZWdcIikuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihpdGVtRGF0YVswXS5wcm9jZXNzaW5nMSA9PSBcIlhcIilcclxuXHRcdFx0XHRcdCQoXCJpbnB1dFtuYW1lID0gJ1BST0NFU1NJTkcxJ11bdmFsdWU9J1gnXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdQUk9DRVNTSU5HMSddW3ZhbHVlPSdPJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0aWYoaXRlbURhdGFbMF0ucHJvY2Vzc2luZzIgPT0gXCJYXCIpXHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdQUk9DRVNTSU5HMiddW3ZhbHVlPSdYJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnUFJPQ0VTU0lORzInXVt2YWx1ZT0nTyddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cdFx0XHRcdGlmKGl0ZW1EYXRhWzBdLnByb2Nlc3NpbmczID09IFwiWFwiKVxyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnUFJPQ0VTU0lORzMnXVt2YWx1ZT0nWCddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdCQoXCJpbnB1dFtuYW1lID0gJ1BST0NFU1NJTkczJ11bdmFsdWU9J08nXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRpZihpdGVtRGF0YVswXS5wcm9jZXNzaW5nNCA9PSBcIlhcIilcclxuXHRcdFx0XHRcdCQoXCJpbnB1dFtuYW1lID0gJ1BST0NFU1NJTkc0J11bdmFsdWU9J1gnXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdQUk9DRVNTSU5HNCddW3ZhbHVlPSdPJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0aWYoaXRlbURhdGFbMF0ucHJvY2Vzc2luZzUgPT0gXCJYXCIpXHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdQUk9DRVNTSU5HNSddW3ZhbHVlPSdYJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnUFJPQ0VTU0lORzUnXVt2YWx1ZT0nTyddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cdFx0XHRcdGlmKGl0ZW1EYXRhWzBdLnByb2Nlc3Npbmc2ID09IFwiWFwiKVxyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnUFJPQ0VTU0lORzYnXVt2YWx1ZT0nWCddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdCQoXCJpbnB1dFtuYW1lID0gJ1BST0NFU1NJTkc2J11bdmFsdWU9J08nXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTsgXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQkKFwiI3R4dFBhY2tpbmdJbmZvXCIpLnZhbChpdGVtRGF0YVswXS5wYWNrYWdpbmdfSU5GTylcclxuXHRcdFx0XHQkKFwiI3R4dFJlcGxhY2VtZW50SXRlbVwiKS52YWwoaXRlbURhdGFbMF0ucmVwbGFjZW1lbnRfSVRFTSlcclxuXHRcdFx0XHQkKFwiI3R4dFJlcGxhY2VtZW50SXRlbTFcIikudmFsKGl0ZW1EYXRhWzBdLnJlcGxhY2VtZW50X0lURU0xKVxyXG5cdFx0XHRcdCQoXCIjdHh0UmVwbGFjZW1lbnRJdGVtMlwiKS52YWwoaXRlbURhdGFbMF0ucmVwbGFjZW1lbnRfSVRFTTIpXHJcblx0XHRcdFx0JChcIiN0eHRSZXBsYWNlbWVudEl0ZW0zXCIpLnZhbChpdGVtRGF0YVswXS5yZXBsYWNlbWVudF9JVEVNMylcclxuXHRcdFx0XHQkKFwiI3R4dFJlcGxhY2VtZW50SXRlbTRcIikudmFsKGl0ZW1EYXRhWzBdLnJlcGxhY2VtZW50X0lURU00KVxyXG5cdFx0XHRcdCQoXCIjdHh0Q3ljbGVUaW1lXCIpLnZhbChpdGVtRGF0YVswXS5jeWNsZV9USU1FKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdE9ubHlSZWcoKXtcclxuXHRcdFx0aWYoJCgnI3JiUGJvbUFsbFJlZycpLmlzKCc6Y2hlY2tlZCcpKXtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJiUGJvbVJlZ0hpZGRlblwiKS5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYlBib21BbGxSZWdcIikuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoJCgnI3JiUGJvbU9ubHlSZWcnKS5pcygnOmNoZWNrZWQnKSl7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYlBib21SZWdIaWRkZW5cIikuZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoJCgnI3JiUGJvbU9ubHlSZWcnKS5pcygnOmNoZWNrZWQnKSA9PSBmYWxzZSAmJiAkKCcjcmJQYm9tQWxsUmVnJykuaXMoJzpjaGVja2VkJykgPT0gZmFsc2Upe1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmJQYm9tUmVnSGlkZGVuXCIpLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRBbGxSZWcoKXtcclxuXHRcdFx0aWYoJCgnI3JiUGJvbU9ubHlSZWcnKS5pcygnOmNoZWNrZWQnKSl7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYlBib21SZWdIaWRkZW5cIikuZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmJQYm9tT25seVJlZ1wiKS5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZigkKCcjcmJQYm9tT25seVJlZycpLmlzKCc6Y2hlY2tlZCcpID09IGZhbHNlICYmICQoJyNyYlBib21BbGxSZWcnKS5pcygnOmNoZWNrZWQnKSA9PSBmYWxzZSl7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYlBib21SZWdIaWRkZW5cIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGJhY2tJdGVtTWFzdGVyKCl7XHJcblx0XHRcdC8vUG9zdCDrsKnsi51cclxuXHRcdFx0dmFyIHBhcmFtID0ge0NEX0lURU06dGhpcy5jZF9pdGVtfVxyXG5cdFx0XHRWaWV3Lmhpc3RvcnlSb3V0ZXJQdXNoKCcvaXRlbS9pdGVtX2xpc3QnLCBwYXJhbSlcclxuXHRcdH0sXHJcblx0XHRzZW5kUG9zdCgpe1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gbnVsbFxyXG4gICAgICAgICAgICB2YXIgYXJyID0gJCgnI2l0ZW1Nb2RpZnlGb3JtJykuc2VyaWFsaXplQXJyYXkoKVxyXG5cclxuICAgICAgICAgICAgaWYgKGFycikge1xyXG4gICAgICAgICAgICAgICAgb2JqID0ge307XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChhcnIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUudG9VcHBlckNhc2UoKSA9PSAnTk1fSVRFTScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialt0aGlzLm5hbWUudG9VcHBlckNhc2UoKV0gPSB0aGlzLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbdGhpcy5uYW1lLnRvVXBwZXJDYXNlKCldID0gZW5jb2RlVVJJKHRoaXMudmFsdWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUudG9VcHBlckNhc2UoKSA9PSAnV0FSRUhPVVNFJyl7XHJcblx0XHRcdFx0XHRcdGlmKG9ialtcIlNFR19BU1NFVFwiXSA9PSBcIjYwXCIpXHJcblx0XHRcdFx0XHRcdFx0b2JqW3RoaXMubmFtZS50b1VwcGVyQ2FzZSgpXSA9IHRoaXMudmFsdWUgKyBcIkZHV0hcIlxyXG5cdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0b2JqW3RoaXMubmFtZS50b1VwcGVyQ2FzZSgpXSA9IHRoaXMudmFsdWUgKyBcIlNVV0hcIlxyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdE1vZGVsLnJlZ0RhdGEob2JqLCAnL2l0ZW0vc2V0SXRlbScpLnRoZW4oKHJlc3VsdCk9PntcclxuXHQgICAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuXHQgICAgICAgICAgICAgICAgJChcIi5tb2RhbC10aXRsZVwiKS5odG1sKFwi65Ox66GdIOyEseqztVwiKVxyXG5cdCAgICAgICAgICAgICAgICAkKFwiLm1vZGFsLWJvZHlcIikuaHRtbChcIu2SiOuyiCBcIiArIHRoaXMuY2RfaXRlbSArIFwi6rCAIOuTseuhnSjqsLHsi6Ap65CY7JeI7Iq164uI64ukLlwiKVxyXG5cdCAgICAgICAgICAgICAgICAkKFwiI215TW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgJChcIi5tb2RhbC10aXRsZVwiKS5odG1sKFwi65Ox66GdIOyLpO2MqFwiKVxyXG5cdCAgICAgICAgICAgICAgICAkKFwiLm1vZGFsLWJvZHlcIikuaHRtbChcIu2SiOuyiCDrk7HroZ0g7JeQ65+sXCIpXHJcblx0ICAgICAgICAgICAgICAgICQoXCIjbXlNb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuXHQgICAgICAgICAgICB9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fSxcclxuXHR3YXRjaDoge1xyXG5cdFx0Y2RfdHlwZSgpe1xyXG5cdFx0XHRpZih0aGlzLmNkX3R5cGUgPT0gXCJcIiB8fCB0aGlzLmNkX3R5cGUgPT0gbnVsbClcclxuXHRcdFx0XHQkKCcjY2hlY2tCb3hEZXBvSXRlbUhpZGRlbicpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdCQoJyNjaGVja0JveERlcG9JdGVtSGlkZGVuJykuYXR0cihcImRpc2FibGVkXCIsIHRydWUpXHJcblx0XHR9LFxyXG5cdFx0c3RvcFByb2R1Y3QoKXtcclxuXHRcdFx0aWYodGhpcy5zdG9wUHJvZHVjdCA9PSBcIlwiIHx8IHRoaXMuc3RvcFByb2R1Y3QgPT0gbnVsbClcclxuXHRcdFx0XHQkKCcjY2hlY2tCb3hTdG9wSXRlbUhpZGRlbicpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdCQoJyNjaGVja0JveFN0b3BJdGVtSGlkZGVuJykuYXR0cihcImRpc2FibGVkXCIsIHRydWUpXHJcblx0XHR9XHJcblx0fVxyXG59KSIsImltcG9ydCBNb2RlbCBmcm9tICcuLi9Nb2RlbC5qcydcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi4vVmlldy5qcydcclxuXHJcbm5ldyBWdWUoe1xyXG5cdGVsOiAnI2l0ZW0tY29udGVudCcsXHJcblx0ZGF0YToge1xyXG5cdFx0dGFnIDogJ+yVhOydtO2FnCDrk7HroZ3ssL0nLFxyXG5cdFx0Y2RfaXRlbTogJycsXHJcblx0XHRzdXBwbGllcjogJycsXHJcblx0XHRjdXN0b21lcjogJycsXHJcblx0XHRjb21ib0NkSXRlbTogJycsXHJcblx0XHRjZF90eXBlOiAnJyxcclxuXHRcdGNkU3ViczogWycnLCAnUFJTVEJUJywgJ1BSQUJEUicsICdQUkFCUFMnLCAnUFJBQlNEJ10sXHJcblx0XHRjYlVuaXRzOiBbJycsICdLRycsICdNUicsICdQQyddLFxyXG5cdFx0ZGF0YUxpc3Q6IFtdLFxyXG5cdFx0c3RvcFByb2R1Y3Q6ICcnXHJcblx0fSxcclxuXHRtb3VudGVkKCl7XHJcblx0XHR0aGlzLmluaXQoKVxyXG5cdH0sXHJcblx0bWV0aG9kczp7XHJcblx0XHRpbml0KCl7XHJcblx0XHRcdCQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykua2V5ZG93bihlID0+IHtcclxuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHJhZGlvID0gJChcImRpdltuYW1lID0gJ3JhZGlvR3JvdXAnXVwiKVxyXG5cdFx0XHR2YXIgcmFkaW8yID0gJChcImRpdltuYW1lID0gJ3JhZGlvR3JvdXAyJ11cIilcclxuXHRcdFx0cmFkaW8uZmluZChcImxhYmVsOmVxKDEpXCIpLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZVgoMzAlKVwiKVxyXG5cdFx0XHRyYWRpby5maW5kKFwibGFiZWw6ZXEoMilcIikuY3NzKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlWCg2MCUpXCIpXHJcblx0XHRcdHJhZGlvMi5maW5kKFwibGFiZWw6ZXEoMSlcIikuY3NzKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlWCg5MCUpXCIpXHJcblx0XHRcdHJhZGlvMi5maW5kKFwibGFiZWw6ZXEoMilcIikuY3NzKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlWCgxMjAlKVwiKVxyXG5cdFx0XHRcclxuXHRcdFx0JChcIiNTRUdfQVNTRVRcIilbMF0uY2hlY2tlZCA9IHRydWVcclxuXHRcdFx0JCgnI2NoZWNrQm94RGVwb0l0ZW0nKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcclxuXHRcdH0sXHJcblx0XHRiYWNrSXRlbU1hc3Rlcigpe1xyXG5cdFx0XHQvL1Bvc3Qg67Cp7IudXHJcblx0XHRcdHZhciBwYXJhbSA9IHtDRF9JVEVNOnRoaXMuY2RfaXRlbX1cclxuXHRcdFx0Vmlldy5oaXN0b3J5Um91dGVyUHVzaCgnL2l0ZW0vaXRlbV9saXN0JywgcGFyYW0pXHJcblx0XHR9LFxyXG5cdFx0YnRuTG9hZEl0ZW0oKXtcclxuXHRcdFx0aWYoIXRoaXMuY29tYm9DZEl0ZW0pe1xyXG5cdFx0XHRcdGFsZXJ0KFwi7ZKI67KIIOyeheugpeydtCDtlYTsmpTtlanri4jri6QuXCIpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHBhcmFtID0ge1xyXG5cdFx0XHRcdEFDVElPTiA6IFwiMVwiLFxyXG5cdFx0XHRcdENEX1RZUEUgOiBcIjBcIiwgXHJcblx0XHRcdFx0Q0RfSVRFTSA6IHRoaXMuY29tYm9DZEl0ZW1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0TW9kZWwucmVnRGF0YShwYXJhbSwgJy9pdGVtL2dldEl0ZW0nKS50aGVuKChyZXNvbHZlZERhdGEpPT57XHJcblx0XHRcdFx0dGhpcy5kYXRhTGlzdCA9IHJlc29sdmVkRGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdHRyTG9hZEl0ZW0oZSl7XHJcblx0XHRcdHZhciB0ZCA9IGUuY2hpbGRyZW4oKVxyXG5cdFx0XHR2YXIgaXRlbURhdGFcclxuXHRcclxuXHRcdFx0aWYodGQuZXEoMCkudGV4dCgpID09IFwi7ZKI67KIXCIpXHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgcGFyYW0gPSB7XHJcblx0XHRcdFx0XHRBQ1RJT046XCI0XCIsXHJcblx0XHRcdFx0XHRDRF9JVEVNOnRkLmVxKDApLnRleHQoKSxcclxuXHRcdFx0XHRcdENEX1RZUEU6dGQuZXEoMSkudGV4dCgpLFxyXG5cdFx0XHRcdFx0Q0RfU1VQUExJRVI6dGQuZXEoMikudGV4dCgpLFxyXG5cdFx0XHRcdFx0Q0RfQ1VTVE9NRVI6dGQuZXEoMykudGV4dCgpXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdE1vZGVsLnJlZ0RhdGEocGFyYW0sICcvaXRlbS9nZXRJdGVtJykudGhlbigocmVzb2x2ZWREYXRhKT0+e1xyXG5cdFx0XHRcdC8v64uk7J2MIGl0ZW0g7KCV67O0IGxvYWRcclxuXHRcdFx0XHRpdGVtRGF0YSA9IHJlc29sdmVkRGF0YVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKHBhcmFtLkNEX1RZUEUgPT0gXCIzMFwiKXtcclxuXHRcdFx0XHRcdCQoXCJpbnB1dFtuYW1lID0gJ1NFR19BU1NFVCddW3ZhbHVlPSczMCddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpXHJcblx0XHRcdFx0XHQkKFwiI3R4dFBhcmFsbGVsXCIpLnZhbChpdGVtRGF0YVswXS5wYXJhbGxlbCkgKiAxMDBcclxuXHRcdFx0XHRcdCQoXCIjdHh0U2FmZXR5UHJkZXJzZW50XCIpLnZhbChpdGVtRGF0YVswXS5zYWZldHlfUEVSQ0VOVCkgKiAxMDBcclxuXHRcdFx0XHRcdGlmKGl0ZW1EYXRhWzBdLmZyZWVfQVJFQSA9PT0gXCLsnKDqsoDsgqxcIilcclxuXHRcdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnQ2hlY2snXVt2YWx1ZT0ncmJDaGVjayddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdTRUdfQVNTRVQnXVt2YWx1ZT0ncmJVbkNoZWNrJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYocGFyYW0uQ0RfVFlQRSA9PSBcIjUwXCIpe1xyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnU0VHX0FTU0VUJ11bdmFsdWU9JzUwJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSlcclxuXHRcdFx0XHRcdCQoXCIjdHh0UGFyYWxsZWxcIikudmFsKGl0ZW1EYXRhWzBdLnBhcmFsbGVsKSAqIDEwMFxyXG5cdFx0XHRcdFx0JChcIiN0eHRTYWZldHlQcmRlcnNlbnRcIikudmFsKGl0ZW1EYXRhWzBdLnNhZmV0eV9QRVJDRU5UKSAqIDEwMFxyXG5cdFx0XHRcdFx0aWYoaXRlbURhdGFbMF0uZnJlZV9BUkVBID09PSBcIuycoOqygOyCrFwiKVxyXG5cdFx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdDaGVjayddW3ZhbHVlPSdyYkNoZWNrJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSlcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnU0VHX0FTU0VUJ11bdmFsdWU9J3JiVW5DaGVjayddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYocGFyYW0uQ0RfVFlQRSA9PSBcIjYwXCIpe1xyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnU0VHX0FTU0VUJ11bdmFsdWU9JzYwJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zdXBwbGllciA9IGl0ZW1EYXRhWzBdLmNkX1NVUFBMSUVSID09IG51bGwgPyBcIlwiIDogaXRlbURhdGFbMF0uY2RfU1VQUExJRVJcclxuXHRcdFx0XHR0aGlzLmN1c3RvbWVyID0gaXRlbURhdGFbMF0uY2RfQ1VTVE9NRVIgPT0gbnVsbCA/IFwiXCIgOiBpdGVtRGF0YVswXS5jZF9DVVNUT01FUlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQoXCIjdHh0SXRlbU51bVwiKS52YWwocGFyYW0uQ0RfSVRFTSlcclxuXHRcdFx0XHR0aGlzLmNkX2l0ZW0gPSBwYXJhbS5DRF9JVEVNXHJcblx0XHRcdFx0JChcIiN0eHRJdGVtTk1cIikudmFsKGl0ZW1EYXRhWzBdLm5tX0lURU0pXHJcblx0XHRcdFx0JChcIiN0eHRMZWFkVGltZVwiKS52YWwoaXRlbURhdGFbMF0ubGVhZF9USU1FKVxyXG5cdFx0XHRcdCQoXCIjdHh0U2FmdHlcIikudmFsKGl0ZW1EYXRhWzBdLnNhZmV0eV9TVE9DSylcclxuXHRcdFx0XHQkKFwiI3R4dEZsYXRDYXJcIikudmFsKGl0ZW1EYXRhWzBdLmZsYXRjYXIpXHJcblx0XHRcdFx0JChcIiN0eHRNaW5Qcm9kXCIpLnZhbChpdGVtRGF0YVswXS5wcm9kdWN0aW9uX01JTklNVU0pXHJcblx0XHRcdFx0JChcIiN0eHRNaW5BbW91bnRcIikudmFsKGl0ZW1EYXRhWzBdLm1pbmltdW1fU1RPQ0spXHJcblx0XHRcdFx0JChcIiNjYlVuaXRcIikudmFsKGl0ZW1EYXRhWzBdLnVudF9VTklUKVxyXG5cdFx0XHRcdCQoXCIjY2RTdWJcIikudmFsKGl0ZW1EYXRhWzBdLmNkX1NVQilcclxuXHRcdFx0XHQkKFwiI3R4dFNOUFwiKS52YWwoaXRlbURhdGFbMF0uYm94X1NOUClcclxuXHRcdFx0XHQkKFwiI3R4dEV4cG9ydFNucFwiKS52YWwoaXRlbURhdGFbMF0uZXhwb3J0X1NOUClcclxuXHRcdFx0XHQkKFwiI3R4dFNtYWxsU05QXCIpLnZhbChpdGVtRGF0YVswXS5zbWFsbF9TTlApXHJcblx0XHRcdFx0JChcIiN0eHRVUEhcIikudmFsKGl0ZW1EYXRhWzBdLml0ZW1fVVBIKVxyXG5cdFx0XHRcdCQoXCIjdHh0SXRlbVBlcmlvZFN0YXJ0XCIpLnZhbChpdGVtRGF0YVswXS5kdHNfU1RBUlQpXHJcblx0XHRcdFx0JChcIiN0eHRJdGVtUGVyaW9kRW5kXCIpLnZhbChpdGVtRGF0YVswXS5kdHNfRU5EKVxyXG5cdFx0XHRcdGlmKGl0ZW1EYXRhWzBdLnN0b3BfUFJPRFVDVElPTiA9PT0gXCJPS1wiKVxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja0JveFN0b3BJdGVtXCIpLmNoZWNrZWQgPSB0cnVlXHJcblx0XHRcdFx0ZWxzZSBcclxuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tCb3hTdG9wSXRlbVwiKS5jaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGlmKGl0ZW1EYXRhWzBdLmNkX1RZUEUgPT09IFwiREVQT1wiKVxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja0JveERlcG9JdGVtXCIpLmNoZWNrZWQgPSB0cnVlXHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja0JveERlcG9JdGVtXCIpLmNoZWNrZWQgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0aWYoaXRlbURhdGFbMF0uYmFja19GTFVTSCA9PSBcIk9LXCIpXHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdCb21SZWcnXVt2YWx1ZT0nT0snXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdCQoXCJpbnB1dFtuYW1lID0gJ0JvbVJlZyddW3ZhbHVlPSdORyddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpXHJcblx0XHRcdFx0aWYoaXRlbURhdGFbMF0ud2FyZWhvdXNlID09IG51bGwgfHwgaXRlbURhdGFbMF0ud2FyZWhvdXNlLmluY2x1ZGVzKCdQMScpKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnV0FSRUhPVVNFJ11bdmFsdWU9J1AxJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSlcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdXQVJFSE9VU0UnXVt2YWx1ZT0nUDInXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKVxyXG5cdFx0XHRcdCQoXCIjY29tYm9MaW5lMVwiKS52YWwoaXRlbURhdGFbMF0ucHJvZF9MSU5FMDEgPT0gbnVsbCA/IFwiXCIgOiBpdGVtRGF0YVswXS5wcm9kX0xJTkUwMSlcclxuXHRcdFx0XHQkKFwiI2NvbWJvTGluZTJcIikudmFsKGl0ZW1EYXRhWzBdLnByb2RfTElORTAyID09IG51bGwgPyBcIlwiIDogaXRlbURhdGFbMF0ucHJvZF9MSU5FMDIpXHJcblx0XHRcdFx0JChcIiNjb21ib0xpbmUzXCIpLnZhbChpdGVtRGF0YVswXS5wcm9kX0xJTkUwMyA9PSBudWxsID8gXCJcIiA6IGl0ZW1EYXRhWzBdLnByb2RfTElORTAzKVxyXG5cdFx0XHRcdCQoXCIjY29tYm9MaW5lNFwiKS52YWwoaXRlbURhdGFbMF0ucHJvZF9MSU5FMDQgPT0gbnVsbCA/IFwiXCIgOiBpdGVtRGF0YVswXS5wcm9kX0xJTkUwNClcclxuXHRcdFx0XHQkKFwiI2NvbWJvTGluZTVcIikudmFsKGl0ZW1EYXRhWzBdLnByb2RfTElORTA1ID09IG51bGwgPyBcIlwiIDogaXRlbURhdGFbMF0ucHJvZF9MSU5FMDUpXHJcblx0XHRcdFx0JChcIiNjb21ib1RvbWFzTGluZVwiKS52YWwoaXRlbURhdGFbMF0uY2RfTElORSA9PSBudWxsID8gXCJcIiA6IGl0ZW1EYXRhWzBdLmNkX0xJTkUpXHJcblx0XHRcdFx0JChcIiNjb21ib1RvbWFzV2FyZVwiKS52YWwoaXRlbURhdGFbMF0uY2RfU1RPQ0sgPT0gbnVsbCA/IFwiXCIgOiBpdGVtRGF0YVswXS5jZF9TVE9DSylcclxuXHRcdFx0XHRpZihpdGVtRGF0YVswXS5vdGhlciA9PSBcIlAxXCIpe1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYlBib21BbGxSZWdcIikuY2hlY2tlZCA9IHRydWVcclxuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmJQYm9tT25seVJlZ1wiKS5jaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZihpdGVtRGF0YVswXS5vdGhlciA9PSBcIlAyXCIpe1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYlBib21BbGxSZWdcIikuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYlBib21Pbmx5UmVnXCIpLmNoZWNrZWQgPSB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJiUGJvbUFsbFJlZ1wiKS5jaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmJQYm9tT25seVJlZ1wiKS5jaGVja2VkID0gZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoaXRlbURhdGFbMF0ucHJvY2Vzc2luZzEgPT0gXCJYXCIpXHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdQUk9DRVNTSU5HMSddW3ZhbHVlPSdYJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSlcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdQUk9DRVNTSU5HMSddW3ZhbHVlPSdPJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSlcclxuXHRcdFx0XHRpZihpdGVtRGF0YVswXS5wcm9jZXNzaW5nMiA9PSBcIlhcIilcclxuXHRcdFx0XHRcdCQoXCJpbnB1dFtuYW1lID0gJ1BST0NFU1NJTkcyJ11bdmFsdWU9J1gnXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdCQoXCJpbnB1dFtuYW1lID0gJ1BST0NFU1NJTkcyJ11bdmFsdWU9J08nXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKVxyXG5cdFx0XHRcdGlmKGl0ZW1EYXRhWzBdLnByb2Nlc3NpbmczID09IFwiWFwiKVxyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnUFJPQ0VTU0lORzMnXVt2YWx1ZT0nWCddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpXHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnUFJPQ0VTU0lORzMnXVt2YWx1ZT0nTyddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpXHJcblx0XHRcdFx0aWYoaXRlbURhdGFbMF0ucHJvY2Vzc2luZzQgPT0gXCJYXCIpXHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdQUk9DRVNTSU5HNCddW3ZhbHVlPSdYJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSlcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHQkKFwiaW5wdXRbbmFtZSA9ICdQUk9DRVNTSU5HNCddW3ZhbHVlPSdPJ11cIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSlcclxuXHRcdFx0XHRpZihpdGVtRGF0YVswXS5wcm9jZXNzaW5nNSA9PSBcIlhcIilcclxuXHRcdFx0XHRcdCQoXCJpbnB1dFtuYW1lID0gJ1BST0NFU1NJTkc1J11bdmFsdWU9J1gnXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdCQoXCJpbnB1dFtuYW1lID0gJ1BST0NFU1NJTkc1J11bdmFsdWU9J08nXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKVxyXG5cdFx0XHRcdGlmKGl0ZW1EYXRhWzBdLnByb2Nlc3Npbmc2ID09IFwiWFwiKVxyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnUFJPQ0VTU0lORzYnXVt2YWx1ZT0nWCddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpXHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0JChcImlucHV0W25hbWUgPSAnUFJPQ0VTU0lORzYnXVt2YWx1ZT0nTyddXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQkKFwiI3R4dFBhY2tpbmdJbmZvXCIpLnZhbChpdGVtRGF0YVswXS5wYWNrYWdpbmdfSU5GTylcclxuXHRcdFx0XHQkKFwiI3R4dFJlcGxhY2VtZW50SXRlbVwiKS52YWwoaXRlbURhdGFbMF0ucmVwbGFjZW1lbnRfSVRFTSlcclxuXHRcdFx0XHQkKFwiI3R4dFJlcGxhY2VtZW50SXRlbTFcIikudmFsKGl0ZW1EYXRhWzBdLnJlcGxhY2VtZW50X0lURU0xKVxyXG5cdFx0XHRcdCQoXCIjdHh0UmVwbGFjZW1lbnRJdGVtMlwiKS52YWwoaXRlbURhdGFbMF0ucmVwbGFjZW1lbnRfSVRFTTIpXHJcblx0XHRcdFx0JChcIiN0eHRSZXBsYWNlbWVudEl0ZW0zXCIpLnZhbChpdGVtRGF0YVswXS5yZXBsYWNlbWVudF9JVEVNMylcclxuXHRcdFx0XHQkKFwiI3R4dFJlcGxhY2VtZW50SXRlbTRcIikudmFsKGl0ZW1EYXRhWzBdLnJlcGxhY2VtZW50X0lURU00KVxyXG5cdFx0XHRcdCQoXCIjdHh0Q3ljbGVUaW1lXCIpLnZhbChpdGVtRGF0YVswXS5jeWNsZV9USU1FKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycik9PmNvbnNvbGUubG9nKGVycikpXHJcblx0XHR9LFxyXG5cdFx0c2VuZFBvc3QoKXtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IG51bGxcclxuICAgICAgICAgICAgdmFyIGFyciA9ICQoJyNpdGVtUmVnaXN0Rm9ybScpLnNlcmlhbGl6ZUFycmF5KClcclxuXHJcbiAgICAgICAgICAgIGlmIChhcnIpIHtcclxuICAgICAgICAgICAgICAgIG9iaiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2goYXJyLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmKHRoaXMubmFtZS50b1VwcGVyQ2FzZSgpID09ICdDRF9JVEVNJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3RoaXMubmFtZS50b1VwcGVyQ2FzZSgpXSA9IHRoaXMudmFsdWUudG9VcHBlckNhc2UoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5uYW1lLnRvVXBwZXJDYXNlKCkgPT0gJ05NX0lURU0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbdGhpcy5uYW1lLnRvVXBwZXJDYXNlKCldID0gdGhpcy52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3RoaXMubmFtZS50b1VwcGVyQ2FzZSgpXSA9IGVuY29kZVVSSSh0aGlzLnZhbHVlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5uYW1lLnRvVXBwZXJDYXNlKCkgPT0gJ1dBUkVIT1VTRScpe1xyXG5cdFx0XHRcdFx0XHRpZihvYmpbXCJTRUdfQVNTRVRcIl0gPT0gXCI2MFwiKVxyXG5cdFx0XHRcdFx0XHRcdG9ialt0aGlzLm5hbWUudG9VcHBlckNhc2UoKV0gPSB0aGlzLnZhbHVlICsgXCJGR1dIXCJcclxuXHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdG9ialt0aGlzLm5hbWUudG9VcHBlckNhc2UoKV0gPSB0aGlzLnZhbHVlICsgXCJTVVdIXCJcclxuXHRcdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHRcdE1vZGVsLnJlZ0RhdGEob2JqLCAnL2l0ZW0vc2V0SXRlbScpLnRoZW4oKHJlc3VsdCk9PntcclxuXHQgICAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuXHQgICAgICAgICAgICAgICAgJChcIi5tb2RhbC10aXRsZVwiKS5odG1sKFwi65Ox66GdIOyEseqztVwiKVxyXG5cdCAgICAgICAgICAgICAgICAkKFwiLm1vZGFsLWJvZHlcIikuaHRtbChcIu2SiOuyiCBcIiArIHRoaXMuY2RfaXRlbSArIFwi6rCAIOuTseuhnSjqsLHsi6Ap65CY7JeI7Iq164uI64ukLlwiKVxyXG5cdCAgICAgICAgICAgICAgICAkKFwiI215TW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgJChcIi5tb2RhbC10aXRsZVwiKS5odG1sKFwi65Ox66GdIOyLpO2MqFwiKVxyXG5cdCAgICAgICAgICAgICAgICAkKFwiLm1vZGFsLWJvZHlcIikuaHRtbChcIu2SiOuyiCDrk7HroZ0g7JeQ65+sXCIpXHJcblx0ICAgICAgICAgICAgICAgICQoXCIjbXlNb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuXHQgICAgICAgICAgICB9XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0T25seVJlZygpe1xyXG5cdFx0XHRpZigkKCcjcmJQYm9tQWxsUmVnJykuaXMoJzpjaGVja2VkJykpe1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmJQYm9tUmVnSGlkZGVuXCIpLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJiUGJvbUFsbFJlZ1wiKS5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZigkKCcjcmJQYm9tT25seVJlZycpLmlzKCc6Y2hlY2tlZCcpKXtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJiUGJvbVJlZ0hpZGRlblwiKS5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZigkKCcjcmJQYm9tT25seVJlZycpLmlzKCc6Y2hlY2tlZCcpID09IGZhbHNlICYmICQoJyNyYlBib21BbGxSZWcnKS5pcygnOmNoZWNrZWQnKSA9PSBmYWxzZSl7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYlBib21SZWdIaWRkZW5cIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdEFsbFJlZygpe1xyXG5cdFx0XHRpZigkKCcjcmJQYm9tT25seVJlZycpLmlzKCc6Y2hlY2tlZCcpKXtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJiUGJvbVJlZ0hpZGRlblwiKS5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYlBib21Pbmx5UmVnXCIpLmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKCQoJyNyYlBib21BbGxSZWcnKS5pcygnOmNoZWNrZWQnKSl7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYlBib21SZWdIaWRkZW5cIikuZGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoJCgnI3JiUGJvbU9ubHlSZWcnKS5pcygnOmNoZWNrZWQnKSA9PSBmYWxzZSAmJiAkKCcjcmJQYm9tQWxsUmVnJykuaXMoJzpjaGVja2VkJykgPT0gZmFsc2Upe1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmJQYm9tUmVnSGlkZGVuXCIpLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRiYWNrSXRlbU1hc3Rlcigpe1xyXG5cdFx0XHRWaWV3Lmhpc3RvcnlSb3V0ZXJQdXNoKCcvaXRlbS9pdGVtX2xpc3QnLCAnJylcclxuXHRcdH1cclxuXHR9LFxyXG5cdHdhdGNoOiB7XHJcblx0XHRjZF90eXBlKCl7XHJcblx0XHRcdGlmKHRoaXMuY2RfdHlwZSA9PSBcIlwiIHx8IHRoaXMuY2RfdHlwZSA9PSBudWxsKVxyXG5cdFx0XHRcdCQoJyNjaGVja0JveERlcG9JdGVtSGlkZGVuJykuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0JCgnI2NoZWNrQm94RGVwb0l0ZW1IaWRkZW4nKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcclxuXHRcdH0sXHJcblx0XHRzdG9wUHJvZHVjdCgpe1xyXG5cdFx0XHRpZih0aGlzLnN0b3BQcm9kdWN0ID09IFwiXCIgfHwgdGhpcy5zdG9wUHJvZHVjdCA9PSBudWxsKVxyXG5cdFx0XHRcdCQoJyNjaGVja0JveFN0b3BJdGVtSGlkZGVuJykuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0JCgnI2NoZWNrQm94U3RvcEl0ZW1IaWRkZW4nKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcclxuXHRcdH0sXHJcblx0XHRjdXN0b21lcigpe1xyXG5cdFx0XHRpZih0aGlzLmN1c3RvbWVyID09IG51bGwgfHwgdGhpcy5jdXN0b21lciA9PSBcIlwiKVxyXG5cdFx0XHRcdCQoJyNjaGVja0JveERlcG9JdGVtJykuYXR0cihcImRpc2FibGVkXCIsIHRydWUpXHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQkKCcjY2hlY2tCb3hEZXBvSXRlbScpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuXHRcdH0sXHJcblx0XHRkYXRhTGlzdCgpe1xyXG5cdFx0XHR2YXIgaHRtbCA9IFwiXCI7XHJcblx0XHRcdGh0bWwrPVwiPHRoZWFkIHN0eWxlPVxcXCJwb3NpdGlvbjpzdGlja3k7dG9wOjA7YmFja2dyb3VuZDojZjJmMmYyXFxcIj5cIlxyXG5cdFx0XHRodG1sKz1cIjx0cj48dGg+7ZKI67KIPC90aD48dGg+6rWs67aEPC90aD48dGg+7ZiR66Cl7IKsPC90aD48dGg+6rOg6rCd7IKsPC90aD48L3RyPlwiXHJcblx0XHRcdGh0bWwrPVwiPC90aGVhZD5cIlxyXG5cdFx0XHRodG1sKz1cIjx0Ym9keT5cIlxyXG5cdFx0XHRcclxuXHRcdFx0Zm9yKHZhciBpPTA7IGk8dGhpcy5kYXRhTGlzdC5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0dmFyIHN1cHBsaWVyID0gKCF0aGlzLmRhdGFMaXN0W2ldLmNkX1NVUFBMSUVSKSA/IFwiXCIgOiB0aGlzLmRhdGFMaXN0W2ldLmNkX1NVUFBMSUVSXHJcblx0XHRcdFx0dmFyIGN1c3RvbWVyID0gKCF0aGlzLmRhdGFMaXN0W2ldLmNkX0NVU1RPTUVSKSA/IFwiXCIgOiB0aGlzLmRhdGFMaXN0W2ldLmNkX0NVU1RPTUVSXHJcblxyXG5cdFx0XHRcdGh0bWwrPVwiPHRyPlwiXHJcblx0XHRcdFx0aHRtbCs9XCI8dGQ+XCIgKyB0aGlzLmRhdGFMaXN0W2ldLmNkX0lURU0gKyBcIjwvdGQ+XCJcclxuXHRcdFx0XHRodG1sKz1cIjx0ZD5cIiArIHRoaXMuZGF0YUxpc3RbaV0uc2VnX0FTU0VUICsgXCI8L3RkPlwiXHJcblx0XHRcdFx0aHRtbCs9XCI8dGQ+XCIgKyBzdXBwbGllciArIFwiPC90ZD5cIlxyXG5cdFx0XHRcdGh0bWwrPVwiPHRkPlwiICsgY3VzdG9tZXIgKyBcIjwvdGQ+XCJcclxuXHRcdFx0XHRodG1sKz1cIjwvdHI+XCJcclxuXHRcdFx0fVxyXG5cdFx0XHRodG1sKz1cIjwvdGJvZHk+XCJcclxuXHRcdFx0XHJcblx0XHRcdCQoXCIuc2Nyb2xsVGFibGVcIikuaHRtbChodG1sKVxyXG5cdFx0XHQkKFwidGFibGUgdHJcIikuY2xpY2soKGUpPT50aGlzLnRyTG9hZEl0ZW0oJChlLmN1cnJlbnRUYXJnZXQpKSlcclxuXHRcdH1cclxuXHR9XHJcbn0pIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTAzOWQ4YzQ0NjMzNWMxNmRiMDZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=