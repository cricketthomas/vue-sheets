import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import "chart.js";
import "hchs-vue-charts";
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import NestTest from './nestTest.vue';

//pages components
import Details from './Details.vue';
import List from './List.vue';
import Chart from './Chart.vue';
import Test from './test.vue';

Vue.use(VueRouter);
Vue.use(window.VueCharts);
Vue.use(VueChartkick, {
  Chartkick
})
Vue.use(VueChartkick);

Vue.component('charts', Chart);
Vue.component('Test', Test);
Vue.component('NestTest', NestTest);

//routes
const routes = [{
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/details/:url/:hacker/:server/:os/:date/:country/:encoding',
    name: 'details',
    component: Details,
    props: true
  },
  {
    path: '/',
    name: 'Home',
    component: Chart
  }

]
const router = new VueRouter({
  routes: routes,
  //mode: 'history'
})


new Vue({
  props: ['sheets'],
  components: {
    Chart,
    List,
    Details, 
    Test
  },
  el: '#app',
  router,
  render: h => h(App)
})
