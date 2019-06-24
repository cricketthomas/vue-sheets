<template>
  <div>
    <div>
      test data with props:
      {{ testData }}
      <input type="test" v-model="testData.myString"/>
    </div>
    <fieldset>
      <h2>Nested child</h2>
      <NestTest :testDataFromChildTest="testDataFromChildTest"/>
    </fieldset>
  </div>
</template>

<script>
import NestTest from "./nestTest.vue";

export default {
  props: ["testData"],
  data() {
    return {
      testDataFromChildTest: this.testData
    };
  }
};
</script>
