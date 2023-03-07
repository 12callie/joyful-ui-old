<template>
  <button v-if="loading" class="j-switch" :class="classes" disabled ref="sss">
    <span class="j-switch-circle"
      ><span v-if="loading" class="j-switch-loadingIndicator"></span
    ></span>
  </button>
  <button
    v-else
    class="j-switch"
    :class="classes"
    @click="toggleSwitch"
    :disabled="disabled"
  >
    <span class="j-switch-circle"
      ><span v-if="loading" class="j-switch-loadingIndicator"></span
    ></span>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed, ref } from "vue";
const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:value"]);
const classes = computed(() => {
  return {
    [`j-switch-checked`]: props.value,
    [`j-switch-loading`]: props.loading,
  };
});
const toggleSwitch = () => {
  emit("update:value", !props.value);
};
const loadingSwitch = ref(null);
const xxx = computed(() => {
  console.log(2);
  if (props.loading && props.value) {
    console.log(1);
    console.log(loadingSwitch.value);
  }
});
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$theme-color: #18a058;

.j-switch {
  height: $h;
  width: $h * 2;
  margin: 8px 8px 8px 0;
  border: none;
  background: #dbdbdb;
  border-radius: calc($h / 2);
  position: relative;
  transition: all 250ms;
  .j-switch-circle {
    width: $h2;
    height: $h2;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all 250ms;
  }
  &.j-switch-checked {
    background: $theme-color;
    .j-switch-circle {
      left: calc(100% - $h2 - 2px);
    }
  }

  &[disabled] {
    background: #ededed;
    cursor: not-allowed;
  }

  &.j-switch-loading {
    cursor: wait;
    background: #dbdbdb;
    &.j-switch-checked {
      background: $theme-color;
    }

    .j-switch-loadingIndicator {
      width: 14px;
      height: 14px;
      position: absolute;
      top: calc(50% - 7px);
      left: calc(50% - 7px);
      border: 2px solid $theme-color;
      border-top-color: transparent;
      border-radius: 100%;
      animation: j-loading-spin 1s infinite linear;
    }
  }
}
</style>
