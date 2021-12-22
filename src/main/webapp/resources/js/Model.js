export default {
	regData(DATA, URL){
		return new Promise((resolve, reject)=>{
			$.ajax({
				url:URL,
		       	dataType:'json',
		       	contentType:'application/json',
		       	data:JSON.stringify(DATA),
		       	method:'POST',
		       	success:function(t){
		    	   	resolve(t)
			    },
		        error:function(err){
					reject(err)
		        }
			})
		})
	}
}
