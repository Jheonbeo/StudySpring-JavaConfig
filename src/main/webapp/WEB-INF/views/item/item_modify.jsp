<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="container-fluid" id="item-content">
	<div class="card shadow mb-4">
		<div class="card-header py-3">
			<h6 class="m-0 font-weight-bold text-primary">TKK_ITEM
				DataTables</h6>
		</div>
		<form name="itemModifyForm" id="itemModifyForm" @submit.prevent.stop="sendPost">
		<div class="card-body">
			<div name="radioGroup" class="form-group row">
				<label><input type="radio" name="SEG_ASSET" value="30" checked>부품</label> 
				<label><input type="radio"name="SEG_ASSET" value="50">반제품</label> 
				<label><input type="radio" name="SEG_ASSET" value="60">완제품</label>
			</div>
			<input type="hidden" id="segAsset" value="${item.SEG_ASSET}">
			<div class="form-group row flex-container">
				<label>협력사 코드 &nbsp</label> 
				<input type="text" class="form-control boxcontrol" id="supplierBox" readonly="readonly"> 
				<input type="hidden" id="supplier" name="CD_SUPPLIER" value="${item.CD_SUPPLIER}">
				<label>&nbsp 고객사 코드 &nbsp</label> 
				<input type="text" class="form-control boxcontrol" id="customerBox" readonly="readonly"> 
				<input type="hidden" id="customer" name="CD_CUSTOMER" value="${item.CD_CUSTOMER}">
			</div>
			<div class="form-group row flex-container">
				<label>품번 &nbsp</label> 
				<input type="text" class="form-control boxcontrol" id="txtItemNum" name="CD_ITEM" readonly="readonly"> 
				<input type="hidden" id="cdItem" value="${item.CD_ITEM}">
				<label>&nbsp 품명 &nbsp</label> 
				<input type="text" class="form-control boxcontrol" id="txtItemNM" name="NM_ITEM">
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
					<label>최소 생산 단위</label> 
					<input type="text" class="form-control boxcontrol" id="txtMinProd" name="PRODUCTION_MINIMUM"> 
					<label>최소 재고 단위</label> 
					<input type="text" class="form-control boxcontrol" id="txtMinAmount" name="MINIMUM_STOCK"> 
					<label>단위</label> 
					<select class="form-control boxcontrol" id="cbUnit" name="UNT_UNIT">
						<option v-for="cbUnit in cbUnits" v-bind:value="cbUnit">{{ cbUnit }}</option>
					</select>
					<label>SUB</label>
					<select class="form-control boxcontrol" id="cdSub" name="CD_SUB">
						<option v-for="cdSub in cdSubs" v-bind:value="cdSub">{{ cdSub }}</option>
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
					<label>PBOM</label><br> <input type="checkbox"
						id="rbPbomOnlyReg" name="OTHER" value="P2"> <label
						style="font-size: 1rem" for="rbPbomOnlyReg">해당 품번만 적용</label><br>
					<input type="checkbox" id="rbPbomAllReg" name="OTHER" value="P1">
					<label style="font-size: 1rem" for="rbPbomAllReg">하위 품번 모두
						적용</label><br> <input id="rbPbomRegHidden" type="hidden"
						name="OTHER" value=""> 
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
					<label class="attention-blue">※ 반제품, 제품의 경우 라인 정보가 필수입니다.</label>
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
					<div class="form-group row no-gutters">
						<label>CYCLE TIME &nbsp</label>
						<input type="text" class="form-control boxcontrol" id="txtCycleTime" name="CYCLE_TIME" value="0">
					</div>
					<div class="form-group row no-gutters">
						<label>이미지 &nbsp</label>
						<input type="text" class="form-control boxcontrol" id="txtPackingInfo" name="PACKAGING_INFO">
					</div>
					<label class="attention-blue"># UPH : 한 제품당 생산 시간을 적어주세요.</label>
					<label class="attention-blue"># 이미지 : 포장 사양 이미지 이름을 입력해주세요.(필수X)</label>
				</fieldset>
				<fieldset class="fieldsetcontrol">
					<label>자품번 정사양 인식</label><br>
					<input type="text" class="form-control boxcontrol" id="txtReplacementItem" name="REPLACEMENT_ITEM">
					<label>자품번 정사양 인식1</label><br>
					<input type="text" class="form-control boxcontrol" id="txtReplacementItem1" name="REPLACEMENT_ITEM1">
					<label>자품번 정사양 인식2</label><br>
					<input type="text" class="form-control boxcontrol" id="txtReplacementItem2" name="REPLACEMENT_ITEM2">
					<label>자품번 정사양 인식3</label><br>
					<input type="text" class="form-control boxcontrol" id="txtReplacementItem3" name="REPLACEMENT_ITEM3">
					<label>자품번 정사양 인식4</label><br>
					<input type="text" class="form-control boxcontrol" id="txtReplacementItem4" name="REPLACEMENT_ITEM4">
				</fieldset>
				<fieldset class="fieldsetcontrol">
					<label>검사 데이터</label><br>
					<div name="radioGroup2">
						<label>1공정</label> <label><input type="radio"
							name="PROCESSING1" value="O">O</label> <label><input
							type="radio" name="PROCESSING1" value="X" checked>X</label>
					</div>
					<div name="radioGroup2">
						<label>2공정</label> 
						<label><input type="radio"
							name="PROCESSING2" value="O">O</label> 
						<label><input
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
					<label class="attention-red">※ 반제품, 부품 -> 제품으로 변경시 협력사 정보가 삭제됩니다.</label>
				</fieldset>
			</div>
			<div class="form-group row">
				<button id="btnModifyItem" class="btn btn-primary btn-user btn-block btn-m-size">
					Modify Item
				</button>
				<button type="button" id="btnLoadItem" @click.stop="backItemMaster" class="btn btn-google btn-user btn-block btn-m-size btn-cancel relative-up">
					Cancel
				</button>
			</div>
		</div>
		</form>
	</div>
</div>

<div class="modal fade" id="myModal" tabindex="-1" role="dialog">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" id="modalClose" data-dismiss="modal" aria-label="Close">
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
