<template>
  <div>
    <PageHeader></PageHeader>
    <div>
      <center>
        <b-form-group label="Current Exercises" >
          <b-form-checkbox-group buttons class="d-block" v-model="selected_exercises" stacked :options="exercises">
          </b-form-checkbox-group>
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
      exercises: [],
      selected_exercises: []
    }
  },
  created() {
    var self = this;
    this.axios.get('http://localhost:3000/getAllExercises')
    .then(function (response) {
      var responseData = response.data
      console.log(responseData)
      for (var i = 0; i < responseData.length; ++i){
        console.log(responseData[i])
        self.exercises.push(responseData[i].name)
      }
      console.log(exercises)
      })
    .catch(function (error) {
      console.log(error);
      });

  },
  
}
</script>
<style>

</style>

