import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import UserHome from '../components/UserHome'
import PatientSummary from '../components/PatientSummary'
import UpdateFeed from '../components/UpdateFeed'
import PatientMessages from '../components/PatientMessages'
import DoctorScreen from '../components/DoctorScreen'
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
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
      component: DoctorScreen,
      props:{
        word:"text"
      }
    },
    {
      path: '/Login',
      name: '/Login',
      component: Login
    },
    {
      path: '/CreateAccount',
      name: '/CreateAccount',
      component: CreateAccount
    }

  ]
})