const tag = '[chart-area]'
	
var lineValue = $('#fs-f').attr('data-value');
var labels = [];
var valueByLabels = [];

function generateData(i) {
	var data = [];
	
	lineDbData.getLineUph(i, function(result){
		labels = Object.getOwnPropertyNames(result)
		Object.getOwnPropertyNames(result).forEach(
				function (val, idx, array) {
					valueByLabels.push(result[val]);
				}
			);
	});
	return labels;
}

var lineDbData = (function () {
	function getLineUph(LINE, callback, error){
		$.ajax({ 
			url:'getLineUph', 
			dataType:'json',
		    async: false,
			contentType:'application/json; charset=utf-8',
			data:JSON.stringify({LINE}),
			method:'POST', 
			success:function(t, status, xhr){
				if(callback){
					callback(t);
				}
			},
			error:function(xhr, status, error){
				console.error(error);
			}
		})
	}
	return {
		getLineUph : getLineUph
	};
})();

$('.dropdown-item').click(function(){
	lineValue = $(this).attr("data-value");

	generateData(lineValue);
	myBarChart.data.labels = labels;
	myBarChart.data.datasets.data = valueByLabels;
	myBarChart.update();
});

var ctx = document.getElementById("myAreaChart");
var config = {
		type: 'bar',
		data: {
		labels: generateData(lineValue),
		datasets: [{
		label: 'Lines UPH',
		data: valueByLabels,
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
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
						}
				}]
			}
		}
};
var myBarChart = new Chart(ctx, config);
