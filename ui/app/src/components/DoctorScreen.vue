<template>
  <div>
    <PageHeader ok="true"></PageHeader>
    <br/>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="6">
          <PatientSummary v-bind:summaries="this.summaries"></PatientSummary>
        </b-col>
        <b-col cols="1"></b-col>
        <b-col cols="4">
          <UpdateFeed v-bind:updates= "this.updates"></UpdateFeed>
          <br/>
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
      console.log(response);
      self.$session.set("patientNames", response.data);

      //get updates
      self.axios.post('http://localhost:3000/getDoctorUpdates',{
        patientNames : self.$session.get("patientNames")
      })
      .then(function (response) {
        console.log(response.data)
        self.updates = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

    //get patient profiles
    this.axios.post('http://localhost:3000/getPatients', {
      doctorId: self.$session.get("therapistId")
    })
    .then(function (response) {
      console.log(response.data)
      self.summaries = response.data;
      console.log(self.summaries + "is the summary")
      })
    .catch(function (error) {
      console.log(error);
      });
    
    //get messages
    this.axios.post('http://localhost:3000/getMessages', {
      rec: self.$session.get("username")
    })
    .then(function (response) {
      console.log(response.data)
      self.messages = response.data;
      console.log(self.summaries + "is the summary")
      })
    .catch(function (error) {
      console.log(error);
      });
  }
}
</script>
<style>

</style>

