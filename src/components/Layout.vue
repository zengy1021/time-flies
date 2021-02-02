<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <Menu class="menu" />
      </el-aside>
      <el-container class="colstyle">
        <!-- <el-header style="height:60px;">
          <Header class="header"></Header>
        </el-header> -->
        <el-main class="mainInfo">
          <router-view />
        </el-main>
        <!-- <el-footer style="height:60px;">
          <Footer class="header"></Footer>
        </el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
export default {
  components: {
    Menu
    // Header,
    // Footer
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  .el-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex: 1;
  }
  .menu {
    min-width: 200px;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .el-header {
    padding: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  }
  .el-footer {
    padding: 0;
    box-shadow: 4px 0 0 2px rgba(0, 0, 0, 0.05);
  }
  .colstyle {
    display: flex;
    flex-direction: column;
    .main {
      flex: 1;
    }
  }
  .mainInfo {
    background: #f5f5fb;
  }
}
</style>
