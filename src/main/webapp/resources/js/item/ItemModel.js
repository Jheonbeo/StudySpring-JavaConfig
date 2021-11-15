export default {
	regData(DATA, URL){
		var getInfo = null
		
		$.ajax({
			url:URL, 
	       	dataType:'json',
			async:false,
	       	contentType:'application/json',
	       	data:JSON.stringify(DATA),
	       	method:'POST',
	       	success:function(t){
	    	   	getInfo = t
		    },
	        error:function(){
				getInfo = null
	        }
		})
		
		return getInfo 
	}
}
