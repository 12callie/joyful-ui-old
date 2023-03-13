<template>
  <Teleport to="body">
    <Transition name="j-dialog-transition">
      <div
        v-if="dialogVisible"
        class="j-dialog-overlay"
        @click="onClickOverlay"
      >
        <div class="j-dialog-wrapper">
          <header>
            <svg class="icon j-dialog-svg-warn">
              <use xlink:href="#icon-warn"></use>
            </svg>
            <span>{{ title }}</span>
            <svg class="icon j-dialog-svg-close" @click="closeDialog">
              <use xlink:href="#icon-close"></use>
            </svg>
          </header>
          <main>{{ content }}</main>
          <footer>
            <Button @click="cancel">
              {{ negativeText }}
            </Button>
            <Button theme="primary" @click="ok">
              {{ positiveText }}
            </Button>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
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
  title: {
    type: String,
    default: "确认",
  },
  content: {
    type: String,
    default: "是否确定？",
  },
  negativeText: {
    type: String,
    default: "取消",
  },
  positiveText: {
    type: String,
    default: "确认",
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
    width: 75%;
    max-height: 90%;
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
        flex-grow: 1;
        margin-left: 8px;
        margin-right: auto;
      }
      > .j-dialog-svg-warn {
        flex-shrink: 0;
        background: $theme-color;
        padding: 4px;
        border-radius: 50%;
        color: #fff;
      }
      > .j-dialog-svg-close {
        flex-shrink: 0;

        cursor: pointer;
      }
    }

    > main {
      margin: 12px 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
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
