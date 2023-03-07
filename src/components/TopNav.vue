<template>
  <div class="top-nav">
    <div class="nav-content">
      <router-link to="/" class="logo"
        ><img src="../assets/img/logo.png" alt="logo"
      /></router-link>
      <svg class="icon" @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>

    <ol class="menu-content" v-if="menuVisible">
      <li>深色</li>
      <li><router-link to="/">首页</router-link></li>
      <li>文档</li>
      <li><router-link to="/doc/intro">介绍</router-link></li>
      <li><router-link to="/doc/install">安装</router-link></li>
      <li><router-link to="/doc/usage">在 SFC 中使用</router-link></li>
      <li>组件</li>
      <li><router-link to="/components/button">按钮 Button</router-link></li>

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
@import "../assets/styles/common.scss";
.top-nav {
  border-bottom: 1px solid $border-color;
  .nav-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    position: relative;
    .logo {
      &:focus {
        outline-style: none;
      }
      img {
        height: 64px;
      }
    }

    svg {
      position: absolute;
      right: 16px;
      top: auto;
    }
  }
}
</style>
