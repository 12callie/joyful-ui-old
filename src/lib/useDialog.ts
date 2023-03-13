import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";

export const useDialog = (options) => {
  const {
    theme,
    title,
    content,
    negativeText,
    positiveText,
    ok,
    cancel,
    closeOnClickOverlay,
  } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    dialogDiv.unmount();
    div.remove();
  };
  const dialogDiv = createApp({
    render() {
      return h(Dialog, {
        dialogVisible: true,
        theme,
        title,
        content,
        negativeText,
        positiveText,
        ok,
        cancel,
        closeOnClickOverlay,
        "onUpdate:dialogVisible": (newValue) => {
          if (newValue === false) {
            close();
          }
        },
      });
    },
  });
  dialogDiv.mount(div);
};
