<template>
  <div>
    <PageHeader></PageHeader>
    <br/>
    <h2>{{this.userData.name}}
      <b-button size="small" variant="primary" v-on:click="createPlan()">
        Create New Plan
      </b-button>
    </h2>
    <p> Height: {{this.userData.height}} </p>
    <p> Weight: {{this.userData.weight}} </p>
    <p> Injury: {{this.userData.injury}} </p>
    <p> Current Status: {{this.userData.currentStatus}} </p>
    <p> Average Status: {{this.userData.averageStatus}} </p>
    <p> Worst Status: {{this.userData.worstStatus}} </p>
    <p> Best Status: {{this.userData.bestStatus}} </p>
    <p> Last Active: {{this.userData.lastActive}} </p>
    <p> Contact: {{this.userData.contact}} </p>
    <p> Next Visit: {{this.userData.nextVisit}} </p>
    <p> Summary: {{this.userData.summary}} </p>
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
      userData: Object
    }
  },
  created() {
    var self = this;
    this.axios.post('http://localhost:3000/getProfile', {
      reqUser: this.$session.get("selectedProfile")
    })
    .then(function (response) {
      console.log(response.data)
      self.userData = response.data;
      this.$session.remove("selectedProfile")
      })
    .catch(function (error) {
      console.log(error);
      });

  },
   methods:{
    createPlan()
    {
      router.push({path:"/CreatePlan"});
    }
  }
}
</script>
<style>

</style>

