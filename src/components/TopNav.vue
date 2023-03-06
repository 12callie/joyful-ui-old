<template>
  <div class="top-nav">
    <div class="nav-content">
      <img class="logo" src="../assets/img/logo.png" alt="logo" />
      <svg class="icon" @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>

    <ol class="menu-content" v-if="menuVisible">
      <li>深色</li>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/doc">文档</router-link></li>
      <li><router-link to="/doc">组件</router-link></li>
      <li><a href="https://github.com">GitHub</a></li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuVisible = ref(false);
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};
</script>


<style lang="scss" scoped>
@import "../style.scss";
.top-nav {
  border-bottom: 1px solid $border-color;
  .nav-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 16px;

    .logo {
      margin: 0 auto;
      height: 64px;
    }
  }
}
</style>
