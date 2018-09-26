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

// var pUpdates = [
// 	{
//     	patient: "Steve",
//     	update: 'Broke his arm in 12 places',
//   	},
//   	{
//     	patient: "Steve",
//     	update: 'Broke his arm in 12 places',
//   	},
//   	{
//     	patient: "Steve",
//     	update: 'Broke his arm in 12 places',
//   	},
// ]

new Vue({
  router,
  el: '#app',
  data: {
    	title: "Sample Vue app",
    	user: ""
  	},
  render: h => h(App)
})
