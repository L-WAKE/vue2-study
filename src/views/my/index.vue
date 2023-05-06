<template>
  <div class="home">
    <div class="title">我的个人中心</div>
    <button @click="$router.back()">返回</button>

    <div>========我的插槽===========</div>

    <!-- 1.普通插槽、 作用域插槽 的 vNode 是在哪个环节生成的，render 父组件时还是子组件时？
            默认插槽/具名插槽:父组件中生成 vNode,待子组件 render 到插槽时，会直接拿到 父组件的 vNode
            作用域插槽:在子组件中进行render的。

         2.作用域插槽 为什么能在父组件访问到子组件的数据？
            作用域插槽只有子组件render的时候，才会执行render生成vNode。并且，作用域插槽的 render 函数能接参数，
            从而获得子组件的数据。就是这样形成了作用域插槽！所以我们能在父组件中，访问到子组件的data数据。

         3.普通插槽 跟 作用域插槽 在实现上有区别吗？
            作用域插槽一定是延迟执行，且接收参数！普通插槽 可能延迟执行，可能直接执行，但不接收参数！
    -->

    <my-solt>
      <template v-slot:header>
        <h1>header 具名插槽</h1>
      </template>

      <template>
        <h1>默认插槽</h1>
      </template>

      <template v-slot:footer="slotProps">
        <h1>footer 具名 + 作用域插槽</h1>
        <p>{{ slotProps.footerInfo.text }}</p>
      </template>
    </my-solt>
  </div>
</template>
<script>
import MySolt from "../components/solt/name-solt.vue";
export default {
  components: {
    MySolt,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.home {
  .title {
    font-size: 30px;
  }
}
</style>
