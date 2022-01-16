<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!-- Begin Page Content -->
<div class="container-fluid" id="warehouse-content">
	<!-- Content Row -->
	<div class="row">
		<div class="col-xl-7 col-lg-7">
			<!-- Area Chart -->
		    <div class="card shadow mb-4">
				<div class="card-header py-2">
		        	<h6 class="m-0 font-weight-bold text-primary">금일 입고내역</h6>
		      	</div>
		      	<div class="card-body">
		      		<div class="table-responsive">
					<table class="table table-bordered" id="dataTable" style="width: 100%; cellspacing: 0;">
						<thead>
							<tr>
								<th>입고날짜</th>
								<th>품번</th>
								<th>수량</th>
								<th>협력사</th>
								<th>렉번호</th>
							</tr>
						</thead>
					</table>
					</div>
				</div>
		    </div>
		</div>
		
		<div class="col-xl-5 col-lg-5">
			<!-- Area Chart -->
		    <div class="card shadow mb-4">
				<div class="card-header py-2">
		        	<h6 class="m-0 font-weight-bold text-primary">금일 입고차트(국내)</h6>
		      	</div>
		      	<!-- Card Body -->
                <div class="card-body">
                  <div class="chart-pie pt-4">
                    <canvas id="myPieChart"></canvas>
                  </div>
                </div>
		    </div>
			<!-- Area Chart -->
		    <div class="card shadow mb-4">
				<div class="card-header py-2">
		        	<h6 class="m-0 font-weight-bold text-primary">금일 미입고 상세내역(국내)</h6>
		      	</div>
		      	<!-- Card Body -->
                <div class="card-body">
		      		<div class="table-responsive">
					<table class="table table-bordered" id="dataTableNotStock" style="width: 100%; cellspacing: 0;">
						<thead>
							<tr>
								<th>품번</th>
								<th>수량</th>
								<th>협력사</th>
							</tr>
						</thead>
					</table>
					</div>
                </div>
		    </div>
		</div>
		
	</div>
</div>
