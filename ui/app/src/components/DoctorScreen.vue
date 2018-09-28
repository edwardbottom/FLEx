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
      summaries:[
      {
        patient:"Dan",
        age: 20,
        height: "6'2",
        weight: 190,
        injury: "Twisted his arm a full 720 degrees",
        currentStatus: "dead/dying",
        averageStatus: "better than you would think",
        lastUsed: "11/20/1997",
        insuraceProvider: "United Dan Evans",
        contact: "314-555-5555",
        nextVisit: "yesterday",
        variant: "success"
      },
      {
        patient:"Dan",
        age: 20,
        height: "6'2",
        weight: 190,
        injury: "Twisted his arm a full 720 degrees",
        currentStatus: "dead/dying",
        averageStatus: "better than you would think",
        lastUsed: "11/20/1997",
        insuraceProvider: "United Dan Evans",
        contact: "314-555-5555",
        nextVisit: "yesterday",
        variant: "warning"
      },
      {
        patient:"Dan",
        age: 20,
        height: "6'2",
        weight: 190,
        injury: "Twisted his arm a full 720 degrees",
        currentStatus: "dead/dying",
        averageStatus: "better than you would think",
        lastUsed: "11/20/1997",
        insuraceProvider: "United Dan Evans",
        contact: "314-555-5555",
        nextVisit: "yesterday",
        variant: "danger"
      }
    ],
      messages: [
      {
        patient:"steve",
        message:"I broke his arm in 100 places",
        id:"accordion11"
      },
      {
        patient:"steve",
        message:"I broke his arm in 100 places",
        id:"accordion11"
      },
      {
        patient:"steve",
        message:"I broke his arm in 100 places",
        id:"accordion11"
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
  mounted() {
    //call the method that makes the request to set the state before rendering
  },
  methods: {
    async getPosts () {
      //put an method for an axios request to set a state here
    }
  }
}
</script>
<style>

</style>

