<template>
  <div class="form-wrapper-advanced-demo">
    <h3>高级表单示例</h3>
    <div class="demo-item">
      <ClFormWrapper
        ref="advancedFormRef"
        :schema="advancedSchema"
        v-model="advancedFormData"
        :rules="advancedRules"
        label-width="150px"
        show-operation-slot
        @field-change="handleAdvancedFieldChange"
      >
        <!-- 自定义插槽示例 -->
        <template #customSlot="{ formData, field }">
          <div class="custom-slot-content">
            <el-input
              v-model="formData[field]"
              placeholder="这是自定义插槽内容"
              clearable
            />
            <el-button type="primary" size="small" style="margin-left: 10px;">
              自定义按钮
            </el-button>
          </div>
        </template>
        
        <!-- 操作按钮插槽 -->
        <template #operation="{ validate, reset }">
          <el-button type="primary" @click="handleAdvancedSubmit(validate)">提交</el-button>
          <el-button @click="reset">重置</el-button>
          <el-button type="info" @click="clearAdvancedValidate">清除验证</el-button>
        </template>
      </ClFormWrapper>

      <div class="form-result">
        <h5>表单数据：</h5>
        <pre>{{ JSON.stringify(advancedFormData, null, 2) }}</pre>
      </div>
    </div>

    <h3>复杂字段类型示例</h3>
    <div class="demo-item">
      <ClFormWrapper
        :schema="complexSchema"
        v-model="complexFormData"
        label-width="150px"
        show-operation-slot
      >
        <template #operation="{ validate }">
          <el-button type="primary" @click="handleComplexSubmit(validate)">提交</el-button>
        </template>
      </ClFormWrapper>

      <div class="form-result">
        <h5>表单数据：</h5>
        <pre>{{ JSON.stringify(complexFormData, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { ClFormWrapper } from "crystalplus-ui";

// 高级表单数据
const advancedFormData = ref({
  name: "",
  email: "",
  phone: "",
  address: "",
  customSlot: ""
});

// 高级表单配置
const advancedSchema = [
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
    required: true,
    placeholder: "请输入邮箱",
    inputType: "email"
  },
  {
    field: "phone",
    label: "手机号",
    type: "input",
    required: true,
    placeholder: "请输入手机号",
    inputType: "tel",
    maxlength: 11
  },
  {
    field: "address",
    label: "地址",
    type: "textarea",
    required: true,
    placeholder: "请输入地址",
    rows: 4,
    maxlength: 100
  },
  {
    field: "customSlot",
    label: "自定义插槽",
    type: "slot",
    slotName: "customSlot"
  }
];

// 高级表单验证规则
const advancedRules = {
  name: [
    { required: true, message: "请输入姓名", trigger: "blur" },
    { min: 2, max: 20, message: "姓名长度在 2 到 20 个字符", trigger: "blur" }
  ],
  email: [
    { required: true, message: "请输入邮箱", trigger: "blur" },
    { type: "email", message: "请输入正确的邮箱格式", trigger: "blur" }
  ],
  phone: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    { pattern: /^1[3-9]\d{9}$/, message: "请输入正确的手机号", trigger: "blur" }
  ],
  address: [
    { required: true, message: "请输入地址", trigger: "blur" },
    { min: 5, message: "地址长度至少 5 个字符", trigger: "blur" }
  ]
};

// 复杂字段类型表单数据
const complexFormData = ref({
  select: "",
  radio: "",
  checkbox: [],
  switch: false,
  date: "",
  time: "",
  number: 0
});

// 复杂字段类型表单配置
const complexSchema = [
  {
    field: "select",
    label: "下拉选择",
    type: "select",
    required: true,
    placeholder: "请选择",
    filterable: true,
    clearable: true,
    options: [
      { label: "选项1", value: "option1" },
      { label: "选项2", value: "option2" },
      { label: "选项3", value: "option3" },
      { label: "选项4", value: "option4" }
    ]
  },
  {
    field: "radio",
    label: "单选框",
    type: "radio",
    required: true,
    options: [
      { label: "选项A", value: "optionA" },
      { label: "选项B", value: "optionB" },
      { label: "选项C", value: "optionC" }
    ]
  },
  {
    field: "checkbox",
    label: "复选框",
    type: "checkbox",
    required: true,
    options: [
      { label: "选项1", value: "check1" },
      { label: "选项2", value: "check2" },
      { label: "选项3", value: "check3" }
    ]
  },
  {
    field: "switch",
    label: "开关",
    type: "switch",
    activeText: "开启",
    inactiveText: "关闭",
    activeValue: true,
    inactiveValue: false
  },
  {
    field: "date",
    label: "日期选择",
    type: "date",
    required: true,
    placeholder: "请选择日期",
    format: "YYYY-MM-DD",
    valueFormat: "YYYY-MM-DD"
  },
  {
    field: "time",
    label: "时间选择",
    type: "time",
    required: true,
    placeholder: "请选择时间",
    format: "HH:mm:ss",
    valueFormat: "HH:mm:ss"
  },
  {
    field: "number",
    label: "数字输入",
    type: "number",
    required: true,
    placeholder: "请输入数字",
    min: 0,
    max: 1000,
    step: 1
  }
];

// 表单引用
const advancedFormRef = ref(null);

// 高级表单提交处理
const handleAdvancedSubmit = async (validate: any) => {
  const isValid = await validate();
  if (isValid) {
    ElMessage.success("高级表单验证通过");
    console.log("高级表单数据:", advancedFormData.value);
  } else {
    ElMessage.error("高级表单验证失败，请检查");
  }
};

// 复杂表单提交处理
const handleComplexSubmit = async (validate: any) => {
  const isValid = await validate();
  if (isValid) {
    ElMessage.success("复杂表单验证通过");
    console.log("复杂表单数据:", complexFormData.value);
  } else {
    ElMessage.error("复杂表单验证失败，请检查");
  }
};

// 字段变化处理
const handleAdvancedFieldChange = (field: string, value: any) => {
  console.log(`高级字段 ${field} 值变化:`, value);
  advancedFormData.value[field] = value;
};

// 清除验证
const clearAdvancedValidate = () => {
  advancedFormRef.value?.clearValidate();
  ElMessage.success("验证已清除");
};
</script>

<style scoped>
.form-wrapper-advanced-demo {
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

.custom-slot-content {
  display: flex;
  align-items: center;
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