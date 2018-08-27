<template>
  <div id="app">
    <h1 class="title is-3">Websites Hacked Explorer</h1>
    <div class="tabs is-centered">
      <ul>
        <li>
          <router-link class='link' to='/'>Home</router-link>
        </li>
        <li>
          <router-link class='link' to='/list'>All hacks list</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>

    <chart-bar> </chart-bar>


    <footer class="footer content has-text-centered">Simple app. Made with Vue.</footer>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import Chart from './Chart.vue';

  Vue.prototype.$http = axios;
  export default {
    components: {

    },
    data() {
      return {
        sheets: [],
      }
    },
    mounted() {
      axios.get('https://api.myjson.com/bins/bwjkk') //'https://sheetdb.io/api/v1/5b6da57ab78ee'
        .then(response => (this.sheets = response.data)).then(response => (this.hackerCount = response.data)).catch(
          error => console.log(error))
    },
  }
</script>
<style>
  h1,
  .link {
    justify-content: center;
    display: flex;
  }
</style>