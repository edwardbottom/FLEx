<template>
  <div>
    <PageHeader></PageHeader>
    <br/>
    <p> This will have the patients profile </p>
  </div>
</template>

<script>
 import PageHeader from "./PageHeader.vue" 
  
export default {
  name: 'UserHome',
  components: {
    PageHeader
  },
  data () {
    return {
      summaries:[]
    }
  },
  created() {
  },
}
</script>
<style>

</style>

