<template>
   <!-- TODO THING -->
   <div> 
    <b-card title="Assigned Exercises"
                    tag="article"
                    style="max-width: 100%;"
                    class="mb-2">
              <p class="card-text">
                
                <b-container class="bv-example-row">
          <center>
            <b-form-checkbox-group buttons class="d-block" stacked v-model="selectedOption" v-on:input="exerciseUpdate()">
                
               <div v-for="info in exerciseOptions" :key="info.exercise">
                <b-form-checkbox :value="info">
                  <b-row class="justify-content-left">
                    <b-col><p>{{info.exercise}}</p></b-col>
                    <b-col><p>{{info.repetitions}}</p></b-col><b-col><p>{{info.sets}}</p></b-col>    
                  </b-row>
                </b-form-checkbox>
              </div>     
            
            </b-form-checkbox-group>                
          </center>
        </b-container>
      </p>
        </b-card>
    </div>
</template>



<script>

export default {
  name: 'UserExercises',
  props: {
    //exerciseInfo: String,
    exerciseOptions: Array
  },
  methods:{
    exerciseUpdate(){
      this.$emit("clicked", this.selectedOption)
      console.log(this.selectedOption)
    }
  },
  data () {
    return {
      selectedOption: [], // Must be an array reference!

    }
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
