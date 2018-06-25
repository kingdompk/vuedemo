import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import route from './router/index'

Vue.use(VueRouter)

const router = new VueRouter(route);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
