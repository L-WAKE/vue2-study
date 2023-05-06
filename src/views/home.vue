<template>
  <div class="home">
    <div class="title">基于webpack5构建的vue2项目</div>
    <router-link to="/login">登录</router-link>
    <router-link to="/my">我的</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // debugger;
    console.log("2222", process.env.NODE_ENV);
  },
};
</script>
<style scoped lang="scss">
.home {
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .title {
    font-size: 30px;
  }
}
</style>
