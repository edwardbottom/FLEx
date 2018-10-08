<template>
  <div class="CreateAccount">
    <PageHeader></PageHeader> 
    <br>
    <div class="center-block">
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-form-radio-group id="account_type" v-model="account_type" name="radioSubComponent">
          <b-col cols="1">
            <b-form-radio value="therapist">Therapist</b-form-radio>            
          </b-col>
          <b-col cols="1">
            <b-form-radio value="patient">Patient</b-form-radio> 
          </b-col>
        </b-form-radio-group>
        </b-row> 
        <br> 
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>First Name</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="first_name"></b-form-input>
              </b-col>
            </b-row>  
        </div>       
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Middle Name</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="middle_name"></b-form-input>
              </b-col>
            </b-row>  
        </div>  
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Last Name</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="last_name"></b-form-input>
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
                <b-form-input v-model="user_name"></b-form-input>
              </b-col>
            </b-row>  
        </div>     
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Password</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="password" type="password"></b-form-input>
              </b-col>
            </b-row>  
        </div>    
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Retype Password</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="re_password" type="password"></b-form-input>
              </b-col>
            </b-row>  
        </div>    
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Email Address</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="email_address"></b-form-input>
              </b-col>
            </b-row>  
        </div> 
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Provider ID</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="provider_id"></b-form-input>
              </b-col>
            </b-row>  
        </div>  
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Therapist ID</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="therapist_id"></b-form-input>
              </b-col>
            </b-row>  
        </div>          
        <br>        
        <b-row class="justify-content-md-center">
            <b-button v-on:click="register()">Create Account</b-button>
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
  name: 'CreateAccount',
  components: {
    PageHeader,
    FormRow
  },
  methods:{
    register()
    {
      console.log("accont type is " + this.account_type)
      this.axios.post('http://localhost:3000/register', {
        first_name: this.first_name,
        middle_name: this.middle_name,
        last_name: this.last_name,
        user_name: this.user_name,
        password: this.password,
        re_password: this.re_password,
        email_address: this.email_address,
        provider_id: this.provider_id,
        therapist_id: this.therapist_id,
        account_type: this.account_type

      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      router.push({path:"/Login"});
    }
  },
  data(){
    return{
      first_name:'',
      middle_name:'',
      last_name:'',
      user_name:'',
      password:'',
      re_password:'',
      email_address:'',
      provider_id:'',
      therapist_id:'',
      account_type:''
    }
  },
    mounted(){

    },

}
</script>

<style>
</style>