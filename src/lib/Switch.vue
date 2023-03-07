<template>
  <button
    class="j-switch"
    :class="{ 'j-switch-checked': value }"
    @click="toggleSwitch"
    :disabled="disabled"
  >
    <span></span>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:value"]);

const toggleSwitch = () => {
  emit("update:value", !props.value);
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$theme-color: #18a058;

.j-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #dbdbdb;
  border-radius: calc($h / 2);
  position: relative;
  transition: all 250ms;
  span {
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
    span {
      left: calc(100% - $h2 - 2px);
    }
  }

  &[disabled] {
    background: #ededed;
  }
}
</style>
