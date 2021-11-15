<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!-- Begin Page Content -->
<div class="container-fluid" id="identification-content">
	<div class="card shadow mb-4">
		<div class="card-header py-3">
			<h6 class="m-0 font-weight-bold text-primary">식별지</h6>
		</div>
		<form id="idenForm" name="idenForm" @submit.prevent="sendPost">
			<div class="card-body grid4-4">
				<div class="one">
					<h3>HKMC</h3>
					<fieldset class="field">
						<label class="attention-blue label95">품번</label> 
						<input type="text" class="form-control boxcontrol" @blur="showIden" id="m_I_NO_PART" name="m_I_NO_PART"> 
						<label class="attention-blue label95">양식No</label> 
						<input type="text" class="form-control boxcontrol" @blur="showIden" id="no_FORM" name="no_FORM"> 
						<label class="attention-blue label95">차종</label>
						<input type="text" class="form-control boxcontrol" id="nm_PROJECT" name="nm_PROJECT">
					</fieldset>
					<fieldset class="field">
						<label class="label95">품명1</label> <input type="text"
							class="form-control boxcontrol" id="nm_PART1" name="nm_PART1">
					</fieldset>
					<fieldset class="field">
						<label class="label95">품명2</label> <input type="text"
							class="form-control boxcontrol" id="nm_PART2" name="nm_PART2">
					</fieldset>
					<fieldset class="field">
						<label class="label95">표기품번</label> <input type="text"
							class="form-control boxcontrol" id="no_PART" name="no_PART">
						<label class="label95">이중 인쇄1</label> <input type="text"
							class="form-control boxcontrol" id="double_PRINT1"
							name="double_PRINT1"> <label class="label95">이중
							색상1</label> <input type="text" class="form-control boxcontrol"
							id="double_COLOR1" name="double_COLOR1">
					</fieldset>
					<fieldset class="field">
						<label class="label95">용기No</label> <input type="text"
							class="form-control boxcontrol" id="no_CONTAINERS"
							name="no_CONTAINERS"> <label class="label95">이중
							인쇄2</label> <input type="text" class="form-control boxcontrol"
							id="double_PRINT2" name="double_PRINT2"> <label
							class="label95">이중 색상2</label> <input type="text"
							class="form-control boxcontrol" id="double_COLOR2"
							name="double_COLOR2">
					</fieldset>
					<fieldset class="field">
						<label class="label95">담당자</label> <input type="text"
							class="form-control boxcontrol" id="manager" name="manager">
						<label class="label95">이중 인쇄3</label> <input type="text"
							class="form-control boxcontrol" id="double_PRINT3"
							name="double_PRINT3"> <label class="label95">이중
							색상3</label> <input type="text" class="form-control boxcontrol"
							id="double_COLOR3" name="double_COLOR3">
					</fieldset>
					<fieldset class="field">
						<label class="attention-blue label95">수량</label> <input
							type="text" class="form-control boxcontrol" id="quantity"
							name="quantity"> <label class="label95">TKK품번</label> <input
							type="text" class="form-control boxcontrol" id="tkk_NO_PART"
							name="tkk_NO_PART"> <label class="label95">사양</label> <input
							type="text" class="form-control boxcontrol" id="specifications"
							name="specifications">
					</fieldset>
					<fieldset class="field">
						<label class="label95">표기색상</label> <input type="text"
							class="form-control boxcontrol" id="color1" name="color1">
						<label class="label95">지역</label> <input type="text"
							class="form-control boxcontrol" id="areas" name="areas">
						<label class="label95">구분 검사</label> <input type="text"
							class="form-control boxcontrol" id="check_WHETHER"
							name="check_WHETHER">
					</fieldset>
					<fieldset class="field">
						<label class="label95">고객사</label> <input type="text"
							class="form-control boxcontrol" id="customer1" name="customer1">
						<label class="label95">공정No</label> <input type="text"
							class="form-control boxcontrol" id="no_PROCESS" name="no_PROCESS">
						<label class="label95">검사결과</label> <input type="text"
							class="form-control boxcontrol" id="test_RESULTS"
							name="test_RESULTS">
					</fieldset>
					<fieldset class="field">
						<label class="label95">공장</label> <input type="text"
							class="form-control boxcontrol" id="factory1" name="factory1">
						<label class="label95">HPC</label> <input type="text"
							class="form-control boxcontrol" id="hpc" name="hpc"> <label
							class="label95">랙번호</label> <input type="text"
							class="form-control boxcontrol" id="rack_NUMBER"
							name="rack_NUMBER">
					</fieldset>
					<fieldset class="field">
						<label class="label95">CASE</label> <input type="text"
							class="form-control boxcontrol" id="cases" name="cases">
						<label class="label95">LotNo</label> <input type="text"
							class="form-control boxcontrol" id="lot_NO1" name="lot_NO1">
						<label class="label95">OrderNo</label> <input type="text"
							class="form-control boxcontrol" id="no_ORDER" name="no_ORDER">
					</fieldset>
					<fieldset class="field">
						<label class="label95">L/R</label> <input type="text"
							class="form-control boxcontrol" id="l_R" name="l_R"> <label
							class="label95">LotColor</label> <input type="text"
							class="form-control boxcontrol" id="lot_NO1_COLOR"
							name="lot_NO1_COLOR"> <label class="label95">출력매수</label>
						<input type="text" class="form-control boxcontrol"
							id="prints_NUMBER" name="prints_NUMBER">
					</fieldset>
					<fieldset class="field">
						<label class="label95">거래처</label> <input type="text"
							class="form-control boxcontrol" id="account" name="account">
						<label class="label95">고객사명</label> <input type="text"
							class="form-control boxcontrol" id="customer2" name="customer2">
						<label class="label95">납품장소</label> <input type="text"
							class="form-control boxcontrol" id="delivery_PLACE"
							name="delivery_PLACE">
					</fieldset>
				</div>
				<div class="two">
					<h3>GMK</h3>
					<fieldset class="field">
						<label class="label95">공장</label> <input type="text"
							class="form-control boxcontrol" id="factory2" name="factory2">
						<label class="label95">CODE</label> <input type="text"
							class="form-control boxcontrol" id="code" name="code"> <label
							class="label95">차종</label> <input type="text"
							class="form-control boxcontrol" id="car_TYPE2" name="car_TYPE2">
					</fieldset>
					<fieldset class="field">
						<label class="label95">보급담당</label> <input type="text"
							class="form-control boxcontrol" id="responsible"
							name="responsible"> <label class="label95">수입반</label> <input
							type="text" class="form-control boxcontrol" id="suipban"
							name="suipban"> <label class="label95">LotNo</label> <input
							type="text" class="form-control boxcontrol" id="lot_NO2"
							name="lot_NO2">
					</fieldset>
					<fieldset class="field">
						<label class="label95">하차장</label> <input type="text"
							class="form-control boxcontrol" id="yard" name="yard"> <label
							class="label95">중요</label> <input type="text"
							class="form-control boxcontrol" id="important" name="important">
						<label class="label95">COLOR</label> <input type="text"
							class="form-control boxcontrol" id="color2" name="color2">
					</fieldset>
					<fieldset class="field">
						<label class="label95">납품일</label> <input type="text"
							class="form-control boxcontrol" id="delivery_DATE"
							name="delivery_DATE"> <label class="label95">용기형태</label>
						<input type="text" class="form-control boxcontrol"
							id="container_TYPE" name="container_TYPE"> <label
							class="label95">PT CD</label> <input type="text"
							class="form-control boxcontrol" id="pt_CD_BOAT_NUM"
							name="pt_CD_BOAT_NUM">
					</fieldset>
					<fieldset class="field">
						<label class="label95">수용수</label> <input type="text"
							class="form-control boxcontrol" id="it_CAN_ACCOMMODATE"
							name="it_CAN_ACCOMMODATE"> <label class="label95">검수인</label>
						<input type="text" class="form-control boxcontrol"
							id="acceptance_OF" name="acceptance_OF"> <label
							class="label95">부품중량</label> <input type="text"
							class="form-control boxcontrol" id="parts_BY_WEIGHT"
							name="parts_BY_WEIGHT">
					</fieldset>
					<fieldset class="field">
						<label class="label95">검사인</label> <input type="text"
							class="form-control boxcontrol" id="tests_OF" name="tests_OF">
						<label class="label95">저장주소</label> <input type="text"
							class="form-control boxcontrol" id="save_ADDRESSES"
							name="save_ADDRESSES"> <label class="label95">업체명</label>
						<input type="text" class="form-control boxcontrol"
							id="company_NAME" name="company_NAME">
					</fieldset>
					<fieldset class="field">
						<label class="label95">JSS주소</label> <input type="text"
							class="form-control boxcontrol" id="tkk_ADDRESS"
							name="tkk_ADDRESS"> <label class="label95">공정주소</label> <input
							type="text" class="form-control boxcontrol" id="process_ADDRESS"
							name="process_ADDRESS"> <label class="label95">하차장주소</label>
						<input type="text" class="form-control boxcontrol"
							id="hachajang_ADDRESS" name="hachajang_ADDRESS">
					</fieldset>
				</div>
				<div class="three">
					<h3>ALC</h3>
					<fieldset class="field">
						<label class="label95">ALC 품번</label> <input type="text"
							class="form-control boxcontrol" id="alc_NO_PART"
							name="alc_NO_PART"> <label class="label95">ALC 값</label>
						<input type="text" class="form-control boxcontrol" id="alc_VALUE"
							name="alc_VALUE"> <label class="label95">위치</label> <input
							type="text" class="form-control boxcontrol" id="location"
							name="location">
					</fieldset>
					<fieldset class="field">
						<label class="label95">바코드</label> <input type="text"
							class="form-control boxcontrol" id="barcode2" name="barcode2">
						<label class="attention-blue label95">양식No</label> <input
							type="text" class="form-control boxcontrol" @blur="showAlc"
							id="form_TYPE" name="form_TYPE"> <label
							class="attention-blue label95">바탕색</label> <select
							class="form-control boxcontrol" id="base_COLOR" name="base_COLOR">
							<option v-for="option in options" v-bind:value="option.value">
								{{ option.text }}</option>
						</select>
						<!-- <input type="text" class="form-control boxcontrol" id="txtBackgroundColor">  -->
					</fieldset>
					<fieldset class="field">
						<label class="label95">비고</label> <input type="text"
							class="form-control boxcontrol" id="remarks" name="remarks">
					</fieldset>
					<br>
					<h3>2D 바코드</h3>
					<fieldset class="field">
						<label class="label95">RD 양식</label> <input type="text"
							class="form-control boxcontrol" id="rd_BARCODE" name="rd_BARCODE">
						<label class="label95">RD Type</label> <input type="text"
							class="form-control boxcontrol" id="rd_TYPE" name="rd_TYPE">
						<label class="label95">PR Type</label> <input type="text"
							class="form-control boxcontrol" id="pr_TYPE" name="pr_TYPE">
					</fieldset>
					<fieldset class="field">
						<label class="label95">표기용ALC</label> <input type="text"
							class="form-control boxcontrol" id="pr_DATA03" name="pr_DATA03">
						<label class="label95">L/R</label> <input type="text"
							class="form-control boxcontrol" id="pr_DATA04" name="pr_DATA04">
						<label class="label95">JSS코드</label> <input type="text"
							class="form-control boxcontrol" id="cd_VEND" name="cd_VEND">
					</fieldset>
					<fieldset class="field">
						<label class="label95">바코드ALC</label> <input type="text"
							class="form-control boxcontrol" id="cd_ALCS" name="cd_ALCS">
						<label class="label95">바코드EO</label> <input type="text"
							class="form-control boxcontrol" id="cd_REEO" name="cd_REEO">
						<label class="label95">-</label> <input type="text"
							class="form-control boxcontrol">
					</fieldset>
					<div class="bottom-align">
						<fieldset class="field">
							<label id="loadCution"></label>
						</fieldset>
						<fieldset class="field">
							<label class="label95">불러오기</label> <input type="text" v-on:keyup="search" class="form-control boxcontrol uppercase"
								id="loadItem">
							<button type="button" id="btnLoadItem"
								@click.stop="clickLoadItem" class="btn btn-primary btn-s-size">Load</button>
						</fieldset>
					</div>
				</div>
				<div class="four">
					<img class="img" id="loadAlcImage" />
				</div>
				<div class="five">
					<img class="img" id="loadIdenImage" /> <label id="imgCution"></label>
				</div>
				<div class="six">
					<button id="btnRegistItem"
						class="btn btn-primary btn-user btn-block">Register Item
					</button>
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
</div>
