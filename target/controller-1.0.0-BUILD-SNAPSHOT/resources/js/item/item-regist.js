const tag = '[item-regist]'
	
$(document).ready(function() {
	var radio = $("div[name = 'radioGroup']");
	radio.find("label:eq(1)").css("transform", "translateX(50%)");
	radio.find("label:eq(2)").css("transform", "translateX(100%)");
});

$(function(){ 
	$("input[name = 'SEG_ASSET']").click(function(){ 
			var supplierBox = document.getElementById("supplierBox");
			var cbSub = document.getElementById("cbSub");
		    var segValue = this.value;
		    var supplierList = [];
		    $.ajax({ 
			       url:'getSupplier', 
			       dataType:'json',
			       contentType:'application/json',
			       data:JSON.stringify({seg_asset : segValue}),
				   async: false,
			       method:'POST', 
			       success:function(t){
			    	   	supplierList = t.supplierList;
			    	   	
						switch(segValue){
						case "30":
							removeOptions(supplierBox);
							supplierBox.disabled = false;
							for(var i = 0; i < supplierList.length; i++){
								$("#supplierBox").append("<option value='" + supplierList[i].cd_SUPPLIER + "'>" + supplierList[i].cd_SUPPLIER + " : " + supplierList[i].nm_SUPPLIER + " </option>");
							}
							break;
						case "50":
							removeOptions(supplierBox);
							$("#supplierBox").append("<option value='1049'>1049 : 조이슨세이프티시스템스코리아</option>");
							supplierBox.disabled = false;
							break;
						case "60":
							supplierBox.disabled = true;
							break;
						default:
							alert("DEFAULT");
							break;
						}
			       },
			       error:function(t){
			    	   console.error("Error! Company load fail.");
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

$(function(){ 
	$("#btnLoadItem").click(function(){  
		var html = "";
		var cdItem = $("#comboItem").val();
		
		if(!cdItem){
			alert("품번 입력이 필요합니다.");
			return;
		}
		 $.ajax({ 
		       url:'getItem', 
		       dataType:'json',
		       contentType:'application/json',
		       data:JSON.stringify({action : 1, cd_item : cdItem}),
		       method:'POST', 
		       success:function(t){
					var itemData = t.itemData;
					
					if(itemData.length > 0){
						html+="<thead>";
						html+="<tr><th style=\"width:60%\">품번</th><th style=\"width:20%\">구분</th><th style=\"width:30%\">협력사</th><th style=\"width:30%\">고객사</th></tr>";
						html+="</thead>";
						html+="<tbody>";
					}
					
					for(var i=0; i<itemData.length; i++){
						var supplier = (!itemData[i].cd_SUPPLIER) ? "" : itemData[i].cd_SUPPLIER;
						var customer = (!itemData[i].cd_CUSTOMER) ? "" : itemData[i].cd_CUSTOMER;

						html+="<tr>";
						html+="<td>" + itemData[i].cd_ITEM + "</td>";
						html+="<td>" + itemData[i].seg_ASSET + "</td>";
						html+="<td>" + supplier + "</td>";
						html+="<td>" + customer + "</td>";
						html+="</tr>"
					}
					$(".scrollTable").html(html);

					if(itemData.length > 0){
						html+="</tbody>";
					}
		       },
		       error:function(t){
		    	   console.error("Error! Table load fail.");
		       }
	    }); 
	}); 
});

$("#tbLoadItem").on('click', 'tr', function(){
	var td = $(this).children();
	
	if(td.eq(0).text() == "품번")
		return;
	
	var form = {
			action:4,
			cd_item:td.eq(0).text(),
			seg_asset:td.eq(1).text(),
			supplier:td.eq(2).text(),
			customer:td.eq(3).text()
	};
	
	$.ajax({ 
	       url:'getItem', 
	       dataType:'json',
	       contentType:'application/json',
	       data:JSON.stringify(form),
	       method:'POST', 
	       success:function(t){
				var itemData = t.itemData;
				
				if(form.seg_asset == "30"){
					$("input[name = 'SEG_ASSET'][value='30']").prop("checked", true).trigger('click');
					document.getElementById("supplierBox").value = itemData[0].cd_SUPPLIER;
					$("#txtParallel").val(itemData[0].parallel) * 100;
					$("#txtSafetyPrdersent").val(itemData[0].safety_PERCENT) * 100;
					if(itemData[0].free_AREA === "유검사")
						$("input[name = 'Check'][value='rbCheck']").prop("checked", true);
					else
						$("input[name = 'SEG_ASSET'][value='rbUnCheck']").prop("checked", true);
				}
				else if(form.seg_asset == "50"){
					$("input[name = 'SEG_ASSET'][value='50']").prop("checked", true).trigger('click');
					$("#txtParallel").val(itemData[0].parallel) * 100;
					$("#txtSafetyPrdersent").val(itemData[0].safety_PERCENT) * 100;
					if(itemData[0].free_AREA === "유검사")
						$("input[name = 'Check'][value='rbCheck']").prop("checked", true);
					else
						$("input[name = 'SEG_ASSET'][value='rbUnCheck']").prop("checked", true);
				}
				else if(form.seg_asset == "60"){
					$("input[name = 'SEG_ASSET'][value='60']").prop("checked", true).trigger('click');
				}
				document.getElementById("customerBox").value = itemData[0].cd_CUSTOMER;
				$("#txtItemNum").val(itemData[0].cd_ITEM);
				$("#txtItemNM").val(itemData[0].nm_ITEM);
				$("#txtLeadTime").val(itemData[0].lead_TIME);
				$("#txtSafty").val(itemData[0].safety_STOCK);
				$("#txtFlatCar").val(itemData[0].flatcar);
				$("#txtMinProd").val(itemData[0].production_MINIMUM);
				$("#txtMinAmount").val(itemData[0].minimum_STOCK);
				document.getElementById("cbUnit").value = itemData[0].unt_UNIT;
				document.getElementById("cbSub").value = itemData[0].cd_SUB;
				$("#txtSNP").val(itemData[0].box_SNP);
				$("#txtExportSnp").val(itemData[0].export_SNP);
				$("#txtSmallSNP").val(itemData[0].small_SNP);
				$("#txtUPH").val(itemData[0].item_UPH);
				$("#txtItemPeriodStart").val(itemData[0].dts_START);
				$("#txtItemPeriodEnd").val(itemData[0].dts_END);
				if(itemData[0].stop_PRODUCTION === "OK")
					document.getElementById("checkBoxStopItem").checked = true;
				if(itemData[0].back_FLUSH == "OK")
					$("input[name = 'BomReg'][value='OK']").prop("checked", true);
				else
					$("input[name = 'BomReg'][value='NG']").prop("checked", true);
				if(itemData[0].warehouse == null || itemData[0].warehouse.includes('P1'))
					$("input[name = 'WAREHOUSE'][value='P1']").prop("checked", true);
				else
					$("input[name = 'WAREHOUSE'][value='P2']").prop("checked", true);
				document.getElementById("comboLine1").value = itemData[0].prod_LINE01 == null ? "" : itemData[0].prod_LINE01;
				document.getElementById("comboLine2").value = itemData[0].prod_LINE02 == null ? "" : itemData[0].prod_LINE02;
				document.getElementById("comboLine3").value = itemData[0].prod_LINE03 == null ? "" : itemData[0].prod_LINE03;
				document.getElementById("comboLine4").value = itemData[0].prod_LINE04 == null ? "" : itemData[0].prod_LINE04;
				document.getElementById("comboLine5").value = itemData[0].prod_LINE05 == null ? "" : itemData[0].prod_LINE05;
				document.getElementById("comboTomasLine").value = itemData[0].cd_LINE == null ? "" : itemData[0].cd_LINE;
				document.getElementById("comboTomasWare").value = itemData[0].cd_STOCK == null ? "" : itemData[0].cd_STOCK;
				if(itemData[0].other == "P1"){
					document.getElementById("rbPbomAllReg").checked = true;
					document.getElementById("rbPbomOnlyReg").checked = false;
				}
				else if(itemData[0].other == "P2"){
					document.getElementById("rbPbomAllReg").checked = false;
					document.getElementById("rbPbomOnlyReg").checked = true;
				}
				else{
					document.getElementById("rbPbomAllReg").checked = false;
					document.getElementById("rbPbomOnlyReg").checked = false;
				}
				if(itemData[0].processing1 == "X")
					$("input[name = 'PROCESSING1'][value='X']").prop("checked", true);
				else
					$("input[name = 'PROCESSING1'][value='O']").prop("checked", true);
				if(itemData[0].processing2 == "X")
					$("input[name = 'PROCESSING2'][value='X']").prop("checked", true);
				else
					$("input[name = 'PROCESSING2'][value='O']").prop("checked", true);
				if(itemData[0].processing3 == "X")
					$("input[name = 'PROCESSING3'][value='X']").prop("checked", true);
				else
					$("input[name = 'PROCESSING3'][value='O']").prop("checked", true);
				if(itemData[0].processing4 == "X")
					$("input[name = 'PROCESSING4'][value='X']").prop("checked", true);
				else
					$("input[name = 'PROCESSING4'][value='O']").prop("checked", true);
				if(itemData[0].processing5 == "X")
					$("input[name = 'PROCESSING5'][value='X']").prop("checked", true);
				else
					$("input[name = 'PROCESSING5'][value='O']").prop("checked", true);
				if(itemData[0].processing6 == "X")
					$("input[name = 'PROCESSING6'][value='X']").prop("checked", true);
				else
					$("input[name = 'PROCESSING6'][value='O']").prop("checked", true);
					
	       },
	       error:function(t){
	    	   console.error("Error! Item load fail.");
	       }
   }); 
});

$(function () {
	$("#registForm button").click(function(ev){
	    ev.preventDefault();
	    if($(this).attr("id")=="btnRegistItem"){
	    	const queryString = $("form[name=registForm]").serializeObject();
			$.ajax({ 
			      url:'setItem', 
			      dataType:'json',
			      contentType:'application/json',
			      data:JSON.stringify(queryString),
			      method:'POST', 
			      success:function(t){
			    	  var itemData = t.itemData;
			    	  $(".modal-title").html("등록 성공");
			    	  $(".modal-body").html("품번 " + itemData[0].cd_ITEM + "가 등록(갱신)되었습니다.");
			    	  $("#myModal").modal("show");
			      },
			      error:function(xhr, status, error){
			    	  $(".modal-title").html("등록 실패");
			    	  $(".modal-body").html("품번 등록 에러");
			    	  $("#myModal").modal("show");
			    	  console.error(error);
			      }
			  }); 
	    }
	});
});

$("#rbPbomAllReg").on('click', function(){
	var chkbox1 = document.getElementById("rbPbomAllReg").checked;
	var chkbox2 = document.getElementById("rbPbomOnlyReg").checked;
	if(chkbox1){
		document.getElementById("rbPbomRegHidden").disabled = true;
		document.getElementById("rbPbomOnlyReg").checked = false;
	}
	else if(chkbox1 == false && chkbox2 == false)
		document.getElementById("rbPbomRegHidden").disabled = false;
});

$("#rbPbomOnlyReg").on('click', function(){
	var chkbox1 = document.getElementById("rbPbomAllReg").checked;
	var chkbox2 = document.getElementById("rbPbomOnlyReg").checked;
	if(chkbox2){
		document.getElementById("rbPbomRegHidden").disabled = true;
		document.getElementById("rbPbomAllReg").checked = false;
	}
	else if(chkbox1 == false && chkbox2 == false)
		document.getElementById("rbPbomRegHidden").disabled = false;
}); 

$("#checkBoxStopItem").on('click', function(){
	var chkbox = document.getElementById("checkBoxStopItem").checked;
	if(chkbox)
		document.getElementById("checkBoxStopItemHidden").disabled = true;
	else
		document.getElementById("checkBoxStopItemHidden").disabled = false;
}); 

jQuery.fn.serializeObject = function () { 
    var obj = null; 
    try { 
        if(this[0].tagName && this[0].tagName.toUpperCase() == "FORM" ) { 
            var arr = this.serializeArray(); 
            if(arr){ 
            	obj = {}; 
            	jQuery.each(arr, function() { 
            		obj[this.name] = this.value; 
            	}); 
            } 
        } 
    }catch(e) { 
        alert(e.message); 
    }finally {} 
    
    return obj; 
};