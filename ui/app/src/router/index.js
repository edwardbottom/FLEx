import Vue from 'vue'
import Router from 'vue-router'
import UserHome from '../components/UserHome'
import DoctorScreen from '../components/DoctorScreen'
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'
import PatientProfile from '../components/PatientProfile'
import CreateExercise from '../components/CreateExercise'
import CreatePlanScreen from '../components/CreatePlanScreen'
import SendMessage from '../components/SendMessage'
import CreateSummary from '../components/CreateSummary'
import EditPatientProfile from '../components/EditPatientProfile'
import PastExerciseDetail from '../components/PastExerciseDetail'
import UpdateProfile from '../components/UpdateProfile'

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
    },
    {
      path: '/PatientProfile',
      name: 'PatientProfile',
      component: PatientProfile
    },
    {
      path: '/CreateExercise',
      name: 'CreateExercise',
      component: CreateExercise
    },
    {
      path: '/CreatePlan',
      name: 'CreatePlan',
      component: CreatePlanScreen
    },
    {
      path: '/SendMessage',
      name: 'SendMessage',
      component: SendMessage
    },
    {
      path: '/CreateSummary',
      name: CreateSummary,
      component: CreateSummary
    },
    {
      path: "/EditPatientProfile",
      name: EditPatientProfile,
      component: EditPatientProfile
    },
    {
      path: "/PastExerciseDetail",
      name: PastExerciseDetail,
      component: PastExerciseDetail
    },
    {
      path: "/UpdateProfile",
      name: UpdateProfile,
      component: UpdateProfile
    }
  ]
})