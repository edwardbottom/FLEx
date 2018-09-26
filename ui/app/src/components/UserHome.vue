<template>
  <div class="topBar">
    <PageHeader></PageHeader>
  </div>
</template>

<script>
  import PageHeader from "./PageHeader.vue";
export default {
  name: 'UserHome',
  props: {
    msg: String
  },
  components: {
    PageHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
