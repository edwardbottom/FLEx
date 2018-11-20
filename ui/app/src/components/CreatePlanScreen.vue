<template>
  <div>
    <PageHeader ok="true"></PageHeader>
    <div>
      <center>
        <b-form-group label="Current Exercises" >
        <b-container class="bv-example-row" style="position:relative; width:500px;" >
        <b-row>
          <b-col><p><strong>Exercise</strong></p></b-col>
          <b-col><p><strong>Repetitions</strong></p></b-col>
          <b-col><p><strong>Sets</strong></p></b-col>
        </b-row>
        <b-form-checkbox-group stacked v-model="selected_exercises">
          
         <div v-for="info in this.current_exercises" :key="info.exercise">
          <b-form-button :value="info">
            <b-row class="justify-content-left">
              <b-col><button>Delete</button></b-col>
              <b-col><p>{{info.exercise}}</p></b-col>
              <b-col><b-form-input v-model="info.repetitions"></b-form-input></b-col>
              <b-col><b-form-input v-model="info.sets"></b-form-input></b-col>              
            </b-row>
          </b-form-button>
        </div>     
      
        </b-form-checkbox-group>    
        </b-container>
<!--           <b-form-checkbox-group buttons class="d-block" v-model="selected_exercises" stacked :options="exercises"> -->
        <b-container class="bv-example-row" style="position:relative; width:500px;" >
        <b-row>
          <b-col><p><strong>Exercise</strong></p></b-col>
          <b-col><p><strong>Repetitions</strong></p></b-col>
          <b-col><p><strong>Sets</strong></p></b-col>
        </b-row>
        <b-form-checkbox-group stacked v-model="selected_exercises">
          
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
    submitExercisePlan(info){
      Object.keys(this.selected_exercises).forEach(key=>{
        let val = this.selected_exercises[key]
        this.axios.post('http://localhost:3000/createNewExerciseSet', {
              exercise: val.exercise,
              repetitions: val.repetitions,
              sets: val.sets
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        router.push({path:"/doctor"});
        console.log("submitted")
      })

      if(this.plan === undefined || this.plan.length == 0)
      {
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
        
      } else
      {
        this.axios.post('http://localhost:3000/updateExercisePlan', {
              user:this.$session.get("selectedProfile"),
              exercisePlan: this.selected_exercises.concat(this.current_exercises),
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
    }
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
    var self = this;
    this.axios.get('http://localhost:3000/getAllExercises')
    .then(function (response) {
      console.log(response.data)
      var responseData = response.data;
      for (var i=0; i < responseData.length; i++)
      {
        self.exercises.push({exercise: responseData[i].name, repetitions: "0", sets: "0"})
        console.log(self.exercises[i].repetitions)
      }
    })    
    .catch(function (error) {
      console.log(error);
    });

    this.axios.post('http://localhost:3000/getPlan', {
      user: self.$session.get("selectedProfile")
    })
    .then(function (response) {
      console.log(response.data)
      self.plan = response.data;
      self.current_exercises = self.plan[0].exercisePlan;
      console.log(self.plan[0].exercisePlan[0].repetitions + " is the summary")
      })
    .catch(function (error) {
      console.log(error);
      });
  },
  
}
</script>
<style>

</style>

