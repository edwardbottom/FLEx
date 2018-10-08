<template>
  <div class="topBar">
    <b-navbar toggleable="md" type="dark" variant="primary">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">FLEx</b-navbar-brand>

      <datepicker placeholder="Select Date"></datepicker>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
      
          

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>{{this.$session.get("username")}}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#"
            v-on:click="logout()"
            >Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    

  </div>


</template>

<script>
  import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
  import router from "../router";
export default {
  name: 'PageHeader',
  props: {
    msg: String
  },
  components: {
    Datepicker
  },
  methods:{
    logout()
    {
      this.$session.destroy();
      router.push({path:"/Login"});
    }
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
