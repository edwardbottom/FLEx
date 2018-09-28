<template>
  <div>
    <PageHeader></PageHeader>
    <br/>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="6">
          <PatientSummary></PatientSummary>
        </b-col>
        <b-col cols="1"></b-col>
        <b-col cols="4">
          <UpdateFeed v-bind:updates= "['img/da-slide1.png', 'img/da-slide2.png']"></UpdateFeed>
          <br/>
          <PatientMessages></PatientMessages>
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
      summaries: {},
      messages: {},
      updates:[
      {
        patient:"steve",
        update:"broke his arm in 100 places"
      },
      {
        patient:"steve",
        update:"broke his arm in 100 places"
      },
      {
        patient:"steve",
        update:"broke his arm in 100 places"
      }
      ]
    }
  },
  mounted() {
  }
}
</script>
<style>

</style>

