<template>
  <div class="search-form-demo">
    <h3>基础搜索表单示例</h3>
    <div class="demo-item">
      <ClSearchForm
        :query-config="basicQueryConfig"
        @search="handleBasicSearch"
        @reset="handleBasicReset"
      />
      
      <div class="form-result">
        <h5>搜索结果：</h5>
        <pre>{{ JSON.stringify(basicSearchResult, null, 2) }}</pre>
      </div>
    </div>

    <h3>通过表格列配置生成搜索表单</h3>
    <div class="demo-item">
      <ClSearchForm
        :Searchcolumns="tableColumns"
        @search="handleColumnsSearch"
        @reset="handleColumnsReset"
      />
      
      <div class="form-result">
        <h5>搜索结果：</h5>
        <pre>{{ JSON.stringify(columnsSearchResult, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { ClSearchForm } from "crystalplus-ui";

// 基础搜索配置
const basicQueryConfig = ref([
  {
    prop: "name",
    label: "姓名",
    type: "input",
    width: "200px",
    props: {
      placeholder: "请输入姓名",
      clearable: true,
      maxlength: 20,
      showWordLimit: true,
          disabled: true,
    }
  },
  {
    prop: "age",
    label: "年龄",
    type: "number",
    width: "200px",
    props: {
      min: 0,
      max: 150,
      step: 1,
      placeholder: "请输入年龄"
    }
  },
  {
    prop: "gender",
    label: "性别",
    type: "select",
    width: "120px",
    props: {
      placeholder: "请选择性别",
      options: [
        { label: "男", value: "male" },
        { label: "女", value: "female" }
      ],
      clearable: true
    }
  },
  {
    prop: "status",
    label: "状态",
    type: "switch",
    props: {
      activeText: "启用",
      inactiveText: "禁用"
    }
  },
  {
    prop: "createDate",
    label: "创建日期",
    type: "date",
    width: "180px",
    props: {
      type: "date",
      format: "YYYY-MM-DD",
      valueFormat: "YYYY-MM-DD",
      placeholder: "请选择日期"
    }
  }
]);

// 表格列配置
const tableColumns = ref([
  {
    prop: "id",
    label: "ID",
    type: "input"
  },
  {
    prop: "username",

    label: "用户名",
    type: "input"
  },
  {
    prop: "role",
    label: "角色",
    type: "select",
    options: [
      { label: "管理员", value: "admin" },
      { label: "用户", value: "user" },
      { label: "访客", value: "guest" }
    ]
  },
  {
    prop: "age",
    label: "年龄",
    type: "number"
  }
]);

// 搜索结果
const basicSearchResult = ref({});
const columnsSearchResult = ref({});

// 基础搜索处理
const handleBasicSearch = (params: any) => {
  console.log("基础搜索参数:", params);
  basicSearchResult.value = params;
  ElMessage.success("搜索成功！");
};

// 基础重置处理
const handleBasicReset = (formData: any) => {
  console.log("基础重置后的表单数据:", formData);
  basicSearchResult.value = {};
  ElMessage.info("表单已重置！");
};

// 表格列配置搜索处理
const handleColumnsSearch = (params: any) => {
  console.log("表格列配置搜索参数:", params);
  columnsSearchResult.value = params;
  ElMessage.success("搜索成功！");
};

// 表格列配置重置处理
const handleColumnsReset = (formData: any) => {
  console.log("表格列配置重置后的表单数据:", formData);
  columnsSearchResult.value = {};
  ElMessage.info("表单已重置！");
};
</script>

<style scoped>
.search-form-demo {
  max-width: 1000px;
}

.demo-item {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background-color: #f9fafc;
}

.form-result {
  margin-top: 20px;
  padding: 15px;
  background-color: #f0f2f5;
  border-radius: 4px;
}

.form-result h5 {
  margin: 0 0 10px 0;
  font-size: 14px;
  color: #303133;
  font-weight: 500;
}

.form-result pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 13px;
  color: #606266;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
}

h3 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}
</style>