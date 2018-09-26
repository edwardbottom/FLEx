import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import UserHome from '../components/UserHome'
import PatientSummary from '../components/PatientSummary'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/fuck',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/UserHome',
      name:'UserHome',
      component: UserHome
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: PatientSummary
    },
  ]
})