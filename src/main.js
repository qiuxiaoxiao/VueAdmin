// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App'
import routes from './routes'
import 'font-awesome/css/font-awesome.min.css'
// Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
