<template>
  <div>
    <h3>Messages</h3>
    <div role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-btn block href="#" v-b-toggle.accordion7>New Message from: someone</b-btn>
        </b-card-header>
        <b-collapse id="accordion7" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <ul class="card-text">
              <li> text </li>
              <b-form-input v-model="text1" type="text" placeholder="Message"></b-form-input>
              <b-button>Send</b-button>
            </ul>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientMessages'
  // props:{
  //   messages:[
  //     {
  //       patient: String,
  //       message: String
  //     },
  //     {
  //       patient: String,
  //       message: String
  //     },
  //     {
  //       patient: String,
  //       message: String
  //     }
  //   ]
  // }   
}
</script>

