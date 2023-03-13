<template>
  <div class="layout">
    <top-nav class="nav" />
    <div class="content">
      <aside class="menu-aside" ref="menuAside">
        <ol class="menu-content">
          <li><router-link to="/">首页</router-link></li>
          <li>文档</li>
          <li><router-link to="/joyful/doc/intro">介绍</router-link></li>
          <li><router-link to="/joyful/doc/install">安装</router-link></li>
          <li>
            <router-link to="/joyful/doc/usage">在 SFC 中使用</router-link>
          </li>
          <li>组件</li>
          <li>
            <router-link to="/joyful/components/button"
              >按钮 Button</router-link
            >
          </li>
          <li>
            <router-link to="/joyful/components/switch"
              >开关 Switch</router-link
            >
          </li>
          <li>
            <router-link to="/joyful/components/dialog"
              >对话框 Dialog</router-link
            >
          </li>
        </ol>
        <div class="aside-toggle-button" @click="toggle" ref="svgAsideToggle">
          <svg class="icon">
            <use xlink:href="#icon-left"></use>
          </svg>
        </div>
      </aside>
      <main ref="mainContent">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TopNav from "../components/TopNav.vue";
import { ref, watchPostEffect } from "vue";

const asideToggle = ref(true);
const toggle = () => {
  asideToggle.value = !asideToggle.value;
};
const menuAside = ref<HTMLDivElement>(null);
const mainContent = ref<HTMLDivElement>(null);
const svgAsideToggle = ref();

watchPostEffect(() => {
  if (asideToggle.value === true) {
    menuAside.value.style.left = "0";
    mainContent.value.style.marginLeft = "170px";
    svgAsideToggle.value.style.left = "calc(100% - 12px)";
    svgAsideToggle.value.style.transform = "rotate(0deg)";
  } else {
    menuAside.value.style.left = "-170px";
    mainContent.value.style.marginLeft = "0";
    svgAsideToggle.value.style.left = "calc(100% + 12px)";
    svgAsideToggle.value.style.transform = "rotate(180deg)";
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/common.scss";

.layout {
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
    position: relative;
    aside {
      height: 100%;
      flex-shrink: 0;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.3s;

      .menu-content {
        display: flex;
        flex-direction: column;
        width: 170px;
        border-right: 1px solid $border-color;
        padding: 16px;
        height: 100%;
        > li {
          > a {
            display: block;
            padding: 4px 16px;
            text-decoration: none;

            &.router-link-active {
              background: #fff;
            }
          }
        }
      }
      .aside-toggle-button {
        border: 1px solid $border-color;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 260px;
        left: calc(100% - 12px);
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        transform-origin: center;
        transition: all 0.3s;
      }
    }
  }
  main {
    padding: 32px 24px 56px 56px;
    margin-left: 170px;
    transition: all 0.3s;
  }
}
</style>
