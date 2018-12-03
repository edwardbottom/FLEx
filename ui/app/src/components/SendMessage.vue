<template>
  <div>
    <!--render headers -->
    <PageHeader v-if="isTherapist" ok="true"></PageHeader>
    <PageHeader v-else></PageHeader> 
    <center>
    <b-col cols="6">
    <!--form to send messages -->
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
                <!--sender and receiver information -->
                <b-form-input v-model="receiver" type="text" placeholder="Receiver Username"></b-form-input><br/>
                <b-form-input v-model="message" type="text" placeholder="Message"></b-form-input><br/>
                <!--send information -->
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
  //set account type
  created(){
      if(this.$session.get("accountType") == "therapist"){
        this.isTherapist = true;
      }
      else{
        this.isTherapist = false;
      }
  },
  methods:{
    //sends the message to the database
    sendMessage(){
      var self = this
      this.axios.post('http://localhost:3000/sendMessage', {
        receiver: self.receiver,
        message: self.message,
        sender: self.$session.get("username")
      })
      .then(function (response) {
        if(response.data == "success"){
          alert("message sent");
        }
        else{
          alert(response.data);
        }
      })
      .catch(function (error) {
        //console.log(error);
      });
    }
  }
}
</script>

