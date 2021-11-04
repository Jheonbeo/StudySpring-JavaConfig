<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="container-fluid" id="item-content">
	<form name="modifyForm" id="modifyForm">
		<div class="card shadow mb-4">
			<div class="card-header py-3">
				<h6 class="m-0 font-weight-bold text-primary">TKK_ITEM
					DataTables</h6>
			</div>
			<div class="card-body">
				<div name="radioGroup" class="form-group row">
					<label><input type="radio" name="SEG_ASSET" value="30"
						checked>부품</label> <label><input type="radio"
						name="SEG_ASSET" value="50">반제품</label> <label><input
						type="radio" name="SEG_ASSET" value="60">완제품</label>
				</div>
				<div class="form-group row flex-container">
					<label>협력사 코드 &nbsp</label> <input type="text"
						class="form-control boxcontrol" id="supplierBox"
						readonly="readonly"> <input type="hidden"
						name="CD_SUPPLIER"> <label>&nbsp 고객사 코드 &nbsp</label> <input
						type="text" class="form-control boxcontrol" id="customerBox"
						readonly="readonly"> <input type="hidden"
						name="CD_CUSTOMER">
				</div>

				<div class="form-group row flex-container">
					<label>품번 &nbsp</label> <input type="text"
						class="form-control boxcontrol" id="txtItemNum" name="CD_ITEM"
						readonly="readonly"> <label>&nbsp 품명 &nbsp</label> <input
						type="text" class="form-control boxcontrol" id="txtItemNM"
						name="NM_ITEM">
				</div>
				<div class="form-group row flex-container">
					<fieldset class="fieldsetcontrol">
						<label>리드타임</label> <input type="text"
							class="form-control boxcontrol" id="txtLeadTime" name="LEAD_TIME">
						<label>안전 재고 기간</label> <input type="text"
							class="form-control boxcontrol" id="txtSafty" name="SAFETY_STOCK">
						<label>대차 수</label> <input type="text"
							class="form-control boxcontrol" id="txtFlatCar" name="FLATCAR">
					</fieldset>
					<fieldset class="fieldsetcontrol">
						<label>최소 생산 단위</label> <input type="text"
							class="form-control boxcontrol" id="txtMinProd"
							name="PRODUCTION_MINIMUM"> <label>최소 재고 단위</label> <input
							type="text" class="form-control boxcontrol" id="txtMinAmount"
							name="MINIMUM_STOCK"> <label>단위</label> <select
							id="cbUnit" name="UNT_UNIT" class="form-control boxcontrol">
							<option value="KG">KG</option>
							<option value="MR">MR</option>
							<option value="PC">PC</option>
						</select> <label>Sub</label> <select id="cbSub" name=""
							class="form-control boxcontrol">
							<option value="PRSTBT">PRSTBT</option>
							<option value="PRABDR">PRABDR</option>
							<option value="PRABPS">PRABPS</option>
							<option value="PRABSD">PRABSD</option>
						</select>
					</fieldset>
					<fieldset class="fieldsetcontrol">
						<label>SNP</label> <input type="text"
							class="form-control boxcontrol" name="BOX_SNP" id="txtSNP">
						<label>수출SNP</label> <input type="text"
							class="form-control boxcontrol" name="EXPORT_SNP"
							id="txtExportSnp"> <label>소포장SNP</label> <input
							type="text" class="form-control boxcontrol" name="SMALL_SNP"
							id="txtSmallSNP"> <label>제품 UPH</label> <input
							type="text" class="form-control boxcontrol" id="txtUPH"
							name="ITEM_UPH" value="100">
					</fieldset>
					<fieldset class="fieldsetcontrol">
						<label>분배율(%)</label> <input type="text"
							class="form-control boxcontrol" id="txtParallel" name="PARALLEL"
							value="0"> <label>안전 재고율(%)</label> <input type="text"
							class="form-control boxcontrol" id="txtSafetyPrdersent"
							name="SAFETY_PERCENT" value="0"> <label>사용기간(<span
							class="attention-blue">YYYYMMDD</span>)
						</label>
						<div class="form-group row flex-container"
							style="padding-left: 0.7em;">
							<input type="text" class="form-control boxcontrol"
								id="txtItemPeriodStart" name="DTS_START"> <label>&nbsp
								- &nbsp</label> <input type="text" class="form-control boxcontrol"
								id="txtItemPeriodEnd" name="DTS_END">
						</div>

						<input type="checkbox" id="checkBoxStopItem"
							name="STOP_PRODUCTION" value="OK"> <label
							style="font-size: 1rem" for="checkBoxStopItem">단산 적용</label> <input
							id="checkBoxStopItemHidden" type="hidden" name="STOP_PRODUCTION"
							value="">
					</fieldset>
					<fieldset class="fieldsetcontrol">
						<label>마감시 BOM 적용 여부</label><br> <label><input
							type="radio" name="BACK_FLUSH" value="OK" checked>적용
							&nbsp</label> <label><input type="radio" name="BACK_FLUSH"
							value="NG" checked>비적용</label> <br> <label>입고 시 검사여부</label><br>
						<label><input type="radio" name="FREE_AREA" value="유검사"
							checked>유검사 &nbsp</label> <label><input type="radio"
							name="FREE_AREA" value="무검사" checked>무검사</label><br> <label
							class="attention-blue">※ 품번은 수정할 수 없습니다.</label>
					</fieldset>
				</div>
				<div class="form-group row">
					<fieldset class="fieldsetcontrol">
						<div name="radioGroup">
							<label><input type="radio" name="WAREHOUSE" value="P1"
								checked>1공장 창고</label> <label><input type="radio"
								name="WAREHOUSE" value="P2">2공장 창고</label>
						</div>
						<div class="form-group row no-gutters">
							<label>1번 라인 &nbsp</label> <select id="comboLine1"
								name="PROD_LINE01" class="form-control boxcontrol">
								<option value=""></option>
								<c:forEach items="${jssLineList}" var="jssLineList">
									<option value="${jssLineList.PROD_LINE01}">${jssLineList.PROD_LINE01}</option>
								</c:forEach>
							</select>
						</div>
						<div class="form-group row no-gutters">
							<label>2번 라인 &nbsp</label> <select id="comboLine2"
								name="PROD_LINE02" class="form-control boxcontrol">
								<option value=""></option>
								<c:forEach items="${jssLineList}" var="jssLineList">
									<option value="${jssLineList.PROD_LINE01}">${jssLineList.PROD_LINE01}</option>
								</c:forEach>
							</select>
						</div>
						<div class="form-group row no-gutters">
							<label>3번 라인 &nbsp</label> <select id="comboLine3"
								name="PROD_LINE03" class="form-control boxcontrol">
								<option value=""></option>
								<c:forEach items="${jssLineList}" var="jssLineList">
									<option value="${jssLineList.PROD_LINE01}">${jssLineList.PROD_LINE01}</option>
								</c:forEach>
							</select>
						</div>
						<div class="form-group row no-gutters">
							<label>4번 라인 &nbsp</label> <select id="comboLine4"
								name="PROD_LINE04" class="form-control boxcontrol">
								<option value=""></option>
								<c:forEach items="${jssLineList}" var="jssLineList">
									<option value="${jssLineList.PROD_LINE01}">${jssLineList.PROD_LINE01}</option>
								</c:forEach>
							</select>
						</div>
						<div class="form-group row no-gutters">
							<label>5번 라인 &nbsp</label> <select id="comboLine5"
								name="PROD_LINE05" class="form-control boxcontrol">
								<option value=""></option>
								<c:forEach items="${jssLineList}" var="jssLineList">
									<option value="${jssLineList.PROD_LINE01}">${jssLineList.PROD_LINE01}</option>
								</c:forEach>
							</select>
						</div>
					</fieldset>
					<fieldset class="fieldsetcontrol">
						<div class="form-group row no-gutters">
							<label>TOMAS 라인 &nbsp</label> <select id="comboTomasLine"
								name="CD_LINE" class="form-control boxcontrol">
								<option value=""></option>
								<c:forEach items="${tomasLineList}" var="tomasLineList">
									<option value="${tomasLineList.CD_LINE}">${tomasLineList.CD_LINE}</option>
								</c:forEach>
							</select>
						</div>
						<div class="form-group row no-gutters">
							<label>TOMAS 창고 &nbsp</label> <select id="comboTomasWare"
								name="CD_STOCK" class="form-control boxcontrol">
								<option value=""></option>
								<c:forEach items="${tomasWarehouseList}"
									var="tomasWarehouseList">
									<option value="${tomasWarehouseList.CD_STOCK}">${tomasWarehouseList.CD_STOCK}</option>
								</c:forEach>
							</select>
						</div>
						<label>PBOM</label><br> <input type="checkbox"
							id="rbPbomOnlyReg" name="OTHER" value="P2"> <label
							style="font-size: 1rem" for="rbPbomOnlyReg">해당 품번만 적용</label><br>
						<input type="checkbox" id="rbPbomAllReg" name="OTHER" value="P1">
						<label style="font-size: 1rem" for="rbPbomAllReg">하위 품번 모두
							적용</label><br> <input id="rbPbomRegHidden" type="hidden"
							name="OTHER" value=""> <label class="attention-blue">※
							반제품, 제품의 경우 라인 정보가 필수입니다.</label>
					</fieldset>
					<fieldset class="fieldsetcontrol">
						<label>검사 데이터</label><br>
						<div name="radioGroup2">
							<label>1공정</label> <label><input type="radio"
								name="PROCESSING1" value="O">O</label> <label><input
								type="radio" name="PROCESSING1" value="X" checked>X</label>
						</div>
						<div name="radioGroup2">
							<label>2공정</label> <label><input type="radio"
								name="PROCESSING2" value="O">O</label> <label><input
								type="radio" name="PROCESSING2" value="X" checked>X</label>
						</div>
						<div name="radioGroup2">
							<label>3공정</label> <label><input type="radio"
								name="PROCESSING3" value="O">O</label> <label><input
								type="radio" name="PROCESSING3" value="X" checked>X</label>
						</div>
						<div name="radioGroup2">
							<label>4공정</label> <label><input type="radio"
								name="PROCESSING4" value="O">O</label> <label><input
								type="radio" name="PROCESSING4" value="X" checked>X</label>
						</div>
						<div name="radioGroup2">
							<label>5공정</label> <label><input type="radio"
								name="PROCESSING5" value="O">O</label> <label><input
								type="radio" name="PROCESSING5" value="X" checked>X</label>
						</div>
						<div name="radioGroup2">
							<label>6공정</label> <label><input type="radio"
								name="PROCESSING6" value="O">O</label> <label><input
								type="radio" name="PROCESSING6" value="X" checked>X</label>
						</div>
						<label class="attention-red">※ 반제품, 부품 -> 제품으로 변경시 협력사 정보가
							삭제됩니다.</label>
					</fieldset>
				</div>
				<div class="form-group row">
					<button id="btnModifyItem" type="submit" data-toggle="modal"
						data-target=".bs-example-modal-sm"
						class="btn btn-primary btn-user btn-block btn-m-size">
						Modify Item</button>
					<a href="list"
						class="btn btn-google btn-user btn-block btn-m-size btn-cancel relative-up">
						Cancel </a>
				</div>
			</div>
		</div>
	</form>
</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<p>One fine body&hellip;</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
			</div>
		</div>
		<!-- /.modal-content -->
	</div>
	<!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<!-- Page level custom scripts -->
<script src="/resources/js/item/item-modify.js"></script>
<script>

$(document).ready(function() {
	var radio = $("div[name = 'radioGroup']");
	var radio2 = $("div[name = 'radioGroup2']");
	radio.find("label:eq(1)").css("transform", "translateX(50%)");
	radio.find("label:eq(2)").css("transform", "translateX(100%)");
	radio2.find("label:eq(1)").css("transform", "translateX(200%)");
	radio2.find("label:eq(2)").css("transform", "translateX(400%)");
	
	var form = {
			action:'4',
			cd_item:'${item.CD_ITEM}',
			seg_asset:'${item.SEG_ASSET}',
			supplier:'${item.CD_SUPPLIER}',
			customer:'${item.CD_CUSTOMER}'
	};
	
	$.ajax({ 
	       url:'/item/getItem', 
	       dataType:'json',
	       contentType:'application/json',
	       data:JSON.stringify(form),
	       method:'POST', 
	       success:function(t){
	    	   console.log(t[0].cd_ITEM)
	    	   /*
				var itemData = t.itemData;
				
				if(form.seg_asset == "30"){
					$("input[name = 'SEG_ASSET'][value='30']").prop("checked", true);
					$("#supplierBox").value = itemData[0].cd_SUPPLIER + " : " + itemData[0].nm_SUPPLIER;
					$(".CD_SUPPLIER").value = itemData[0].cd_SUPPLIER
					$("#txtParallel").val(itemData[0].parallel) * 100;
					$("#txtSafetyPrdersent").val(itemData[0].safety_PERCENT) * 100;
					if(itemData[0].free_AREA === "유검사")
						$("input[name = 'Check'][value='rbCheck']").prop("checked", true);
					else
						$("input[name = 'SEG_ASSET'][value='rbUnCheck']").prop("checked", true);
				}
				else if(form.seg_asset == "50"){
					$("input[name = 'SEG_ASSET'][value='50']").prop("checked", true);
					$("#txtParallel").val(itemData[0].parallel) * 100;
					$("#txtSafetyPrdersent").val(itemData[0].safety_PERCENT) * 100;
					if(itemData[0].free_AREA === "유검사")
						$("input[name = 'Check'][value='rbCheck']").prop("checked", true);
					else
						$("input[name = 'SEG_ASSET'][value='rbUnCheck']").prop("checked", true);
					document.getElementById("customerBox").value = itemData[0].cd_CUSTOMER + " : " + itemData[0].nm_CUSTOMER;
					$(".CD_CUSTOMER").value = itemData[0].cd_CUSTOMER;
				}
				else if(form.seg_asset == "60"){
					$("input[name = 'SEG_ASSET'][value='60']").prop("checked", true);
					document.getElementById("customerBox").value = itemData[0].cd_CUSTOMER + " : " + itemData[0].nm_CUSTOMER;
					$(".CD_CUSTOMER").val(itemData[0].cd_CUSTOMER);
				    console.log($(".CD_CUSTOMER").val());
				}
				$("#txtItemNum").val(itemData[0].cd_ITEM);
				$("#txtItemNM").val(itemData[0].nm_ITEM);
				$("#txtLeadTime").val(itemData[0].lead_TIME);
				$("#txtSafty").val(itemData[0].safety_STOCK);
				$("#txtFlatCar").val(itemData[0].flatcar);
				$("#txtMinProd").val(itemData[0].production_MINIMUM);
				$("#txtMinAmount").val(itemData[0].minimum_STOCK);
				document.getElementById("cbUnit").value = itemData[0].unt_UNIT;
				document.getElementById("cbSub").value = itemData[0].cd_SUB;
				$("#txtSNP").val(itemData[0].box_SNP);
				$("#txtExportSnp").val(itemData[0].export_SNP);
				$("#txtSmallSNP").val(itemData[0].small_SNP);
				$("#txtUPH").val(itemData[0].item_UPH);
				$("#txtItemPeriodStart").val(itemData[0].dts_START);
				$("#txtItemPeriodEnd").val(itemData[0].dts_END);
				if(itemData[0].stop_PRODUCTION === "OK")
					document.getElementById("checkBoxStopItem").checked = true;
				if(itemData[0].back_FLUSH == "OK")
					$("input[name = 'BomReg'][value='OK']").prop("checked", true);
				else
					$("input[name = 'BomReg'][value='NG']").prop("checked", true);
				if(itemData[0].warehouse == null || itemData[0].warehouse.includes('P1'))
					$("input[name = 'WAREHOUSE'][value='P1']").prop("checked", true);
				else
					$("input[name = 'WAREHOUSE'][value='P2']").prop("checked", true);
				document.getElementById("comboLine1").value = itemData[0].prod_LINE01 == null ? "" : itemData[0].prod_LINE01;
				document.getElementById("comboLine2").value = itemData[0].prod_LINE02 == null ? "" : itemData[0].prod_LINE02;
				document.getElementById("comboLine3").value = itemData[0].prod_LINE03 == null ? "" : itemData[0].prod_LINE03;
				document.getElementById("comboLine4").value = itemData[0].prod_LINE04 == null ? "" : itemData[0].prod_LINE04;
				document.getElementById("comboLine5").value = itemData[0].prod_LINE05 == null ? "" : itemData[0].prod_LINE05;
				document.getElementById("comboTomasLine").value = itemData[0].cd_LINE == null ? "" : itemData[0].cd_LINE;
				document.getElementById("comboTomasWare").value = itemData[0].cd_STOCK == null ? "" : itemData[0].cd_STOCK;
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
				*/
					
	       },
	       error:function(t){
	    	   console.error("Error! Item load fail.");
	       }
	}); 

});

</script>
