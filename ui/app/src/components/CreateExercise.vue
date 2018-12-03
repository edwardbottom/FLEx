<template>
  <div class="CreateExercise">  
    <!--page header and formatting-->  
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
            <!--exercise name input-->
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
            <!--exercise description input-->
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
            <!--link to image input input-->
            <b-form-input v-model="link"></b-form-input>
          </b-col>
        </b-row>  
      </div>      
      <br> 
      <!--submit exercise button-->       
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
    //submits a new exercise to the database
    createNewExercise()
    {
      this.axios.post('http://localhost:3000/createNewExercise', {
        name: this.name,
        description: this.description,
        link: this.link
      })
      //success case
      .then(function (response) {
        if (response.data != "success")
        {
          alert(response.data);          
        } else
        {
          router.push({path:"/doctor"});
        }
      })
      //failure case
      .catch(function (error) {
        //console.log(error);
      });      
    },
    //data and vue state
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