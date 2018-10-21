<template>
  <div class="CreateExercise">    
    <PageHeader></PageHeader>    
    <br>
      <div class="FormRow">        
          <b-row class="justify-content-md-center">
            <b-col cols="2">
              <p>Exercise Name</p>            
            </b-col>
            <b-col cols="1" align="center"><p>:</p></b-col>
            <b-col cols="2">
              <b-form-input v-model="name"></b-form-input>
            </b-col>
          </b-row>  
      </div>   
      <div class="FormRow">        
          <b-row class="justify-content-md-center">
            <b-col cols="2">
              <p>Description</p>            
            </b-col>
            <b-col cols="1" align="center"><p>:</p></b-col>
            <b-col cols="2">
              <b-form-input v-model="description"></b-form-input>
            </b-col>
          </b-row>  
      </div>           
  </div>
</template>

<script>
  import PageHeader from "./PageHeader.vue";

export default {
  name: 'CreateExercise',
  components: {PageHeader}
}
</script>