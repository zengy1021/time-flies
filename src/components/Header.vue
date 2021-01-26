<template>
  <div>
    <div class="headerInfo">
      <div class="title">
        是但求其爱
      </div>
      <div class="userInfo">
        <i>userImg</i>
        <span>陈奕迅</span>
        <i>leaveImg</i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.headerInfo {
  height: 100%;
  background: #fff;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  > div {
    height: 60px;
    line-height: 60px;
  }
}
</style>
