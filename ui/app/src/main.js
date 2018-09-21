import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  created: function(){
  	const axios = require('axios');
	   //Make a request for a user with a given ID
	   axios.get('http://localhost:3000/')
  	.then(function (response) {
    	// handle success
    	console.log(response);
  	})
  	.catch(function (error) {
    	// handle error
    	console.log(error);
  	})
  },
  render: h => h(App)
}).$mount('#app')
