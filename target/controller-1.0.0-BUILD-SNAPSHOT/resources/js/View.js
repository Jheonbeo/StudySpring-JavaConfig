const tag = '[View]'

const routes = {
    '/': '/dashboard/DashController.js'
}

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
  initialRoutes(el) {
	  this.renderHTML(el, routes['/'])

      window.onpopstate = () => this.renderHTML(el, "#" + window.location.origin + pathname)
  },

  // set browser history
  historyRouterPush(pathName, el) {
	    window.history.pushState({}, pathName, "#" + window.location.origin + pathName)
	    renderHTML(el, window.location.origin + pathName)
  },

  // render
  renderHTML(el, route) {
    fetch(route)
        .then(function(response) {
            return response.text()
        })
        .then(function(html) {
            el.innerHTML = html
        })
        .catch(function(err) {
            console.log('Failed to fetch page: ', err);
        });
  }
}