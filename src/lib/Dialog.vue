<template>
  <Transition name="j-dialog-transition">
    <div v-if="dialogVisible" class="j-dialog-overlay" @click="onClickOverlay">
      <div class="j-dialog-wrapper">
        <header>
          <svg class="icon j-dialog-svg-warn">
            <use xlink:href="#icon-warn"></use>
          </svg>
          <span>确认</span>
          <svg class="icon j-dialog-svg-close" @click="closeDialog">
            <use xlink:href="#icon-close"></use>
          </svg>
        </header>
        <main>确定吗？</main>
        <footer>
          <Button @click="cancel">取消</Button>
          <Button theme="primary" @click="ok">确定</Button>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import Button from "./Button.vue";
import { defineProps } from "vue";
const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
  ok: {
    type: Function,
  },
  cancel: {
    type: Function,
  },
});
const emit = defineEmits(["update:dialogVisible"]);
const closeDialog = () => {
  emit("update:dialogVisible", false);
};
const onClickOverlay = () => {
  if (props.closeOnClickOverlay) {
    closeDialog();
  }
};
const cancel = () => {
  props.cancel?.();
  closeDialog();
};
const ok = () => {
  if (props.ok?.() !== false) {
    closeDialog();
  }
};
</script>

<style lang="scss" scoped>
$theme-color: #18a058;
$warning-color: #f0a020;
$error-color: #d03050;

.j-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: fade_out(#999, 0.4);
  width: 100%;
  height: 100%;
  z-index: 10;

  .j-dialog-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    min-width: 24em;
    max-width: 90%;
    border-radius: 4px;
    box-shadow: 0 0 5px fade_out(#999, 0.1);
    z-index: 11;
    .icon {
      width: 24px;
      height: 24px;
    }
    > header {
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 18px;

      > span {
        margin-left: 8px;
        margin-right: auto;
      }
      > .j-dialog-svg-warn {
        background: $theme-color;
        padding: 4px;
        border-radius: 50%;
        color: #fff;
      }
      > .j-dialog-svg-close {
        cursor: pointer;
      }
    }

    > main {
      padding: 12px 16px;
    }

    > footer {
      padding: 12px 16px;
      text-align: right;
    }
  }
}

.j-dialog-transition-enter-active,
.j-dialog-transition-leave-active {
  transition: opacity 0.3s ease;
}
.j-dialog-transition-enter-from,
.j-dialog-transition-leave-to {
  opacity: 0;
}
</style>
