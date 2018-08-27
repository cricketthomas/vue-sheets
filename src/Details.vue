<template>
  <div>
    <h1 class="title is-4">Details Page</h1>
    <div class="tile is-20 is-vertical" v-show="isVisible">


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
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import App from './App.vue';
  import List from './List.vue';

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