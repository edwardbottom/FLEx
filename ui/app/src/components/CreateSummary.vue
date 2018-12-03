<template>
  <div class="CreateSummary">
    <!--nav bar -->
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">FLEx</b-navbar-brand>
      </b-navbar>
    <b-row class="justify-content-md-center">
      <h3> Patient Profile </h3>
    </b-row>
    <br>
    <!--input for patient name -->
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
        <!--input for username -->
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Username</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="username" type="text"></b-form-input>
              </b-col>
            </b-row>  
        </div>  
        <!--age input-->              
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
        <!--height input-->    
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Height</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="height"></b-form-input>
              </b-col>
            </b-row>  
        </div> 
        <!--weight input-->    
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Weight</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="weight" type="text"></b-form-input>
              </b-col>
            </b-row>  
        </div>  
        <!--injury input-->  
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
        <!--current status input-->   
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
        <!--insurance provider input-->        
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
        <!--contact input-->
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
        <!--next visit input--> 
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
        <!--doctor id input-->
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
        <br>
        <!--account type input-->
        <b-row class="justify-content-md-center">
          <b-form-radio-group id="account_type" v-model="account_type" name="radioSubComponent">
              <b-form-radio value="success">Good</b-form-radio>
              <b-form-radio value="warning">Average</b-form-radio> 
              <b-form-radio value="danger">Bad</b-form-radio>             
          </b-form-radio-group>
        </b-row>   
        <br>   
    <!--submit input-->      
    </b-container> 
    <b-row class="justify-content-md-center">
      <b-button v-on:click="submitInfo()">Submit Info</b-button>
    </b-row>
    <br>   
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
      insuraceProvider: '',
      contact: '',
      nextVisit: '',
      variant: '',
      accordionId: '',
      doctorID: ''
    }
  },
  methods:{
    //return to login page
    cancel()
    {
      router.push({path:"/login"});
    },
    //store the summary in the database and returns to login
    submitInfo()
    {
      var self = this
      this.axios.post('http://localhost:3000/createSummary', {
        patient: self.patient,
        username: self.username,
        age: self.age,
        height: self.height,
        weight: self.weight,
        injury: self.injury,
        currentStatus: self.currentStatus,
        averageStatus: self.averageStatus,
        insuraceProvider: self.insuraceProvider,
        contact: self.contact,
        nextVisit: self.nextVisit,
        variant: self.variant,
        doctorID: self.doctorID
      })
      //success and return to login
      .then(function (response) {
        if (response.data == 'success')
        {
          router.push({path:"/login"});
          alert("Account Created");
        } else
        {
          alert(response.data);
        }
      })
      .catch(function (error) {
        //console.log(error);
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