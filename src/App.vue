<template>
  <router-view />
  <hr />
  <router-link to="/home">首页</router-link>
  <router-link to="/doc">文档</router-link>
</template>

<script setup>
import TopNav from "./components/TopNav.vue";
</script>

