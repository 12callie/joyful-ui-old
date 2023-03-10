<template>
  <div class="layout">
    <top-nav class="nav" />
    <div class="content">
      <Aside class="aside" />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TopNav from "../components/TopNav.vue";
import Aside from "../components/Aside.vue";
</script>

<style lang="scss" scoped>
.layout {
  border: 1px solid red;
  height: 100vh;

  display: flex;
  flex-direction: column;
  .nav {
    flex-shrink: 0;
  }
  .content {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    .aside {
      flex-shrink: 0;
    }
    main {
      padding: 32px 24px 56px 56px;
    }
  }
}
</style>
