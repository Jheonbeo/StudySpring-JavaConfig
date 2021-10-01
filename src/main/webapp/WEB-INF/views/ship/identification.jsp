<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
	<!-- Begin Page Content -->
	<div class="container-fluid" id="identification-content">
		<h1 class="h3 mb-2 text-gray-800">식별지</h1>
        <p class="mb-4">식별지 정보 등록 및 변경</p>
        
        
		<form name="modifyForm" id="modifyForm">
			<div class="card shadow mb-4">
			  	<div class="card-header py-3">
			  		<h6 class="m-0 font-weight-bold text-primary">IDENTIFICATION DataTables</h6>
			  	</div>
			  	<div class="card-body grid4-4">
			  		<div class="one">
			  			<h3>HKMC</h3>
						<fieldset>
							<label class="attention-blue">양식No</label>
							<input type="text" class="form-control boxcontrol" @blur="showIden" id="txtFormNO">
							<label>이중 인쇄1</label>
							<input type="text" class="form-control boxcontrol" id="txtDoublePrint1">
							<label>용기No</label> 
							<input type="text" class="form-control boxcontrol" id="txtPaperNO">
						</fieldset>
						<fieldset>
							<label class="attention-blue">품번</label>
							<input type="text" class="form-control boxcontrol" id="txtItemNum">
							<label>이중 인쇄2</label>
							<input type="text" class="form-control boxcontrol" id="txtDoublePrint2">
							<label>담당자</label> 
							<input type="text" class="form-control boxcontrol" id="txtManager">
						</fieldset>
						<fieldset>
							<label>품명1</label>
							<input type="text" class="form-control boxcontrol" id="txtItemName1">
							<label>이중 인쇄3</label>
							<input type="text" class="form-control boxcontrol" id="txtDoublePrint3">
							<label>TKK품번</label> 
							<input type="text" class="form-control boxcontrol" id="txtTkkItem">
						</fieldset>
						<fieldset>
							<label>품명2</label>
							<input type="text" class="form-control boxcontrol" id="txtItemName2">
							<label>이중 색상1</label>
							<input type="text" class="form-control boxcontrol" id="txtDoubleColor1">
							<label>사양</label> 
							<input type="text" class="form-control boxcontrol" id="txtSpecification">
						</fieldset>
						<fieldset>
							<label class="attention-blue">수량</label>
							<input type="text" class="form-control boxcontrol" id="txtAmount">
							<label>이중 색상2</label>
							<input type="text" class="form-control boxcontrol" id="txtDoubleColor2">
							<label>색상</label> 
							<input type="text" class="form-control boxcontrol" id="txtColor">
						</fieldset>
						<fieldset>
							<label>지역</label>
							<input type="text" class="form-control boxcontrol" id="txtLocation">
							<label>이중 색상3</label>
							<input type="text" class="form-control boxcontrol" id="txtDoubleColor3">
							<label>구분 검사</label> 
							<input type="text" class="form-control boxcontrol" id="txtClassificationInspection">
						</fieldset>
						<fieldset>
							<label>고객사</label>
							<input type="text" class="form-control boxcontrol" id="txtCustomer">
							<label>공정No</label>
							<input type="text" class="form-control boxcontrol" id="txtProcessNO">
							<label>검사결과</label> 
							<input type="text" class="form-control boxcontrol" id="txtResult">
						</fieldset>
						<fieldset>
							<label>공장</label>
							<input type="text" class="form-control boxcontrol" id="txtFactory">
							<label>HPC</label>
							<input type="text" class="form-control boxcontrol" id="txtHPC">
							<label>랙번호</label> 
							<input type="text" class="form-control boxcontrol" id="txtRackNO">
						</fieldset>
						<fieldset>
							<label>차종</label>
							<input type="text" class="form-control boxcontrol" id="txtCartype">
							<label>거래처</label>
							<input type="text" class="form-control boxcontrol" id="txtCustomerNM">
							<label>CASE</label> 
							<input type="text" class="form-control boxcontrol" id="txtCase">
						</fieldset>
						<fieldset>
							<label>납품장소</label>
							<input type="text" class="form-control boxcontrol" id="txtStockPlace">
							<label>LotNo</label>
							<input type="text" class="form-control boxcontrol" id="txtLotNO">
							<label>OrderNo</label> 
							<input type="text" class="form-control boxcontrol" id="txtOrderNO">
						</fieldset>
						<fieldset>
							<label>L/R</label>
							<input type="text" class="form-control boxcontrol" id="txtLorR">
							<label>LotColor</label>
							<input type="text" class="form-control boxcontrol" id="txtLotColor">
							<label>OrderNo</label> 
							<input type="text" class="form-control boxcontrol" id="txtPrintCount">
						</fieldset>
						<fieldset>
							<label>바코드</label>
							<input type="text" class="form-control boxcontrol" id="txtBarcode">
							<label>발행번호</label>
							<input type="text" class="form-control boxcontrol" id="txtPrintNO">
							<label>규격</label> 
							<input type="text" class="form-control boxcontrol" id="txtIdentificationStandard">
						</fieldset>
			  		</div>
			  		<div class="two">
			  			<h3>GMK</h3>
						<fieldset>
							<label>공장</label>
							<input type="text" class="form-control boxcontrol" id="txtGmkFactory">
							<label>CODE</label>
							<input type="text" class="form-control boxcontrol" id="txtGmkCode">
							<label>차종</label> 
							<input type="text" class="form-control boxcontrol" id="txtGmkCarType">
						</fieldset>
						<fieldset>
							<label>보급담당</label>
							<input type="text" class="form-control boxcontrol" id="txtDissemination">
							<label>수입반</label>
							<input type="text" class="form-control boxcontrol" id="txtGmkInCome">
							<label>LotNo</label> 
							<input type="text" class="form-control boxcontrol" id="txtGmkLotNO">
						</fieldset>
						<fieldset>
							<label>하차장</label>
							<input type="text" class="form-control boxcontrol" id="txtGmkOutCome">
							<label>중요</label>
							<input type="text" class="form-control boxcontrol" id="txtGmkImportent">
							<label>COLOR</label> 
							<input type="text" class="form-control boxcontrol" id="txtGmkColor">
						</fieldset>
						<fieldset>
							<label>납품일</label>
							<input type="text" class="form-control boxcontrol" id="txtGmkShipmentDate">
							<label>용기형태</label>
							<input type="text" class="form-control boxcontrol" id="txtGmkPaperType">
							<label>PT CD</label> 
							<input type="text" class="form-control boxcontrol" id="txtGmkPtCdShipNO">
						</fieldset>
						<fieldset>
							<label>수용수</label>
							<input type="text" class="form-control boxcontrol" id="txtGmkUseCount">
							<label>검수인</label>
							<input type="text" class="form-control boxcontrol" id="txtGmkWarehouseCounter">
							<label>부품중량</label> 
							<input type="text" class="form-control boxcontrol" id="txtGmkItemWeight">
						</fieldset>
						<fieldset>
							<label>검사인</label>
							<input type="text" class="form-control boxcontrol" id="txtGmkInpsectioner">
							<label>저장주소</label>
							<input type="text" class="form-control boxcontrol" id="txtGmkSaveAddress">
							<label>업체명</label> 
							<input type="text" class="form-control boxcontrol" id="txtGmkCompanyName">
						</fieldset>
						<fieldset>
							<label>JSS주소</label>
							<input type="text" class="form-control boxcontrol" id="txtTkkAddress">
							<label>공정주소</label>
							<input type="text" class="form-control boxcontrol" id="txtGmkProcessAddress">
							<label>하차장주소</label> 
							<input type="text" class="form-control boxcontrol" id="txtGmkCompanyName">
						</fieldset>
			  		</div>
			  		
			  		<div class="three">
			  			<h3>ALC</h3>
						<fieldset>
							<label>ALC 품번</label>
							<input type="text" class="form-control boxcontrol" id="txtAlcItem">
							<label>ALC 값</label>
							<input type="text" class="form-control boxcontrol" id="txtAlcValue">
							<label>위치</label> 
							<input type="text" class="form-control boxcontrol" id="txtAlcLocation">
						</fieldset>
						<fieldset>
							<label>바코드</label>
							<input type="text" class="form-control boxcontrol" id="txtAlcBarcode">
							<label class="attention-blue">양식No</label>
							<input type="text" class="form-control boxcontrol" id="txtAlcPaperNO">
							<label class="attention-blue">바탕색</label> 
							<select class="form-control boxcontrol">
								<option v-for="option in options" v-bind:value="option.value">
									{{ option.text }}
								</option>
							</select>
							<!-- <input type="text" class="form-control boxcontrol" id="txtBackgroundColor">  -->
						</fieldset>
						<fieldset>
							<label>비고</label>
							<input type="text" class="form-control boxcontrol" id="txtAlcNote">
						</fieldset>
			  			<br>
			  			<h3>2D 바코드</h3>
						<fieldset>
							<label>바코드</label>
							<input type="text" class="form-control boxcontrol" id="txt2DBarcode">
							<label>RD Type</label>
							<input type="text" class="form-control boxcontrol" id="txt2DRdType">
							<label>PR Type</label>
							<input type="text" class="form-control boxcontrol" id="txt2DPrType">
						</fieldset>
						<fieldset>
							<label>표기용ALC</label>
							<input type="text" class="form-control boxcontrol" id="txt2DPrAlc">
							<label>L/R</label> 
							<input type="text" class="form-control boxcontrol" id="txt2DLR">
							<label>JSS코드</label> 
							<input type="text" class="form-control boxcontrol" id="txt2DJssCode">
						</fieldset>
						<fieldset>
							<label>바코드ALC</label>
							<input type="text" class="form-control boxcontrol" id="tx2DRdAlc">
							<label>바코드EO</label> 
							<input type="text" class="form-control boxcontrol" id="txt2DJssCode">
							<label>RD 양식</label> 
							<input type="text" class="form-control boxcontrol" id="txt2DRdFormat">
						</fieldset>
						<div class="bottom-align">
							<fieldset>
								<label>불러오기</label>
								<input type="text" class="form-control boxcontrol" id="comboItem">
								<button id="btnLoadItem" class="btn btn-primary btn-s-size">Load</button>
							</fieldset>
						</div>
			  		</div>
			  		<div class="four">
			  			<img class="img" id="loadImage" />
						<label id="imgCution"></label> 
			  		</div>
			  	</div>
		  </div>
		</form>
	</div>
	