<template>
  <ol>
    <li v-for="(val, i) in data.data" :key="i">{{ val.title }}</li>
  </ol>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const data = ref({});

onMounted(async () => {
  data.value = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(data.value);
});
</script>
<style lang="scss">
ol{
  margin: 0;

  li{
    list-style-position: inside;
  }
}
</style>