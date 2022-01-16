import Model from '../Model.js'

new Vue({
    el: '#shipment-content',
    data: {
		shipWareList : [],
		customer: '',
    },
	mounted() {
		this.init()
	},
    methods: {
		init(){
			$( "#DATEPICKER" ).datepicker({dateFormat: 'yy-mm-dd'}).datepicker("setDate", new Date())
		},
		async onSearchData(){
			const timeout = setTimeout(this.onShowSpinner, 300);
			var obj = {}
            obj['YYYYMMDD'] = $("#DATEPICKER").val().replaceAll(/-/gi,"").toString()
            obj['CD_ITEM'] = $("#CD_ITEM").val()
            obj['CUSTOMER'] = $('#CUSTOMER').val()
            obj['MODEL'] = $("#MODEL").val()
			await Model.regData(obj, '/warehouse/shipmentStock').then((resolvedData)=> this.shipWareList = resolvedData)
			.then(()=>{
				clearTimeout(timeout)
				setTimeout(() => {$('#spinner').modal('hide')}, 500)
			})
		},
		onShowSpinner(){
			$('#spinner').modal('show')
		},
    },
	watch: {
		shipWareList(){
			$('#dataTable').DataTable({
				//searching: false,
				destroy: true,
				//ordering: false,
				data:this.shipWareList,
        		lengthMenu:[15, 30, 50],
				columns: [
					{data:'cd_ITEM'},
					{data:'model'},
					{data:'stock_QUANTITY'},
					{data:'prod_QUANTITY'},
					{data:'ware_TODAY_QUANTITY',
					render: function(data, type) {
	                    if (type === 'display' && parseInt(data) != 0) {
	                        return '<span class="attention-blue">' + data + '</span>';
	                    }
	                    return data
                	}},
					{data:'hold_STOCK'},
					{data:'ship_QUANTITY',
					render: function(data, type) {
						if(parseInt(data) > 0){
							data = "-" + data
						}
	                    if (type === 'display' && parseInt(data) != 0) {
	                        return '<span class="attention-red">' + data + '</span>';
	                    }
	                    return data
                	}},
					{data:'current_QUANTITY'},
				]
			})
		}
	}
})