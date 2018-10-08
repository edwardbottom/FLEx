<template>
   <!-- TODO THING -->
   <div>
          <center>
                <b-form-group label="Current Exercises" >
                  <b-form-checkbox-group buttons class="d-block" v-model="selectedOption" stacked :options="exerciseOptions" >
                  </b-form-checkbox-group>
                </b-form-group>
              </center>
    </div>
</template>



<script>

export default {
  name: 'UserExercises',
  props: {
    //exerciseInfo: String,
    exerciseOptions: Array
  },
  data () {
    return {
      selectedOption: [], // Must be an array reference!

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
