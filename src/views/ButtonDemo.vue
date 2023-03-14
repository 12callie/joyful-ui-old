<template>
  <div class="button-demos">
    <h1>按钮 Button</h1>
    <p>按钮用来触发一些操作。</p>
    <h2>演示</h2>
    <hr />
    <div>
      <div>基础用法</div>
      <p>
        按钮的 <code>type</code> 分别为
        <code>default</code
        >、<code>primary</code>、<code>info</code>、<code>success</code>、<code
          >warning</code
        >
        和 <code>error</code>。
      </p>
      <Button>Default</Button>
      <Button theme="primary">Primary</Button>
      <Button theme="info">Info</Button>
      <Button theme="success">Success</Button>
      <Button theme="warning">Warning</Button>
      <Button theme="error">Error</Button>
    </div>
    <hr />
    <div>
      <div>虚线按钮</div>
      <p>使用 <code>dashed</code> 来使用虚线按钮。</p>
      <Button dashed>Default</Button>
      <Button dashed theme="primary">Primary</Button>
      <Button dashed theme="info">Info</Button>
      <Button dashed theme="success">Success</Button>
      <Button dashed theme="warning">Warning</Button>
      <Button dashed theme="error">Error</Button>
    </div>
    <hr />
    <div>
      <div>尺寸</div>
      <p>
        有 <code>tiny</code>、<code>small</code>、<code>medium</code> 和
        <code>large</code> 尺寸。
      </p>
      <Button size="tiny">tiny</Button>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
    </div>
    <hr />
    <div>
      <div>文本按钮</div>
      <p>长得就像文本。</p>
      <Button text>这是一个文本按钮</Button>
    </div>
    <hr />
    <div>
      <div>禁用</div>
      <p>按钮可以被禁用。</p>
      <Button disabled>不许点</Button>
    </div>
    <hr />
    <div>
      <div>加载中</div>
      <p>按钮有加载状态。</p>
      <Button class="j-loadingButton" loading>加载中</Button>
      <Button :loading="loadingRef" @click="handleClick">点我</Button>
    </div>
    <hr />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from "../lib/Button.vue";
const loadingRef = ref(false);
function handleClick() {
  loadingRef.value = true;
  setTimeout(() => {
    loadingRef.value = false;
  }, 2000);
}
</script>
