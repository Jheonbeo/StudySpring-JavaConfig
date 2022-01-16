import Model from '../Model.js'
import View from '../View.js'
				
new Vue({
	el: '#item-content',
	data: {
		message : '아이템창',
		dataList : [],
		callBackItem : $('#cancelItem').val()
	},
	mounted(){
		this.loadItem()
	},
	methods: {
		loadItem(){
			if(this.callBackItem != ''){
				var obj = {}
				$('#loadItem').val(this.callBackItem)
	            obj['CD_ITEM'] = ($('#loadItem').val()).toUpperCase()
				Model.regData(obj, '/item/check_item').then((resolvedData)=>this.dataList = resolvedData)
			}
		},
		async onSearchItem(){
			if($('#loadItem').val().length > 3){
				const timeout = setTimeout(this.onShowSpinner, 300);
				var obj = {}
	            obj['CD_ITEM'] = ($('#loadItem').val()).toUpperCase()
				await Model.regData(obj, '/item/check_item').then((resolvedData)=> this.dataList = resolvedData)
				.then(()=>{
					clearTimeout(timeout)
					setTimeout(() => {$('#spinner').modal('hide')}, 500)
				})
			}
			else{
				$(".modal-body").html("4글자 이상 검색해주세요.")
				$("#myModal").modal("show")
			}
		},
		onShowSpinner(){
			$('#spinner').modal('show')
		},
		onNewItem(){
			View.historyRouterPush('/item/item_register', null)
		},
		onHrefModifyPage(e){
			var rowIndex = e.target.parentNode.parentNode.rowIndex
			/*var param = {CD_ITEM:$('#dataTable').find("tr:eq(" + rowIndex + ")").find("td:eq(2)").text(),
			CD_SUPPLIER:$('#dataTable').find("tr:eq(" + rowIndex + ")").find("td:eq(0)").text(),
			CD_CUSTOMER:$('#dataTable').find("tr:eq(" + rowIndex + ")").find("td:eq(1)").text(),
			SEG_ASSET:$('#dataTable').find("tr:eq(" + rowIndex + ")").find("td:eq(4)").text()}*/
			var param = 'CD_ITEM=' + $('#dataTable').find("tr:eq(" + rowIndex + ")").find("td:eq(2)").text() + '&' +
						'CD_SUPPLIER=' + $('#dataTable').find("tr:eq(" + rowIndex + ")").find("td:eq(0)").text() + '&' +
						'CD_CUSTOMER=' + $('#dataTable').find("tr:eq(" + rowIndex + ")").find("td:eq(1)").text() + '&' +
						'SEG_ASSET=' + $('#dataTable').find("tr:eq(" + rowIndex + ")").find("td:eq(6)").text()
			//get 방식
			View.historyRouterPush('/item/item_modify?' + param, null)
		}
	},
	watch: {
		dataList(){
			$('#dataTable').DataTable({
				destroy: true,
				ordering: false,
				data:this.dataList,
				columns: [
					{data:'cd_SUPPLIER'},
					{data:'cd_CUSTOMER'},
					{data:'cd_ITEM',
					render: function(data, type) {
	                    if (type === 'display') {
	                        return '<a href="" class="hrefEvent">' + data + '</a>';
	                    }
	                     
	                    return data
                	}},
					{data:'master_SNP'},
					{data:'ware_SNP'},
					{data:'ship_SNP'},
					{data:'seg_ASSET'},
					{data:'identification'},
					{data:'pbom'},
					{data:'checksheet'},
					{data:'jig'},
					{data:'upd_USR'},
					{data:'upd_DAT_TEXT'},
				]
			})
			
			var anchorTag = document.querySelectorAll('a.hrefEvent')
			anchorTag.forEach(el => {
		        el.addEventListener('click', (e) => {
					e.preventDefault()
					this.onHrefModifyPage(e)
		        })
		    })
		}
	}
})