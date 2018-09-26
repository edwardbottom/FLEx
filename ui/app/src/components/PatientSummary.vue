<!-- <template>
  <div v-for="patient in patients" class="PatientSummary">
  <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn>
    <b-collapse id="collapse1" class="mt-2">
      <b-card>
        <p class="card-text">Collapse contents Here</p>
      </b-card>
  </b-collapse>
  </div>
</template> -->

<script>
export default {
  name: 'PatientSummary',
  props: {
    patients:[
      {
        name:"steve",
        age:37,
        height:"6'0",
        weight: 190,
        status:'bad',
        firstVisit:"1/1/2017",
        lastVist:"1/1/2018",
        injury:"broken arm",
        currentStatus:"3/10",
        averageStatus:"5/10",
        lastUsedApp:"4/4/2017",
        insuranceProvider:"United HealthCare",
        contact:"314-666-6666",
        nextVist:"n/a"
      }
    ]
  }
}
</script>

