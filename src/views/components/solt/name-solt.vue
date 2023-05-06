<template>
  <div class="wrapper">
    <!-- header 具名插槽 -->
    <header class="header">
      <slot name="header"></slot>
    </header>

    <!-- 默认插槽 -->
    <div class="default">
      <slot></slot>
    </div>

    <!-- footer 具名 + 作用域插槽 -->
    <footer class="footer">
      <slot name="footer" :footerInfo="footerInfo"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: "mySlot",
  data() {
    return {
      footerInfo: {
        text: "这是 子组件 footer插槽 的作用域数据",
      },
    };
  },
};
</script>
