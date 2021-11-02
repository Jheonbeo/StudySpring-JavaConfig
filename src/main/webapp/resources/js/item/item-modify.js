import Model from './ItemModel.js'

new Vue({
	el: '#item-content',
	data: {
		tag : '아이템 수정창'
	},
	created(){
		this.loadItem()
	},
	methods:{
		loadItem(){
			var radio = $("div[name = 'radioGroup']")
			var radio2 = $("div[name = 'radioGroup2']")
			radio.find("label:eq(1)").css("transform", "translateX(50%)")
			radio.find("label:eq(2)").css("transform", "translateX(100%)")
			radio2.find("label:eq(1)").css("transform", "translateX(200%)")
			radio2.find("label:eq(2)").css("transform", "translateX(400%)")
			
			var form = {
					action:'4',
					cd_item:'${item.CD_ITEM}',
					seg_asset:'${item.SEG_ASSET}',
					supplier:'${item.CD_SUPPLIER}',
					customer:'${item.CD_CUSTOMER}'
			}
		}
	}
})