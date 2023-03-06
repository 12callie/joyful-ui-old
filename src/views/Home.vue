<template>
  <div class="content">
    <h1>Joyful UI</h1>
    <p>一个 Vue 3 组件库</p>
    <p>提供了一些常用的组件，使用 TypeScript</p>
    <p>有点意思</p>
    <div class="actions">
      <button>换个主题</button>
      <router-link to="/doc/get-started"><button>开始使用</button></router-link>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
@import "../style.scss";
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
