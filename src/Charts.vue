<template>
  <div>


    <h2>Donut</h2>
    <div class="card">
      <chartjs-doughnut v-bind:datasets="datasets" v-bind:labels="labels" v-bind:option="option" v-bind:bind="true" />
    </div>
    <p v-for="row in hackers">{{row}}, count: {{row.length}}</p>
  </div>
  </div>
</template>

<script>
  //ill have to import it here using vbind?
  import Gapi from './Gapi.vue';
  export default {
    props: ["sheets"],
    data() {
      return {
        chartData: {},
        labels: ['one', 'two', 'three', "four"],
        datasets: [{
          data: [1, 2, 3, 4],
          //backgroundColor: ["#b388ff", "#82b1ff", "#80d8ff"],
          //hoverBackgroundColor: ["#673ab7", "#2196f3", "#03a9f4"]
        }],
        option: {}
      };
    },
    computed: {
      hackers() {
        return [...new Set(this.sheets.map(h => h.hacker))]
      },

    },
    methods: {
      test() {
        this.chartData = (this.sheets);
        console.log(this.chartData);
      }
    },
    beforeMount() {
      this.test()
    },
  };

</script>

<style scoped>


</style>
