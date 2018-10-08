<template>
	<b-card>
        <h2>Today's Report</h2>
    <div>
      <VueSlideBar
        v-model="value2"
        :min="1"
        :max="10"
        :processStyle="slider.processStyle"
        :lineHeight="slider.lineHeight"
        :tooltipStyles="{ backgroundColor: 'blue', borderColor: 'blue' }">
      </VueSlideBar>
      <center><h2>Value: {{value2}}</h2></center>
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
export default {
  name: 'UserExerciseReport',
  props: {
    msg: String
  },
  components: {
    VueSlideBar,
  },
  methods:{
    submitReport(){
      var info = {
        value2: this.value2,
        reportText: this.reportText,
      }
      this.$emit("clicked", info);
    }
  },
  data () {
    return {
      value2: 8,
      slider: {
        lineHeight: 10,
        processStyle: {
          backgroundColor: 'blue'
        }
      },
      reportText:''

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