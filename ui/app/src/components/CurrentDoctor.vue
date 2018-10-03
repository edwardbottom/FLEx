<template>
  <!--Doctor Thing -->
  <div>
          <b-card 
                  tag="article"
                  style="max-width: 100%;"
                  class="mb-2"
                  v-for="info in this.doctorInfo">

              <div>
                <b-dropdown id="ddown1" text="Select Doctor" class="m-md-2">
                  <b-dropdown-item>Doctor Dan</b-dropdown-item>
                  <b-dropdown-item>Doctor Pletzberg</b-dropdown-item>
                </b-dropdown>
              </div>  
              <b>First Visit</b>
              <br>
              {{info.firstVisit}}
              <br>
              <b>Last Visit</b>
              <br>
              2/22/2018
              <br>
              <b>Next Visit</b>
              <br>
              9/30/2018
              <br>
              <b>Days Since Last Visit</b>
              <br>
              217 Days
              <br>
              <b># of Visit</b>
              <br>
              13
              <br>
              <b>Provider</b>
              <br>
              Stretch Physical Therapy
              <br>
              <b>Phone #</b>
              <br>
              (555)555-5555
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
