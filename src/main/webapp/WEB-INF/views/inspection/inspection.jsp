<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!-- Begin Page Content -->
<div class="container-fluid" id="inspection-content">
	<h1 class="h3 mb-2 text-gray-800">Inspection Data</h1>
	<p class="mb-4">Show inspection data.</p>

	<div class="row">
		<div class="col-xl-6 col-lg-7">
			<div class="card shadow mb-4">
				<!-- Card Header - Dropdown -->
				<div
					class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
					<h6 class="m-0 font-weight-bold text-primary">검색 조건</h6>
				</div>
				<!-- Card Body -->
				<form id="search-keyword">
					<div class="card-body">
						<div class="row no-gutters">
							<div class="col-sm-12">
								<div class="row no-gutters">
									<div class="col-10">
										<div class="form-group row">
											<label for="form_date" class="col-md-1-5 control-label">날
												짜</label> <input type="text" id="datePicker"
												class="form-control boxcontrol"> <label
												class="col-md-1-5 control-label">라인</label> <select
												id="cd_line" class="form-control boxcontrol">
												<option value=""></option>
												<c:forEach items="${jssLineList}" var="jssLineList">
													<option value="${jssLineList.ItemVO.PROD_LINE01}">${jssLineList.ItemVO.PROD_LINE01}</option>
												</c:forEach>
											</select> <label class="col-md-1-5 control-label">품 번</label> <input
												type="text" class="form-control boxcontrol" id="cd_item">
										</div>
										<div class="form-group row">
											<label class="col-md-2 control-label">바 코 드</label> <input
												type="text" class="form-control boxcontrol" id="barcode">
										</div>
									</div>
									<div class="col-1 offset-sm-1">
										<button type="button"
											class="btn btn-sm btn-block h-80 btn-outline-primary"
											id="search">검 색</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>

		<div class="col-xl-6 col-lg-7">
			<div class="card shadow mb-4">
				<!-- Card Header - Dropdown -->
				<div
					class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
					<h6 class="m-0 font-weight-bold text-primary">공지사항</h6>
				</div>
				<!-- Card Body -->
				<div class="card-body"></div>
			</div>
		</div>
	</div>


	<div class="card shadow mb-4">
		<div class="card-header py-3">
			<h6 class="m-0 font-weight-bold text-primary">TKK_MES_INSPECTION
				DataTables</h6>
		</div>
		<div class="card-body">
			<div class="table-responsive">
				<table class="table table-bordered" id="dataTable"
					style="width: 100%; cellspacing: 0;">
					<thead>
						<tr>
							<th>번호</th>
							<th>LOT</th>
							<th>품번</th>
							<th>라인</th>
							<th>생산수량</th>
							<th>검사수량</th>
							<th>OK</th>
							<th>NG</th>
							<th>시작시간</th>
							<th>종료시간</th>
						</tr>
					</thead>
					<tbody id="table-body">
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

