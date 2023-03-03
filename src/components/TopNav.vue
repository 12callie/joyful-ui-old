<template>
  <div>
    {{ s }}
    <button @click="add">+1</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const s = ref<number>(1);
function add() {
  s.value += 1;
}
</script>


<style scoped>
</style>
