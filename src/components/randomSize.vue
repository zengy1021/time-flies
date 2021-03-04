<template>
  <div class="randomBox">
    <div class="sizeNum">
      <el-button
        v-for="(item, index) in boxList"
        :key="index"
        @click="handleNum(item.num)"
        :type="currentNum === item.num ? 'primary' : ''"
        >{{ item.num }}</el-button
      >
    </div>
    <div class="shaizi" @click="rotateBox" ref="shaizi">
      <div
        v-for="(item, index) in boxList"
        :key="index"
        :class="[`box${index + 1}`, 'boxItem']"
      >
        {{ item.num }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRotate: false,
      currentNum: 1,
      boxList: [
        {
          num: 1
        },
        {
          num: 2
        },
        {
          num: 3
        },
        {
          num: 4
        },
        {
          num: 5
        },
        {
          num: 6
        }
      ]
    };
  },
  methods: {
    rotateBox() {
      console.log(this.isRotate);
      if (!this.isRotate) {
        let randomNum = parseInt(1 + Math.random() * 6);
        this.currentNum = randomNum;
        this.handleNum(randomNum);
      }
    },
    handleNum(num) {
      switch (num) {
        case 1:
          this.syncRotate("rotateX(40deg) rotateZ(30deg)");
          break;
        case 2:
          this.syncRotate("rotateX(210deg) rotateZ(40deg)");
          break;
        case 3:
          this.syncRotate("rotateX(80deg) rotateY(100deg) rotateZ(50deg)");
          // });
          break;
        case 4:
          this.syncRotate("rotateY(70deg) rotateZ(50deg)");
          break;
        case 5:
          this.syncRotate("rotateX(300deg) rotateY(40deg)");
          break;
        case 6:
          this.syncRotate("rotateX(200deg) rotateY(100deg) rotateZ(20deg)");
          break;
        default:
          break;
      }
    },
    syncRotate(value) {
      this.isRotate = true;
      new Promise(resolve => {
        this.$refs.shaizi.style.transform =
          "rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)";
        this.$refs.shaizi.style.transition = "2s linear";
        setTimeout(() => {
          resolve(value);
        }, 2000);
      }).then(res => {
        this.$refs.shaizi.style.transition = "3s ease-out";
        this.$refs.shaizi.style.transform = res;
        clearTimeout();
        this.$nextTick(() => {
          this.isRotate = false;
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.randomBox {
  perspective: 1200px;
}
.shaizi {
  width: 500px;
  height: 500px;
  margin: 200px auto;
  // background: #61cad7;
  position: relative;
  transition: 2s;
  transform-style: preserve-3d;
  // border: 1px solid #666;
  // opacity: 0.5;
  transform: rotateX(-60deg) rotateY(40deg);
  .boxItem {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 1);
    text-align: center;
    font-size: 88px;
    line-height: 500px;
    color: #61cad7;
    border-radius: 8px;
    box-shadow: 1px 1px 1px 1px #61cad7;
  }
  .box1 {
    transform: translateZ(250px);
  }
  .box2 {
    transform: translateZ(-250px) rotateY(180deg);
  }
  .box3 {
    transform: translateY(250px) rotateX(-90deg);
  }
  .box4 {
    transform: translateX(-250px) rotateY(-90deg);
  }
  .box5 {
    transform: translateY(-250px) rotateX(90deg);
  }
  .box6 {
    transform: translateX(250px) rotateY(90deg);
  }
}
</style>
