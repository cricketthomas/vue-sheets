<template>
  <div id="app">
    <google-api v-bind:sheets="sheets"></google-api>
    <br/>
    <charts v-bind:sheets="sheets"></charts>
  </div>

</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import EventBus from './event-bus.js';
  Vue.prototype.$http = axios;
  export default {
    data() {
      return {
        sheets: [],
      }
    },
    mounted() {
      axios
        .get('https://api.myjson.com/bins/bwjkk')
        //'https://sheetdb.io/api/v1/5b6da57ab78ee'
        .then(response => (this.sheets = response.data))
        .catch(error => console.log(error))
    },
  }
</script>

<style>
  #app {
    justify-content: center;
    display: flex;
  }
</style>