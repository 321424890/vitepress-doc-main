<template>
  <div class="form-wrapper-demo">
    <h3>基础表单示例</h3>
    <div class="demo-item">
      <ClFormWrapper
        ref="formRef"
        :schema="formSchema"
        v-model="formData"
        :rules="formRules"
        label-width="150px"
        show-operation-slot
        @field-click="handleFieldClick"
        @field-change="handleFieldChange"
      >
        <template #operation="{ validate, reset }">
          <el-button type="primary" @click="handleSubmit(validate)">提交</el-button>
          <el-button @click="reset">重置</el-button>
        </template>
      </ClFormWrapper>

      <div class="form-result">
        <h5>表单数据：</h5>
        <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
      </div>
    </div>

    <h3>只读字段示例</h3>
    <div class="demo-item">
      <ClFormWrapper
        :schema="readonlySchema"
        v-model="readonlyFormData"
        label-width="150px"
        @field-click="handleFieldClick"
      >
        <template #operation="{ validate }">
          <el-button type="primary" @click="handleSubmit(validate)">提交</el-button>
        </template>
      </ClFormWrapper>

      <div class="form-result">
        <h5>表单数据：</h5>
        <pre>{{ JSON.stringify(readonlyFormData, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { ClFormWrapper } from "crystalplus-ui";

// 基础表单数据
const formData = ref({
  name: "",
  email: "",
  age: 0,
  gender: "",
  birthday: "",
  hobby: [],
  status: false
});

// 基础表单配置
const formSchema = [
  {
    field: "name",
    label: "姓名",
    type: "input",
    required: true,
    placeholder: "请输入姓名",
    maxlength: 20
  },
  {
    field: "email",
    label: "邮箱",
    type: "input",
    required: false,
    placeholder: "请输入邮箱",
    inputType: "email"
  },
  {
    field: "age",
    label: "年龄",
    type: "number",
    required: true,
    placeholder: "请输入年龄",
    min: 0,
    max: 100,
    step: 1
  },
  {
    field: "gender",
    label: "性别",
    type: "select",
    required: true,
    filterable: true,
    clearable: true,
    placeholder: "请选择性别",
    options: [
      { label: "男", value: "male" },
      { label: "女", value: "female" }
    ]
  },
  {
    field: "birthday",
    label: "生日",
    type: "date",
    required: true,
    placeholder: "请选择生日",
    format: "YYYY-MM-DD",
    valueFormat: "YYYY-MM-DD"
  },
  {
    field: "hobby",
    label: "爱好",
    type: "checkbox",
    required: true,
    options: [
      { label: "读书", value: "reading" },
      { label: "运动", value: "sports" },
      { label: "音乐", value: "music" },
      { label: "旅行", value: "travel" }
    ]
  },
  {
    field: "status",
    label: "状态",
    type: "switch",
    activeText: "启用",
    inactiveText: "禁用"
  }
];

// 基础表单验证规则
const formRules = {
  name: [
    { required: true, message: "请输入姓名", trigger: "blur" },
    { min: 2, max: 20, message: "姓名长度在 2 到 20 个字符", trigger: "blur" }
  ],
  age: [
    { required: true, message: "请输入年龄", trigger: "blur" },
    { type: "number", message: "请输入数字", trigger: "blur" }
  ],
  gender: [{ required: true, message: "请选择性别", trigger: "change" }],
  birthday: [{ required: true, message: "请选择生日", trigger: "change" }],
  hobby: [{ required: true, message: "请选择爱好", trigger: "change" }]
};

// 只读表单数据
const readonlyFormData = ref({
  name: "张三",
  readonlyInput: "这是只读文本"
});

// 只读表单配置
const readonlySchema = [
  {
    field: "name",
    label: "姓名",
    type: "input",
    required: true,
    placeholder: "请输入姓名",
    maxlength: 20
  },
  {
    field: "readonlyInput",
    label: "只读输入框",
    type: "input",
    readonly: true,
    placeholder: "这是只读输入框",
    value: "这是只读文本"
  }
];

// 表单引用
const formRef = ref(null);

// 提交处理
const handleSubmit = async (validate: any) => {
  const isValid = await validate();
  if (isValid) {
    ElMessage.success("表单验证通过");
    console.log("表单数据:", formData.value);
  } else {
    ElMessage.error("表单验证失败，请检查");
  }
};

// 字段点击处理
const handleFieldClick = (field: string, event: any) => {
  console.log(`字段 ${field} 被点击:`, event);
  ElMessage.success(`点击了字段: ${field}`);
};

// 字段变化处理
const handleFieldChange = (field: string, value: any) => {
  console.log(`字段 ${field} 值变化:`, value);
  formData.value[field] = value;
};
</script>

<style scoped>
.form-wrapper-demo {
  max-width: 800px;
}

.demo-item {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background-color: #f9fafc;
}

h3 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
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

:deep(.el-button) {
  margin-right: 10px;
}
</style>