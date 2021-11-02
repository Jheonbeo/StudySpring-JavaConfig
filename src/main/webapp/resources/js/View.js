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
	  //history 초기화
	  this.renderHTML(pathName)
	  window.onpopstate = () => this.renderHTML(location.hash.replace('#',''))
  },

  // set browser history
  historyRouterPush(pathName) {
	  if(prevUrl != pathName){
		  window.history.pushState({pathName}, '', '#' + pathName)
		  this.renderHTML(pathName)
	  }
  },

  // render
  renderHTML(route) {
	  if(route = '/includes/index')
		  route = '/dashboard/dashboard'
	  if(history.state != null){
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
	//url문자열을 못찾으면 무한반복함. settimeout 이용해야하나..?
	var checkExist = setInterval(() => {
		switch(route){
			case '/dashboard/dashboard':
				if ($('#dashboard-content').length) {
					delete require.cache[require.resolve('./dashboard/DashController.js')]
				  	import(/* webpackChunkName: "DashBoard" */ './dashboard/DashController.js')
				    clearInterval(checkExist)
				}
				break
			case '/ship/identification':
				if ($('#identification-content').length) {
					delete require.cache[require.resolve('./ship/IdentificationController.js')]
			  	    import(/* webpackChunkName: "Identification" */ './ship/IdentificationController.js')
				    clearInterval(checkExist)
			    }
				break
			case '/item/item_list':
				if ($('#item-content').length) {
					delete require.cache[require.resolve('./item/ItemController.js')]
			  	    import(/* webpackChunkName: "Item" */ './item/ItemController.js')
				    clearInterval(checkExist)
			    }
				break
			case '/item/item_modify':
				if ($('#item-content').length) {
					delete require.cache[require.resolve('./item/item-modify.js')]
			  	    import(/* webpackChunkName: "ItemModify" */ './item/item-modify.js')
				    clearInterval(checkExist)
			    }
				break
			}
		}, 500);
  },
  
  refreshPage(){
	  window.history.replaceState({prevUrl}, '', "#" + prevUrl)
  }
}