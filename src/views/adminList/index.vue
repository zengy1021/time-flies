<template>
  <div class="container">
    <Tabs :tabs="tabs">
      <component slot-scope="slot" :is="slot.componentName"></component>
    </Tabs>
  </div>
</template>
<script>
import Tabs from "@/components/Tabs";
import TableList from "./tableList";
import Detail from "./detail";
export default {
  components: {
    Tabs,
    TableList,
    Detail
  },
  data() {
    return {
      tabs: [
        {
          title: "列表",
          keyIndex: "adminList",
          componentName: "TableList"
        },
        {
          title: "详情",
          keyIndex: "adminList/detail",
          componentName: "Detail"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  background: #fff;
  padding: 5px 15px 20px 15px;
  border-radius: 8px 8px 8px 8px;
}
</style>
