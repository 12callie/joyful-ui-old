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
    <Switch disabled></Switch>
  </div>
  <hr />
  <div>
    <div>加载中</div>
    <Switch loading></Switch>
    <Switch
      :value="active"
      :loading="loading"
      @update:value="handleUpdateValue"
    ></Switch>
  </div>
  <hr />
</template>

<script lang="ts" setup>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
const active = ref(false);
const loading = ref(false);
const handleUpdateValue = (value: boolean) => {
  loading.value = true;
  setTimeout(() => {
    active.value = value;
    loading.value = false;
  }, 2000);
};
</script>

<style lang="scss" scoped></style>
