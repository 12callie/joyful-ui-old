<template>
  <aside>
    <ol class="menu-content">
      <li><router-link to="/">首页</router-link></li>
      <li>文档</li>
      <li><router-link to="/joyful/doc/intro">介绍</router-link></li>
      <li><router-link to="/joyful/doc/install">安装</router-link></li>
      <li><router-link to="/joyful/doc/usage">在 SFC 中使用</router-link></li>
      <li>组件</li>
      <li>
        <router-link to="/joyful/components/button">按钮 Button</router-link>
      </li>
      <li>
        <router-link to="/joyful/components/switch">开关 Switch</router-link>
      </li>
    </ol>
    <div class="j-layout-toggle-button">
      <svg class="icon">
        <use xlink:href="#icon-right"></use>
      </svg>
    </div>
  </aside>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "../assets/styles/common.scss";
aside {
  position: relative;
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
  .j-layout-toggle-button {
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
  }
}
</style>
