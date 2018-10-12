<template>
  <div>
    <PageHeader></PageHeader>
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
      messages: [
      {
        patient:"steve",
        message:"I broke his arm in 100 places",
        id:"accordion11"
      },
      {
        patient:"steve",
        message:"I broke his arm in 100 places",
        id:"accordion12"
      },
      {
        patient:"steve",
        message:"I broke his arm in 100 places",
        id:"accordion13"
      }
      ],
      updates:[
      {
        patient:"steve",
        update:"broke his arm in 100 places",
        path:"#/path"
      },
      {
        patient:"steve",
        update:"broke his arm in 100 places",
        path:"#/path"
      },
      {
        patient:"steve",
        update:"broke his arm in 100 places",
        path:"#/path"
      }
      ]
    }
  },
  created() {
    //call the method that makes the request to set the state before rendering
    var self = this;
    this.axios.post('http://localhost:3000/getPatients', {
      doctorId: 1111
    })
    .then(function (response) {
      console.log(response.data)
      self.summaries = response.data;
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

