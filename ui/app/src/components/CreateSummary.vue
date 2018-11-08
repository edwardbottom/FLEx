<template>
  <div class="CreateSummary">
  </br>
    <b-row class="justify-content-md-center">
      <h3> Patient Profile </h3>
      <br>
    </b-row>
    <div class="center-block">
    <b-container class="bv-example-row"> 
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Patient Name</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="patient"></b-form-input>
              </b-col>
            </b-row>  
        </div>       
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Username</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="username"></b-form-input>
              </b-col>
            </b-row>  
        </div>  
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Age</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="age"></b-form-input>
              </b-col>
            </b-row>  
        </div>      
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>height</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="height"></b-form-input>
              </b-col>
            </b-row>  
        </div>     
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>weight</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="weight" type="text"></b-form-input>
              </b-col>
            </b-row>  
        </div>    
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Injury</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="injury" type="text"></b-form-input>
              </b-col>
            </b-row>  
        </div>    
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Current Status</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="currentStatus"></b-form-input>
              </b-col>
            </b-row>  
        </div> 
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Average Status</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="averageStatus"></b-form-input>
              </b-col>
            </b-row>  
        </div>  
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Last Used</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="lastUsed"></b-form-input>
              </b-col>
            </b-row>  
        </div>          
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Insurance Provider</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="insuraceProvider"></b-form-input>
              </b-col>
            </b-row>  
        </div>
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Contact</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="contact"></b-form-input>
              </b-col>
            </b-row>  
        </div>   
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Next Visit</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="nextVisit"></b-form-input>
              </b-col>
            </b-row>  
        </div>
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Doctor ID</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="doctorID"></b-form-input>
              </b-col>
            </b-row>  
        </div>
        <b-row class="justify-content-md-center">
          <b-form-radio-group id="account_type" v-model="account_type" name="radioSubComponent">
              <b-form-radio value="success">Good</b-form-radio>
              <b-form-radio value="warning">Average</b-form-radio> 
              <b-form-radio value="danger">Bad</b-form-radio>             
          </b-form-radio-group>
        </b-row>            
    </b-container> 
    <b-row class="justify-content-md-center">
      <b-button v-on:click="submitInfo()">Submit Info</b-button>
    </b-row>   
  </div> 
  </div>
</template>

<script>
    import PageHeader from "./PageHeader.vue";
    import router from '../router';
export default {
  name: 'CreateSummary',
  props: {
    msg: String
  },
  components: {
    PageHeader
  },
  data(){
    return{
      patient: '',
      username: '',
      age: '',
      height: '',
      weight: '',
      injury: '',
      currentStatus: '',
      averageStatus: '',
      lastUsed: '',
      insuraceProvider: '',
      contact: '',
      nextVisit: '',
      variant: '',
      accordionId: '',
      doctorID: ''
    }
  },
  methods:{
    cancel()
    {
      router.push({path:"/login"});
    },
    submitInfo()
    {
      alert("callback reached")
      var self = this
      this.axios.post('http://localhost:3000/createSummary', {
        patient: this.patient,
        username: this.username,
        age: this.age,
        height: this.height,
        weight: this.weight,
        injury: this.injury,
        currentStatus: this.currentStatus,
        averageStatus: this.averageStatus,
        lastUsed: this.lastUsed,
        insuraceProvider: this.insuraceProvider,
        contact: this.contact,
        nextVisit: this.nextVisit,
        variant: this.variant,
        doctorID: this.doctorID
      })
      .then(function (response) {
        console.log(response)
        router.push({path:"/login"});
        alert("Account Created")
      })
      .catch(function (error) {
        console.log(error);
        alert("callback failed")
      });
    }
  }  
}
</script>

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