<template>
  <h1>标签页 Tabs</h1>
  <p>在同一块区域切换内容。</p>
  <h2>演示</h2>
  <hr />
  <div>
    <div>基础用法</div>
    <Tabs>
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts" setup>
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
</script>

<style lang="scss" scoped></style>
