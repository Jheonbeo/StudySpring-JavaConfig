<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


<!-- Begin Page Content -->
<div class="container-fluid" id="warehouse-content">
	<ul class="nav nav-tabs">
	  <li class="nav-item">
	    <a class="nav-link active" id="MAIN_TAB" data-toggle="tab" href="#main" role="tab" aria-controls="main" aria-selected="true">금일 입고내역(국내)</a>
	  </li>
	  <li class="nav-item">
	    <a class="nav-link" id="FIFO_TAB" data-toggle="tab" href="#fifo" role="tab" aria-controls="fifo" aria-selected="true" @click="fifo">선입선출</a>
	  </li>
	  <li class="nav-item">
	    <a class="nav-link" id="STOCK_OUT_TAB" data-toggle="tab" href="#stock_out" role="tab" aria-controls="stock_out" aria-selected="true">미확인 재고분출</a>
	  </li>
	  <!-- 
	  <li class="nav-item dropdown">
	    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">JSS 공장</a>
	    <div class="dropdown-menu">
	      <a class="dropdown-item" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">입고창고</a>
	      <a class="dropdown-item" id="ship-tab" data-toggle="tab" href="#ship" role="tab" aria-controls="ship" aria-selected="false" @click="test">출하창고</a>
	      <a class="dropdown-item" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">생산라인</a>
	    </div>
	  </li>
	  <li class="nav-item">
	    <a class="nav-link" href="">DEPO</a>
	  </li>
	  <li class="nav-item">
	    <a class="nav-link" href="">OEM</a>
	  </li>
	   -->
	</ul>
	<br>
	<div class="tab-content" id="myTabContent">
	  <div class="tab-pane fade show active" id="main" role="tabpanel" aria-labelledby="MAIN_TAB"></div>
	  <div class="tab-pane fade" id="fifo" role="tabpanel" aria-labelledby="FIFO_TAB"></div>
	  <div class="tab-pane fade" id="stock_out" role="tabpanel" aria-labelledby="STOCK_OUT_TAB"></div>
	</div>
</div>