<template>
  <div>


    <h2>Donut</h2>
    <div class="card">
          <p v-for="row in hackers">{{row}}, count: {{row.length}}</p>
      <chartjs-doughnut v-bind:hackers="hackers" v-bind:datasets="datasets" v-bind:option="option" v-bind:bind="true" />
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
        labels: [this.hackers],
        datasets: [{
          labels: this.hackers,
          data: this.hackers.length,
          backgroundColor: ["#b388ff", "#82b1ff", "#80d8ff"],
          hoverBackgroundColor: ["#673ab7", "#2196f3", "#03a9f4"]
        }],
        option: {}
      };
    },
    computed: {
      hackers() {
        return [...new Set(this.sheets.map(h => h.hacker))]
      }
    }

  };
</script>

<style scoped>
</style>