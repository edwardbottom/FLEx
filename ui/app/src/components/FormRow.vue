<template>
  <!--renders a single form input box -->
  <div class="FormRow">        
        <b-row class="justify-content-md-center">
          <b-col cols="2">
            <p>{{ msg }}</p>            
          </b-col>
          <b-col cols="1" align="center"><p>:</p></b-col>
          <b-col cols="2">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>  
    </div>
</template>

<script>
export default {
  name: 'FormRow',
  props: {
    msg: String,
    //state_data:String
  }
}
</script>