<template>
  <div class="home">
    <div class="title">登录页</div>
    <button @click="$router.back()">返回</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.home {
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 30px;
  }
}
</style>
