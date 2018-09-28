<template>
  <div>
    <b-card no-body>
      <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
        <h4>Updates</h4>
      </b-nav>
      <b-card-body id="nav-scroller" ref="content" style="position:relative; height:250px; overflow-y:scroll;">
        <p class="card-text">
          <b-card v-for="update in this.updates" >
            <p class="card-text">
              <strong>{{update.patient}}</strong></br>
              {{update.update}}
            </p>
            <a href="update.path">View Profile</a>
          </b-card>
        </p>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'UpdateFeed',
  props: {
    updates: Array
  },
  mounted () {
    //console.log(this.updates);
  }
}
</script>

