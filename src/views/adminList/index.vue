<template>
  <div>
    <div class="search">
      search
    </div>
    <el-table :data="dataList">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          id: 1,
          name: 2,
          age: 3
        },
        {
          id: 2,
          name: 3,
          age: 4
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
