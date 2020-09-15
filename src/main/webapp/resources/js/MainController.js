import DashBoardView from './dashboard/FormView.js'
import InspectView from './inspection/InspectView.js'

const tag = '[MainController]'
	
export default {
  init() {
	  console.log(tag, 'MainController.js')
	  //DashBoard
	  DashBoardView.setup(document.querySelector('#dashboard-icon'))
      	.on('@click', e => this.onClickIcon())
	  
	  InspectView.setup(document.querySelector('#inspection-content'))

	  this.renderView()
  },
  
  renderView(){
	  console.log(tag, 'rednerView()')
	  DashBoardView.render()
  },
  onClickIcon() {
	  this.renderView()
  },
}