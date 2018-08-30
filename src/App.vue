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
    <pie-chart  v-show="false"  :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart>
    <router-view></router-view>
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
     Chart

    },
    data() {
      return {
        
      }
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