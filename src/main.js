import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './vuex/store.js'
import './assets/styles/styles.scss'
Vue.config.productionTip = false

import speaking from'./components/speaking.vue'
import mainScreen from './components/mainScreen.vue'
import schedules from './components/schedules.vue'
import sponsor from './components/sponsor.vue'
import subscribe from './components/subscribe.vue'
import pages from './components/pages.vue'
import cost from './components/cost.vue'
Vue.use(VueRouter)

var router= new VueRouter({
	routes:[
		{ path: '/speaking', component: speaking},
		{ path: '/', component: mainScreen},
		{ path: '/schedules', component: schedules},
		{ path: '/sponsor', component: sponsor},
		{ path: '/subscribe', component: subscribe},
		{ path: '/pages', component: pages, props:true},
		{ path: '/cost', component:cost}
	]
})

new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
