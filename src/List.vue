<template>
  <div class="container">
    <h1 class="title is-5">
      Sheet Data | Total: {{this.sheets.length}}</h1>
    <input type="text" v-model="search" placeholder="Search Data" class="input container control is-loading myInput" />
    <p class="title is-6 myP">Results: {{filteredSheets.length}}</p>
    <table class="table is-centered">
      <tr>
        <th>Date:</th>
        <th>Hack Country of Origin:</th>
        <th>Information:</th>
      </tr>
      <tr v-for="row in filteredSheets">
        <td>{{row.date}}</td>
        <td>{{row.country}}</td>
        <td>
          <router-link :to="{ name: 'details', params: {url: row.url, hacker: row.hacker, server: row.server, os: row.os, date: row.date, country: row.country, encoding: row.encoding}}">
            view details</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import App from './App.vue'
  Vue.prototype.$http = axios;
  export default {

    data() {
      return {
        sheets: [],
        search: "",

      }
    },
    created() {
      axios.get('https://api.myjson.com/bins/1h3wyk') //'https://sheetdb.io/api/v1/5b6da57ab78ee'
        .then(response => (this.sheets = response.data)).then(response => (this.hackerCount = response.data)).catch(
          error => console.log(error))
    },


    computed: {
      filteredSheets() {
        let searching = (this.search || "").toLowerCase().trim()
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
      listFormatting() {
        var result = this.sheets.map(a => a.country); //mapping all
        //console.log(result)
        var resultNum = this.sheets.map(a => a.encoding)
        var newArray = result.map((e, i) => "['" + e + "'" + ", " + resultNum[i] + "]");

        function duplicates(array) {
          let x = arr.filter(function (element, index, self) {
            return index == self.indexOf(element);
          });
          return x
        }
        newArray = duplicates(newArray)
        for (var i = 0; i < newArray.length; i++) {
          newArray[i] = newArray[i].replace(/"/g, '');
        }
        let string = JSON.stringify(newArray)
        string = string.replace(/"/g, '');
        console.log(string)
        return string
      }
    },

    methods: {


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
    justify-content: center;
    display: flex;
    background: whitesmoke;
    padding: 1em;
  }

  .table {
    margin-left: auto;
    margin-right: auto;
    width: 50vw;

  }

  .myInput {
    width: 50vw;
    justify-content: center;
    display: flex;
  }

  .myP {
    justify-content: center;
    display: flex;
  }

</style>
