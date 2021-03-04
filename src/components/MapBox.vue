<template>
  <div>
    <div class="maperTest">
      <amap></amap>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: "300px"
    },
    height: {
      type: String,
      default: "300px"
    }
  },
  data() {
    return {};
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.AmapVue.plugin(this.AmapVue.Geolocation, function() {
        var geolocation = new this.AmapVue.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new this.AmapVue.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: "RB"
        });

        geolocation.getCurrentPosition(function(status, result) {
          if (status == "complete") {
            onComplete(result);
          } else {
            onError(result);
          }
        });

        function onComplete(data) {
          // data是具体的定位信息
          console.log(data);
        }

        function onError(data) {
          // 定位出错.
          console.log(data);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.maperTest {
  width: 100%;
  height: 200px;
}
</style>
