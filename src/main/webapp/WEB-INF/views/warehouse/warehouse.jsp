<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


<!-- Begin Page Content -->
<div class="container-fluid" id="warehouse-content">
	<ul class="nav nav-tabs">
	  <li class="nav-item">
	    <a class="nav-link active" id="main-tab" data-toggle="tab" href="#main" role="tab" aria-controls="main" aria-selected="true">DASH</a>
	  </li>
	  <li class="nav-item dropdown">
	    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">JSS 공장</a>
	    <div class="dropdown-menu">
	      <a class="dropdown-item" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">입고창고</a>
	      <a class="dropdown-item" id="ship-tab" data-toggle="tab" href="#ship" role="tab" aria-controls="ship" aria-selected="false" @click="test">출하창고</a>
	      <a class="dropdown-item" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">생산라인</a>
	    </div>
	  </li>
	  <li class="nav-item">
	    <a class="nav-link" href="#">DEPO</a>
	  </li>
	  <li class="nav-item">
	    <a class="nav-link" href="#">OEM</a>
	  </li>
	</ul>
	<br>
	<div class="tab-content" id="myTabContent">
	  <div class="tab-pane fade show active" id="main" role="tabpanel" aria-labelledby="main-tab"></div>
	  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">test</div>
	  <div class="tab-pane fade" id="ship" role="tabpanel" aria-labelledby="ship-tab"></div>
	  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">test2</div>
	</div>
</div>-