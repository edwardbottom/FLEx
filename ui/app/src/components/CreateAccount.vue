<template>
  <div class="CreateAccount">
    <PageHeader></PageHeader> 
    <br>
    <div class="center-block">
    <b-container class="bv-example-row">
        <b-row class="justify-content-md-center">
          <b-col cols="1">
            <b-button>Therapist</b-button>            
          </b-col>
          <b-col cols="1">
            <b-button>Patient</b-button>
          </b-col>
        </b-row> 
        <br> 
        <FormRow msg="First Name"></FormRow>        
        <FormRow msg="Middle Name"></FormRow>   
        <FormRow msg="Last Name"></FormRow>      
        <FormRow msg="Username"></FormRow>   
        <FormRow msg="Password"></FormRow>   
        <FormRow msg="Retype Password"></FormRow>   
        <FormRow msg="Email Address"></FormRow>   
        <FormRow msg="Provider ID"></FormRow>   
        <FormRow msg="Therapist ID"></FormRow>           
        <br>        
        <b-row class="justify-content-md-center">
            <b-button>Create Account</b-button>
        </b-row>      
    </b-container> 
  </div>
  </div>
</template>

<script>
    import PageHeader from "./PageHeader.vue";
    import FormRow from "./FormRow.vue";
export default {
  name: 'CreateAccount',
  components: {
    PageHeader,
    FormRow
  }
}
</script>

<style>
</style>