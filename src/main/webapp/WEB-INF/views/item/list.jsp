<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="../includes/header.jsp" %>
        <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">Item Tables</h1>
          <p class="mb-4">Show item table.</p>

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">TKK_ITEM DataTables</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>품번</th>
                      <th>품명</th>
                      <th>SNP</th>
                      <th>SEG_ASSET</th>
                      <th>갱신일</th>
                      <th>갱신자</th>
                    </tr>
                  </thead>
                  
                  <c:forEach items="${list}" var="item">
                  <tr>
                  	<td><c:out value="${item.CD_ITEM}"/></td>
                  	<td><c:out value="${item.NM_ITEM}"/></td>
                  	<td><c:out value="${item.BOX_SNP}"/></td>
                  	<td><c:out value="${item.SEG_ASSET}"/></td>
                  	<td><fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value="${item.UPD_DAT}"/></td>
                  	<td><c:out value="${item.UPD_USR}"/></td>
                  </tr>
                  </c:forEach>
                </table>
              </div>
            </div>
          </div>

        </div>
        <!-- /.container-fluid -->

<%@include file="../includes/footer.jsp" %>
