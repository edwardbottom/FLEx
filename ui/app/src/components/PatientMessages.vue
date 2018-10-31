<template>
  <div>
    <b-card no-body>
      <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
        <h3>Inbox</h3>
      </b-nav>
      <b-card-body id="nav-scroller" ref="content" style="position:relative; height:200px; overflow-y:scroll;">
        <p class="card-text">
          <b-card v-for="message in this.messages" >
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion="message.id">New Message from: {{message.sender}}</b-btn>
              </b-card-header>
              <b-collapse v-bind:id="message.id"  visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <ul class="card-text">
                    <li> {{message.message}}</li>
                  </ul>
                </b-card-body>
              </b-collapse>
          </b-card>
        </p>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'PatientMessages',
  props: {
    messages: Array
  }
}
</script>

