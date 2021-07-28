import View from './View.js'

const tag = '[MainController]'
	
const MainController = Object.create(View)
const contentDiv = document.getElementById('page-content');

initialRoutes(contentDiv)

window.onload = () => {
	//import(/* webpackChunkName: "DashBoard" */ './dashboard/DashController.js')
	//MainController.initialRoutes('/dashboard/dashboard', dashboardDiv)

    //$("#dashboard-content").load("/dashboard/dashboard")
	
	/*const dashIcon = document.getElementById('dashboard-icon');
	dashIcon.addEventListener('click', (evt) => {
        const pathName = evt.target.getAttribute('route')
        
        MainController.historyRouterPush(pathName, dashboardDiv)
    })*/

	historyRouterPush(pathName, historyAppDiv)
}