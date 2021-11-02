import Model from './IdentificationModel.js'

new Vue({
	el: '#identification-content',
	data: {
		message : '식별지창',
	    options: [
			{ text: '', value: '' },
			{ text: '흰색', value: '%ed%9d%b0%ec%83%89' },
	      	{ text: '노랑색', value: '%eb%85%b8%eb%9e%91%ec%83%89' },
	      	{ text: '파랑색', value: '%ed%8c%8c%eb%9e%91%ec%83%89' },
	      	{ text: '녹색', value: '%eb%85%b9%ec%83%89' },
	      	{ text: '주황색', value: '%ec%98%a4%eb%a0%8c%ec%a7%80%ec%83%89' },
	      	{ text: '보라색', value: '%eb%b3%b4%eb%9d%bc%ec%83%89' },
	      	{ text: '하늘색', value: '%ed%95%98%eb%8a%98%ec%83%89' },
	      	{ text: '핑크색', value: '%ed%95%91%ed%81%ac' }
	    ]
	},
	methods: {
		search(e){
			if(e.keyCode === 13){
				var val = e.target.value
				if(val.length >= 5){
					this.clickLoadItem()
				}
			}
		},
	    showIden(e) {
			if(e.target.value == ''){
				return
			}
			
			fetch('/resources/img/identification/' + e.target.value + '.jpg')
		    .then(res => {
				if (res.ok) {
					$('#loadIdenImage').attr('src',  '/resources/img/identification/' + e.target.value + '.jpg')
					$('#imgCution').text('')
		        } else {
					$('#loadIdenImage').attr('src',  '')
					$('#imgCution').text('양식이 존재하지 않습니다.')
		        }
		    }).catch()
	    },
	    showAlc(e) {
			if(e.target.value == ''){
				return
			}
			
			fetch('/resources/img/ALC/' + e.target.value + $.trim($('#base_COLOR option:selected').text()) + '.png')
		    .then(res => {
				if (res.ok) {
					$('#loadAlcImage').attr('src',  '/resources/img/ALC/' + e.target.value + $.trim($('#base_COLOR option:selected').text()) + '.png')
		        } else {
					$('#loadAlcImage').attr('src',  '')
		        }
		    }).catch(error => console.error('Error:', error));
	    },
		clickLoadItem(data){
			var cdItem = $('#loadItem').val()
			var idenData = null
			if(data == null)
				idenData = data
			else
				idenData = Model.getData(cdItem.toUpperCase())
			
			if(idenData == null || idenData.m_I_NO_PART == null){
				$(loadCution).text('존재하지않는 품번입니다.')
			}
			else{
				$(loadCution).text('')
				
				for (var key in idenData) 
				{ 
					if(idenData[key] != null){
						$('#' + key).val(decodeURI(idenData[key])
						.replace( /\+/g, ' ' )
						.replaceAll( '%2f', '/' ).replaceAll( '%2F', '/' )
						.replaceAll( '%2c', ',' ).replaceAll( '%2C', ',' ))
						
						if(key == 'base_COLOR')
							$('#' + key).val(idenData[key])
					}
					else{
						$('#' + key).val('')
					}
				}
				
				$(no_FORM).focus()
				$(no_FORM).blur()
				$(form_TYPE).focus()
				$(form_TYPE).blur()

				$(loadItem).focus()
			}
		},
		sendPost() {
			var obj = null
      		var arr = $('#idenForm').serializeArray()

			if (arr) {
                obj = {};
                jQuery.each(arr, function() {
					if(this.name.toUpperCase() == 'BASE_COLOR')
                    	obj[this.name.toUpperCase()] = this.value
					else
                    	obj[this.name.toUpperCase()] = encodeURI(this.value)
                });
            }
			
			var result = Model.setData(obj)
			if(result != null){
				this.clickLoadItem(result)
				$(".modal-title").html("등록 성공");
				$(".modal-body").html("품번 " + result['m_I_NO_PART'] + "가 등록(갱신)되었습니다.");
				$("#myModal").modal("show");
			}
			else{
		    	$(".modal-title").html("등록 실패");
		    	$(".modal-body").html("품번 등록 에러");
		    	$("#myModal").modal("show");
			}
    	}
	}
})