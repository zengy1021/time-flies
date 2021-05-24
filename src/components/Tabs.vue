<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in tabs"
        :key="index"
        :label="item.title"
        :name="item.keyIndex"
      >
        <slot :componentName="item.componentName"></slot>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeName: this.tabs[0].keyIndex
    };
  },
  computed: {},
  methods: {
    handleClick() {
      // console.log(name, "name");
      // this.activeName = name;
    }
  }
};
</script>
