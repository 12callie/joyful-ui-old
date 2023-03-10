<template>
  <div class="top-nav">
    <div class="nav-content">
      <router-link to="/" class="logo"
        ><img src="../assets/img/logo.png" alt="logo"
      /></router-link>
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
      cursor: pointer;
    }
  }
}
</style>
