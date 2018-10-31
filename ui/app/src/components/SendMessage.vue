<template>
  <div>
    <PageHeader></PageHeader>
    <center>
    <b-col cols="6">
    <b-card no-body>
      <b-nav pills slot="header">
        <center>
          <h3>Send Message</h3>
        </center>
      </b-nav>
        <p class="card-text">
          <b-card>
            <b-card-body>
              <ul class="card-text">
                <b-form-input v-model="receiver" type="text" placeholder="Receiver Username"></b-form-input><br/>
                <b-form-input v-model="message" type="text" placeholder="Message"></b-form-input><br/>
                <b-form-input v-model="security" type="text" placeholder="Security"></b-form-input><br/>
                <b-button v-on:click="sendMessage()">Send</b-button>
              </ul>
            </b-card-body>
          </b-card>
        </p>
    </b-card>
  </b-col>
</center>
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue"

export default {
  name: 'SendMessage',
  components: {
    PageHeader
  },
  data(){
    return{
      receiver: '',
      message: '',
      security: ''
    }
  },
  methods:{
    sendMessage(){
      var self = this
      this.axios.post('http://localhost:3000/sendMessage', {
        receiver: self.receiver,
        message: self.message,
        sender: self.$session.get("username"),
        id: "accordion" + self.security
      })
      .then(function (response) {
        console.log(response);
        if(response.data == "success"){
          alert("message sent");
        }
        else{
          alert("message not sent");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

