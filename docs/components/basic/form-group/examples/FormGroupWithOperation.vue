<template>
  <div class="demo-container">
    <h3>表单组与操作按钮</h3>
    <CrystalFormGroup
      v-model="formData"
      :formGroups="formGroups"
      :showOperation="true"
      @field-change="handleFieldChange"
    >
      <template #header-operation="{ group, model }">
        <el-button size="small" type="primary" @click="handleHeaderOperation(group, model)">
          组操作
        </el-button>
      </template>
      <template #operation="{ validate, reset }">
        <div class="form-operation-buttons">
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" @click="handleSubmit(validate)">提交</el-button>
        </div>
      </template>
    </CrystalFormGroup>
    
    <div class="demo-result">
      <h4>表单数据：</h4>
      <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CrystalFormGroup } from 'crystalplus-ui'

const formData = ref({
  username: '',
  password: '',
  email: '',
  phone: '',
  agree: false
})

const formGroups = ref([
  {
    title: '账号信息',
    rows: [
      {
        fields: [
          {
            field: 'username',
            label: '用户名',
            type: 'input',
            placeholder: '请输入用户名',
            required: true,
            clearable: true
          },
          {
            field: 'password',
            label: '密码',
            type: 'password',
            placeholder: '请输入密码',
            required: true,
            showPassword: true
          }
        ]
      },
      {
        fields: [
          {
            field: 'email',
            label: '邮箱',
            type: 'input',
            placeholder: '请输入邮箱',
            required: true,
            clearable: true,
            rules: [
              {
                type: 'email',
                message: '请输入正确的邮箱格式'
              }
            ]
          },
          {
            field: 'phone',
            label: '手机号',
            type: 'input',
            placeholder: '请输入手机号',
            clearable: true,
            rules: [
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号格式'
              }
            ]
          }
        ]
      },
      {
        fields: [
          {
            field: 'agree',
            label: '同意协议',
            type: 'checkbox',
            required: true,
            cols: 24
          }
        ]
      }
    ]
  }
])

const handleFieldChange = (field: any, value: any) => {
  console.log('字段变化:', field, value)
}

const handleHeaderOperation = (group: any, model: any) => {
  console.log('组操作:', group.title, model)
}

const handleSubmit = async (validate: any) => {
  const isValid = await validate();
  if (isValid) {
    console.log('提交表单:', formData.value)
    alert('表单已提交')
  }
}

const handleReset = () => {
  Object.keys(formData.value).forEach(key => {
    formData.value[key as keyof typeof formData.value] = ''
  })
  formData.value.agree = false
}
</script>

<style scoped>
.demo-container {
  max-width: 800px;
  margin: 0 auto;
}

.form-operation-buttons {
  margin-top: 20px;
  text-align: right;
}

.form-operation-buttons .el-button {
  margin-left: 10px;
}

.demo-result {
  margin-top: 20px;
  padding: 16px;
  background-color: #f5f7fa;
  border-radius: 4px;
}

pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>