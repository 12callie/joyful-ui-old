<template>
  <div class="j-tabs">
    <div class="j-tabs-nav">
      <div
        class="j-tabs-nav-item"
        :class="{ selected: selected === t }"
        v-for="(t, index) in titles"
        :key="index"
        @click="selectTitle(t)"
      >
        {{ t }}
      </div>
      <div class="j-tabs-nav-indicator"></div>
    </div>
    <div class="j-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import { computed } from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((i) => {
      if (i.type !== Tab) {
        throw new Error("Tabs 组件的子标签必须是 Tab");
      }
    });
    const titles = defaults.map((i) => i.props.title);
    const selectTitle = (newTitle: string) => {
      context.emit("update:selected", newTitle);
    };
    const current = computed(() => {
      return defaults.find((i) => {
        return i.props.title === props.selected;
      });
    });
    return { defaults, titles, selectTitle, current };
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
    position: relative;

    &-item {
      &:nth-child(1) {
        margin-left: 0;
      }
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:hover,
      &.selected {
        color: $theme-color;
      }
    }

    &-indicator {
      width: 34px;
      height: 3px;
      background: $theme-color;
      position: absolute;
      left: 0;
      bottom: -1px;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
