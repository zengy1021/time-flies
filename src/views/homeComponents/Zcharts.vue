<template>
  <div>
    <div id="echarts" class="echartInfo" :style="{ width, height }"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  props: {
    width: {
      type: [String, Number],
      default: 0
    },
    height: {
      type: [String, Number],
      default: 0
    },
    title: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.InitEcharts();
  },
  methods: {
    InitEcharts() {
      var myEcharts = echarts.init(document.getElementById("echarts"));
      myEcharts.setOption({
        title: {
          text: this.title
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.echartInfo {
  width: 500px;
  height: 300px;
}
</style>
