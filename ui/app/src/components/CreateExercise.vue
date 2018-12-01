<template>
  <div class="CreateExercise">    
    <PageHeader ok="true">Yes</PageHeader>
    <br>
    <div class="center-block">
    <b-container class="bv-example-row">
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
      <div class="FormRow">        
        <b-row class="justify-content-md-center">
          <b-col cols="2">
            <p>Diagram Link</p>            
          </b-col>
          <b-col cols="1" align="center"><p>:</p></b-col>
          <b-col cols="2">
            <b-form-input v-model="link"></b-form-input>
          </b-col>
        </b-row>  
      </div>      
      <br>        
      <b-row class="justify-content-md-center">
          <b-button v-on:click="createNewExercise()">Submit</b-button>
      </b-row>              
      </b-container>
    </div>  
  </div>
</template>

<script>
  import PageHeader from "./PageHeader.vue";
  import FormRow from "./FormRow.vue";
  import router from '../router';
export default {
  name: 'CreateExercise',
  components: {
    PageHeader,
    FormRow
  },
  methods: 
  {
    createNewExercise()
    {
      this.axios.post('http://localhost:3000/createNewExercise', {
        name: this.name,
        description: this.description,
        link: this.link
      })
      .then(function (response) {
        if (response.data != "success")
        {
          alert(response.data);          
        } else
        {
          router.push({path:"/doctor"});
        }
      })
      .catch(function (error) {
        console.log(error);
      });      
    },
    data(){
      return{
        name:'',
        description:'',
        link:''
      }
    },    
  }   
}
</script>