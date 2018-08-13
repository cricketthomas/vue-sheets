import Vue from 'vue';
import App from './App.vue';
import Gapi from './Gapi.vue';
import Charts from './Charts.vue';
import EventBus from './event-bus.js';

import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);


Vue.component('google-api', Gapi, require('./Gapi'))
Vue.component('charts', Charts, require('./Charts'))


new Vue({
  el: '#app',
  render: h => h(App)
})
