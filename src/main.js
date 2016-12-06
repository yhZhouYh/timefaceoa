import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
//import { sync } from 'vuex-router-sync'
import App from './App'

// sync the router with the vuex store.
// this registers `store.state.route`
//sync(store, router)
Vue.use(VueResource)

const app = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})