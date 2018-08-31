<template>
  <section class="container">
        <h1 class=" title is-4">Summary</h1>
        <bar-chart  class="container" :data="this.ArrayNew" xtitle="Region" ytitle="Number of Hacks" width="100vw"
          height="60vh"></bar-chart>
        <!--
//need regions, or continents.
  <geo-chart :data="data" :library="{region: 'US', resolution: 'provinces'}"></geo-chart>
 -->
  </section>
</template>

<script>
  import App from './App.vue';
  import List from './List.vue';
  import Chart from './Chart.vue';
  export default {
    props: ['sheets'],
    name: 'VueChartKick',
    data() {
      return {
        ArrayNew: [
          ['Africa', 8],
          ['America', 1],
          ['Asia', 36],
          ['Australia', 2],
          ['Bhutan', 2],
          ['Brazil', 13],
          ['Bulgaria', 1],
          ['Canada', 3],
          ['China', 3],
          ['EastEuro', 5],
          ['France', 24],
          ['Germany', 2],
          ['Hong Kong', 1],
          ['India', 4],
          ['Indonesia', 19],
          ['Italy', 4],
          ['Netherlands', 5],
          ['Oman', 1],
          ['Oseania', 1],
          ['Paraguay', 1],
          ['Poland', 1],
          ['Romania', 1],
          ['SouthAmerica', 30],
          ['Thailand', 6],
          ['Ukraine', 4],
          ['United Kingdom', 10],
          ['United States', 48],
          ['Unknown', 46],
          ['WestEuro', 9]
        ]
      }
    }
  }

  //this needs to be for the value of the countries  
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/inde

</script>

<style scoped>
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
