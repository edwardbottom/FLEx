<template>
  <div class="Login">
  </br>
    <b-row class="justify-content-md-center">
      <h1>FLEx</h1>
    </b-row>
    <b-row class="justify-content-md-center">
      <img width="100px" height="80px" src="../images/dumbbell.png"></img>
    </b-row>
    <!--username input -->
    <b-row class="justify-content-md-center">
      <b-card border-variant="secondary">
          <p>Username or email address</p>
          <b-form-input v-model="username" type="text" v-on:keyup.enter="goToUserPage()"></b-form-input>
        <br>
        <b-row>
          <b-col>
          <p align="left">Password</p>
        </b-col>
      </b-row>
        <!--password input -->
          <b-form-input v-on:keyup.enter="goToUserPage" v-model="password" type="password"></b-form-input> 
        <br>
          <b-button class="btn-block" 
          v-on:click="goToUserPage()" 
          variant="success">Sign In</b-button>
        <br>
          <b-row>
            <b-col>
          <p>New to FLEx?</p>
        </b-col>
        <b-col>
          <!--register button -->
          <b-button variant="success" v-on:click="goToCreateAccount()" v-on:keyup.enter="goToUserPage()">Create an account</b-button>
        </b-col>
      </b-row>
      </b-card>
    </b-row>     
  </div>
</template>

<script>
    import PageHeader from "./PageHeader.vue";
    import router from '../router';
export default {
  name: 'Login',
  props: {
    msg: String
  },
  components: {
    PageHeader
  },
  data(){
    return{
      username: '',
      password: ''
    }
  },
  methods:{
    //go to register page
    goToCreateAccount()
    {
      router.push({path:"/CreateAccount"});
    },
    goToUserPage()
    {
      //if username or password are blank
      if(this.username == "")
      {
        alert("username is blank")
        return;
      } else if (this.password == ""){
        alert("password is blank")
        return;
      }
      //check if login is vlaud
      var self = this
      this.axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password
      })
      .then(function (response) {
        //if success, create a session
        if(response.data.status == "success"){
          self.$session.start();
          self.$session.set("username", response.data.username);
          self.$session.set("isValidated", response.data.isValidated);
          self.$session.set("accountType", response.data.accountType);
          self.$session.set("therapistId", response.data.therapistId);
          self.$session.set("providerId", response.data.providerId);
          //determine which account is logging in 
          if(response.data.accountType == "therapist"){
            router.push({path:"/doctor"});
          }
          else{
            router.push({path:"/UserHome"});
          }
        }
        //invalud login
        else{
          alert("not a valid login");
        }
      })
      .catch(function (error) {
        //console.log(error);
      });
    }
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