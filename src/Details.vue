<template>
  <div>
    <h1>Details Page</h1>
    <p>ID for this record is: {{$route.params.id}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    props: ['sheets', 'id'],
    data() {
      return {

      }
    }
  }

</script>
