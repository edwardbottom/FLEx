<template>
  <div>
    <!--page header and date -->
    <PageHeader></PageHeader>
    <b-card no-body>
      <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
        <h3>{{info.date.substring(0,info.date.indexOf("T"))}}</h3>
      </b-nav>
      <center><h3>Pain Rating: {{info.value}}</h3></center>
      <b-card-body id="nav-scroller" ref="content" style="position:relative; height:500px; overflow-y:scroll;">
  <b-container class="bv-example-row" >
    <b-row>
      <b-col cols="6">  
        <center>
          <!--information about exercise -->
          <b-card header="Overview">
          <b>Completed Exercises:</b><br>
                        {{Math.round(info.completedExercises.length/info.exerciseOptions.length * 100)}}%<br>
          <b>Comments: </b><br>
          {{info.reportText}}
        </b-card>
        </center>
      </b-col>
      <b-col cols="6">  
        <center>
          <!--iterate through all exercises -->
        <b-card header="Exercises">
          <b-list-group>
            <div v-for="exercise in this.info.exerciseOptions">
            <!--if exercise is completed -->
            <div v-if="containsObject(exercise,info.completedExercises)">
              <b-list-group-item variant="success">{{exercise.exercise}}: {{exercise.repetitions}}x{{exercise.sets}} </b-list-group-item>
            </div>
            <!--if incomplete -->
            <div v-else>
              <b-list-group-item>{{exercise.exercise}}: {{exercise.repetitions}}x{{exercise.sets}} </b-list-group-item>
            </div>
          </div>
        </b-list-group>
        </b-card>
      </center>
      </b-col>
    </b-row>
</b-container>

      </b-card-body>
    </b-card>
  </div>
</template>


<script>
import router from '../router';
import PageHeader from './PageHeader.vue';

export default {
  name: 'PatientSummary',
  props: {
    summaries: Array
  },
  components:{
    PageHeader
  },
  methods:{
    //checks to see if the list has the object
    containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].exercise === obj.exercise) {
            return true;
        }
    }
    return false;
}
  },
  data () {
    return {
      info: Object,
    }
  },
  //sets info to the exercise info
  created() {
    this.info = this.$session.get("exerciseDetail")
  }
  
}

</script>