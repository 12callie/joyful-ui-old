<template>
  <div class="content">
    <h1>Joyful UI</h1>
    <p>一个 Vue 3 组件库</p>
    <p>提供了一些常用的组件，使用 TypeScript</p>
    <p>有点意思</p>
    <div class="actions">
      <Button>换个主题</Button>
      <router-link to="/doc/install"><Button>开始使用</Button></router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "../lib/Button.vue";
</script>

<style lang="scss" scoped>
@import "../assets/styles/common.scss";
.content {
  padding: 64px 16px 0;
  h1 {
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 18px;
    color: $title-color;
  }
  p {
    padding: 4px 0;
  }
  .actions {
    margin-top: 16px;
  }
}
</style>
