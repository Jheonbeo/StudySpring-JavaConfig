import View from '../View.js'
import Chart from '../../vendor/chart.js/Chart.min.js'
import Model from './DashModel.js'
	
const tag = '[ChartView]'

const ChartView = Object.create(View)

ChartView.setup = function (el) {
	this.init(el)
	return this
}

ChartView.render = function(line){
	var uphData = Model.generateData(line)
	var config = {
			type: 'bar',
			data: {
			labels: uphData.label,
			datasets: [{
			label: 'Lines UPH',
			data: uphData.data,
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(30, 190, 125, 0.2)',
				'rgba(250, 90, 185, 0.2)',
				'rgba(184, 215, 60, 0.2)',
				'rgba(52, 255, 153, 0.2)',
				'rgba(153, 153, 255, 0.2)'
				],
				borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(30, 190, 125, 1)',
				'rgba(250, 90, 185, 1)',
				'rgba(184, 215, 60, 0.2)',
				'rgba(52, 255, 153, 1)',
				'rgba(153, 153, 255, 1)'
				],
			borderWidth: 1
			}]
			},
			options: {
			    maintainAspectRatio: false,
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
							}
					}]
				}
			}
	};
	
	let myBarChart = new Chart(this.el, config);
}

export default ChartView





	