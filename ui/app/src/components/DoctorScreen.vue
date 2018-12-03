<template>
  <div>
    <!--page header and formatting -->
    <PageHeader ok="true"></PageHeader>
    <br/>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="6">
          <!--summaries component -->
          <PatientSummary v-bind:summaries="this.summaries"></PatientSummary>
        </b-col>
        <b-col cols="1"></b-col>
        <b-col cols="4">
          <!--update feed component -->
          <UpdateFeed v-bind:updates= "this.updates"></UpdateFeed>
          <br/>
          <!--patient message componenet -->
          <PatientMessages v-bind:messages="this.messages"></PatientMessages>
          <br/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import PageHeader from "./PageHeader.vue"
  import PatientMessages from "./PatientMessages.vue";
  import UpdateFeed from "./UpdateFeed.vue";
  import PatientSummary from "./PatientSummary.vue";
  
  
export default {
  name: 'UserHome',
  components: {
    PageHeader,
    PatientMessages,
    UpdateFeed,
    PatientSummary
  },
  data () {
    return {
      summaries:[],
      messages: [],
      updates:[]
    }
  },
  beforeMount() {
    var self = this;

    //get patient usernames
    this.axios.post('http://localhost:3000/getPatientNames', {
      doctorId: self.$session.get("therapistId")
    })
    .then(function (response) {
      self.$session.set("patientNames", response.data);

      //get updates
      self.axios.post('http://localhost:3000/getDoctorUpdates',{
        patientNames : self.$session.get("patientNames")
      })
      .then(function (response) {
        self.updates = response.data;
      })
      .catch(function (error) {
        //console.log(error);
      });
    })
    .catch(function (error) {
      //console.log(error);
    });

    //get patient profiles
    this.axios.post('http://localhost:3000/getPatients', {
      doctorId: self.$session.get("therapistId")
    })
    .then(function (response) {
      self.summaries = response.data;
      })
    .catch(function (error) {
      //console.log(error);
      });
    
    //get messages
    this.axios.post('http://localhost:3000/getMessages', {
      rec: self.$session.get("username")
    })
    .then(function (response) {
      self.messages = response.data;
      })
    .catch(function (error) {
      //console.log(error);
      });
  }
}
</script>
<style>

</style>

