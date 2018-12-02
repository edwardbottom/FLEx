<template>
	<b-card>
        <h2>Today's Report</h2>              
    <div>
      <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="1">
                <p>Date:</p>            
              </b-col>
              <b-col cols="2">
      <datepicker placeholder="Select Date" v-model="date" @closed="dateChanged"></datepicker>
              </b-col>
            </b-row>  
        </div>       

      <VueSlideBar
        v-model="value2"
        :min="1"
        :max="10"
        :processStyle="slider.processStyle"
        :lineHeight="slider.lineHeight"
        :tooltipStyles="{ backgroundColor: 'blue', borderColor: 'blue' }">
      </VueSlideBar>
      <center><h2>Pain Rating: {{value2}}</h2></center>
    </div>

    <div>
    <b-form-textarea id="textarea1"
                     v-model="reportText"
                     placeholder="Enter something"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
    <pre class="mt-3">{{ reportText }}</pre>
    
  </div>
<b-button v-on:click="submitReport()">Submit Report</b-button>
</b-card>
</template>

<script>
import VueSlideBar from 'vue-slide-bar';
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";

export default {
  name: 'UserExerciseReport',
  props: {
    msg: String
  },
  components: {
    VueSlideBar,
    Datepicker
  },
  methods:{
    submitReport(){
      var info = {
        value2: this.value2,
        reportText: this.reportText,
      }
      this.$emit("clicked", info);
    },
    dateChanged(){
      this.$emit("closed", this.date)
    },
  },
  data () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); //January is 0!
    var yyyy = today.getFullYear();
    return {
      value2: 5,
      slider: {
        lineHeight: 10,
        processStyle: {
          backgroundColor: 'blue'
        }
      },
      reportText:'',
      date: new Date(yyyy,mm,dd), // Must be an array reference!
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