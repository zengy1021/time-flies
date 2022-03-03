<template>
  <div class="menuBox">
    <div class="logo">
      <el-avatar shape="square" size="large" :src="logoImg"></el-avatar>
      <span class="name">时光飞逝</span>
    </div>
    <el-menu
      background-color="#fff"
      text-color="#a8a8b8"
      active-text-color="#2a2a2a"
      :default-active="activeMenu"
    >
      <el-menu-item
        v-for="(item, index) in menuList"
        :index="index + ''"
        :key="item.path"
        @click="gotoMenu(item)"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: '首页',
          path: '/',
          icon: 'el-icon-s-home'
        },
        {
          title: '列表',
          path: '/adminList',
          icon: 'el-icon-menu'
        },
        {
          title: '娱乐',
          path: '/randomSize',
          icon: 'el-icon-s-promotion'
        }
      ],
      logoImg:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  computed: {
    activeMenu() {
      return (
        this.menuList.findIndex((item) => item.path === this.$route.path) + ''
      )
    }
  },
  methods: {
    gotoMenu(item) {
      // console.log(item);
      this.$router.push({ path: item.path })
    }
  }
}
</script>
<style lang="scss" scoped>
.menuBox {
  background: #fff;
  height: 100%;
}
.el-menu {
  border: 0;
  .el-menu-item:focus,
  .el-menu-item:hover {
    background: #fff !important;
  }
  .el-menu-item {
    font-weight: 700;
  }
  .el-menu-item i {
    color: #a8a8b8;
  }
  .el-menu-item.is-active {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 3px;
      height: 18px;
      background: #61cad7;
      right: 3px;
      top: 5px;
      bottom: 0;
      margin: auto;
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }
  }
  .el-menu-item.is-active i {
    color: #61cad7;
  }
}
.logo {
  text-align: left;
  height: 100px;
  // border-bottom: 1px solid #666;
  line-height: 100px;
  color: #212123;
  font-weight: 700;
  .el-avatar {
    margin-left: 50px;
    vertical-align: middle;
  }
  .name {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    height: 40x;
    line-height: 40px;
  }
}
</style>
