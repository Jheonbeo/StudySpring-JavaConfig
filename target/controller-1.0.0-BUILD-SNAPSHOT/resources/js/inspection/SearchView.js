import View from '../View.js'

const tag = '[SearchView]'

const SearchView = Object.create(View)
	
SearchView.setup = function (el) {
  this.init(el)
  this.dateEl = el.querySelector('#datePicker')
  this.cdItemEl = el.querySelector('#cd_item')
  this.cdLineEl = el.querySelector('#cd_line')
  this.barcodeEl = el.querySelector('#barcode')
  this.searchEl = el.querySelector('#search')
  this.bindEvents()
  return this
}

SearchView.bindEvents = function() {
	this.searchEl.addEventListener('click', e => this.onClickSearch())
}

SearchView.onClickSearch = function() {
	this.emit('@search', {date:this.dateEl.value, cditem:this.cdItemEl.value, 
		cdline:this.cdLineEl.value, barcode:this.barcodeEl.value})
}

export default SearchView