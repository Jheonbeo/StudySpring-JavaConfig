import View from '../View.js'

const tag = '[DropDownView]'

const DropDownView = Object.create(View)

DropDownView.setup = function (el) {
	this.init(el)
	this.bindClick()
	return this
}

DropDownView.bindClick = function() {
  Array.from(this.el.querySelectorAll('a')).forEach(query => {
	  query.addEventListener('click', e => this.onClick(query.getAttribute('data-value')))
  })
}

DropDownView.onClick = function (keyName) {
	this.emit('@change', {keyName})
}

export default DropDownView
