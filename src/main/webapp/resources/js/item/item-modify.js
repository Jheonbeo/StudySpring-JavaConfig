const tag = '[item-modify]'

$(function () {
	$("#modifyForm button").click(function(ev){
	    ev.preventDefault();
	    console.log($(".CD_SUPPLIER").val());
	    /*if($(this).attr("id")=="btnModifyItem"){
	    	const queryString = $("form[name=modifyForm]").serializeObject();
			$.ajax({ 
			      url:'setItem', 
			      dataType:'json',
			      contentType:'application/json',
			      data:JSON.stringify(queryString),
			      method:'POST', 
			      success:function(t){
			    	  var itemData = t.itemData;
			    	  $(".modal-title").html("갱신 성공");
			    	  $(".modal-body").html("품번 " + itemData[0].cd_ITEM + "가 갱신되었습니다.");
			    	  $("#myModal").modal("show");
			      },
			      error:function(xhr, status, error){
			    	  $(".modal-title").html("갱신 실패");
			    	  $(".modal-body").html("품번 갱신 에러");
			    	  $("#myModal").modal("show");
			    	  console.error(error);
			      }
			  }); 
	    }*/
	});
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