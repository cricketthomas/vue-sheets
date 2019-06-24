<template>
  <div>
    <div>
        Data from first form: 
      {{ testDataFromChildTest }}
      <h6>enter email</h6>
      <input type="text" v-model="email">
      <p :v-bind="email"> {{ email }}</p>
    </div>
    <button @click="printAllData">Print All Data</button>
  </div>
</template>

<script>
export default {
  props: ["testDataFromChildTest"],

  data() {
    return {
      email: ""
    };
  },

  methods: {

      printAllData(){
          let data =  {
              oldForm: this.testDataFromChildTest.myString,
              email: this.email,
          }
          return console.log(data)
      }
      
  }
};
</script>

