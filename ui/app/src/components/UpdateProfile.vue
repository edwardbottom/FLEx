 <template>
  <div class="UpdateSummary">
    <!--page header -->
    <PageHeader v-if="isTherapist" ok="true"></PageHeader>
    <PageHeader v-else></PageHeader>
    <b-row class="justify-content-md-center">
      <h3> Patient Profile </h3>
    </b-row>
    <br>
    <div class="center-block">
    <b-container class="bv-example-row"> 
      <!--patient input form -->
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
        <!--username input -->   
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
        <!--age input -->
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
        <!--height input -->      
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
        <!--wieght input -->    
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
        <!--injury input -->  
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
        <!--current status -->   
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
        <!--average status input --> 
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
        <!--insurance provider input -->          
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
        <!--contact input -->
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
        <!--next visit input -->  
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
        <!--doctor id input -->
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
        <!--average status input -->
        <b-row class="justify-content-md-center">
          <b-form-radio-group id="account_type" v-model="variant" name="radioSubComponent">
              <b-form-radio value="success">Good</b-form-radio>
              <b-form-radio value="warning">Average</b-form-radio> 
              <b-form-radio value="danger">Bad</b-form-radio>             
          </b-form-radio-group>
        </b-row>            
    </b-container> 
    <br>
    <!--submit button -->
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
  created(){
    //get patient summary
    var self = this;
    this.axios.post('http://localhost:3000/getPatientSummary', {
      username: self.$session.get("username")
    })
    .then(function (response) {
      //set and send values
        self.patient = response.data.patient
        self.username = response.data.username
        self.age = response.data. age
        self.height = response.data.height
        self.weight = response.data.weight
        self.injury = response.data.injury
        self.currentStatus = response.data.currentStatus
        self.averageStatus = response.data.averageStatus
        self.insuraceProvider = response.data.insuraceProvider 
        self.contact = response.data.contact
        self.nextVisit = response.data.nextVisit 
        self.variant = response.data.variant
        self.accordionId = response.data.accordionId 
        self.doctorID = response.data.doctorID
      })
      .catch(function (error) {
        //console.log(error);
        alert("callback failed")
      });
  },
  methods:{
    //return to login
    cancel()
    {
      router.push({path:"/login"});
    },
    //submit info request
    submitInfo()
    {
      //update summary request
      var self = this
      console.log("variant vlaue is " + this.variant)
      this.axios.post('http://localhost:3000/updateSummary', {
        patient: this.patient,
        username: this.username,
        age: this.age,
        height: this.height,
        weight: this.weight,
        injury: this.injury,
        currentStatus: this.currentStatus,
        averageStatus: this.averageStatus,
        insuraceProvider: this.insuraceProvider,
        contact: this.contact,
        nextVisit: this.nextVisit,
        variant: this.variant,
        doctorID: this.doctorID
      })
      .then(function (response) {
        router.push({path:"/UserHome"});
        alert("Information updated")
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