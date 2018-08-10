<template>
  <div id="axios">
    <h1>Sheet Data</h1>
    <input type="search" v-model="search" placeholder="Search Data" />

    <div v-for="row in filteredSheets" class="sheets">
      Date: {{row.Date}} Origin of Hack: {{row.Country}}
      <a v-html="row.URL" href="row.URL">{{row.URL}}</a>

    </div>


  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  Vue.prototype.$http = axios;

  export default {
    data() {
      return {
        info: null,
        sheets: [],
        search: ""
      }
    },
    mounted() {
      axios
        .get('https://sheetdb.io/api/v1/5b6da57ab78ee')
        //.then(response => (this.sheet = response))
        .then(response => (this.sheets = response.data))
        .catch(error => console.log(error))
      /*
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.bpi))
        .catch(error => console.log(error))
      
              .get('https://api.coindesk.com/v1/bpi/currentprice.json')
              .then(response => (this.info = response.data.bpi))
              .catch(error => console.log(error)) */
    },

    filters: {

    },
    computed: {
      filteredSheets: function () {
        let searching = (this.search || "").toLowerCase()
        return this.sheets.filter(function (item) {
          let date = (item.Date || "").toLowerCase()
          let urls = (item.URL || "").toLowerCase()
          let country = (item.Country || "").toLowerCase()
          return date.indexOf(searching) > -1 || urls.indexOf(searching) > -1 || country.indexOf(searching) > -1
        })
      }
    }
  }

</script>

<style>
  h1 {
    justify-content: center;
    display: flex;
  }

  .sheets {
    color: red;

  }

</style>
