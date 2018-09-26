<template>
  <div class="PatientSummary">
    <p> {{ test }} </p>
  </div>
</template>

<script>
export default {
  name: 'PatientSummary',
  props: {
    test:"text",
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

