<template>
  <h1>对话框 Dialog</h1>
  <h2>演示</h2>
  <hr />
  <div>
    <div>基础用法</div>
    <Button @click="openDialog">打开对话框</Button>
    <Dialog v-model:dialogVisible="dialogVisible" :ok="f1" :cancel="f2" />
  </div>
  <hr />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
const dialogVisible = ref(false);
const openDialog = () => {
  dialogVisible.value = true;
};
const f1 = () => {
  console.log("ok");
  return false;
};
const f2 = () => {
  console.log("cancel");
};
</script>

<style lang="scss" scoped></style>
