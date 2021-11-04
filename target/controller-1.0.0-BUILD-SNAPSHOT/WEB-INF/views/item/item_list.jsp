<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@include file="../includes/header.jsp"%>
<!-- Begin Page Content -->
<div class="container-fluid">

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
				<table class="table table-bordered" id="dataTable"
					style="width: 100%; cellspacing: 0;">
					<thead>
						<tr>
							<th>협력사</th>
							<th>고객사</th>
							<th>품번</th>
							<th>품명</th>
							<th>SNP</th>
							<th>구별</th>
							<th>갱신일</th>
							<th>갱신자</th>
						</tr>
					</thead>

					<!-- call getList() -->
					<c:forEach items="${list}" var="item">
						<tr>
							<td width=90px><c:out value="${item.CD_SUPPLIER}" /></td>
							<td width=90px><c:out value="${item.CD_CUSTOMER}" /></td>
							<td><a
								href="/item/item_modify?CD_ITEM=<c:out value="${item.CD_ITEM}"/>&CD_SUPPLIER=<c:out value="${item.CD_SUPPLIER}"/>&CD_CUSTOMER=<c:out value="${item.CD_CUSTOMER}"/>&SEG_ASSET=<c:out value="${item.SEG_ASSET}"/>">
									<c:out value="${item.CD_ITEM}" />
							</a></td>
							<td><c:out value="${item.NM_ITEM}" /></td>
							<td><c:out value="${item.BOX_SNP}" /></td>
							<td width=60px><c:out value="${item.SEG_ASSET}" /></td>
							<td width=150px><fmt:formatDate pattern="yyyy-MM-dd HH:mm"
									value="${item.UPD_DAT}" /></td>
							<td><c:out value="${item.UPD_USR}" /></td>
						</tr>
					</c:forEach>
				</table>
			</div>
		</div>
	</div>

</div>
<!-- /.container-fluid -->

<!-- Page level plugins -->
<script src="/resources/vendor/datatables/jquery.dataTables.min.js"></script>
<script src="/resources/vendor/datatables/dataTables.bootstrap4.min.js"></script>

<!-- Page level custom scripts -->
<script src="/resources/js/chart/datatables-demo.js"></script>

<%@include file="../includes/footer.jsp"%>
