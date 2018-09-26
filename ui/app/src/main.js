import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import DatePicker from 'vuejs-datepicker'


Vue.use(BootstrapVue);
Vue.use(DatePicker);
// Enable devTools
if (window.location.hostname.indexOf('local') > -1) {
  Vue.config.devtools = true
}

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
