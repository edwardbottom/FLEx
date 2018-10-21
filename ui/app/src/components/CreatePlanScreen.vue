<template>
  <div>
    <PageHeader></PageHeader>
    <p> This will show all the exercises </p>
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
  data () {
    return {
      exercises: Array
    }
  },
  created() {
    var self = this;
    this.axios.get('http://localhost:3000/getAllExercises')
    .then(function (response) {
      console.log(response.data)
      self.exercises = response.data;
      })
    .catch(function (error) {
      console.log(error);
      });

  }
}
</script>
<style>

</style>

