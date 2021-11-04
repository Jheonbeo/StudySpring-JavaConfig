<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!-- Begin Page Content -->
<div class="container-fluid" id="item-content">

	<!-- Page Heading -->
	<h1 class="h3 mb-2 text-gray-800">Item Tables</h1>
	<p class="mb-4">Show item table.</p>

	<!-- DataTales Example -->
	<div class="card shadow mb-4">
		<div class="card-header py-3">
			<h6 class="m-0 font-weight-bold text-primary">TKK_ITEM
				DataTables</h6>
		</div>
		<div class="card-body">
			<div class="table-responsive">
				<fieldset class="field col-4">
					<input type="text" class="form-control boxcontrol uppercase"
						id="loadItem">
					<button type="button" id="btnLoadItem" @click.stop="onSearchItem"
						class="btn btn-primary btn-s-size">Load</button>
				</fieldset>

				<table class="table table-bordered" id="dataTable"
					style="width: 100%; cellspacing: 0;">
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
				<!-- call getList() -->
				<!-- 
                  <c:forEach items="${list}" var="item">
                  <tr>
                  	<td width=90px><label v-html="supplier"></label></td>
                  	<td width=90px><c:out value="${item.CD_CUSTOMER}"/></td>
                  	<td><a href="/item/item_modify?CD_ITEM=<c:out value="${item.CD_ITEM}"/>&CD_SUPPLIER=<c:out value="${item.CD_SUPPLIER}"/>&CD_CUSTOMER=<c:out value="${item.CD_CUSTOMER}"/>&SEG_ASSET=<c:out value="${item.SEG_ASSET}"/>">
                  		<c:out value="${item.CD_ITEM}"/></a></td>
                  	<td><c:out value="${item.NM_ITEM}"/></td>
                  	<td><c:out value="${item.BOX_SNP}"/></td>
                  	<td width=60px><c:out value="${item.SEG_ASSET}"/></td>
                  	<td width=150px><fmt:formatDate pattern="yyyy-MM-dd HH:mm" value="${item.UPD_DAT}"/></td>
                  	<td><c:out value="${item.UPD_USR}"/></td>
                  </tr>
                  </c:forEach>
                   -->
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

<!-- Page level plugins -->
<script src="/resources/vendor/datatables/jquery.dataTables.min.js"></script>
<script src="/resources/vendor/datatables/dataTables.bootstrap4.min.js"></script>
