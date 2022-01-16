<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!-- Begin Page Content -->
<div class="container-fluid" id="shipment-content">
	<!-- DataTales Example -->
	<div class="card shadow mb-4">
		<div class="card-header py-3">
			<h6 class="m-0 font-weight-bold text-primary">JSS 출하창고현황</h6>
		</div>
		<div class="card-body">
			<div class="table-responsive">
				<div class="form-group" style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 1fr)">
					<div style="grid-column: 1 / 2; grid-row: 1 / 2;">
						<label class="label95">· 날짜</label>
						<input class="form-control boxcontrol col-5" type="text" id="DATEPICKER">
					</div>
					<div style="grid-column: 2 / 3; grid-row: 1 / 2;">
						<label class="label95">· 품번</label>
						<input type="text" class="form-control boxcontrol col-5" id="CD_ITEM">
					</div>
					<div style="grid-column: 1 / 2; grid-row: 2 / 3;">
						<label class="label95">· 납품처</label>
						<select id="CUSTOMER" v-model="customer" class="form-control boxcontrol col-5">
							<option value=""></option>
							<c:forEach items="${customerList}" var="customerList">
								<option value="${customerList.CD_CUSTOMER}">${customerList.CD_CUSTOMER} : ${customerList.NM_CUSTOMER}</option>
							</c:forEach>
						</select>
					</div>
					<div style="grid-column: 2 / 3; grid-row: 2 / 3;">
						<label class="label95">· 차종</label>
						<input type="text" class="form-control boxcontrol col-5" id="MODEL">
					</div>
					<div style="grid-column: 3 / 4; grid-row: 2 / 3;">
						<button type="button" id="btnLoadItem" @click.stop="onSearchData" class="btn btn-primary form-control-sm col-5">Search</button>
					</div>
				</div>

				<table class="table table-bordered" id="dataTable" style="width: 100%; cellspacing: 0;">
					<thead>
						<tr>
							<th>품번</th>
							<th>차종</th>
							<th>기초</th>
							<th>생산실적</th>
							<th>입고</th>
							<th>보류</th>
							<th>출고</th>
							<th>현재고</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
</div>
