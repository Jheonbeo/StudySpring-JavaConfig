<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Product Manager</title>

<!-- Custom fonts for this template -->
<link href="/resources/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
<link href="https://ajax.aspnetcdn.com/ajax/jquery.ui/1.13.0/themes/cupertino/jquery-ui.css" rel="stylesheet">
<!-- <link
	href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
	rel="stylesheet">  -->

<!-- Custom styles for this template -->
<link href="/resources/css/sb-admin-2.min.css" rel="stylesheet">
<link href="/resources/css/user-style.css" rel="stylesheet">

<!-- Custom styles for this page -->
<link href="/resources/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">

<script src="/resources/vendor/jquery/jquery-3.5.1.min.js"></script>
<script src="https://unpkg.com/vue@2.6.12/dist/vue.js"></script>
<script src="/resources/vendor/datatables/jquery.dataTables.min.js"></script>
<script src="/resources/vendor/datatables/dataTables.bootstrap4.min.js"></script>
<script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js" integrity="sha256-hlKLmzaRlE8SCJC1Kw8zoUbU8BxA+8kR3gseuKfMjxA=" crossorigin="anonymous"></script>

</head>

<body id="page-top">

	<!-- Page Wrapper -->
	<div id="wrapper">
		<!-- Sidebar -->
		<ul style="z-index: 1"
			class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
			id="accordionSidebar">
			<div class="sticky">
				<!-- Sidebar - Brand -->
				<a class="sidebar-brand d-flex align-items-center justify-content-center" href="">
					<div class="sidebar-brand-icon rotate-n-15">
						<i class="fas fa-laugh-wink"></i>
					</div>
					<div class="sidebar-brand-text mx-3">
						Product Manager<sup>2</sup>
					</div>
				</a>

				<!-- Divider -->
				<hr class="sidebar-divider my-0">
				
				<!-- Nav Item - Dashboard -->
				<li class="nav-item">
					<a class="nav-link" id="dashboard-icon">
						<i class="fas fa-fw fa-tachometer-alt"></i> 
						<span class="routes" route="/dashboard/dashboard">Dashboard</span>
					</a>
				</li>

				<!-- Divider -->
				<hr class="sidebar-divider">

				<!-- Heading -->
				<div class="sidebar-heading">제품 관리</div>

				<!-- Nav Item - Pages Collapse Menu -->
				<li class="nav-item">
					<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseInOutBound" aria-expanded="true" aria-controls="collapseInOutBound"> 
						<i class="fas fa-fw fa-folder"></i> 
						<span>입출고</span>
					</a>
					<div id="collapseInOutBound" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
						<div class="bg-white py-2 collapse-inner rounded">
							<span class="collapse-item routes" route="/warehouse/warehouse(menu)">입고창고</span>
							<span class="collapse-item routes" route="/warehouse/shipment">출하창고</span>
							<span class="collapse-item">DEPO</span>
							<span class="collapse-item">OEM</span>
						</div>
					</div>
				</li>

				<!-- Nav Item - Inspection Collapse Menu -->
				<li class="nav-item">
					<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseProd" aria-expanded="true" aria-controls="collapseProd"> 
						<i class="fas fa-fw fa-wrench"></i> 
						<span>품질</span>
					</a>
					<div id="collapseProd" class="collapse" aria-labelledby="headingProd" data-parent="#accordionSidebar">
						<div class="bg-white py-2 collapse-inner rounded">
							<span class="collapse-item routes" route="/developPage">제품 검사정보</span>
						</div>
					</div>
				</li>

				<!-- Nav Item - Parts -->
				<li class="nav-item"><a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePart" aria-expanded="true" aria-controls="collapsePart"> 
					<i class="fas fa-fw fa-table"></i> 
					<span>자재</span></a>
					<div id="collapsePart" class="collapse" aria-labelledby="headingPart" data-parent="#accordionSidebar">
						<div class="bg-white py-2 collapse-inner rounded">
							<span class="collapse-item routes" route="/item/item_list">품번 조회 / 수정 / 추가</span> 
							<span class="collapse-item routes" route="/item/identification">식별지</span>
						</div>
					</div>
				</li>

				<!-- Divider -->
				<hr class="sidebar-divider">

				<!-- Heading -->
				<div class="sidebar-heading">단가 관리</div>
				
				<!-- Nav Item - Inspection Collapse Menu -->
				<li class="nav-item">
					<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFinance" aria-expanded="true" aria-controls="collapseFinance"> 
						<i class="fas fa-fw fa-coins"></i> 
						<span>재무</span>
					</a>
					<div id="collapseFinance" class="collapse" aria-labelledby="headingProd" data-parent="#accordionSidebar">
						<div class="bg-white py-2 collapse-inner rounded">
							<span class="collapse-item">-</span>
						</div>
					</div>
				</li>
				
				<!-- Divider -->
				<hr class="sidebar-divider d-none d-md-block">
				<!-- Sidebar Toggler (Sidebar) -->
				<li class="nav-item text-center">
					<div class="text-center d-none d-md-inline">
						<button class="rounded-circle border-0" id="sidebarToggle"></button>
					</div>
				</li>
			</div>
		</ul>
		<!-- End of Sidebar -->

		<!-- Content Wrapper -->
		<div id="content-wrapper" class="d-flex flex-column">

			<!-- Main Content -->
			<div id="content">

				<!-- Topbar -->
				<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					<div class="col-lg-6 d-none d-lg-block logo-image-type1"></div>
					<!-- 
          <form action="/loginout/jssLogOut" method="post">
          	<a href="/loginout/jssLogOut" class="btn btn-lg btn-success btn-block">LOGOUT</a>
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
          </form>
 -->
					<!-- Topbar Navbar -->
					<ul class="navbar-nav ml-auto">
						<li class="nav-item dropdown no-arrow">
							<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
								<span class="mr-2 d-none d-lg-inline text-gray-600 small">
									<security:authorize access="isAuthenticated()"> 
										<security:authentication property="principal.username" /> 
									</security:authorize>
								</span>
								<img class="img-profile rounded-circle" src="/resources/img/Contents.png">
							</a> <!-- Dropdown - User Information -->
							<div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
								<a class="dropdown-item" href="#"> 
								<i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> 
									Profile
								</a> 
								<a class="dropdown-item" href="#"> 
								<i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
									Settings
								</a> 
								<a class="dropdown-item" href="#"> 
								<i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
									Activity Log
								</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">  
								<!-- <span class="dropdown-item routes" route="/loginout/jssLogOut" data-toggle="modal" data-target="#logoutModal">-->
								<i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
									Logout
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<!-- End of Topbar -->