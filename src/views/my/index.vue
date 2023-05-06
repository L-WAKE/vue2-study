<template>
  <div class="home">
    <div class="title">我的个人中心</div>
    <button @click="$router.back()">返回</button>

    <div>========我的插槽===========</div>
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
