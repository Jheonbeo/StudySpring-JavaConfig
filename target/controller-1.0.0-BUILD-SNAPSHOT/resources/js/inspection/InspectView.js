import View from '../View.js'
import SearchView from './SearchView.js'
import TableView from './TableView.js'

const tag = '[InspectView]'

const InspectView = Object.create(View)
	
InspectView.setup = function (el) {
	this.init(el)
	return this
}

export default InspectView
/*
export default {
  init() {
	  SearchView.setup(document.querySelector('#search-keyword'))
	  	.on('@search', e => this.onSearch(e.detail))
	  	
	  TableView.setup(document.querySelector('#table-body'))
	  
	  DateView.setup(document.querySelector('#datePicker'))
  },
  onSearch(keyword) {
	  console.log(tag, 'onSearch()', keyword)
	  TableView.render(keyword)
  }
}
$('#datePicker').datepicker({
    format: "yyyymmdd",
    setDate: new Date(),
    autoclose : true,
    language : "ko"
});*/