<template>
  <div class="CreateSummary">
  <!--page header -->
  <PageHeader ok="true"></PageHeader>
  </br>
    <b-row class="justify-content-md-center">
      <h3> {{this.name}}'s Profile </h3>
      <br>
    </b-row>
    <!--height input-->
    <div class="center-block">
    <b-container class="bv-example-row">          
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
        <!--summary input-->
        <div class="FormRow">        
            <b-row class="justify-content-md-center">
              <b-col cols="2">
                <p>Summary</p>            
              </b-col>
              <b-col cols="1" align="center"><p>:</p></b-col>
              <b-col cols="2">
                <b-form-input v-model="summary" type="text"></b-form-input>
              </b-col>
            </b-row>  
        </div>              
        <br>          
    </b-container> 
    <b-row class="justify-content-md-center">
      <!--cancel and submit buttons -->
      <b-button class="spacingClass" v-on:click="cancel()">Cancel</b-button>
      <b-button class="spacingClass" v-on:click="submitChanges()">Submit Changes</b-button>
    </b-row>   
  </div> 
  </div>
</template>

<script>
 import PageHeader from "./PageHeader.vue" 
 import router from '../router';

export default {
  name: 'UserHome',
  components: {
    PageHeader
  },
  data () {
    return {
      userData: Object,
      height: "",
      weight: "",
      injury: "",
      currentStatus: "",
      averageStatus: "",
      worstStatus: "",
      bestStatus: "",
      contact: "",
      nextVisit: "",
      summary: "",
      name:"",
      user:""
    }
  },
  created() {
    //request the profile information
    var self = this;
    this.axios.post('http://localhost:3000/getProfile', {
      reqUser: this.$session.get("selectedProfile")
    })
    .then(function (response) {
      //console.log(response.data)
      self.userData = response.data;
      self.user = response.data.user;
      self.name = response.data.name;
      self.height = response.data.height;
      self.weight = response.data.weight;
      self.injury = response.data.injury;
      self.currentStatus = response.data.currentStatus;
      self.averageStatus = response.data.averageStatus;
      self.worstStatus = response.data.worstStatus;
      self.bestStatus = response.data.bestStatus;
      self.contact = response.data.contact;
      self.nextVisit = response.data.nextVisit;
      self.summary = response.data.summary;
      })
    .catch(function (error) {
      //console.log(error);
      });
  },
   methods:{
    //return to mainpage
    cancel()
    {
      router.push({path:"/PatientProfile"})
    },
    //submit changes
    submitChanges(){
      var self = this;
      this.axios.post('http://localhost:3000/updatePatientProfile', {
        reqUser: this.$session.get("selectedProfile"),
        user: self.user,
        name: self.name,
        height: self.height,
        weight: self.weight,
        injury: self.injury,
        currentStatus: self.currentStatus,
        averageStatus: self.averageStatus,
        worstStatus: self.worstStatus,
        bestStatus: self.bestStatus,
        contact: self.contact,
        nextVisit: self.nextVisit,
        summary: self.summary
    })
    .then(function (response) {
      router.push({path:"/PatientProfile"});
      alert("Profile updated");
      })
    .catch(function (error) {
      //console.log(error);
      });
    }
  }

}
</script>
<style>
.spacingClass  {
  margin: 10px;
}
</style>

