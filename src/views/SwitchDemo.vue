<template>
  <h1>开关 Switch</h1>
  <h2>演示</h2>
  <hr />
  <div>
    <div>基础用法</div>
    <Switch v-model:value="active"></Switch>
  </div>
  <hr />
  <div>
    <div>禁用</div>
    <p>开关可以被禁用。</p>
    <Switch disabled>不许点</Switch>
  </div>
</template>

<script lang="ts" setup>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
const active = ref(false);
</script>

<style lang="scss" scoped></style>
