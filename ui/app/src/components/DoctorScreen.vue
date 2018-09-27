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
          <UpdateFeed></UpdateFeed>
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
  // props: {
  //   msg: String
  // },
  components: {
    PageHeader,
    PatientMessages,
    UpdateFeed,
    PatientSummary
  }
}
</script>
<style>

</style>

