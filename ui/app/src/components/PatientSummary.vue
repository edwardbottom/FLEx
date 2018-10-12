<template>
  <div>
    <b-card no-body>
      <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
        <h3>Patients</h3>
      </b-nav>
      <b-card-body id="nav-scroller" ref="content" style="position:relative; height:500px; overflow-y:scroll;">
        <p class="card-text">
          <b-card v-for="summary in this.summaries" >
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-bind:variant="summary.variant" v-b-toggle.accordion="summary.accordionId">{{summary.patient}}</b-btn>
              </b-card-header>
              <b-collapse v-bind:id="summary.accordionId" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <ul class="card-text">
                  <li>Age: {{summary.age}}</li>
                  <li>Height: {{summary.height}} Weight: {{summary.weight}} lbs</li>
                  <li>injury: {{summary.injury}}</li>
                  <li>Current Status: {{summary.currentStatus}} </li>
                  <li>Average Status: {{summary.averageStatus}} </li>
                  <li>last used app: {{summary.lastUsed}}</li>
                  <li>insurance provider: {{summary.insuranceProvider}}</li>
                  <li>Contact {{summary.contact}}</li>
                  <li>Next Visit: {{summary.nextVisit}}</li>
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

<script>
export default {
  name: 'PatientSummary',
  props: {
    summaries: Array
  }
}
</script>

