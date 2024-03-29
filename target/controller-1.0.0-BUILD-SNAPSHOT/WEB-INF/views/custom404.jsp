<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@include file="includes/header.jsp"%>

<!-- Begin Page Content -->
<div class="container-fluid">

	<!-- 404 Error Text -->
	<div class="text-center">
		<div class="error mx-auto" data-text="404">404</div>
		<p class="lead text-gray-800 mb-5">Page Not Found</p>
		<p class="text-gray-500 mb-0">It looks like you found a glitch in
			the matrix...</p>
		<a href="/includes/index">&larr; Back to Dashboard</a>
	</div>

</div>
<!-- /.container-fluid -->

<%@include file="includes/footer.jsp"%>