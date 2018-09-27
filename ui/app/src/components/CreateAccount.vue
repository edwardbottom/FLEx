<template>
  <div class="CreateAccount">
    <PageHeader></PageHeader> 
    </br>
    <b-container class="bv-example-row">
        <b-row align-v="end">
          <b-col cols="1">
            <b-button>Therapist</b-button>            
          </b-col>
          <b-col cols="1">
            <b-button>Patient</b-button>
          </b-col>
        </b-row> 
        </br> 
        <b-row align-v="center">
          <b-col cols="2">
            <p>First Name</p>            
          </b-col>
          <b-col cols="1"><p>:</p></b-col>
          <b-col cols="2">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>  
        <b-row align-v="center">
          <b-col cols="2">
            <p>Middle Name</p>            
          </b-col>
          <b-col cols="1"><p>:</p></b-col>
          <b-col cols="2">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>     
        <b-row align-v="center">
          <b-col cols="2">
            <p>Last Name</p>            
          </b-col>
          <b-col cols="1"><p>:</p></b-col>
          <b-col cols="2">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>   
        <b-row align-v="center">
          <b-col cols="2">
            <p>Username</p>            
          </b-col>
          <b-col cols="1"><p>:</p></b-col>
          <b-col cols="2">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>   
        <b-row align-v="center">
          <b-col cols="2">
            <p>Password</p>            
          </b-col>
          <b-col cols="1"><p>:</p></b-col>
          <b-col cols="2">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>  
        <b-row align-v="center">
          <b-col cols="2">
            <p>Retype Password</p>            
          </b-col>
          <b-col cols="1"><p>:</p></b-col>
          <b-col cols="2">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>   
        <b-row align-v="center">
          <b-col cols="2">
            <p>Email Address</p>            
          </b-col>
          <b-col cols="1"><p>:</p></b-col>
          <b-col cols="2">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>
        <b-row align-v="center">
          <b-col cols="2">
            <p>Provider ID</p>            
          </b-col>
          <b-col cols="1"><p>:</p></b-col>
          <b-col cols="2">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>
        <b-row align-v="center">
          <b-col cols="2">
            <p>Therapist ID</p>            
          </b-col>
          <b-col cols="1"><p>:</p></b-col>
          <b-col cols="2">
            <b-form-input></b-form-input>
          </b-col>
        </b-row> 
        </br>        
        <b-row>
          <b-col cols="2"></b-col>
          <b-col>
            <b-button>Create Account</b-button>
          </b-col>
        </b-row>      
    </b-container> 
  </div>
</template>

<script>
    import PageHeader from "./PageHeader.vue";
export default {
  name: 'CreateAccount',
  props: {
    msg: String
  },
  components: {
    PageHeader
  }
}
</script>

<style>
</style>