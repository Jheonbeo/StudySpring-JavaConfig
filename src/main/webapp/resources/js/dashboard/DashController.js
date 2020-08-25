import ChartView from './ChartView.js'
import DropDownView from './DropDownView.js'

const tag = '[DashController]'
	
export default {
  init() {
	  console.log(tag, 'DashController.js')
	  ChartView.setup(document.querySelector('#myAreaChart'))
	  
	  DropDownView.setup(document.querySelector('#dropdownLine'))
      	.on('@change', e => this.onClickKeyword(e.detail.keyName))
	  
	  this.renderView('FS-F')
  },
  renderView(line){
	  ChartView.render(line)
  },
  onClickKeyword(keyword) {
	  ChartView.render(keyword)
  },
}