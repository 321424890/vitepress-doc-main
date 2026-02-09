<template>
  <div class="form-container">
    <h5>自定义排序和筛选的表格</h5>
    <p>这是一个带自定义排序和筛选功能的表格示例，展示了如何通过列配置控制排序和筛选图标的显示。</p>
    <p>ID 字段带有排序功能，姓名字段带有筛选功能，地址字段同时带有排序和筛选功能。</p>
    <CrystalTable 
      :table-data="tableData"
      :columns="columnsWithSortAndFilter"
      border
      stripe
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CrystalTable } from "crystalplus-ui";

// 表格数据
const tableData = ref([
  { id: 1, name: "张三", age: 20, address: "北京市朝阳区", email: "zhangsan@example.com" },
  { id: 2, name: "李四", age: 25, address: "上海市浦东新区", email: "lisi@example.com" },
  { id: 3, name: "王五", age: 30, address: "广州市天河区", email: "wangwu@example.com" },
  { id: 4, name: "赵六", age: 35, address: "深圳市南山区", email: "zhaoliu@example.com" },
  { id: 5, name: "孙七", age: 40, address: "杭州市西湖区", email: "sunqi@example.com" }
]);

// 带排序和筛选的表格列配置
const columnsWithSortAndFilter = ref([
  { 
    prop: "id", 
    label: "ID", 
    width: "80", 
    align: "center", 
    sortable: true 
  },
  { 
    prop: "name", 
    label: "姓名", 
    width: "120", 
    align: "center", 
    filterable: true,
    filters: [
      { text: "张三", value: "张三" },
      { text: "李四", value: "李四" },
      { text: "王五", value: "王五" },
      { text: "赵六", value: "赵六" },
      { text: "孙七", value: "孙七" }
    ],
    filterMethod: (value, row, column) => {
      return row.name === value;
    }
  },
  { 
    prop: "age", 
    label: "年龄", 
    width: "80", 
    align: "center"
  },
  { 
    prop: "address", 
    label: "地址", 
    minWidth: "150", 
    align: "center",
    sortable: true,
    filterable: true,
    filters: [
      { text: "北京市", value: "北京市" },
      { text: "上海市", value: "上海市" },
      { text: "广州市", value: "广州市" },
      { text: "深圳市", value: "深圳市" },
      { text: "杭州市", value: "杭州市" }
    ],
    filterMethod: (value, row, column) => {
      return row.address.includes(value);
    }
  },
  { 
    prop: "email", 
    label: "邮箱", 
    minWidth: "200", 
    align: "center"
  }
]);
</script>

<style scoped>
.form-container {
  padding: 20px;
  background-color: white;
  min-height: 100vh;
}

.form-container h5 {
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
}

.form-container p {
  margin-bottom: 16px;
  color: #606266;
  line-height: 1.5;
}

:deep(.crystal-form-group) {
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
}

:deep(.crystal-form-group-title) {
  font-size: 16px;
  font-weight: 500;
  color: #303133;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  margin: 0;
}

:deep(.crystal-form-group-content) {
  padding: 20px;
}

:deep(.crystal-form-row) {
  margin-bottom: 20px;
}

:deep(.crystal-form-field) {
  margin-bottom: 0;
}

:deep(.el-form-item__label) {
  font-weight: normal;
  color: #606266;
}

:deep(.el-form-item.is-required > label:before) {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}

:deep(.el-table) {
  margin-top: 20px;
}

:deep(.el-table th) {
  background-color: #f5f7fa;
  border-bottom: 1px solid #ebeef5;
}

:deep(.el-table td) {
  border-bottom: 1px solid #ebeef5;
}
</style>