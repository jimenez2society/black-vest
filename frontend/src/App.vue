<script setup lang="ts">
import { onBeforeMount } from "vue";

onBeforeMount(() => {
  let userId: string = "46582945069383405";
  let hostPath = window.location.hostname;
  let subDomain = hostPath.split(".");
  console.log(subDomain);
  if (subDomain.length <= 1) {
    window.location.href = `http://${userId}.localhost:5173`;
  }
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
