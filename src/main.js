// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import typical from "vue-typical"
import Header from '@/components/header'

Vue.config.productionTip = false

Vue.component('my-component', Header);
Vue.component('typical', typical);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

