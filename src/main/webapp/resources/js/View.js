const tag = '[View]'
let prevUrl = ''

export default {
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  },

  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  },
  
  //entry point
  initialRoutes(pathName) {
	  this.renderHTML(pathName)
	  window.onpopstate = () => this.renderHTML(window.location.pathname)
  },

  // set browser history
  historyRouterPush(pathName) {
	  if(prevUrl != pathName){
		  window.history.pushState({pathName}, '', '#'+pathName)
		  this.renderHTML(pathName)
	  }
  },

  // render
  renderHTML(route) {
	  if(history.state == null && route == '/includes/index'){
		  route = '/dashboard/dashboard'
	  }
	  else if(history.state != null){
		  if(history.state.pathName != null){
			  route = history.state.pathName
		  }
		  else if(history.state.prevUrl != null){
			  route = history.state.prevUrl
		  }
	  }
	  prevUrl = route

  	  $("#page-content").load(route)
	  this.renderModule(route)
  },
  
  renderModule(route){
	  switch(route){
		  case '/dashboard/dashboard':
			  setTimeout(function() {
				  delete require.cache[require.resolve('./dashboard/DashController.js')]
				  import(/* webpackChunkName: "DashBoard" */ './dashboard/DashController.js')
				}, 300)
			  break;
		  case '/ship/identification':
			  break;
	   }
  },
  
  refreshPage(){
	  window.history.replaceState({prevUrl}, '', "#" + prevUrl)
  }
}