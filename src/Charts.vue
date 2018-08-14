<template>
  <div>
    <h2>Donut</h2>
    <button @click="notice">Button</button>
    <div class="card">
      <chartjs-doughnut v-bind:labels="labels" v-bind:datasets="datasets" v-bind:option="option" v-bind:bind="true" :options="{responsive: false, maintainAspectRatio: false}"
        :width="900" :height="700" />
    </div>
    <!--<p v-for="row in hackers">{{row}}, count: {{row.length}}</p> -->
  </div>
</template>

<script>
  //ill have to import it here using vbind?
  import Gapi from './Gapi.vue';

  export default {
    props: ["sheets"],
    data() {
      return {
        chartInfo: {},
        hackersArray: [],
        hackCount: [],
        labels: [],

        //labels: ["Foo", "Bar", "Baz"],
        datasets: [{
          data: [1,2,3,4,5,6,7,8],
          backgroundColor: ["#673ab7", "#2196f3", "#03a9f4", "red","green","yellow","black","brown","cyan"],
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
        this.chartInfo = (this.sheets);
        let hackersArray = [];
        let hackCount = [];
        for (let key in this.chartInfo) {
          if (this.chartInfo.hasOwnProperty(key)) {
            this.hackersArray.push(JSON.stringify(this.chartInfo[key].hacker));
            this.hackCount.push(JSON.stringify(this.chartInfo[key].encoding));
      
          }
        }
        //this.data = [...new Set(this.hackCount)];  
        this.data = this.hackCount.slice(275);
        this.labels = [...new Set(this.hackersArray)];
        this.labels = this.labels.slice(103);
        
        //this.data = labels.map(function (word) {
        //return word.length;})
        //this.countArr.push(JSON.stringify(this.chartData[key].hacker.length));
        //console.log(this.labels);
      },

  
      notice() {
        alert(typeof this.data);
      }

    },
    created() {
      this.test()

    }
  };
</script>

<style scoped>
</style>