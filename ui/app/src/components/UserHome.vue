<template>
  <div class="topBar">
    <PageHeader></PageHeader>
    <br>
            
      

<b-container class="bv-example-row" >
    <b-row>
        <b-col>  

          <!--Doctor Thing -->
          <b-card 
                  tag="article"
                  style="max-width: 100%;"
                  class="mb-2">
            <p class="card-text">
              <div>
                <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
                  <b-dropdown-item>Doctor Dan</b-dropdown-item>
                  <b-dropdown-item>Doctor Pletzberg</b-dropdown-item>
                </b-dropdown>
              </div>  
              <b>First Visit</b>
              <br>
              2/22/1997
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
            </p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        
    </b-col>
        <b-col>
                  
          <!-- TODO THING -->
          <center>
                <b-form-group label="Stacked (vertical) button style checkboxes" >
                  <b-form-checkbox-group buttons class="d-block" v-model="selected" stacked :options="options" >
                  </b-form-checkbox-group>
                </b-form-group>
              </center>
        </b-col>
        <b-col>
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

        </b-col>
    </b-row>
</b-container>
  </div>
</template>

<script>
  import PageHeader from "./PageHeader.vue";
export default {
  name: 'UserHome',
  props: {
    msg: String
  },
  components: {
    PageHeader
  },
  data () {
    return {
      selected: [], // Must be an array reference!
      options: [
        {text: 'Orange', value: 'orange'},
        {text: 'Apple', value: 'apple'},
        {text: 'Pineapple', value: 'pineapple'},
        {text: 'Grape', value: 'grape'}
      ]
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
