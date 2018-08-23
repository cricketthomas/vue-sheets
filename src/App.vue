<template>
  <div id="app">
    <h1>App.Vue Main Page</h1>
    <router-link class='link' to='/'>Main</router-link>
    <router-link class='link' to='/details/10'>Details</router-link>
    <router-link class='link' to='/list'>List</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';

  Vue.prototype.$http = axios;
  export default {
    data() {
      return {
        sheets: [],
        hackerCount: []
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
  h1, .link {
    justify-content: center;
    display: flex;
  }

</style>
