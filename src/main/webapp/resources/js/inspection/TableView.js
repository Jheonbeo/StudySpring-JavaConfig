import View from '../View.js'

const tag = '[TableView]'

const TableView = Object.create(View)


TableView.setup = function (el) {
	this.init(el)
	return this
}

TableView.render = function(data){
	var html = "";
	var form = {
			ACTION:"GET INSPECTION",
			CDITEM:data.cditem,
			CDLINE:data.cdline,
			CBARCODE:data.barcode,
			LOTDATE:data.date,
			ISCHECK:2
	};
	$.ajax({ 
	       url:'getInspection', 
	       dataType:'json',
	       contentType:'application/json',
	       data:JSON.stringify(form),
	       method:'POST', 
	       success:function(t){
				var itemData = t;

				data = itemData.length ? itemData.reduce((html, item, index) => {
					console.log(item.starttime)
					item.starttime = null ? "-" : item.starttime
					html += `<tr><td>${index+1}</td>
						<td>${item.lot}</td>
						<td>${item.cd_ITEM}</td>
						<td>${item.cd_LINE}</td>
						<td>${item.prod_NUMB}</td>
						<td>${item.all_COUNT}</td>
						<td>${item.ok}</td>
						<td>${item.ng}</td>
						<td>${item.starttime}</td>
						<td>${item.endtime}</td></tr>`
						return html
					}, '') : ''
				$('#table-body').html(data)
	       },
	       error:function(t){
	    	   console.error("Error! Item load fail.")
	       }
	}); 
}

export default TableView