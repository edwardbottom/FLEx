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
 
            <b-form-group>
            <b-form-checkbox-group buttons class="d-block" stacked v-model="selectedOption" v-on:input="exerciseUpdate()">
                
               <div v-for="info in exerciseOptions" :key="info.exercise">
                <b-form-checkbox :value="info">
                  <b-row class="justify-content-left" v-bind:id="info.exercise">
                    <!-- v-b-popover.html="exerciseDescriptions[info.exercise]" title=Description -->
                    <b-col><p>{{info.exercise}}</p></b-col>
                    <b-col><p>R: {{info.repetitions}}</p></b-col><b-col><p>S: {{info.sets}}</p></b-col>    
                  </b-row>
                  <b-popover v-bind:target="info.exercise" triggers="hover focus" v-on:show="refreshPop()">
                     <template slot="title">Description</template>
                      <b-img width="250" height="250" v-bind:src= "exerciseLinks[info.exercise]"/>
                     {{exerciseDescriptions[info.exercise]}}
                  </b-popover>
                </b-form-checkbox>
 
              </div>     
            
            </b-form-checkbox-group> 
            </b-form-group>               
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
    exerciseOptions: Array,
    exerciseDescriptions: {},
    exerciseLinks: {}
  },
  methods:{
    exerciseUpdate(){
      this.$emit("clicked", this.selectedOption)
      console.log(this.selectedOption)
    },
    refreshPop(){
      this.$forceUpdate()
    }
  },
  data () {
    return {
      selectedOption: [], // Must be an array reference!

    }
  },
  mounted(){
    vm.$forceUpdate()
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
