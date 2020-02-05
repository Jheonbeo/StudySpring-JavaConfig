<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@include file="../includes/header.jsp" %>
        				
	<div class="container-fluid">
		<h1 class="h3 mb-2 text-gray-800">Item Register</h1>
        <p class="mb-4">Management item table.</p>
        
        
        <div class="card shadow mb-4">
        	<div class="card-header py-3">
          	<h6 class="m-0 font-weight-bold text-primary">TKK_ITEM DataTables</h6>
        	</div>
        	<div class="card-body">
       			<div name="radioGroup" class="form-group row">
					<label><input type="radio" name="SegAsset" value="30" checked>부품</label>
					<label><input type="radio" name="SegAsset" value="50">반제품</label>
					<label><input type="radio" name="SegAsset" value="60">완제품</label>
       			</div>
       			<div class="form-group row flex-container">
       				<label>협력사 코드 &nbsp</label>
       				<select id="supplierBox" class="form-control boxcontrol">
 	      					<c:forEach items="${supplierList}" var="supplierList">
       						<option value="${supplierList.ItemVO.CD_COMPANY}">${supplierList.ItemVO.CD_COMPANY} : ${supplierList.ItemVO.NM_COMPANY}</option>
       					</c:forEach>
       				</select>
       				
       				<label>&nbsp 고객사 코드 &nbsp</label>
       				<select id="customerBox" class="form-control boxcontrol">
 	      					<c:forEach items="${customerList}" var="customerList">
       						<option value="${customerList.ItemVO.CD_COMPANY}">${customerList.ItemVO.CD_COMPANY} : ${customerList.ItemVO.NM_COMPANY}</option>
       					</c:forEach>
       				</select>
       			</div>
       			<div class="form-group row flex-container">
       				<label>품번 &nbsp</label>
       				<input type="text" class="form-control boxcontrol" id="txtItemNum">
       				
       				<label>&nbsp 품명 &nbsp</label>
       				<input type="text" class="form-control boxcontrol" id="txtItemNM">
       			</div>
       			<div class="form-group row flex-container">
					<fieldset class = "fieldsetcontrol">
						<label>리드타임</label>
						<input type="text" class="form-control boxcontrol" id="txtLeadTime">
						<label>안전 재고 기간</label>
						<input type="text" class="form-control boxcontrol" id="txtSafty">
						<label>대차 수</label> 
						<input type="text" class="form-control boxcontrol" id="txtFlatCar">
					</fieldset>
					<fieldset class = "fieldsetcontrol">
						<label>최소 생산 단위</label>
						<input type="text" class="form-control boxcontrol" id="txtMinProd">
						<label>최소 재고 단위</label>
						<input type="text" class="form-control boxcontrol" id="txtMinAmount">
						<label>단위</label> 
        				<select id="cbUnit" class="form-control boxcontrol">
        					<option value="KG">KG</option>
        					<option value="MR">MR</option>
        					<option value="PC">PC</option>
        				</select>
						<label>Sub</label> 
        				<select id="cbSub" class="form-control boxcontrol">
        					<option value="PRSTBT">PRSTBT</option>
        					<option value="PRABDR">PRABDR</option>
        					<option value="PRABPS">PRABPS</option>
        					<option value="PRABSD">PRABSD</option>
        				</select>
					</fieldset>
					<fieldset class = "fieldsetcontrol">
						<label>SNP</label>
						<input type="text" class="form-control boxcontrol" id="txtSNP">
						<label>수출SNP</label>
						<input type="text" class="form-control boxcontrol" id="txtExportSnp">
						<label>소포장SNP</label> 
						<input type="text" class="form-control boxcontrol" id="txtSmallSNP">
						<label>제품 UPH</label> 
						<input type="text" class="form-control boxcontrol" id="txtUPH" value="100">
					</fieldset>
					<fieldset class = "fieldsetcontrol">
						<label>분배율(%)</label>
						<input type="text" class="form-control boxcontrol" id="txtParallel" value="0">
						<label>안전 재고율(%)</label>
						<input type="text" class="form-control boxcontrol" id="txtSafetyPrdersent" value="0">
						<label>사용기간(<span class="attention-blue">YYYYMMDD</span>)</label>
	        			<div class="form-group row flex-container" style="padding-left: 0.7em;">
	        				<input type="text" class="form-control boxcontrol" id="txtItemPeriodStart">
	        				
	        				<label>&nbsp - &nbsp</label>
	        				<input type="text" class="form-control boxcontrol" id="txtItemPeriodEnd">
	        			</div>
						
					    <input type="checkbox" id="checkBoxStopItem">
					    <label style="font-size: 1rem" for="checkBoxStopItem">단산 적용</label>
					</fieldset>
					<fieldset class = "fieldsetcontrol">
						<label>마감시 BOM 적용 여부</label><br>
							<label><input type="radio" name="BomReg" value="rbBomReg" checked>적용 &nbsp</label>
							<label><input type="radio" name="BomReg" value="rbBomNoReg" checked>비적용</label>
							<br>
						<label>입고 시 검사여부</label><br>
							<label><input type="radio" name="Check" value="rbCheck" checked>유검사 &nbsp</label>
							<label><input type="radio" name="Check" value="rbUnCheck" checked>무검사</label><br>
						<label class="attention-blue">※ 품번은 수정할 수 없습니다.</label>
					</fieldset>
       			</div>
       			<div class="form-group row">
					<fieldset class = "fieldsetcontrol">
						<div name="radioGroup">
							<label><input type="radio" name="Warehouse" value="Warehouse1" checked>1공장 창고</label>
							<label><input type="radio" name="Warehouse" value="Warehouse2">2공장 창고</label>
						</div>
       					<div class="form-group row no-gutters">
							<label>1번 라인 &nbsp</label> 
	        				<select id="comboLine1" class="form-control boxcontrol">
	        					<option value=""></option>
	  	      					<c:forEach items="${jssLineList}" var="jssLineList">
	        						<option value="${jssLineList.ItemVO.PROD_LINE01}">${jssLineList.ItemVO.PROD_LINE01}</option>
	        					</c:forEach>
	        				</select>
        				</div>
       					<div class="form-group row no-gutters">
							<label>2번 라인 &nbsp</label> 
	        				<select id="comboLine2" class="form-control boxcontrol">
	        					<option value=""></option>
	  	      					<c:forEach items="${jssLineList}" var="jssLineList">
	        						<option value="${jssLineList.ItemVO.PROD_LINE01}">${jssLineList.ItemVO.PROD_LINE01}</option>
	        					</c:forEach>
	        				</select>
        				</div>
       					<div class="form-group row no-gutters">
							<label>3번 라인 &nbsp</label> 
	        				<select id="comboLine3" class="form-control boxcontrol">
	        					<option value=""></option>
	  	      					<c:forEach items="${jssLineList}" var="jssLineList">
	        						<option value="${jssLineList.ItemVO.PROD_LINE01}">${jssLineList.ItemVO.PROD_LINE01}</option>
	        					</c:forEach>
	        				</select>
	        			</div>
       					<div class="form-group row no-gutters">
							<label>4번 라인 &nbsp</label> 
	        				<select id="comboLine4" class="form-control boxcontrol">
	        					<option value=""></option>
	  	      					<c:forEach items="${jssLineList}" var="jssLineList">
	        						<option value="${jssLineList.ItemVO.PROD_LINE01}">${jssLineList.ItemVO.PROD_LINE01}</option>
	        					</c:forEach>
	        				</select>
        				</div>
       					<div class="form-group row no-gutters">
							<label>5번 라인 &nbsp</label> 
	        				<select id="comboLine5" class="form-control boxcontrol">
	        					<option value=""></option>
	  	      					<c:forEach items="${jssLineList}" var="jssLineList">
	        						<option value="${jssLineList.ItemVO.PROD_LINE01}">${jssLineList.ItemVO.PROD_LINE01}</option>
	        					</c:forEach>
	        				</select>
        				</div>
					</fieldset>
					<fieldset class = "fieldsetcontrol">
       					<div class="form-group row no-gutters">
							<label>TOMAS 라인 &nbsp</label> 
	        				<select id="comboTomasLine" class="form-control boxcontrol">
	  	      					<c:forEach items="${tomasLineList}" var="tomasLineList">
	        						<option value="${tomasLineList.ItemVO.CD_LINE}">${tomasLineList.ItemVO.CD_LINE}</option>
	        					</c:forEach>
	        				</select>
	        			</div>
       					<div class="form-group row no-gutters">
						<label>TOMAS 창고 &nbsp</label> 
	        				<select id="comboTomasWare" class="form-control boxcontrol">
	  	      					<c:forEach items="${tomasWarehouseList}" var="tomasWarehouseList">
	        						<option value="${tomasWarehouseList.ItemVO.CD_STOCK}">${tomasWarehouseList.ItemVO.CD_STOCK}</option>
	        					</c:forEach>
	        				</select>
	        			</div>
						<label>PBOM</label><br>
						    <input type="checkbox" id="rbPbomAllReg">
						    <label style="font-size: 1rem" for="rbPbomAllReg">하위 품번 모두 적용</label><br>
						    <input type="checkbox" id="rbPbomOnlyReg">
						    <label style="font-size: 1rem" for="rbPbomOnlyReg">해당 품번만 적용</label>
						<label class="attention-blue">※ 반제품, 제품의 경우 라인 정보가 필수입니다.</label>
					</fieldset>
					<fieldset class = "fieldsetcontrol">
						<label>검사 데이터</label><br>
						<div name="radioGroup">
							<label>1공정</label>
							<label><input type="radio" name="Step1" value="O">O</label>
							<label><input type="radio" name="Step1" value="X" checked>X</label>
						</div>
						<div name="radioGroup">
							<label>2공정</label>
							<label><input type="radio" name="Step2" value="O">O</label>
							<label><input type="radio" name="Step2" value="X" checked>X</label>
						</div>
						<div name="radioGroup">
							<label>3공정</label>
							<label><input type="radio" name="Step3" value="O">O</label>
							<label><input type="radio" name="Step3" value="X" checked>X</label>
						</div>
						<div name="radioGroup">
						<label>4공정</label>
							<label><input type="radio" name="Step4" value="O">O</label>
							<label><input type="radio" name="Step4" value="X" checked>X</label>
						</div>
						<div name="radioGroup">
						<label>5공정</label>
							<label><input type="radio" name="Step5" value="O">O</label>
							<label><input type="radio" name="Step5" value="X" checked>X</label>
						</div>
						<label class="attention-red">※ 반제품, 부품 -> 제품으로 변경시 협력사 정보가 삭제됩니다.</label>
					</fieldset>
					<fieldset class = "fieldsetcontrol">
						<div class="form-group row">
							<input type="text" class="form-control boxcontrol" id="comboItem">&nbsp
							<button id="btnLoadItem">불러오기</button>
						</div>
						<div class="form-group row">
							<table class="scrollTable" id="tbLoadItem">
							</table>
						</div>
					</fieldset>
       			</div>
       			<div class="form-group row">
					<a href="list" class="btn btn-primary btn-user btn-block btn-m-size">
					  Register Item
					</a>
					<a href="list" class="btn btn-google btn-user btn-block btn-m-size btn-cancel relative-up">
	                  Cancel
	                </a>
       			</div>
        	</div>
		</div>
	</div>
<script>
$(document).ready(function() {
	var radio = $("div[name = 'radioGroup']");
	radio.find("label:eq(1)").css("transform", "translateX(50%)");
	radio.find("label:eq(2)").css("transform", "translateX(100%)");
	
});


$(function(){ 
	$("input[name = 'SegAsset']").click(function(){ 
			var supplierBox = document.getElementById("supplierBox");
			var cbSub = document.getElementById("cbSub");
		    var segValue = this.value;
		    var supplierList = [];
		    $.ajax({ 
			       url:'getSupplier', 
			       dataType:'json',
			       contentType:'application/json',
			       data:JSON.stringify({seg_asset : segValue}),
			       method:'POST', 
			       success:function(t){
			    	   	supplierList = t.supplierList;
			    	   	
						switch(segValue){
						case "30":
							removeOptions(supplierBox);
							supplierBox.disabled = false;
							for(var i = 0; i < supplierList.length; i++){
								$("#supplierBox").append("<option value='" + supplierList[i].cd_COMPANY + "'>" + supplierList[i].cd_COMPANY + " : " + supplierList[i].nm_COMPANY + " </option>");
							}
							break;
						case "50":
							removeOptions(supplierBox);
							$("#supplierBox").append("<option value='1049'>1049 : 조이슨세이프티시스템스코리아</option>");
							supplierBox.disabled = false;
							break;
						case "60":
							supplierBox.disabled = true;
							break;
						default:
							alert("DEFAULT");
							break;
						}
			       },
			       error:function(t){
			    	   console.error("Error! Company load fail.");
			       }
		    });
	});
}); 

function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}

$(function(){ 
	$("#btnLoadItem").click(function(){  
		var str = "";
		var cdItem = $("#comboItem").val();
		
		if(!cdItem){
			alert("품번 입력이 필요합니다.");
			return;
		}
		 $.ajax({ 
		       url:'getItem', 
		       dataType:'json',
		       contentType:'application/json',
		       data:JSON.stringify({action : 1, cd_item : cdItem}),
		       method:'POST', 
		       success:function(t){
					var itemData = t.itemData;
					
					if(itemData.length > 0){
						str+="<thead>";
						str+="<tr><th style=\"width:150px\">품번</th><th style=\"width:40px\">구분</th><th style=\"width:70px\">협력사</th><th style=\"width:70px\">고객사</th></tr>";
						str+="</thead>";
						str+="<tbody>";
					}
					
					for(var i=0; i<itemData.length; i++){
						var supplier = (!itemData[i].cd_SUPPLIER) ? "" : itemData[i].cd_SUPPLIER;
						var customer = (!itemData[i].cd_CUSTOMER) ? "" : itemData[i].cd_CUSTOMER;

						str+="<tr>";
						str+="<td>" + itemData[i].cd_ITEM + "</td>";
						str+="<td>" + itemData[i].seg_ASSET + "</td>";
						str+="<td>" + supplier + "</td>";
						str+="<td>" + customer + "</td>";
			   			str+="</tr>"
					}
					$(".scrollTable").html(str);

					if(itemData.length > 0){
						str+="</tbody>";
					}
		       },
		       error:function(t){
		    	   console.error("Error! Table load fail.");
		       }
	    }); 
	}); 
});

$("#tbLoadItem").on('click', 'tr', function(){
	var td = $(this).children();
	
	var form = {
			action:4,
			cd_item:td.eq(0).text(),
			seg_asset:td.eq(1).text(),
			supplier:td.eq(2).text(),
			customer:td.eq(3).text()
	};
	
	$.ajax({ 
	       url:'getItem', 
	       dataType:'json',
	       contentType:'application/json',
	       data:JSON.stringify(form),
	       method:'POST', 
	       success:function(t){
				var itemData = t.itemData;

				console.log(itemData);
				
				if(form.seg_asset == "30"){
					$("input[name = 'SegAsset'][value='30']").prop("checked", true).trigger('click');
					document.getElementById("supplierBox").value = itemData[0].cd_SUPPLIER;
					$("#txtParallel").val(itemData[0].parallel);
					$("#txtSafetyPrdersent").val(itemData[0].safety_PERCENT);
					if(itemData[0].free_AREA === "유검사")
						$("input[name = 'Check'][value='rbCheck']").prop("checked", true);
					else
						$("input[name = 'SegAsset'][value='rbUnCheck']").prop("checked", true);
				}
				else if(form.seg_asset == "50"){
					$("input[name = 'SegAsset'][value='50']").prop("checked", true).trigger('click');
					$("#txtParallel").val(itemData[0].parallel);
					$("#txtSafetyPrdersent").val(itemData[0].safety_PERCENT);
					if(itemData[0].free_AREA === "유검사")
						$("input[name = 'Check'][value='rbCheck']").prop("checked", true);
					else
						$("input[name = 'SegAsset'][value='rbUnCheck']").prop("checked", true);
				}
				else if(form.seg_asset == "60"){
					$("input[name = 'SegAsset'][value='60']").prop("checked", true).trigger('click');
				}
				document.getElementById("customerBox").value = itemData[0].cd_CUSTOMER;
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
				$("#txtExportSnp").val(itemData[0].flatcar);
				$("#txtSmallSNP").val(itemData[0].small_SNP);
				$("#txtUPH").val(itemData[0].item_UPH);
				$("#txtItemPeriodStart").val(itemData[0].dts_START);
				$("#txtItemPeriodEnd").val(itemData[0].dts_END);
				if(itemData[0].stop_PRODUCTION === "OK")
					document.getElementById("checkBoxStopItem").checked = true;
				if(itemData[0].back_FLUSH == "OK")
					$("input[name = 'BomReg'][value='rbBomReg']").prop("checked", true);
				else
					$("input[name = 'BomReg'][value='rbBomNoReg']").prop("checked", true);
				if(itemData[0].warehouse.includes('P1'))
					$("input[name = 'Warehouse'][value='Warehouse1']").prop("checked", true);
				else
					$("input[name = 'Warehouse'][value='Warehouse2']").prop("checked", true);
				document.getElementById("comboLine1").value = itemData[0].prod_LINE01;
				document.getElementById("comboLine2").value = itemData[0].prod_LINE02;
				document.getElementById("comboLine3").value = itemData[0].prod_LINE03;
				document.getElementById("comboLine4").value = itemData[0].prod_LINE04;
				document.getElementById("comboLine5").value = itemData[0].prod_LINE05;
				document.getElementById("comboTomasLine").value = itemData[0].cd_LINE;
				document.getElementById("comboTomasWare").value = itemData[0].cd_STOCK;
				if(itemData[0].other == "P1"){
					document.getElementById("rbPbomAllReg").checked = true;
					document.getElementById("rbPbomOnlyReg").checked = true;
				}
				else if(itemData[0].other == "P2")
					document.getElementById("rbPbomOnlyReg").checked = true;
				else{
					document.getElementById("rbPbomAllReg").checked = false;
					document.getElementById("rbPbomOnlyReg").checked = false;
				}
				if(itemData[0].processing1 == "X")
					$("input[name = 'Step1'][value='X']").prop("checked", true);
				else
					$("input[name = 'Step1'][value='O']").prop("checked", true);
				if(itemData[0].processing2 == "X")
					$("input[name = 'Step2'][value='X']").prop("checked", true);
				else
					$("input[name = 'Step2'][value='O']").prop("checked", true);
				if(itemData[0].processing3 == "X")
					$("input[name = 'Step3'][value='X']").prop("checked", true);
				else
					$("input[name = 'Step3'][value='O']").prop("checked", true);
				if(itemData[0].processing4 == "X")
					$("input[name = 'Step4'][value='X']").prop("checked", true);
				else
					$("input[name = 'Step4'][value='O']").prop("checked", true);
				if(itemData[0].processing5 == "X")
					$("input[name = 'Step5'][value='X']").prop("checked", true);
				else
					$("input[name = 'Step5'][value='O']").prop("checked", true);
					
	       },
	       error:function(t){
	    	   console.error("Error! Item load fail.");
	       }
   }); 
});

$("#rbPbomAllReg").on('click', function(){
	var chkbox = document.getElementById("rbPbomAllReg").checked;
	if(chkbox){
		document.getElementById("rbPbomOnlyReg").checked = true;
	}
	else{
		document.getElementById("rbPbomOnlyReg").checked = false;
	}
});

$("#rbPbomOnlyReg").on('click', function(){
	var chkbox1 = document.getElementById("rbPbomAllReg").checked;
	var chkbox2 = document.getElementById("rbPbomOnlyReg").checked;
	if(chkbox1 == true && !chkbox2 == true){
		alert("하위 품번 모두 적용상태일시 해제불가");
		document.getElementById("rbPbomOnlyReg").checked = true;
	}
});

</script>
<%@include file="../includes/footer.jsp" %>