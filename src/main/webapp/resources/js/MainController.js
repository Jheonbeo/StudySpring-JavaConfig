import View from './View.js'

const tag = '[MainController]'
const MainController = Object.create(View)
let currentPathName = ''

MainController.initialRoutes('/dashboard/dashboard')

window.onload = () => {
	/*const dashIcon = document.getElementById('dashboard-icon');
	dashIcon.addEventListener('click', (evt) => {
        const pathName = evt.target.getAttribute('route')
        
        MainController.historyRouterPush(pathName, dashboardDiv)
    })*/
    const routeLinker = document.querySelectorAll('span.routes')

    routeLinker.forEach(el => {
        el.addEventListener('click', (e) => {
            const pathName = e.target.getAttribute('route')
            
            MainController.historyRouterPush(pathName)
            e.preventDefault();
        })
    })
}

//refresh
window.addEventListener("beforeunload", function(e) {
	MainController.refreshPage()
	e.preventDefault()
}); 