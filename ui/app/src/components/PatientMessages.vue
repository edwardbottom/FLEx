<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="success">New Message from: Joe</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ul class="card-text">
            <li>Joe: hi</li>
            <b-form-input v-model="text1" type="text" placeholder="Message"></b-form-input>
            <b-button>I am a Button</b-button>
          </ul>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'PatientMessages'
}
</script>

