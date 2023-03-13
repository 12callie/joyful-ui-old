<template>
  <h1>对话框 Dialog</h1>
  <h2>演示</h2>
  <hr />
  <div>
    <div>基础用法</div>
    <Button @click="openDialog">打开对话框</Button>
    <Dialog
      v-model:dialogVisible="dialogVisible"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
      title="标题"
      content="你确定"
      negative-text="取消"
      positive-text="好的"
    />
  </div>
  <hr />
  <div>
    <div>点击遮罩</div>
    <p>我觉得用户应该聪明到点遮罩没用的时候就去点确认了。</p>
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
