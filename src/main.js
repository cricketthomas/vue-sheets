import Vue from 'vue';
import App from './App.vue';
import Gapi from './Gapi.vue';

Vue.component('google-api', Gapi, require('./Gapi'))
new Vue({
  el: '#app',
  render: h => h(App)
})



