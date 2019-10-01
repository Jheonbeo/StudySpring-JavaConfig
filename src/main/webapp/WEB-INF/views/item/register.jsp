<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@include file="../includes/header.jsp" %>
        				
	<div class="container-fluid">
		<h1 class="h3 mb-2 text-gray-800">Item Register</h1>
        <p class="mb-4">Management item table.</p>
        
        
        <div class="card shadow mb-4">
        	<div class="card-header py-3">
          	<h6 class="m-0 font-weight-bold text-primary">TKK_ITEM DataTables</h6>
        	</div>
        	<div class="card-body">
        		<form role="form" action="/item/register" method="post">
        			<div class="form-group row">
						<div class="radio">
						  <label><input type="radio" name="seg_asset" value="30" checked>부품 &nbsp</label>
						</div>
						<div class="radio">
						  <label><input type="radio" name="seg_asset" value="50">반제품 &nbsp</label>
						</div>
						<div class="radio">
						  <label><input type="radio" name="seg_asset" value="60">완제품 &nbsp</label>
						</div>
        			</div>
        			<div class="form-group row">
        				<label>협력사 코드 &nbsp</label>
        				<select id="supplierBox" class="form-control combobox">
  	      					<c:forEach items="${supplierList}" var="supplierList">
        						<option value="${supplierList.CD_COMPANY}">${supplierList.CD_COMPANY} : ${supplierList.NM_COMPANY}</option>
        					</c:forEach>
        				</select>
        				
        				<label>&nbsp 고객사 코드 &nbsp</label>
        				<select id="customerBox" class="form-control combobox">
  	      					<c:forEach items="${customerList}" var="customerList">
        						<option value="${customerList.CD_COMPANY}">${customerList.CD_COMPANY} : ${customerList.NM_COMPANY}</option>
        					</c:forEach>
        				</select>
        			</div>
        		</form>
        	</div>
		</div>
	</div>
<script>
$(function(){ 
	$('input:radio').click(function(){ 
			var combobox = document.getElementById("supplierBox");
		    var segValue = this.value;
		    $.ajax({ 
			       url:'getSupplier', 
			       dataType:"jsonp",
			       data:{'segValue': segValue} ,
			       jsonp : "callback",
			       type:'GET', 
			       success:function(t){
			    	   	var supplierList = t.supplierList;
			    	   	
						switch(segValue){
						case "30":
							removeOptions(combobox);
							combobox.disabled = false;
							for(var i = 0; i < supplierList.length; i++){
								$("#supplierBox").append("<option value='" + supplierList[i].CD_COMPANY + "'>" + supplierList[i].CD_COMPANY + ":" + supplierList[i].NM_COMPANY + " </option>");
							}
							break;
						case "50":
							removeOptions(combobox);
							$("#supplierBox").append("<option value='1049'>1049 : 조이슨세이프티시스템스코리아</option>");
							combobox.disabled = false;
							break;
						case "60":
							combobox.disabled = true;
							break;
						default:
							alert("DEFAULT");
							break;
						}
			       },
			       error:function(t){
			    	   alret("Error");
			       }
		    });
	});
}); 

function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}
</script>
<%@include file="../includes/footer.jsp" %>