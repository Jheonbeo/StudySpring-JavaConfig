export default {
	getData(DATA) {
		var getInfo = null
		
		$.ajax({ 
			url:'/item/check_item', 
			dataType:'json',
			async:false,
	       	contentType:'application/json',
			data:JSON.stringify({DATA}),
			method:'POST', 
			success:function(t){
				getInfo = t
			},
			error:function(){
				getInfo = null
			}
		})
		
		return getInfo
	},
	getDataDetail(Data){
		$.ajax({ 
	       url:'/item/getItem', 
	       dataType:'json',
	       contentType:'application/json',
	       data:JSON.stringify(form),
	       method:'POST', 
	       success:function(t){
	    	   console.log(t[0].cd_ITEM)
		   },
	       error:function(t){
	    	   console.error("Error! Item load fail.");
	       }
		}); 
	}
}
