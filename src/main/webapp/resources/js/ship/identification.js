new Vue({
	el: '#identification-content',
	data: {
		message : "식별지창",
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
	created() {
	},
	methods: {
	    showIden(e) {
			if(e.target.value == ''){
				return;
			}
			
			fetch('/resources/img/identification/' + e.target.value + '.jpg')
		    .then(res => {
				if (res.ok) {
					$('#loadImage').attr('src',  '/resources/img/identification/' + e.target.value + '.jpg');
					$('#imgCution').text('');
		        } else {
					$('#loadImage').attr('src',  '');
					$('#imgCution').text('양식이 존재하지 않습니다.');
		        }
		    }).catch()
	    }
	}
})