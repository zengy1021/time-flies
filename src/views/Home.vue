<template>
  <div class="home">
    <div class="titleInfo">
      <div class="titleHeader">
        <div class="title">
          葡萄成熟时
        </div>
        <div class="updateTime">
          <span>更新时间：</span>
          <span>2021-10-21 18:18:18</span>
        </div>
      </div>
      <el-divider content-position="right">time flies</el-divider>
      <div class="titleValue">
        <div class="valueOne">
          <div class="valueTitle">
            总歌曲
          </div>
          <div class="valueInfo"><span>100</span>/单位</div>
          <div class="line"></div>
        </div>
        <div class="valueTwo">
          <div class="valueTitle">
            今日新增
          </div>
          <div class="valueInfo"><span>1</span>/单位</div>
        </div>
      </div>
    </div>
    <el-row>
      <el-col :span="16" class="titleInfo">
        <Zcharts />
      </el-col>
      <el-col :span="7" :offset="1" class="titleInfo">
        <Zcharts />
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Zcharts from "@/views/homeComponents/Zcharts";
export default {
  name: "Home",
  components: {
    Zcharts
  }
};
</script>
<style lang="scss" scoped>
.home {
  .el-divider--horizontal {
    margin: 10px 0;
  }
  .titleInfo {
    border-radius: 8px;
    background: #fff;
    overflow: hidden;
    margin-top: 15px;
    .titleHeader {
      display: flex;
      height: 40px;
      line-height: 40px;
      .title {
        color: #333;
        font-size: 22px;
        padding-left: 15px;
      }
      .updateTime {
        color: rgb(143, 143, 143);
        margin-left: 20px;
        line-height: 45px;
      }
    }
    .titleValue {
      display: flex;
      > div {
        width: 50%;
        box-sizing: border-box;
        .valueTitle {
          font-size: 18px;
          font-weight: 700;
        }
        .valueInfo {
          margin-top: 15px;
          font-size: 25px;
          color: rgb(100, 201, 171);
          margin-bottom: 20px;
        }
      }
      .valueOne {
        position: relative;
        .line {
          position: absolute;
          height: 80px;
          width: 1px;
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          background: linear-gradient(#ccc, #ddd, #ccc);
        }
      }
    }
  }
}
</style>
