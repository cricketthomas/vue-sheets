<template>
  <div>
    <h1 class="title is-4">Details Page</h1>
    <div class="tile is-20 is-vertical" v-show="isVisible">
      <geo-chart class="container" :data="chartData"></geo-chart>
      <div class="tileSize container">
        <ul class="tile is-child notification is-primary">
          <button class="delete" @click="close" aria-label='close'></button>
          <h4 class="title is-5">Details for this record: </h4>
          <li> Site Breached:
            <a v-bind:href="$route.params.url" v-html="$route.params.url">{{$route.params.url}}</a>
          </li>
          <li>Hacker: {{ $route.params.hacker }}</li>
          <li>Server: {{ $route.params.server }}</li>
          <li>OS: {{ $route.params.os }}</li>
          <li>Date: {{ $route.params.date }}</li>
          <li>Nation/Region: {{ $route.params.country }}</li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import App from './App.vue';
  import List from './List.vue';
  import Chart from './Chart.vue';

  export default {
    props: ['sheets'],
    data() {
      return {
        isVisible: true,
        filteredCountry: '',
        chartData: [],

      }

    },
    methods: {
      close() {
        this.isVisible = false;
        window.history.back()
      },


      sorting() {
        if (this.$route.params.country === 'Africa') {
          this.filteredCountry = this.$route.params.country;
          console.log(this.filteredCountry);
          this.chartData.push(
            ["Algeria", 8],
            ["Angola", 8],
            ["Benin", 8],
            ["Botswana", 8],
            ["Burkina", 8],
            ["Burundi", 8],
            ["Cameroon", 8],
            ["Cape Verde", 8],
            ["Central African Republic", 8],
            ["Chad", 8],
            ["Comoros", 8],
            ["Congo", 8],
            ["Congo, Democratic Republic of", 8],
            ["Djibouti", 8],
            ["Egypt", 8],
            ["Equatorial Guinea", 8],
            ["Eritrea", 8],
            ["Ethiopia", 8],
            ["Gabon", 8],
            ["Gambia", 8],
            ["Ghana", 8],
            ["Guinea", 8],
            ["Guinea-Bissau", 8],
            ["Ivory Coast", 8],
            ["Kenya", 8],
            ["Lesotho", 8],
            ["Liberia", 8],
            ["Libya", 8],
            ["Madagascar", 8],
            ["Malawi", 8],
            ["Mali", 8],
            ["Mauritania", 8],
            ["Mauritius", 8],
            ["Morocco", 8],
            ["Mozambique", 8],
            ["Namibia", 8],
            ["Niger", 8],
            ["Nigeria", 8],
            ["Rwanda", 8],
            ["Sao Tome and Principe", 8],
            ["Senegal", 8],
            ["Seychelles", 8],
            ["Sierra Leone", 8],
            ["Somalia", 8],
            ["South Africa", 8],
            ["South Sudan", 8],
            ["Sudan", 8],
            ["Swaziland", 8],
            ["Tanzania", 8],
            ["Togo", 8],
            ["Tunisia", 8],
            ["Uganda", 8],
            ["Zambia", 8],
            ["Zimbabwe", 8],
          );
        } else if (this.$route.params.country === "Asia") {
          this.chartData.push(
            ["Afghanistan", this.$route.params.encoding],
            ["Bahrain", this.$route.params.encoding],
            ["Bangladesh", this.$route.params.encoding],
            ["Bhutan", this.$route.params.encoding],
            ["Brunei", this.$route.params.encoding],
            ["Burma", this.$route.params.encoding],
            ["Cambodia", this.$route.params.encoding],
            ["China", this.$route.params.encoding],
            ["East Timor", this.$route.params.encoding],
            ["India", this.$route.params.encoding],
            ["Indonesia", this.$route.params.encoding],
            ["Iran", this.$route.params.encoding],
            ["Iraq", this.$route.params.encoding],
            ["Israel", this.$route.params.encoding],
            ["Japan", this.$route.params.encoding],
            ["Jordan", this.$route.params.encoding],
            ["Kazakhstan", this.$route.params.encoding],
            ["Korea, North", this.$route.params.encoding],
            ["Korea, South", this.$route.params.encoding],
            ["Kuwait", this.$route.params.encoding],
            ["Kyrgyzstan", this.$route.params.encoding],
            ["Laos", this.$route.params.encoding],
            ["Lebanon", this.$route.params.encoding],
            ["Malaysia", this.$route.params.encoding],
            ["Maldives", this.$route.params.encoding],
            ["Mongolia", this.$route.params.encoding],
            ["Nepal", this.$route.params.encoding],
            ["Oman", this.$route.params.encoding],
            ["Pakistan", this.$route.params.encoding],
            ["Philippines", this.$route.params.encoding],
            ["Qatar", this.$route.params.encoding],
            ["Russian Federation", this.$route.params.encoding],
            ["Saudi Arabia", this.$route.params.encoding],
            ["Singapore", this.$route.params.encoding],
            ["Sri Lanka", this.$route.params.encoding],
            ["Syria", this.$route.params.encoding],
            ["Tajikistan", this.$route.params.encoding],
            ["Thailand", this.$route.params.encoding],
            ["Turkey", this.$route.params.encoding],
            ["Turkmenistan", this.$route.params.encoding],
            ["United Arab Emirates", this.$route.params.encoding],
            ["Uzbekistan", this.$route.params.encoding],
            ["Vietnam", this.$route.params.encoding],
            ["Yemen", this.$route.params.encoding],
          )
        } else if (this.$route.params.country === "WestEuro" || this.$route.params.country === "EastEuro") {
          this.chartData.push(["Albania", this.$route.params.encoding],
            ["Andorra", this.$route.params.encoding],
            ["Armenia", this.$route.params.encoding],
            ["Austria", this.$route.params.encoding],
            ["Azerbaijan", this.$route.params.encoding],
            ["Belarus", this.$route.params.encoding],
            ["Belgium", this.$route.params.encoding],
            ["Bosnia", this.$route.params.encoding],
            ["Bulgaria", this.$route.params.encoding],
            ["Croatia", this.$route.params.encoding],
            ["Cyprus", this.$route.params.encoding],
            ["Czech Republic", this.$route.params.encoding],
            ["Denmark", this.$route.params.encoding],
            ["Estonia", this.$route.params.encoding],
            ["Finland", this.$route.params.encoding],
            ["France", this.$route.params.encoding],
            ["Georgia", this.$route.params.encoding],
            ["Germany", this.$route.params.encoding],
            ["Greece", this.$route.params.encoding],
            ["Hungary", this.$route.params.encoding],
            ["Iceland", this.$route.params.encoding],
            ["Ireland", this.$route.params.encoding],
            ["Italy", this.$route.params.encoding],
            ["Latvia", this.$route.params.encoding],
            ["Liechtenstein", this.$route.params.encoding],
            ["Lithuania", this.$route.params.encoding],
            ["Luxembourg", this.$route.params.encoding],
            ["Macedonia", this.$route.params.encoding],
            ["Malta", this.$route.params.encoding],
            ["Moldova", this.$route.params.encoding],
            ["Monaco", this.$route.params.encoding],
            ["Montenegro", this.$route.params.encoding],
            ["Netherlands", this.$route.params.encoding],
            ["Norway", this.$route.params.encoding],
            ["Poland", this.$route.params.encoding],
            ["Portugal", this.$route.params.encoding],
            ["Romania", this.$route.params.encoding],
            ["San Marino", this.$route.params.encoding],
            ["Serbia", this.$route.params.encoding],
            ["Slovakia", this.$route.params.encoding],
            ["Slovenia", this.$route.params.encoding],
            ["Spain", this.$route.params.encoding],
            ["Sweden", this.$route.params.encoding],
            ["Switzerland", this.$route.params.encoding],
            ["Ukraine", this.$route.params.encoding],
            ["United Kingdom", this.$route.params.encoding],
            ["Vatican City", this.$route.params.encoding],
          )
        } else if (this.$route.params.country === "SouthAmerica") {
          this.chartData.push(
            ["Argentina", this.$route.params.encoding],
            ["Bolivia", this.$route.params.encoding],
            ["Brazil", this.$route.params.encoding],
            ["Chile", this.$route.params.encoding],
            ["Colombia", this.$route.params.encoding],
            ["Ecuador", this.$route.params.encoding],
            ["Guyana", this.$route.params.encoding],
            ["Paraguay", this.$route.params.encoding],
            ["Peru", this.$route.params.encoding],
            ["Suriname", this.$route.params.encoding],
            ["Uruguay", this.$route.params.encoding],
            ["Venezuela", this.$route.params.encoding],
          )
          //this.asiaList.forEach(function (element) {
          //console.log(element);
          //var asiaListNew = Array.from(element);

          //this.asiaListNew.push(5);

          //this.chartData.push(asiaListNew)
          //console.log(this.chartData)
          //});
          //console.log(this.asiaListNew)
          //        console.log("ok")

        } else {
          this.chartData.push([this.$route.params.country, this.$route.params.encoding])
        }
      }
    },
    mounted() {
      this.sorting();
    },
    computed: {


    }
  }

</script>
<style>
  .tileSize {
    width: 90vw;

  }

</style>
