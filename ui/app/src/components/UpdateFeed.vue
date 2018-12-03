<template>
  <div>
    <b-card no-body>
      <!--headers and formatting -->
      <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
        <h4>Updates</h4>
      </b-nav>
      <b-card-body id="nav-scroller" ref="content" style="position:relative; height:250px; overflow-y:scroll;">
        <p class="card-text">
          <!--iterate through and display updates -->
          <b-card v-for="update in this.updates" >
              <strong>{{update.user}}</strong></br>
              <p>{{update.reportText}}</p>
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
  }
}
</script>

