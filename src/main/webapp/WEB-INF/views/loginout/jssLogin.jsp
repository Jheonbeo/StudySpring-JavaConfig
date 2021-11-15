<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<!-- Custom fonts for this template -->
<link href="/resources/vendor/fontawesome-free/css/all.min.css"
	rel="stylesheet" type="text/css">
<link
	href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
	rel="stylesheet">

<!-- Custom styles for this template-->
<link href="/resources/css/sb-admin-2.min.css" rel="stylesheet">
<link href="/resources/css/user-style.css" rel="stylesheet">

<script src="/resources/vendor/jquery/jquery-3.5.1.min.js"></script>
</head>
<body class="bg-gradient-primary my-5">
	<h1 class="row justify-content-center text-white">PRODUCT MANAGER
		2</h1>
	<div class="container">

		<!-- Outer Row -->
		<div class="row justify-content-center">

			<div class="col-xl-10 col-lg-12 col-md-9">

				<div class="card o-hidden border-0 shadow-lg my-4">
					<div class="card-body p-0">
						<!-- Nested Row within Card Body -->
						<div class="row">
							<div class="col-lg-6 d-none d-lg-block logo-image-type6"></div>
							<div class="col-lg-6">
								<div class="p-5">
									<div class="text-center">
										<h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
									</div>
									<form class="user" method="post" action="/loginout/loginProcess">
										<div class="form-group">
											<input type="text" class="form-control form-control-user"
												id="username" name="username" placeholder="Enter id...">
										</div>
										<div class="form-group">
											<input type="password" class="form-control form-control-user"
												id="password" name="password" placeholder="Password">
										</div>
										<div class="form-group">
											<div class="custom-control custom-checkbox small">
												<input type="checkbox" class="custom-control-input"
													id="customCheck"> <label
													class="custom-control-label" for="customCheck">Remember
													Me</label>
											</div>
										</div>
										<input type="hidden" name="${_csrf.parameterName}"
											value="${_csrf.token}" />
										<button type="submit"
											class="btn btn-primary btn-user btn-block">Login</button>
									</form>
									<hr>
									<div class="text-center">
										<a class="small" href="">Forgot Password?</a>
									</div>
									<div class="text-center">
										<a class="small" href="">Create an Account!</a>
									</div>
									<div class="text-center">
										<c:if test="${not empty loginFailMsg}">
											<font color="red">
												<p>${loginFailMsg}</p>
											</font>
										</c:if>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>

	<!-- Bootstrap core JavaScript-->
	<script src="/resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

	<!-- Core plugin JavaScript-->
	<script src="/resources/vendor/jquery-easing/jquery.easing.min.js"></script>

	<!-- Custom scripts for all pages-->
	<script src="/resources/js/sb-admin-2.min.js"></script>

</body>
</html>