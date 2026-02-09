<template>
  <div class="search-form-advanced-demo">
    <!-- <h3>高级搜索表单示例</h3>
    <div class="demo-item">
      <ClSearchForm
        :query-config="advancedQueryConfig"
        @search="handleAdvancedSearch"
        @reset="handleAdvancedReset"
        @field-change="handleFieldChange"
        @field-click="handleFieldClick"
        @config-change="handleConfigChange"
      />
      
      <div class="form-result">
        <h5>搜索结果：</h5>
        <pre>{{ JSON.stringify(advancedSearchResult, null, 2) }}</pre>
      </div>
    </div> -->

    <h3>远程搜索示例</h3>
    <div class="demo-item">
      <ClSearchForm
        :query-config="remoteQueryConfig"
        @search="handleRemoteSearch"
        @reset="handleRemoteReset"
      />
      
      <div class="form-result">
        <h5>搜索结果：</h5>
        <pre>{{ JSON.stringify(remoteSearchResult, null, 2) }}</pre>
      </div>
    </div>

    <h3>带验证的搜索表单</h3>
    <div class="demo-item">
      <ClSearchForm
        :query-config="validationQueryConfig"
        @search="handleValidationSearch"
        @reset="handleValidationReset"
      />
      
      <div class="form-result">
        <h5>搜索结果：</h5>
        <pre>{{ JSON.stringify(validationSearchResult, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { ClSearchForm } from "crystalplus-ui";

// 高级搜索配置
const advancedQueryConfig = ref([
  {
    prop: "name",
    label: "姓名",
    type: "input",
    width: "200px",
    props: {
      placeholder: "请输入姓名",
      clearable: true
    }
  },
  {
    prop: "email",
    label: "邮箱",
    type: "input",
    width: "250px",
    props: {
      placeholder: "请输入邮箱",
      clearable: true
    }
  },
  {
    prop: "phone",
    label: "电话",
    type: "input",
    width: "200px",
    props: {
      placeholder: "请输入电话",
      clearable: true
    }
  },
  {
    prop: "department",
    label: "部门",
    type: "select",
    width: "180px",
    props: {
      placeholder: "请选择部门",
      clearable: true,
      options: [
        { label: "技术部", value: "tech" },
        { label: "市场部", value: "marketing" },
        { label: "财务部", value: "finance" },
        { label: "人力资源部", value: "hr" }
      ]
    }
  },
  {
    prop: "position",
    label: "职位",
    type: "select",
    width: "180px",
    props: {
      placeholder: "请选择职位",
      clearable: true,
      options: [
        { label: "经理", value: "manager" },
        { label: "主管", value: "supervisor" },
        { label: "专员", value: "staff" },
        { label: "实习生", value: "intern" }
      ]
    }
  },
  {
    prop: "entryDate",
    label: "入职日期",
    type: "date",
    width: "180px",
    props: {
      type: "date",
      format: "YYYY-MM-DD",
      valueFormat: "YYYY-MM-DD",
      placeholder: "请选择入职日期"
    }
  },
  {
    prop: "active",
    label: "在职状态",
    type: "switch",
    props: {
      activeText: "在职",
      inactiveText: "离职"
    }
  }
]);

// 远程搜索配置
const remoteQueryConfig = ref([
  {
    prop: "user",
    label: "用户",
    type: "select",
    width: "250px",
    props: {
      filterable: true,

      loading: false,
      placeholder: "请输入用户名搜索",
      options: [
                { label: `用户1`, value: `user1` },
        { label: `用户2`, value: `user2` },
        { label: `用户3`, value: `user3` }
      ]
    },
  },
  {
    prop: "project",
    label: "项目",
    type: "el-select",
    width: "200px",
    props: {
      filterable: true,
      // remote: true,
      loading: false,
      placeholder: "请输入项目名称搜索",
      options: [
                { label: `项目A`, value: `projectA` },
        { label: `项目B`, value: `projectB` },
        { label: `项目C`, value: `projectC` }
      ]
    },
  }
]);

// 带验证的搜索配置
const validationQueryConfig = ref([
  {
    prop: "name",
    label: "姓名",
    type: "input",
    width: "200px",
    required: true,
    props: {
      placeholder: "请输入姓名",
      clearable: true
    },
    rules: [
      { required: true, message: "请输入姓名", trigger: "blur" },
      { min: 2, message: "姓名长度至少2个字符", trigger: "blur" }
    ]
  },
  {
    prop: "email",
    label: "邮箱",
    type: "input",
    width: "250px",
    required: true,
    props: {
      placeholder: "请输入邮箱",
      clearable: true
    },
    rules: [
      { required: true, message: "请输入邮箱", trigger: "blur" },
      { type: "email", message: "请输入正确的邮箱格式", trigger: "blur" }
    ]
  },
  {
    prop: "age",
    label: "年龄",
    type: "number",
    width: "200px",
    required: true,
    props: {
      min: 18,
      max: 65,
      step: 1,
      placeholder: "请输入年龄"
    },
    rules: [
      { required: true, message: "请输入年龄", trigger: "blur" },
      { type: "number", message: "请输入数字", trigger: "blur" },
      { min: 18, max: 65, message: "年龄必须在18-65之间", trigger: "blur" }
    ]
  }
]);

// 搜索结果
const advancedSearchResult = ref({});
const remoteSearchResult = ref({});
const validationSearchResult = ref({});

// 高级搜索处理
const handleAdvancedSearch = (params: any) => {
  console.log("高级搜索参数:", params);
  advancedSearchResult.value = params;
  ElMessage.success("搜索成功！");
};

// 高级重置处理
const handleAdvancedReset = (formData: any) => {
  console.log("高级重置后的表单数据:", formData);
  advancedSearchResult.value = {};
  ElMessage.info("表单已重置！");
};

// 远程搜索处理
const handleRemoteSearch = (params: any) => {
  console.log("远程搜索参数:", params);
  remoteSearchResult.value = params;
  ElMessage.success("远程搜索成功！");
};

// 远程重置处理
const handleRemoteReset = (formData: any) => {
  console.log("远程重置后的表单数据:", formData);
  remoteSearchResult.value = {};
  ElMessage.info("表单已重置！");
};

// 验证搜索处理
const handleValidationSearch = (params: any) => {
  console.log("验证搜索参数:", params);
  validationSearchResult.value = params;
  ElMessage.success("搜索成功！");
};

// 验证重置处理
const handleValidationReset = (formData: any) => {
  console.log("验证重置后的表单数据:", formData);
  validationSearchResult.value = {};
  ElMessage.info("表单已重置！");
};

// 字段变化处理
const handleFieldChange = (queryItem: any, val: any) => {
  console.log(`字段 ${queryItem.label} 变化:`, val);
  ElMessage.info(`字段 ${queryItem.label} 变为: ${val}`);
};

// 字段点击处理
const handleFieldClick = (queryItem: any) => {
  console.log(`字段 ${queryItem.label} 被点击`);
  ElMessage.info(`点击了字段: ${queryItem.label}`);
};

// 配置变化处理
const handleConfigChange = (config: any) => {
  console.log("配置变化:", config);
  ElMessage.info(`配置已更新，可见字段: ${config.visibleFields.length} 个`);
};
</script>

<style scoped>
.search-form-advanced-demo {
  max-width: 1200px;
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