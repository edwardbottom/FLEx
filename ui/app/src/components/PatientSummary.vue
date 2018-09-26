<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="success">John</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ul class="card-text">
            <li>Age: 37</li>
            <li>Height: 6'0 Weight: 190 lbs</li>
            <li>1st Visit: 1/1/1999 Last Visit: 1/1/1997</li>
            <li>injury: Broken Shoulder</li>
            <li>Current Status: 3/10 Average Status: 5/10</li>
            <li>last used app: 4/4/2017</li>
            <li>insurance provider: United Health</li>
            <li>Contact 555-555-5555</li>
            <li>Next Visit: never (lol)</li>
          </ul>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="danger">John</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ul class="card-text">
            <li>Age: 37</li>
            <li>Height: 6'0 Weight: 190 lbs</li>
            <li>1st Visit: 1/1/1999 Last Visit: 1/1/1997</li>
            <li>injury: Broken Shoulder</li>
            <li>Current Status: 3/10 Average Status: 5/10</li>
            <li>last used app: 4/4/2017</li>
            <li>insurance provider: United Health</li>
            <li>Contact 555-555-5555</li>
            <li>Next Visit: never (lol)</li>
          </ul>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion3 variant="warning">John</b-btn>
      </b-card-header>
      <b-collapse id="accordion3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ul class="card-text">
            <li>Age: 39</li>
            <li>Height: 6'0 Weight: 190 lbs</li>
            <li>1st Visit: 1/1/1999 Last Visit: 1/1/1997</li>
            <li>injury: Broken Shoulder</li>
            <li>Current Status: 3/10 Average Status: 5/10</li>
            <li>last used app: 4/4/2017</li>
            <li>insurance provider: United Health</li>
            <li>Contact 555-555-5555</li>
            <li>Next Visit: never (lol)</li>
          </ul>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'PatientSummary',
  props: {
    summaries:[
      {
        age: Number,
        height: String,
        weight: Number,
        injury: String,
        currentStatus: Number,
        averageStatus: Number,
        lastUsed: String,
        insuraceProvider: String,
        contatct: String,
        nextVisit: String
      }
    ]
  }
}
</script>

