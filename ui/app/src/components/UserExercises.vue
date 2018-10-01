<template>
   <!-- TODO THING -->
   <div>
          <center>
                <b-form-group label="Stacked (vertical) button style checkboxes" >
                  <b-form-checkbox-group buttons class="d-block" v-model="selected" stacked :options="options" >
                  </b-form-checkbox-group>
                </b-form-group>
              </center>
    </div>
</template>



<script>

export default {
  name: 'UserExercises',
  props: {
    msg: String
  },
  data () {
    return {
      selected: [], // Must be an array reference!
      options: [
        {text: 'Orange', value: 'orange'},
        {text: 'Apple', value: 'apple'},
        {text: 'Pineapple', value: 'pineapple'},
        {text: 'Grape', value: 'grape'}
      ],

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
