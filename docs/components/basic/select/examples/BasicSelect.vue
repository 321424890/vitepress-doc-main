<template>
  <div class="basic-select-demo">
    <h3>基础下拉选择器</h3>
    <div class="input-group">
      <CrystalSelect 
        v-model="value1" 
        :options="options" 
        placeholder="请选择" 
      />
      <CrystalSelect 
        v-model="value2" 
        :options="optionsWithIcons" 
        placeholder="带图标的选择器" 
      />
      <CrystalSelect 
        v-model="value3" 
        :options="optionsWithDescription" 
        placeholder="带描述的选择器" 
      />
      <CrystalSelect 
        v-model="value4" 
        :options="optionsWithActions" 
        placeholder="带操作按钮的选择器" 
        @option-action="handleOptionAction"
      />
    </div>
    <div class="input-values">
      <h4>选择值展示：</h4>
      <p>基本选择: {{ value1 }}</p>
      <p>带图标: {{ value2 }}</p>
      <p>带描述: {{ value3 }}</p>
      <p>带操作按钮: {{ value4 }}</p>
    </div>
  </div>
</template>

<script setup>
import { CrystalSelect } from 'crystalplus-ui'
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')

const options = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3' },
  { value: 'option4', label: '选项4' },
  { value: 'option5', label: '选项5' }
]

const optionsWithIcons = [
  { value: 'option1', label: '选项1', icon: 'ep:warning' },
  { value: 'option2', label: '选项2', icon: 'ep:document' },
  { value: 'option3', label: '选项3', icon: 'ep:user' },
  { value: 'option4', label: '选项4', icon: 'ep:timer' },
  { value: 'option5', label: '选项5', icon: 'ep:circle-check' }
]

const optionsWithDescription = [
  { value: 'option1', label: '选项1', description: '这是选项1的描述' },
  { value: 'option2', label: '选项2', description: '这是选项2的描述' },
  { value: 'option3', label: '选项3', description: '这是选项3的描述' },
  { value: 'option4', label: '选项4', description: '这是选项4的描述' },
  { value: 'option5', label: '选项5', description: '这是选项5的描述' }
]

const optionsWithActions = [
  { 
    value: 'option1', 
    label: '选项1', 
    actions: [
      { name: 'edit', icon: 'ep:edit', label: '编辑' },
      { name: 'delete', icon: 'ep:delete', label: '删除' }
    ] 
  },
  { 
    value: 'option2', 
    label: '选项2', 
    actions: [
      { name: 'edit', icon: 'ep:edit', label: '编辑' },
      { name: 'delete', icon: 'ep:delete', label: '删除', disabled: true }
    ] 
  },
  { 
    value: 'option3', 
    label: '选项3', 
    actions: [
      { name: 'edit', icon: 'ep:edit', label: '编辑' },
      { name: 'delete', icon: 'ep:delete', label: '删除' }
    ] 
  }
]

const handleOptionAction = (actionName, option) => {
  console.log('Option action:', actionName, option)
  alert(`执行操作: ${actionName} 对选项: ${option.label}`)
}
</script>

<style scoped>
.basic-select-demo {
  max-width: 800px;
}

.basic-select-demo h3 {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.input-values {
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 6px;
  border-left: 4px solid #409eff;
}

.input-values h4 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.input-values p {
  margin: 8px 0;
  font-size: 14px;
  color: #606266;
}

/* 美化选择器样式 */
:deep(.el-select) {
  width: 100%;
}

:deep(.el-select__wrapper) {
  border-radius: 6px;
  transition: all 0.3s ease;
}


</style>