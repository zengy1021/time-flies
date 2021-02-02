<template>
  <div class="home">
    <div class="mainTitle">
      首页
    </div>
    <div class="toDayInfo">
      <div class="title">Have a nice day !</div>
      <div class="time">2021年8月22日，天气：晴。</div>
      <el-row class="currentInfo">
        <el-col :span="6" class="itemInfo">
          <div class="img">
            <i class="icon iconfont icon-qiandao" style="fontSize:38px;"></i>
          </div>
          <div class="info">
            <div class="type">分享</div>
            <div class="content">100</div>
          </div>
        </el-col>
        <el-col :span="6" class="itemInfo">
          <div class="img">
            <i class="icon iconfont icon-user" style="fontSize:38px;"></i>
          </div>
          <div class="info">
            <div class="type">用户</div>
            <div class="content">100</div>
          </div>
        </el-col>
        <el-col :span="6" class="itemInfo">
          <div class="img">
            <i class="icon iconfont icon-xiaoxi" style="fontSize:38px;"></i>
          </div>
          <div class="info">
            <div class="type">反馈</div>
            <div class="content">100</div>
          </div>
        </el-col>
        <el-col :span="6" class="itemInfo">
          <div class="signLogo">
            <img src="../assets/img/home.svg" alt="" />
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row class="otherInfo" gutter="20">
      <el-col :span="8">
        <div class="itemInfo" style="height:500px;">
          <div class="title">
            天气：晴
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="itemInfo">
          <!-- <div class="title">分享次数</div> -->
          <Zcharts :width="'1000px'" :height="'500px'" :title="'分享次数'" />
        </div>
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
  padding: 20px;
  box-sizing: border-box;
  .mainTitle {
    font-weight: 900;
    font-size: 26px;
  }
  .toDayInfo {
    box-sizing: border-box;
    margin-top: 20px;
    background: #61cad7;
    color: #fff;
    width: 100%;
    border-radius: 8px;
    padding: 30px 20px;
    .title {
      font-size: 26px;
      font-weight: 900;
    }
    .time {
      font-size: 14px;
      margin: 5px 0;
      color: #e1f1f3;
    }
    .currentInfo {
      margin-top: 10px;
      .itemInfo {
        display: flex;
        .img {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          background: #81d5df;
          text-align: center;
          line-height: 80px;
        }
        .info {
          flex: 1;
          display: flex;
          padding-left: 40px;
          flex-direction: column;
          .type {
            font-size: 20px;
            color: rgb(255, 239, 239);
            height: 30px;
            line-height: 30px;
          }
          .content {
            font-weight: 700;
            color: #fff;
            font-size: 40px;
            height: 50px;
            line-height: 50px;
          }
        }
        .signLogo {
          width: 100%;
          height: 100px;
          position: relative;
          img {
            position: absolute;
            width: 80%;
            bottom: 0;
          }
        }
      }
    }
  }
  .otherInfo {
    margin-top: 15px;
    min-height: 100px;
    box-sizing: border-box;
    .itemInfo {
      background: #fff;
      border-radius: 8px;
      padding: 30px 20px;
    }
  }
}
</style>
