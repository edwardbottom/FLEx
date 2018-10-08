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
        <UserExercises v-bind:exerciseOptions="this.exerciseOptions" @clicked="exerciseUpdated"></UserExercises>
      </b-col>
        <b-col>
          <b-card-body id="nav-scroller" ref="content" style="position:relative; height:500px; overflow-y:scroll;">
          <PastExercises v-bind:pastExercises="this.pastExercises"></PastExercises>
          </b-card-body>
        </b-col>
    </b-row>
</b-container>
    <center>
      <UserExerciseReport @clicked="submitReport"></UserExerciseReport>
        
    </center>
  </div>
</template>

<script>
  import PageHeader from "./PageHeader.vue";
  import CurrentDoctor from './CurrentDoctor.vue';
  import UserExercises from './UserExercises.vue';
  import PastExercises from './PastExercises.vue';
  import UserExerciseReport from './UserExerciseReport.vue';
  import router from '../router';
export default {
  name: 'UserHome',
  props: {
    //selectedOption: Array,
    //value2: String,
    // reportText: String
  },
  components: {
    PageHeader,
    CurrentDoctor,
    UserExercises,
    PastExercises,
    UserExerciseReport,
  },
  methods:
      {
        submitReport(info){
              this.axios.post('http://localhost:3000/submitReport', {
                user:"user",
                value: info.value2,
                reportText: info.reportText,
                completedExercises: this.selectedOption,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          router.push({path:"/UserHome"});
        },
        exerciseUpdated(info){
          this.selectedOption = info;
        }
      },
  data(){
    return{
      selectedOption:[],
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
        ],
        exerciseOptions: [
        {text: 'Jumping Jacks x15', value: 'Jumping Jacks x15'},
        {text: 'Squats x20', value: 'Squats x20'},
        {text: 'Toe Touches x10', value: 'Toe Touches x10'},
        {text: 'Plank 1 Min', value: 'Plank 1 Min'}
      ],
      pastExercises:[
        {
          date: '2/3/2017',
          rating: '7.7',
          completion: '100%',
          description: 'Very very hard but it went well overall. Pretty tight and couldn\'t complete xyz exercise.',
        },
        {
          date: '2/4/2017',
          rating: '7.7',
          completion: '100%',
          description: 'Very very hard but it went well overall. Pretty tight and couldn\'t complete xyz exercise.',
        },
        {
          date: '2/5/2017',
          rating: '7.7',
          completion: '100%',
          description: 'Very very hard but it went well overall. Pretty tight and couldn\'t complete xyz exercise.',
        },
        {
          date: '2/6/2017',
          rating: '7.7',
          completion: '100%',
          description: 'Very very hard but it went well overall. Pretty tight and couldn\'t complete xyz exercise.',
        }

      ],
      


    }
  },
  mounted(){
        console.log("hi")
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
