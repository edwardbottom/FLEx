<template>
  <div>
    <b-card no-body>
      <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
        <h3>Patients</h3>
      </b-nav>
      <b-card-body id="nav-scroller" ref="content" style="position:relative; height:500px; overflow-y:scroll;">
        <p class="card-text">
          <!--iterate through list of summaries -->
          <b-card v-for="summary in this.summaries" >
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-bind:variant="summary.variant" v-b-toggle.accordion="summary.accordionId">{{summary.patient}}</b-btn>
              </b-card-header>
              <b-collapse v-bind:id="summary.accordionId" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <!--display patient information -->
                <ul class="card-text">
                  <li>Age: {{summary.age}}</li>
                  <li>Height: {{summary.height}} Weight: {{summary.weight}} lbs</li>
                  <li>injury: {{summary.injury}}</li>
                  <li>Current Status: {{summary.currentStatus}} </li>
                  <li>Average Status: {{summary.averageStatus}} </li>
                  <li>insurance provider: {{summary.insuranceProvider}}</li>
                  <li>Contact {{summary.contact}}</li>
                  <li>Next Visit: {{summary.nextVisit}}</li>
                  <b-button :size="sm" :variant="secondary" v-on:click="loadPatientProfile(summary.username)">
                      View Profile
                  </b-button>
                  <div class="vl"></div>
                  <b-button size="small" variant="secondary" v-on:click="createPlan(summary.username)">
                    View Exercise Plan
                  </b-button>                
                </ul>
            </b-card-body>
            </b-collapse>
          </b-card>
          </b-card>
        </p>
      </b-card-body>
    </b-card>
  </div>
</template>

<style>
.vl {
    border-left: 6px;
    height: 10px;
}
</style>

<script>
import router from '../router';

export default {
  name: 'PatientSummary',
  props: {
    summaries: Array
  },
  methods: {
    //loads the patient profile
    loadPatientProfile: function(username) {
      this.$session.set("selectedProfile", username)
      router.push({path:'/PatientProfile'});
    },
    createPlan: function(username)
    {
      this.$session.set("selectedProfile", username)
      router.push({path:"/CreatePlan"});
    }    
  },
  
}

</script>

