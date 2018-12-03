<template>
	<div>
    <!--format a car -->
    <b-card title="Previous Exercises"
            tag="article"
            style="max-width: 100%;"
            class="mb-2">
      <p class="card-text">
        <!--iterate through and display previous exercises -->
        <b-container class="bv-example-row">
          <div v-for="info in this.pastExercises" :key="info.date">
          <b-row>
            <!--display date -->
              <b-col>
                <b>{{info.date.substring(0,info.date.indexOf("T"))}}</b><br>
                
                <b>Rating:</b> {{info.value}}<br>

                <b>Completed Exercises:</b><br>
                {{Math.round(info.completedExercises.length/info.exerciseOptions.length * 100)}}%<br>
                <b-button variant="primary" v-on:click="fullReportOpen(info)">Open Full Report</b-button>
              </b-col>
          </b-row>
          <hr />
        </div>
      </b-container>
      </p>
      
    </b-card>
  </div>

</template>

<script>
  import router from '../router';

export default {
  name: 'PastExercises',
  props: {
    pastExercises: Array
  },
  methods:{
    //gives details about exercises
    fullReportOpen(info){
      this.$session.set("exerciseDetail", info)
      router.push({path:'/PastExerciseDetail'});    }
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