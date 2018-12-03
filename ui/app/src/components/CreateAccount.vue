<template>
  <div class="CreateAccount">
<!--blank navbar -->
<b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">FLEx</b-navbar-brand>
      </b-navbar>
    <br>
    <!--form -->
    <div class="center-block">
    <b-container class="bv-example-row">
      <!--first name input-->
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
        <!--middle name input-->
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
        <!--last name input-->
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
        <!--username input-->   
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
        <!--password input-->
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
        <!--re password input-->
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
        <!--email input-->
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
        <!--provider id input-->
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
        <!--therapist id input-->
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
        <b-col cols="1">
        <!--account type input-->
        <b-form-radio-group id="account_type" v-model="account_type" name="radioInline">
          <b-col cols="1">
            <b-form-radio value="therapist">Therapist</b-form-radio>            
          </b-col>
          <b-col cols="1">
            <b-form-radio value="patient">Patient</b-form-radio> 
          </b-col>
        </b-form-radio-group>
        </b-col>
        </b-row> 
        <br>    
        <!--create account input--> 
        <b-row class="justify-content-md-center">
            <b-button v-on:click="register()">Create Account</b-button>
        </b-row>
        <br>   
        <!--cancel input input-->
        <b-row class="justify-content-md-center">
            <b-button v-on:click="cancel()">Cancel</b-button>
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
    //submit the account information
    register()
    {
      //make request
      self = this
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
      //if successful
      .then(function (response) {
        if (response.data != "success")
        {
          alert(response.data);
        } else 
        {
          //additional info for patient
          if(self.account_type == 'patient'){
            router.push({path:"/CreateSummary"})
          }
          //return to login
          else{
            router.push({path:"/Login"});
          }
        }
      })
      //error
      .catch(function (error) {
        //console.log(error);
      });
    },
    //return to login
    cancel(){
      router.push({path:"/Login"});
    }
  },
  //data and state
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