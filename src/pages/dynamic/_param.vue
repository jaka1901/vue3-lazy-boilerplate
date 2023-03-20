<template>
  <main>{{ param }}</main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const param = ref("");

onMounted(() => {
  param.value = route.params.param;
});
</script>
