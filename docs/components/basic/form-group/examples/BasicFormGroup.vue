<template>
  <div class="form-container">
    <CrystalFormGroup
      v-model="formData"
      :formGroups="formGroups"
      :tableConfig="tableConfig"
    >
      <template #table-operation="{ row, index }">
        <a href="javascript:void(0)" @click="handleDelete(row)">Delete</a>
      </template>
    </CrystalFormGroup>
    
    <div class="form-data-preview">
      <h5>表单数据：</h5>
      <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CrystalFormGroup } from "crystalplus-ui";

const formData = ref({
  warehouseName: '',
  warehouseAddress: '',
  warehouseManager: '',
  approver: '',
  birthday: '',
  warehouseType: '',
  taskName: '',
  taskDescription: '',
  executor: '',
  responsiblePerson: '',
  effectiveTime: '',
  taskType: ''
});

const formGroups = ref([
  {
    title: "仓库管理",
    rows: [
      {
        fields: [
          {
            field: "warehouseName",
            label: "仓库名",
            type: "input",
            required: true,
            placeholder: "请输入仓库名称",
            cols: 8
          },
          {
            field: "warehouseAddress",
            label: "仓库地址",
            type: "input",
            required: true,
            placeholder: "请输入仓库地址",
            cols: 8
          },
          {
            field: "warehouseManager",
            label: "仓库管理",
            type: "select",
            required: true,
            placeholder: "请选择管理员",
            options: [
              { label: "管理员1", value: "manager1" },
              { label: "管理员2", value: "manager2" },
              { label: "管理员3", value: "manager3" }
            ],
            cols: 8
          }
        ]
      },
      {
        fields: [
          {
            field: "approver",
            label: "审批人",
            type: "select",
            placeholder: "请选择审批人",
            options: [
              { label: "审批人1", value: "approver1" },
              { label: "审批人2", value: "approver2" },
              { label: "审批人3", value: "approver3" }
            ],
            cols: 8
          },
          {
            field: "birthday",
            label: "生效日期",
            type: "date",
            placeholder: "请选择时间",
            cols: 8
          },
          {
            field: "warehouseType",
            label: "仓库类型",
            type: "select",
            placeholder: "请选择仓库类型",
            options: [
              { label: "普通仓库", value: "normal" },
              { label: "冷链仓库", value: "cold" },
              { label: "危险品仓库", value: "dangerous" }
            ],
            cols: 8
          }
        ]
      }
    ]
  },
  {
    title: "任务管理",
    rows: [
      {
        fields: [
          {
            field: "taskName",
            label: "任务名",
            type: "input",
            required: true,
            placeholder: "请输入任务名称",
            cols: 8
          },
          {
            field: "taskDescription",
            label: "任务描述",
            type: "input",
            required: true,
            placeholder: "请输入任务描述",
            cols: 8
          },
          {
            field: "executor",
            label: "执行人",
            type: "select",
            required: true,
            placeholder: "请选择执行人",
            options: [
              { label: "执行人1", value: "executor1" },
              { label: "执行人2", value: "executor2" },
              { label: "执行人3", value: "executor3" }
            ],
            cols: 8
          }
        ]
      },
      {
        fields: [
          {
            field: "responsiblePerson",
            label: "负责人",
            type: "select",
            placeholder: "请选择负责人",
            options: [
              { label: "负责人1", value: "resp1" },
              { label: "负责人2", value: "resp2" },
              { label: "负责人3", value: "resp3" }
            ],
            cols: 8
          },
          {
            field: "effectiveTime",
            label: "提醒时间",
            type: "date",
            placeholder: "请选择时间",
            cols: 8
          },
          {
            field: "taskType",
            label: "任务类型",
            type: "select",
            placeholder: "请选择任务类型",
            options: [
              { label: "日常任务", value: "daily" },
              { label: "紧急任务", value: "urgent" },
              { label: "周期性任务", value: "periodic" }
            ],
            cols: 8
          }
        ]
      }
    ]
  }
]);

// 表格配置
const tableConfig = ref({
  data: [
    {
      name: '员工1',
      employeeId: '001',
      department: '行政部'
    },
    {
      name: '员工2',
      employeeId: '002',
      department: '技术部'
    },
    {
      name: '员工3',
      employeeId: '003',
      department: '财务部'
    }
  ],
  columns: [
    {
      prop: "name",
      label: "成员姓名",
      width: "180px"
    },
    {
      prop: "employeeId",
      label: "工号",
      width: "120px"
    },
    {
      prop: "department",
      label: "所属部门"
    },
    {
      prop: "operation",
      label: "操作",
      width: "100px"
    }
  ],
  basicHeight: '200px' 
});

const handleDelete = (row) => {
  console.log('删除员工:', row);
  // 这里可以添加删除逻辑
};
</script>

<style scoped>
.form-container {
  padding: 20px;
  background-color: white;
  min-height: 100vh;
}

/* 表单数据预览样式 */
.form-data-preview {
  margin-top: 20px;
  padding: 16px;
  background-color: white;
  border-radius: 4px;
}

.form-data-preview h5 {
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
}

.form-data-preview pre {
  margin: 0;
  padding: 12px;
  background-color: #f9f9f9;
  border-radius: 4px;
  font-size: 12px;
  line-height: 1.5;
  overflow-x: auto;
}

/* 自定义表单组样式 */
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