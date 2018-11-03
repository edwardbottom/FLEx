<template>
  <div>
    <PageHeader></PageHeader>
    <div>
      <center>
        <b-form-group label="Current Exercises" >
<!--           <b-form-checkbox-group buttons class="d-block" v-model="selected_exercises" stacked :options="exercises"> -->
        <b-container class="bv-example-row" style="position:relative; width:500px;" >
        <b-row>
          <b-col><p><strong>Exercise</strong></p></b-col>
          <b-col><p><strong>Repititions</strong></p></b-col>
          <b-col><p><strong>Sets</strong></p></b-col>
        </b-row>
        <b-form-checkbox-group stacked v-model="selected_exercises">
          
         <div v-for="info in this.exercises" :key="info.name">
          <b-form-checkbox :value="info">
            <b-row class="justify-content-left">
              <b-col><p>{{info.name}}</p></b-col>
              <b-col><b-form-input></b-form-input></b-col>
              <b-col><b-form-input></b-form-input></b-col>              
            </b-row>
          </b-form-checkbox>
        </div>     
      
        </b-form-checkbox-group>    
        </b-container>
        <div>Selected: <strong>{{ selected_exercises }}</strong></div>   
          <br>
          <b-button size="lg" variant="success" v-on:click="submitExercisePlan">Submit</b-button>
        </b-form-group>
      </center>
    </div>
  </div>
</template>

<script>
 import PageHeader from "./PageHeader.vue" 
 import router from '../router';
 import ExerciseSet from "./ExerciseSet.vue"
export default {
  name: 'UserHome',
  components: {
    PageHeader,
    ExerciseSet
  },
  methods:{
    submitExercisePlan(info){
    this.axios.post('http://localhost:3000/submitExercisePlan', {
                user:this.$session.get("selectedProfile"),
                exercisePlan: this.selected_exercises,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          router.push({path:"/doctor"});
          console.log("submitted")


  }
  },
  data () {
    return {
      exercises: Array,
      selected_exercises: []
    }
  },
  created() {
    var self = this;
    this.axios.get('http://localhost:3000/getAllExercises')
    // .then(function (response) {
    //   var responseData = response.data
    //   console.log(responseData)
    //   for (var i = 0; i < responseData.length; ++i){
    //     console.log(responseData[i])
    //     self.exercises.push(responseData[i].name)
    //   }
    //   console.log(exercises)
    //   })
    .then(function (response) {
      console.log(response.data)
      self.exercises = response.data;
      })    
    .catch(function (error) {
      console.log(error);
      });

  },
  
}
</script>
<style>

</style>

