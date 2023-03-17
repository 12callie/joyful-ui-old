<template>
  <article>
    <h1>在 SFC 中使用</h1>
    <p>
      请先<a href="/joyful/doc/install">安装</a
      >本组件库，然后你就可以直接导入组件并使用它。
    </p>
    <br />
    <p>代码示例：</p>
    <pre>
&lt;template&gt;
  &lt;div&gt;&lt;Button&gt;按钮&lt;/Button&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button} from "joyful-ui"
  export default {
    components: {Button}
  }
&lt;/script&gt;
 </pre
    >
  </article>
</template>

<script lang="ts">
export default {
  name: "GetStarted",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/common.scss";

h1 {
  margin-bottom: 16px;
}
a {
  color: $theme-color;
}
</style>
