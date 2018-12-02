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
        <UserExercises v-bind:exerciseOptions="this.exerciseOptions" v-bind:exerciseDescriptions="this.exerciseDescriptions" v-bind:exerciseLinks="this.exerciseLinks" @clicked="exerciseUpdated"></UserExercises>       
      </b-col>
        <b-col>
          <b-card-body id="nav-scroller" ref="content" style="position:relative; height:500px; overflow-y:scroll;">
          <PastExercises v-bind:pastExercises="this.pastExercises" @closed="dateUpdated"></PastExercises>
          </b-card-body>
        </b-col>
    </b-row>
</b-container>
    <center>
      <UserExerciseReport @clicked="submitReport" @closed="dateUpdated"></UserExerciseReport>
        
    </center>
  </div>
</template>

<script>
  import PageHeader from "./PageHeader.vue";
  import CurrentDoctor from './CurrentDoctor.vue';
  import UserExercises from './UserExercises.vue';
  import PastExercises from './PastExercises.vue';
  import UserExerciseReport from './UserExerciseReport.vue';
  import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
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
    Datepicker,
  },
  methods:
      {
        submitReport(info){
              this.axios.post('http://localhost:3000/submitReport', {
                user:this.$session.get("username"),
                value: info.value2,
                reportText: info.reportText,
                completedExercises: this.selectedOption,
                exerciseOptions: this.exerciseOptions,
                date: this.date
          })
          .then(function (response) {
            if(response.data == "1"){//if successful in posting data
              if(alert("Submitted!")){}
              else {window.location.reload()}
            }
            else {alert("Submission already recieved for this date.")}
          })
          .catch(function (error) {
            console.log(error);
          });
          

        },
        exerciseUpdated(info){
          this.selectedOption = info;
        },
        dateUpdated(info){
          this.date = info;
        }
      },
  data(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); //January is 0!
    var yyyy = today.getFullYear();
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
        exerciseOptions: [],
        exerciseDescriptions: {},
        exerciseLinks: {},
      pastExercises:[],
      date: new Date(yyyy, mm,  dd), 
      


    }
  },
  beforeMount(){
      var self = this
      console.log(self.$session.get("username"))
      this.axios.post('http://localhost:3000/UserHome', {
        username: self.$session.get("username")
      })
      .then(function (response) {
        self.pastExercises = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });   

      this.axios.post('http://localhost:3000/exercisePlan', {
        username: self.$session.get("username")
      })
      .then(function (response) {
        // console.log(response)
        self.exerciseOptions = response.data.exercisePlan;

        for(var i=0; i < self.exerciseOptions.length; ++i){
          console.log("sending " + self.exerciseOptions[i].exercise)
          self.axios.post('http://localhost:3000/exerciseDescriptions', {
          exercises: self.exerciseOptions[i]
          })
          .then(function (response2) {//get the descriptions and links
            self.exerciseDescriptions[response2.data.name] = (response2.data.description);
            self.exerciseLinks[response2.data.name] = (response2.data.link);
          })
          .catch(function (error2) {
            console.log(error2);
          });
        }        
      })
      .catch(function (error) {
        console.log(error);
      }); 


        
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
