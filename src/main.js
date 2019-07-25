// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store/posts'
import VueI18n from 'vue-i18n'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import en from './language/en.json'
import nl from './language/nl.json'
Vue.config.productionTip = false


/* eslint-disable no-new */
Vue.use(BootstrapVue)
Vue.use(VueI18n)

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const i18n = new VueI18n({
  locale: localStorage.getItem("language") ? localStorage.getItem("language") : 'en',
  fallbackLocale: localStorage.getItem("language") ? localStorage.getItem("language") : 'en',
  messages: {
    en: en,
    nl: nl
  }
});

new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>',
  store
})
