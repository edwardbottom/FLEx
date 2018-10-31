<template>
	<div>
            <b-card title="Previous Exercises"
                    tag="article"
                    style="max-width: 100%;"
                    class="mb-2">
              <p class="card-text">
                
                <b-container class="bv-example-row">
                  <div v-for="info in this.pastExercises" :key="info.date">
                    
                  <b-row>
                      <b-col>
                        <b>{{info.date.substring(0,info.date.indexOf("T"))}}</b><br>
                        
                        <b>Rating:</b> {{info.value}}<br>
                        
                        <b>Comments:</b> {{info.reportText}}<br>

                        <b>Completed Exercises:</b><br>
                        {{Math.round(info.completedExercises.length/info.exerciseOptions.length * 100 * 100)/100}}%<br>
                        <b-button href="#" variant="primary">Open Full Report</b-button>
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

export default {
  name: 'PastExercises',
  props: {
    pastExercises: Array
  },

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