import Vue from 'vue'
import Router from 'vue-router'
import UserHome from '../components/UserHome'
import DoctorScreen from '../components/DoctorScreen'
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/UserHome',
      name:'UserHome',
      component: UserHome
    },
    {
      path: '/doctor',
      name: 'Doctor',
      component: DoctorScreen,
      props:{
        word:"text"
      }
    },
    {
      path: '/',
      name: 'Login',
      alias: '/login',
      component: Login
    },
    {
      path: '/CreateAccount',
      name: 'CreateAccount',
      component: CreateAccount
    }

  ]
})