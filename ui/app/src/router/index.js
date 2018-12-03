//dependcies and pages for the router
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

//create the router object
Vue.use(Router)
export default new Router({
  //list of valid routers and components
  routes: [
  //patient home page
    {
      path: '/UserHome',
      name:'UserHome',
      component: UserHome
    },
    //doctor home page
    {
      path: '/doctor',
      name: 'Doctor',
      component: DoctorScreen,
      props:{
        word:"text"
      }
    },
    //login route
    {
      path: '/',
      name: 'Login',
      alias: '/login',
      component: Login
    },
    //register screen
    {
      path: '/CreateAccount',
      name: 'CreateAccount',
      component: CreateAccount
    },
    //patient profile page
    {
      path: '/PatientProfile',
      name: 'PatientProfile',
      component: PatientProfile
    },
    //create an exercise form
    {
      path: '/CreateExercise',
      name: 'CreateExercise',
      component: CreateExercise
    },
    //create a plan form
    {
      path: '/CreatePlan',
      name: 'CreatePlan',
      component: CreatePlanScreen
    },
    //send a message form
    {
      path: '/SendMessage',
      name: 'SendMessage',
      component: SendMessage
    },
    //create a patient summary
    {
      path: '/CreateSummary',
      name: CreateSummary,
      component: CreateSummary
    },
    //form to edit a patient profile
    {
      path: "/EditPatientProfile",
      name: EditPatientProfile,
      component: EditPatientProfile
    },
    //form to edit existing exercises
    {
      path: "/PastExerciseDetail",
      name: PastExerciseDetail,
      component: PastExerciseDetail
    },
    //form to update a profile
    {
      path: "/UpdateProfile",
      name: UpdateProfile,
      component: UpdateProfile
    }
  ]
})