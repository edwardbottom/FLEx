<template>
  <!--Doctor Thing -->
  <div>
          <b-card title="Doctor Phil"
                  tag="article"
                  style="max-width: 100%;"
                  class="mb-2"
                  v-for="info in this.doctorInfo" :key="info.firstVisit">

              <div>
              <!--   <b-dropdown id="ddown1" text="Select Doctor" class="m-md-2">
                  <b-dropdown-item>Doctor Dan</b-dropdown-item>
                  <b-dropdown-item>Doctor Pletzbert</b-dropdown-item>
                </b-dropdown> -->
              
              </div>  
              <b>First Visit</b>
              <br>
              {{info.firstVisit}}
              <br>
              <b>Last Visit</b>
              <br>
              {{info.lastVisit}}
              <br>
              <b>Next Visit</b>
              <br>
              {{info.nextVisit}}
              <br>
              <b>Days Since Last Visit</b>
              <br>
              {{info.daysSinceVisit}}
              <br>
              <b># of Visit</b>
              <br>
              {{info.visit}}
              <br>
              <b>Provider</b>
              <br>
              {{info.provider}}
              <br>
              <b>Phone #</b>
              <br>
              {{info.phone}}
              <br>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>

</template>



<script>

export default {
  name: 'CurrentDoctor',
  props: {
    doctorInfo: Array
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
