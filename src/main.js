import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import "chart.js";
import "hchs-vue-charts";


//pages components
import Details from './Details.vue';
import List from './List.vue';
import Chart from './Chart.vue';



Vue.use(VueRouter);
Vue.use(window.VueCharts);
Vue.component('chart-bar', Chart);

//routes
const routes = [{
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: 'list/details/:url/:hacker/:server/:os/:date',
    name: 'details',
    component: Details,
    props: true
  }
]
const router = new VueRouter({
  routes: routes,
  //mode: 'history'
})


new Vue({
  props: ['sheets'],
  components: {
    Chart
  },
  el: '#app',
  router,
  render: h => h(App)
})