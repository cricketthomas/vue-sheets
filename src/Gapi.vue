<template>
  <div id="axios">
    <h1>Sheet Data
      <br/> Total: {{total}}</h1>
    <input type="search" v-model="search" placeholder="Search Data" class="search" />
    <p>Results: {{filteredSheets.length}}</p>
    <div v-for="row in filteredSheets" class="sheets">
      Date: {{row.date}} Origin of Hack: {{row.country}}
      <a v-bind:href="row.url" v-html="row.url">{{row.url}}</a>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import EventBus from './event-bus.js';
  Vue.prototype.$http = axios;
  export default {
    props: ['sheets'],
    data() {
      return {
        search: "",
      }
    },

    computed: {
      filteredSheets() {
        let searching = (this.search || "").toLowerCase()
        return this.sheets.filter(function (item) {
          let date = (item.date || "").toLowerCase()
          let urls = (item.url || "").toLowerCase()
          let country = (item.country || "").toLowerCase()
          return date.indexOf(searching) > -1 || urls.indexOf(searching) > -1 || country.indexOf(searching) > -1
        })
      },
      total() {
        return this.sheets.length
      },
    }
  }
</script>

<style>
  .search {
    justify-content: right;
    display: flex;
    position: relative;
    width: 100%;
  }

  h1 {
    justify-content: center;
    display: flex;
  }

  .sheets {
    background: whitesmoke;
    padding: 1em;
  }
</style>