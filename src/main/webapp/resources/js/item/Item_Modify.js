import Model from '../Model.js'
import View from '../View.js'

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
			
			Model.regData(param, '/item/getItem').then((resolvedData)=>{
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
				//$("#txtExportSnp").val(itemData[0].export_SNP);
				$("#txtWareSnp").val(itemData[0].ware_SNP);
				$("#txtShipSnp").val(itemData[0].ship_SNP);
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
                $('#txtReplacementItem').val(decodeURI(itemData[0].replacement_ITEM)
                    .replace(/\+/g, ' ')
                    .replaceAll('%2f', '/').replaceAll('%2F', '/')
                    .replaceAll('%2c', ',').replaceAll('%2C', ','))
                $('#txtReplacementItem1').val(decodeURI(itemData[0].replacement_ITEM1)
                    .replace(/\+/g, ' ')
                    .replaceAll('%2f', '/').replaceAll('%2F', '/')
                    .replaceAll('%2c', ',').replaceAll('%2C', ','))
                $('#txtReplacementItem2').val(decodeURI(itemData[0].replacement_ITEM2)
                    .replace(/\+/g, ' ')
                    .replaceAll('%2f', '/').replaceAll('%2F', '/')
                    .replaceAll('%2c', ',').replaceAll('%2C', ','))
                $('#txtReplacementItem3').val(decodeURI(itemData[0].replacement_ITEM3)
                    .replace(/\+/g, ' ')
                    .replaceAll('%2f', '/').replaceAll('%2F', '/')
                    .replaceAll('%2c', ',').replaceAll('%2C', ','))
                $('#txtReplacementItem4').val(decodeURI(itemData[0].replacement_ITEM4)
                    .replace(/\+/g, ' ')
                    .replaceAll('%2f', '/').replaceAll('%2F', '/')
                    .replaceAll('%2c', ',').replaceAll('%2C', ','))
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
			View.historyRouterPush('/item/item_list', param)
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

			Model.regData(obj, '/item/setItem').then((result)=>{
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