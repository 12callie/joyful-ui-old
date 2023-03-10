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
  </aside>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "../assets/styles/common.scss";

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
</style>
