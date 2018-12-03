<template>
  <div>
    <b-card no-body>
      <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
        <h3>Inbox</h3>
      </b-nav>
      <b-card-body id="nav-scroller" ref="content" style="position:relative; height:200px; overflow-y:scroll;">
        <p class="card-text">
          <!--iterate through and display messages -->
          <b-card v-for="message in this.messages" >
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion="message.id">New Message from: {{message.sender}}</b-btn>
              </b-card-header>
              <b-collapse v-bind:id="message.id"  visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <!--display message -->
                  <ul class="card-text">
                    <li> {{message.message}}</li>
                    <b-button :size="small" :variant="outline-secondary" v-on:click="goToReply()">Reply</b-button>
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
import router from "../router";
export default {
  name: 'PatientMessages',
  props: {
    messages: Array
  },
  methods:{
    //go to reply page
    goToReply(){
      router.push({path:"/SendMessage"});
    }
  }
}
</script>

