<template>
  <div>
    <div class="headerInfo">
      <div class="title">是但求其爱</div>
      <div class="userInfo">
        <!-- <i class="userSvg"></i> -->
        <i class="icon iconfont icon-touxiang" style="fontsize: 18px"></i>
        <span style="margin: 0 15px">陈奕迅</span>
        <i class="icon iconfont icon-exit"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    loginout() {}
  }
};
</script>
<style lang="scss" scoped>
.headerInfo {
  height: 100%;
  background: #fff;
  width: calc(100% - 40px);
  margin: auto;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  > div {
    height: 60px;
    line-height: 60px;
  }
}
.userSvg {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url("../assets/img/1.svg") center no-repeat;
}
</style>
