import View from '../View.js'

const tag = '[DateView]'

const DateView = Object.create(View)

DateView.setup = function (el) {
	this.init(el)
	return this
}

DateView.render = function(){
	this.el.datepicker({
	    format: "yyyymmdd",
	    setDate: new Date(),
	    autoclose : true,
	    language : "ko"
	})
}