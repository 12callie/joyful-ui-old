<template>
  <div class="j-tabs">
    <div class="j-tabs-nav" ref="container">
      <div
        class="j-tabs-nav-item"
        :class="{ selected: selected === t }"
        v-for="(t, index) in titles"
        :key="index"
        @click="selectTitle(t)"
        :ref="
          (el) => {
            if (t === selected) {
              currentTitle = el;
            }
          }
        "
      >
        {{ t }}
      </div>
      <div class="j-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="j-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import { computed, ref, watchPostEffect } from "vue";
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
    const currentTitle = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    watchPostEffect(() => {
      const { width } = currentTitle.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = currentTitle.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    });
    return {
      defaults,
      titles,
      selectTitle,
      current,
      currentTitle,
      indicator,
      container,
    };
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
      transition: left 0.3s;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
