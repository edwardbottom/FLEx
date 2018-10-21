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
          <!-- <UpdateFeed v-bind:updates= "['img/da-slide1.png', 'img/da-slide2.png']"></UpdateFeed> -->
          <UpdateFeed v-bind:updates= "this.updates"></UpdateFeed>
          <br/>
          <PatientMessages v-bind:messages="this.messages"></PatientMessages>
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
  created() {
    //get the patient summarues
    var self = this;
    console.log(self.$session.get("therapistId") + " is the therapis id");
    console.log(self.$session.get("username") + " is the username in the session");
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
      doctorId: self.$session.get("therapistId")
    })
    .then(function (response) {
      console.log(response.data)
      self.messages = response.data;
      console.log(self.summaries + "is the summary")
      })
    .catch(function (error) {
      console.log(error);
      });

    //get messages
    this.axios.post('http://localhost:3000/getUpdates', {
      doctorId: self.$session.get("therapistId")
    })
    .then(function (response) {
      console.log(response.data)
      self.updates = response.data;
      console.log(self.summaries + "is the summary")
      })
    .catch(function (error) {
      console.log(error);
      });

    },
}
</script>
<style>

</style>

