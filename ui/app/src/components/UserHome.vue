<template>
  <div class="userHome">
    <PageHeader></PageHeader>
    <br>

    <b-container class="statusReports" >
    <b-row>
      <b-col>  

        <CurrentDoctor v-bind:doctorInfo="this.doctorInfo"></CurrentDoctor>

      </b-col>
      <b-col>    
        <UserExercises></UserExercises>
      </b-col>
        <b-col>
          <b-card-body id="nav-scroller" ref="content" style="position:relative; height:500px; overflow-y:scroll;">
          <PastExercises></PastExercises>
          </b-card-body>
        </b-col>
    </b-row>
</b-container>
    <center>
      <UserExerciseReport></UserExerciseReport>
    </center>
  </div>
</template>

<script>
  import PageHeader from "./PageHeader.vue";
  import CurrentDoctor from './CurrentDoctor.vue';
  import UserExercises from './UserExercises.vue';
  import PastExercises from './PastExercises.vue';
  import UserExerciseReport from './UserExerciseReport.vue'
export default {
  name: 'UserHome',
  props: {
    msg: String
  },
  components: {
    PageHeader,
    CurrentDoctor,
    UserExercises,
    PastExercises,
    UserExerciseReport,
  },
  data(){
    return{
      doctorInfo: 
        [
        {
          firstVisit:'2/22/1997',
          lastVisit:'2/22/2018',
          nextVisit: '9/30/2018',
          daysSinceVisit: '217',
          visit: '13',
          provider: 'Stretch Physical Therapy',
          phone: '(555)555-5555'
        }
        ]
    }
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
