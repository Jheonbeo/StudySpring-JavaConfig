<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


<!-- Begin Page Content -->
<div class="container-fluid" id="warehouseShip-content">
	<!-- DataTales Example -->
	<div class="card shadow mb-4">
		<div class="card-header py-3">
			<h6 class="m-0 font-weight-bold text-primary">TKK_HT_IWARE_DEPO DataTable</h6>
		</div>
		<div class="card-body">
			<div class="table-responsive">
				<div class="form-group" style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 1fr)">
					<div style="grid-column: 1 / 2; grid-row: 1 / 2;">
						<label class="label95">· 날짜</label>
						<input class="form-control boxcontrol col-2" type="text" id="datepicker"> ~        
						<input class="form-control boxcontrol col-2" type="text" id="datepicker">
					</div>
					<div style="grid-column: 1 / 2; grid-row: 2 / 3;">
						<label class="label95">· 거래처</label>
						<input type="text" class="form-control boxcontrol col-5" id="loadItem">
					</div>
					<div style="grid-column: 2 / 3; grid-row: 1 / 2;">
						<label class="label95">· 품번</label>
						<input type="text" class="form-control boxcontrol col-5" id="loadItem">
					</div>
					<div style="grid-column: 3 / 4; grid-row: 2 / 3;">
						<button type="button" id="btnLoadItem" @click.stop="onSearchItem" class="btn btn-primary form-control-sm col-5">Search</button>
					</div>
				</div>

				<table class="table table-bordered" id="dataTable" style="width: 100%; cellspacing: 0;">
					<thead>
						<tr>
							<th>기초</th>
							<th>생산실적</th>
							<th>보류</th>
							<th>입고</th>
							<th>출고</th>
							<th>현재고</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
</div>
