import Model from '../Model.js'
import Chart from '../../vendor/chart.js/Chart.min.js'

new Vue({
    el: '#warehouse-content',
    data: {
		main: '',
		wareList : [],
		countList : [],
		notStockList : []
    },
	mounted() {
		this.init()
	},
    methods: {
		init(){
			$("#main").load('/warehouse/warehouse', '', this.initData)
			//this.initData()
		},
		async initData(){
			await Model.regData('', '/warehouse/wareInfo').then((resolvedData)=> this.wareList = resolvedData)
			await Model.regData('', '/warehouse/domesticCount').then((resolvedData)=> this.countList = resolvedData)
			await Model.regData('', '/warehouse/domesticNotStockCount').then((resolvedData)=> this.notStockList = resolvedData)
		},
		fifo(){
			$("#fifo").load('/warehouse/fifo')
		}
    },
	watch: {
		wareList(){
			$('#dataTable').DataTable({
				destroy: true,
				ordering: false,
				data:this.wareList,
        		lengthMenu:[15, 30, 50],
				columns: [
					{data:'yyyymmdd'},
					{data:'cd_ITEM'},
					{data:'box_SNP'},
					{data:'supp_FROM'},
					{data:'ware_TO'},
				]
			})
		},
		countList(){
			var canvas = document.getElementById("myPieChart");
			
			var config = {
			  type: 'doughnut',
			  data: {
			    labels: ["계획 입고", "미계획 입고", "미입고"],
			    datasets: [{
			      data: [this.countList[0].plan_STOCK_COUNT, 
			      		this.countList[0].not_PLAN_STOCK_COUNT, 
						(parseInt(this.countList[0].all_ORDER_COUNT) - (parseInt(this.countList[0].plan_STOCK_COUNT) + parseInt(this.countList[0].not_PLAN_STOCK_COUNT)))],
			      backgroundColor: ['#4e73df', '#1cc88a', '#d3d3d3'],
			      hoverBackgroundColor: ['#2e59d9', '#17a673', '#808080'],
			      hoverBorderColor: "rgba(234, 236, 244, 1)",
			    }],
			  },
			  options: {
				responsive: true,
			    maintainAspectRatio: false,
			    tooltips: {
			      backgroundColor: "rgb(255,255,255)",
			      bodyFontColor: "#858796",
			      borderColor: '#dddfeb',
			      borderWidth: 1,
			      xPadding: 15,
			      yPadding: 15,
			      displayColors: false,
			      caretPadding: 10,
				  callbacks: {
					label: function(tooltipItem, data) {
				        var dataset = data.datasets[tooltipItem.datasetIndex]
						var total = dataset.data.reduce(function(previousValue, currentValue) {
				           	return parseInt(previousValue) + parseInt(currentValue);
				        })
				        var currentValue = dataset.data[tooltipItem.index]
				        var percentage = Math.floor(((currentValue/total) * 100)+0.5);        
				        return percentage + "%"
					}
				  }
			    },
			    legend: {
			      display: true
			    },
			    cutoutPercentage: 30,
			  },
			}
			let myBarChart = new Chart(canvas, config)
		},
		notStockList(){
			$('#dataTableNotStock').DataTable({
				destroy: true,
				ordering: false,
				data:this.notStockList,
        		lengthMenu:[5, 10, 15],
				columns: [
					{data:'cd_ITEM'},
					{data:'box_SNP'},
					{data:'supp_FROM'},
				]
			})
		}
	}
})