<template>
  <div class="menuBox">
    <div class="logo">
      time flies
    </div>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeMenu"
    >
      <el-menu-item
        v-for="(item, index) in menuList"
        :index="index + ''"
        :key="item.path"
        @click="gotoMenu(item)"
      >
        <i class="el-icon-menu"></i>
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
          title: "首页",
          path: "/"
        },
        {
          title: "列表",
          path: "/adminList"
        }
      ]
    };
  },
  computed: {
    activeMenu() {
      return (
        this.menuList.findIndex(item => item.path === this.$route.path) + ""
      );
    }
  },
  methods: {
    gotoMenu(item) {
      console.log(item);
      this.$router.push({ path: item.path });
    }
  }
};
</script>
<style lang="scss" scoped>
.menuBox {
  background: #545c64;
  height: 100%;
}
.el-menu {
  border: 0;
}
.logo {
  height: 100px;
  border-bottom: 1px solid #666;
  line-height: 100px;
  color: #ffd04b;
}
</style>
