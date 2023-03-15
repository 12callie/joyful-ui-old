<template>
  <div class="j-tabs">
    <div class="j-tabs-nav">
      <div class="j-tabs-nav-item" v-for="(t, index) in titles" :key="index">
        {{ t }}
      </div>
    </div>
    <div class="j-tabs-content">
      <component v-for="(c, index) in defaults" :key="index" :is="c" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((i) => {
      if (i.type !== Tab) {
        throw new Error("Tabs 组件的子标签必须是 Tab");
      }
    });
    const titles = defaults.map((i) => i.props.title);
    return { defaults, titles };
  },
};
</script>

<style lang="scss">
$border-color: rgb(239, 239, 245);
$theme-color: #18a058;
.j-tabs {
  &-nav {
    border-bottom: 1px solid $border-color;
    display: flex;
    flex-direction: row;

    &-item {
      &:nth-child(1) {
        margin-left: 0;
      }
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
