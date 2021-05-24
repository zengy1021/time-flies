<template>
  <div>
    <el-form :model="form" :inline="true" style="padding:20px 0;">
      <!-- <el-row>
        <el-col :span="8">
          <el-form-item label="id">
            <el-input v-model="form.name1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="名称">
            <el-input v-model="form.name2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="作者">
            <el-input v-model="form.name3"></el-input>
          </el-form-item>
        </el-col>
      </el-row> -->
      <el-form-item label="id">
        <el-input v-model="form.name1"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="form.name2"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.name3"></el-input>
      </el-form-item>
      <el-form-item label=" ">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
    <div class="btn-warp">
      <!-- <el-button type="primary">查询</el-button>
      <el-button>重置</el-button> -->
      <!-- <el-divider></el-divider> -->
    </div>
    <div class="tableInfo">
      <div style="textAlign:left;margin-bottom:15px;">
        <el-button type="primary">新建</el-button>
      </div>
      <el-table :data="dataList" stripe>
        <el-table-column prop="id" label="ID"> </el-table-column>
        <el-table-column prop="name" label="名称"> </el-table-column>
        <el-table-column prop="age" label="年龄"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small">查看{{ scope.row.id }}</el-button>
            <el-button size="small">删除{{ scope.row.name }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pageInfo.currentPage"
        :page-size="pageInfo.pageSize"
        layout="total, sizes , prev, pager, next, jumper"
        :total="pageInfo.total"
        style="text-align: left;margin-top:15px;"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      pageInfo: {
        currentPage: 1,
        pageSize: 10,
        total: 10
      },
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
        },
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
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>
<style lang="scss" scoped>
.search {
  background: #fff;
  padding: 20px 15px;
  border-radius: 8px 8px 0 0;
}
.tableInfo {
  background: #fff;
  padding: 20px 5px;
  border-radius: 0 0 8px 8px;
}
.btn-warp {
  text-align: center;
}
</style>
