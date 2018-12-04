<template>
  <div>
    <!--page header and formatting -->
    <PageHeader ok="true"></PageHeader>
    <br/>
    <!--display user data -->
    <b-col class="v1"></b-col>
    <b-col>    
    <h2>{{this.userData.name}}
    </h2>
    <p> Height: {{this.userData.height}} </p>
    <p> Weight: {{this.userData.weight}} </p>
    <p> Injury: {{this.userData.injury}} </p>
    <p> Current Status: {{this.userData.currentStatus}} </p>
    <p> Average Status: {{this.userData.averageStatus}} </p>
    <p> Worst Status: {{this.userData.worstStatus}} </p>
    <p> Best Status: {{this.userData.bestStatus}} </p>
    <p> Last Active: {{this.userData.lastActive}} </p>
    <p> Contact: {{this.userData.contact}} </p>
    <p> Next Visit: {{this.userData.nextVisit}} </p>
    <p> Summary: {{this.userData.summary}} </p>
    <!--edit profile button -->
    <b-button size="small" variant="primary" v-on:click="edit()">
        Edit Profile
      </b-button>
    <b-card-body id="nav-scroller" ref="content" style="position:relative; height:500px; overflow-y:scroll;">
          <PastExercises v-bind:pastExercises="this.pastExercises"></PastExercises>
    </b-card-body>
    </b-col>
  </div>
</template>

<script>
 import PageHeader from "./PageHeader.vue" 
 import router from '../router';
 import PastExercises from './PastExercises.vue';

export default {
  name: 'UserHome',
  components: {
    PageHeader,
    PastExercises
  },
  data () {
    return {
      userData: Object,
      pastExercises:[]
    }
  },
  created() {
    var self = this;
    //get the profile data
    this.axios.post('http://localhost:3000/getProfile', {
      reqUser: this.$session.get("selectedProfile")
    })
    .then(function (response) {
      self.userData = response.data;
      })
    .catch(function (error) {
      //console.log(error);
      });

      this.axios.post('http://localhost:3000/UserHome', {
        username: self.$session.get("selectedProfile")
      })
      .then(function (response) {
        self.pastExercises = response.data;
        console.log("past")
        console.log(response.data)
      })
      .catch(function (error) {
        //console.log(error);
      });

  },
   methods:{
    //go to the create plan page
    createPlan()
    {
      router.push({path:"/CreatePlan"});
    },
    //go to the edit patient profile
    edit()
    {
      router.push({path:"/EditPatientProfile"});
    }
  }

}
</script>
<style>
.vl {
    margin-left: 10px;
}
</style>

