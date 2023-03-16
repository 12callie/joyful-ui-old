<template>
  <div class="top-nav">
    <div class="nav-content">
      <router-link to="/" class="logo">
        <img src="../assets/img/logo.png" alt="logo" />
        <span v-if="menuLocation" class="logo-text">Joyful UI</span>
      </router-link>
      <svg v-if="!menuLocation" class="icon" @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
      </svg>
      <div v-if="menuLocation" class="nav-menu">
        <ol>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/joyful/doc">文档</router-link></li>
          <li><router-link to="/joyful/components">组件</router-link></li>
          <li><a href="http://github.com">GitHub</a></li>
        </ol>
      </div>
    </div>
    <div
      class="j-menu-levitation"
      v-if="!menuLocation && levitationMenuVisible"
    >
      <ol class="menu-content">
        <li><router-link to="/">首页</router-link></li>
        <li class="menu-title">文档</li>
        <li><router-link to="/joyful/doc/intro">介绍</router-link></li>
        <li><router-link to="/joyful/doc/install">安装</router-link></li>
        <li>
          <router-link to="/joyful/doc/usage">在 SFC 中使用</router-link>
        </li>
        <li class="menu-title">组件</li>
        <li>
          <router-link to="/joyful/components/button">按钮 Button</router-link>
        </li>
        <li>
          <router-link to="/joyful/components/switch">开关 Switch</router-link>
        </li>
        <li>
          <router-link to="/joyful/components/dialog"
            >对话框 Dialog</router-link
          >
        </li>
        <li>
          <router-link to="/joyful/components/tabs">标签页 Tabs</router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from "vue";

const menuLocation = inject<Ref<boolean>>("menuLocation");
const levitationMenuVisible = ref(false);
const toggleMenu = () => {
  levitationMenuVisible.value = !levitationMenuVisible.value;
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/common.scss";
.top-nav {
  border-bottom: 1px solid $border-color;
  position: relative;

  .nav-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    position: relative;
    .logo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      &:focus {
        outline-style: none;
      }
      img {
        height: 64px;
      }
      .logo-text {
        font-size: 20px;
        margin-left: 4px;
        white-space: nowrap;
      }
    }

    svg {
      position: absolute;
      right: 16px;
      top: auto;
      cursor: pointer;
    }

    .nav-menu {
      font-size: 14px;
      ol {
        display: flex;
        flex-direction: row;
        li {
          padding: 20px;
          white-space: nowrap;

          > a {
            &:hover,
            &.router-link-active {
              color: $theme-color;
            }
          }
        }
      }
    }
  }
  @media (min-width: 500px) {
    .nav-content {
      justify-content: space-between;
    }
  }
  .j-menu-levitation {
    position: absolute;
    top: 64px;
    right: 8px;
    background: #fff;
    width: 80%;
    max-width: 270px;
    height: 80vh;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
    z-index: 10;
    padding: 16px 0;
    > ol {
      > li {
        white-space: nowrap;
        margin-bottom: 4px;
        &.menu-title {
          font-size: 20px;
          font-weight: bold;
          padding: 4px 18px;
        }
        > a {
          display: block;
          padding: 8px 28px;
          &:hover {
            background: #f3f3f5;
          }
          &.router-link-active {
            color: $theme-color;
            background: #e7f5ee;
          }
        }
      }
    }
  }
}
</style>
