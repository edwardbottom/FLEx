<template>
  <div>
    <PageHeader ok="true"></PageHeader>
    <div>
      <center>
        <!--formatting and labels -->
        <b-form-group>
          <br>
          <h4><strong>Current Exercise Plan</strong></h4>
        <b-container class="bv-example-row" style="position:relative; width:600px;" >
        <b-row>
          <b-col></b-col>
          <b-col><p><strong>Exercise</strong></p></b-col>
          <b-col><p><strong>Repetitions</strong></p></b-col>
          <b-col><p><strong>Sets</strong></p></b-col>
        </b-row>
        <b-form-checkbox-group stacked v-model="selected_exercises">
        <!--input sets and reps -->
         <div v-for="info in this.current_exercises" :key="info._id">
          <b-form-button :value="info">
            <b-row class="justify-content-left">
              <b-col><button v-on:click="deleteExercise(info)">Delete</button></b-col>
              <b-col><p>{{info.exercise}}</p></b-col>
              <b-col><b-form-input v-model="info.repetitions"></b-form-input></b-col>
              <b-col><b-form-input v-model="info.sets"></b-form-input></b-col>              
            </b-row>
          </b-form-button>
        </div>     
        <br>
        </b-form-checkbox-group>    
        </b-container>
        <!--select completed exercise option -->
        <h4><strong>Exercise Database</strong></h4>
        <b-container class="bv-example-row" style="position:relative; width:500px;" >
        <b-row>
          <b-col><p><strong>Exercise</strong></p></b-col>
          <b-col><p><strong>Repetitions</strong></p></b-col>
          <b-col><p><strong>Sets</strong></p></b-col>
        </b-row>
        <b-form-checkbox-group stacked v-model="selected_exercises">
          <!--iterate through and display all exercises -->
         <div v-for="info in this.exercises" :key="info.exercise">
          <b-form-checkbox :value="info">
            <b-row class="justify-content-left">
              <b-col><p>{{info.exercise}}</p></b-col>
              <b-col><b-form-input v-model="info.repetitions"></b-form-input></b-col>
              <b-col><b-form-input v-model="info.sets"></b-form-input></b-col>              
            </b-row>
          </b-form-checkbox>
        </div>     
        </b-form-checkbox-group>    
        </b-container>
          <br>
          <!--submit the exercise plan -->
          <b-button size="lg" variant="success" v-on:click="submitExercisePlan">Submit</b-button>
        </b-form-group>
      </center>
    </div>
  </div>
</template>

<script>
 import PageHeader from "./PageHeader.vue" 
 import router from '../router';
export default {
  name: 'UserHome',
  components: {
    PageHeader
  },
  methods:{
    //deletes an exercise from the database
    deleteExercise(info){
      var deletedSet = this.current_exercises.filter((e)=>e._id==info._id)
      this.current_exercises = this.current_exercises.filter((e)=>e._id!=info._id)
        //make request
        this.axios.post('http://localhost:3000/deleteExerciseSet', {
              id: deletedSet._id,
              exercise: deletedSet.exercise,
              repetitions: deletedSet.repetitions,
              sets: deletedSet.sets
        })
        //success
        .then(function (response) {
          //console.log(response);
        })
        //failure
        .catch(function (error) {
          //console.log(error);
        });      
    },
    //submit the exercise plan
    submitExercisePlan(info){
      //set values
      Object.keys(this.selected_exercises).forEach(key=>{
        let val = this.selected_exercises[key]
        val._id = val._id + this.current_exercises.length
        this.current_exercises.push(val)
        //make a post request
        this.axios.post('http://localhost:3000/createNewExerciseSet', {
              id: val._id,
              exercise: val.exercise,
              repetitions: val.repetitions,
              sets: val.sets
        })
        //success 
        .then(function (response) {
          //console.log(response);
        })
        //failure
        .catch(function (error) {
          //console.log(error);
        });
      })

      //if plan is blank
      if(this.plan === undefined || this.plan.length == 0)
      {
        this.axios.post('http://localhost:3000/submitExercisePlan', {
              user:this.$session.get("selectedProfile"),
              exercisePlan: this.selected_exercises
            })
            .then(function (response) {
              //console.log(response);
            })
            .catch(function (error) {
              //console.log(error);
            });
            //console.log("submitted")
        
      } 
      //else submit plan
      else
      {
        this.axios.post('http://localhost:3000/updateExercisePlan', {
              user:this.$session.get("selectedProfile"),
              exercisePlan: this.current_exercises,
            })
            .then(function (response) {
              //console.log(response);
            })
            .catch(function (error) {
              //console.log(error);
            });
            //console.log("submitted")   
      }
      //reload the page to show updates
      location.reload();
    },
  
  },
  data () {
    return {
      exercises: [],
      selected_exercises: [],
      current_exercises: [],
      plan: [],
    }
  },
  created() {
    //request all exercises from the database
    var self = this;
    this.axios.get('http://localhost:3000/getAllExercises')
    .then(function (response) {   
      var responseData = response.data;
      //store all exercises
      for (var i=0; i < responseData.length; i++)
      {
        self.exercises.push({_id: responseData[i]._id, exercise: responseData[i].name, repetitions: "0", sets: "0"})
      }
      function compare(a,b) {
        if (a.exercise < b.exercise)
          return -1;
        if (a.exercise > b.exercise)
          return 1;
        return 0;
      }  
      //sort the exercises
      self.exercises.sort(compare);
    }) 
    //cat errors   
    .catch(function (error) {
      //console.log(error);
    });
    //get the selected plan
    this.axios.post('http://localhost:3000/getPlan', {
      user: self.$session.get("selectedProfile")
    })
    .then(function (response) {
      //set the plan and current exercises
      self.plan = response.data;
      self.current_exercises = self.plan[0].exercisePlan;
      })
    .catch(function (error) {
      //console.log(error);
      });
  },
  
}
</script>
<style>

</style>

