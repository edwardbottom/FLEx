<template>
  <div>
    <b-card no-body>
      <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
        <h3>Messages</h3>
      </b-nav>
      <b-card-body id="nav-scroller" ref="content" style="position:relative; height:200px; overflow-y:scroll;">
        <p class="card-text">
          <b-card v-for="message in this.messages" >
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion7>New Message from: {{message.patient}}</b-btn>
              </b-card-header>
              <b-collapse id="accordion7"  visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <ul class="card-text">
                    <li> {{message.message}}</li>
                    <b-form-input v-model="text1" type="text" placeholder="Message"></b-form-input>
                    <b-button>Send</b-button>
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

