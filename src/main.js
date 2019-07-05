// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
//import axios from 'axios'
//import VueAxios from 'vue-axios'

/* eslint-disable no-new */
Vue.use(BootstrapVue)
//Vue.use(axios)

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
//import axios from 'axios'
Vue.use(axios)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
