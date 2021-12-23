import Model from '../Model.js'

new Vue({
    el: '#warehouseShip-content',
    data: {
    },
	mounted() {
		this.init()
	},
    methods: {
		init(){
			$( "#datepicker" ).datepicker();
		},
    }
})