<template>
  <div>
    <PageHeader v-if="isTherapist" ok="true"></PageHeader>
    <PageHeader v-else></PageHeader> 
    <center>
    <b-col cols="6">
    <b-card no-body>
      <b-nav pills slot="header">
        <center>
          <h3>Send Message {{words}}</h3>
        </center>
      </b-nav>
        <p class="card-text">
          <b-card>
            <b-card-body>
              <ul class="card-text">
                <b-form-input v-model="receiver" type="text" placeholder="Receiver Username"></b-form-input><br/>
                <b-form-input v-model="message" type="text" placeholder="Message"></b-form-input><br/>
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
      isTherapist:Boolean
    }
  },
  beforeMount(){
      if(this.$session.get("accountType") == "therapist"){
        this.isTherapist = true;
      }
  },
  methods:{
    sendMessage(){
      var self = this
      this.axios.post('http://localhost:3000/sendMessage', {
        receiver: self.receiver,
        message: self.message,
        sender: self.$session.get("username")
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

