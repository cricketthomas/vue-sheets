import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios';

//pages
import Details from './Details.vue'
import List from './List.vue'

Vue.use(VueRouter)

//routes
const routes = [{
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/sheet/:sheetId/details',
    name: 'details',
    component: Details,
    props: true
  }
]
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
