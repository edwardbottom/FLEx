<template>
  <!--render doctor information -->
  <div>
    <b-card title="Doctor Phil"
            tag="article"
            style="max-width: 100%;"
            class="mb-2"
            v-for="info in this.doctorInfo" :key="info.firstVisit">
    <div>
    </div>  
    <!--renders the patient information -->
    <b>Next Visit</b>
    <br>
    {{info.nextVisit}}
    <br>
    <b>Provider</b>
    <br>
    {{info.provider}}
    <br>
    <b>Emergency Contact Phone #</b>
    <br>
    {{info.phone}}
    <br>
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
