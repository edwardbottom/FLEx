<template>
	<div>
            <b-card title="Previous Exercises"
                    tag="article"
                    style="max-width: 100%;"
                    class="mb-2">
              <p class="card-text">
                
                <b-container class="bv-example-row">
                  <b-row>
                      <b-col>
                        <b>2/3/2017</b><br>
                        
                        <b>Rating:</b> 7.7<br>
                        
                        <b>Completion:</b> 100%<br>

                        <b>Description:</b><br>
                        Very very hard but it went well overall. Pretty tight and couldn't complete xyz exercise.<br>
                        <b-button href="#" variant="primary">Open Full Report</b-button>
                      </b-col>
                  </b-row>
                  <hr />
                  <b-row>
                      <b-col>
                        <b>2/3/2017</b><br>
                        
                        <b>Rating:</b> 7.7<br>
                        
                        <b>Completion:</b> 100%<br>

                        <b>Description:</b><br>
                        Very very hard but it went well overall. Pretty tight and couldn't complete xyz exercise.<br>
                        <b-button href="#" variant="primary">Open Full Report</b-button>
                      </b-col>
                  </b-row>
                  <hr />
                  <b-row>
                      <b-col>
                        <b>2/3/2017</b><br>
                        
                        <b>Rating:</b> 7.7<br>
                        
                        <b>Completion:</b> 100%<br>

                        <b>Description:</b><br>
                        Very very hard but it went well overall. Pretty tight and couldn't complete xyz exercise.<br>
                        <b-button href="#" variant="primary">Open Full Report</b-button>
                      </b-col>
                  </b-row>
              </b-container>
              </p>
              
            </b-card>
          </div>

</template>

<script>

export default {
  name: 'PastExercises',
  props: {
    msg: String
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