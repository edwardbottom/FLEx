<template>
  <div class="Login">
    <PageHeader></PageHeader> 
        <div class="container h-100">
          <div class="row h-100"></div>
        </br>
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col">
              <b-card border-variant="secondary"
                  align="center"
                  style="max-width: 20rem;">
                  <p>Login</p>
              </b-card>
            </div>
          </div>
        </div>       
  </div>
</template>

<script>
    import PageHeader from "./PageHeader.vue";
export default {
  name: 'Login',
  props: {
    msg: String
  },
  components: {
    PageHeader
  }
}
</script>

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