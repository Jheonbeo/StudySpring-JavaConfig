<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!-- Begin Page Content -->
<div class="container-fluid" id="item-content">

	<!-- Page Heading -->
	<h1 class="h3 mb-2 text-gray-800">Item Tables</h1>
	<p class="mb-4">Show item table.</p>

	<!-- DataTales Example -->
	<div class="card shadow mb-4">
		<div class="card-header py-3">
			<h6 class="m-0 font-weight-bold text-primary">TKK_ITEM DataTables</h6>
		</div>
		<div class="card-body">
			<input type="hidden" id="cancelItem" value="${item.CD_ITEM}">
			<div class="table-responsive">
				<fieldset class="field col-5">
					<input type="text" class="form-control boxcontrol uppercase" id="loadItem">
					<button type="button" id="btnLoadItem" @click.stop="onSearchItem" class="btn btn-primary btn-s-size">Search</button>
						
					<button type="button" id="btnCreateItem" @click.stop="onNewItem" class="btn btn-secondary btn-s-size">New</button>
				</fieldset>

				<table class="table table-bordered" id="dataTable" style="width: 100%; cellspacing: 0;">
					<thead>
						<tr>
							<th>협력사</th>
							<th>고객사</th>
							<th>품번</th>
							<th>SNP</th>
							<th>구별</th>
							<th>식별지</th>
							<th>P_BOM</th>
							<th>검사항목</th>
							<th>지그</th>
							<th>갱신자</th>
							<th>갱신일</th>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	</div>
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
