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
	initialRoutes(pathName, param) {
		//history 초기화
		this.renderHTML(pathName, param)
		window.onpopstate = () => this.renderHTML(location.hash.replace('#',''))
	},

	// set browser history
	historyRouterPush(pathName, param) {
		if(prevUrl != pathName){
			window.history.pushState({pathName}, '', '#' + pathName)
			this.renderHTML(pathName, param)
		}
	},

	// render
	renderHTML(route, param) {
		if(route == '')
			route = '/dashboard/dashboard'
			
		if(history.state != null){
			if(history.state.pathName != null){
				route = history.state.pathName
			}
			else if(history.state.prevUrl != null){
				route = history.state.prevUrl
			}
		}
		
		$("#page-content").load(route, param, () => this.renderModule(route))

		prevUrl = route
	},
  
	renderModule(route){
		var index = route.indexOf("?")
		if(index > 0){
			route = route.substring(0, index)
		}
	
		switch(route){
			case '/dashboard/dashboard':
				if ($('#dashboard-content').length) {
					delete require.cache[require.resolve('./dashboard/DashController.js')]
				  	import(/* webpackChunkName: "DashBoard" */ './dashboard/DashController.js')
				}
				break
			case '/ship/identification':
				if ($('#identification-content').length) {
					delete require.cache[require.resolve('./ship/IdentificationController.js')]
			  	    import(/* webpackChunkName: "Identification" */ './ship/IdentificationController.js')
			    }
				break
			case '/inspection/inspection':
				if ($('#inspection-content').length) {
					delete require.cache[require.resolve('./inspection/InspectView.js')]
			  	    import(/* webpackChunkName: "Inspection" */ './inspection/InspectView.js')
			    }
				break
			case '/item/item_list':
				if ($('#item-content').length) {
					delete require.cache[require.resolve('./item/itemController.js')]
			  	    import(/* webpackChunkName: "Item" */ './item/itemController.js')
			    }
				break
			case '/item/item_modify':
				if ($('#item-content').length) {
					delete require.cache[require.resolve('./item/item-modify.js')]
			  	    import(/* webpackChunkName: "ItemModify" */ './item/item-modify.js')
			    }
				break
			case '/item/item_register':
				if ($('#item-content').length) {
					delete require.cache[require.resolve('./item/item-regist.js')]
			  	    import(/* webpackChunkName: "ItemRegist" */ './item/item-regist.js')
			    }
				break
			case '/warehouse/warehouse':
				if ($('#warehouse-content').length) {
					delete require.cache[require.resolve('./warehouse/WarehouseController.js')]
			  	    import(/* webpackChunkName: "WareHouse" */ './warehouse/WarehouseController.js')
			    }
				break
		}
	},
  
	refreshPage(){
		window.history.replaceState({prevUrl}, '', "#" + prevUrl)
	}
}