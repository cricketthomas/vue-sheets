<template>
  <div>
    <h1 class="title is-4">Details Page</h1>
    <div class="tile is-20 is-vertical" v-show="isVisible">
      <geo-chart :data="[[ $route.params.country, 44], ['Germany', 23], ['Brazil', 22]]"></geo-chart>
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
        isVisible: true
      }

    },
    methods: {
      close() {
        this.isVisible = false;
      }
    }
  }

</script>
