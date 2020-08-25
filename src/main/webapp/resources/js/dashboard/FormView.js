import View from '../View.js'
		
const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
	this.init(el)
	return this
}

FormView.render = function(){
	$("#dashboard-content").load("/dashboard/dashboard", function(){
		import(/* webpackChunkName: "DashBoard" */ './DashController.js').then(module => {
		    module.default.init();
		  });
	});
	
	/*let {default:DashController} = await import( webpackChunkName: "DashBoard"  './DashController.js')
	DashController.init()*/
}

FormView.bindClickEvent = function() {
	this.addEventListener('click', e => {
		this.onClickIcon()
	})
}

FormView.onClickIcon = function () {
	this.emit('@click', {})
}

export default FormView