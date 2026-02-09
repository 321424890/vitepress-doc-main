<template>
  <div class="demo-container">
    <h3>表单组与表格结合</h3>
    <div class="form-wrapper">
      <CrystalFormGroup
        v-model="formData"
        :formGroups="formGroups"
        :tableConfig="tableConfig"
        @field-change="handleFieldChange"
      >
        <template #table-operation="{ row, index }">
          <el-button size="small" type="primary" plain @click="handleEdit(row)">
            编辑
          </el-button>
          <el-button size="small" type="danger" plain @click="handleDelete(row)" style="margin-left: 8px;">
            删除
          </el-button>
        </template>
      </CrystalFormGroup>
    </div>
    
    <div class="demo-result">
      <h4>表单数据：</h4>
      <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CrystalFormGroup } from 'crystalplus-ui'
import { ElMessage } from 'element-plus'

interface User {
  id: number
  name: string
  age: number
  email: string
  department: string
  position: string
}

const formData = ref({
  projectName: '',
  projectDescription: '',
  projectManager: '',
  startDate: '',
  endDate: '',
  projectStatus: ''
})

const formGroups = ref([
  {
    title: '项目信息',
    rows: [
      {
        fields: [
          {
            field: 'projectName',
            label: '项目名称',
            type: 'input',
            placeholder: '请输入项目名称',
            required: true,
            clearable: true,
            cols: 8
          },
          {
            field: 'projectManager',
            label: '项目经理',
            type: 'select',
            placeholder: '请选择项目经理',
            required: true,
            options: [
              { label: '张三', value: 'zhangsan' },
              { label: '李四', value: 'lisi' },
              { label: '王五', value: 'wangwu' }
            ],
            cols: 8
          },
          {
            field: 'projectStatus',
            label: '项目状态',
            type: 'select',
            placeholder: '请选择项目状态',
            options: [
              { label: '进行中', value: 'in_progress' },
              { label: '已完成', value: 'completed' },
              { label: '已暂停', value: 'paused' }
            ],
            cols: 8
          }
        ]
      },
      {
        fields: [
          {
            field: 'startDate',
            label: '开始日期',
            type: 'date',
            placeholder: '请选择开始日期',
            cols: 8
          },
          {
            field: 'endDate',
            label: '结束日期',
            type: 'date',
            placeholder: '请选择结束日期',
            cols: 8
          },
          {
            field: '',
            label: '',
            type: 'text',
            cols: 8
          }
        ]
      },
      {
        fields: [
          {
            field: 'projectDescription',
            label: '项目描述',
            type: 'textarea',
            placeholder: '请输入项目描述',
            cols: 24,
            rows: 3
          }
        ]
      }
    ]
  }
])

// 表格配置
const tableConfig = ref({
  data: [
    {
      id: 1,
      name: '张三',
      age: 25,
      email: 'zhangsan@example.com',
      department: '技术部',
      position: '前端开发'
    },
    {
      id: 2,
      name: '李四',
      age: 30,
      email: 'lisi@example.com',
      department: '产品部',
      position: '产品经理'
    },
    {
      id: 3,
      name: '王五',
      age: 28,
      email: 'wangwu@example.com',
      department: '技术部',
      position: '后端开发'
    },
    {
      id: 4,
      name: '赵六',
      age: 26,
      email: 'zhaoliu@example.com',
      department: '设计部',
      position: 'UI设计师'
    }
  ],
  columns: [
    {
      prop: 'id',
      label: 'ID',
      width: '80px'
    },
    {
      prop: 'name',
      label: '姓名',
      width: '120px'
    },
    {
      prop: 'age',
      label: '年龄',
      width: '80px'
    },
    {
      prop: 'email',
      label: '邮箱'
    },
    {
      prop: 'department',
      label: '部门',
      width: '120px'
    },
    {
      prop: 'position',
      label: '职位',
      width: '120px'
    },
    {
      prop: 'operation',
      label: '操作',
      width: '180px'
    }
  ],
  basicHeight: '300px'
})

const handleFieldChange = (field: any, value: any) => {
  console.log('字段变化:', field, value)
}

const handleEdit = (row: any) => {
  console.log('编辑用户:', row)
  ElMessage.info(`编辑用户: ${row.name}`)
}

const handleDelete = (row: any) => {
  console.log('删除用户:', row)
  ElMessage.warning(`删除用户: ${row.name}`)
}

const handleTableOperation = (row: any) => {
  console.log('表格操作:', row)
}
</script>

<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  min-height: 100vh;
}

.form-wrapper {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
}

.demo-result {
  margin-top: 24px;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
}

.demo-result h4 {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

pre {
  margin: 0;
  padding: 16px;
  background-color: white;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-all;
}

/* 自定义表格样式 */
:deep(.el-table) {
  margin-top: 0;
}

:deep(.el-table th) {
  background-color: #fafafa;
  font-weight: 500;
}

:deep(.el-table td) {
  padding: 12px 0;
}

/* 响应式样式 */
@media screen and (max-width: 768px) {
  .demo-container {
    padding: 10px;
  }
  
  .demo-result {
    padding: 12px;
  }
}
</style>