<template>
  <div class="multiple-select-demo">
    <h3>多选模式</h3>
    <div class="input-group">
      <CrystalSelect 
        v-model="value1" 
        :options="options" 
        placeholder="请选择" 
        multiple
      />
      <CrystalSelect 
        v-model="value2" 
        :options="options" 
        placeholder="多选并折叠标签" 
        multiple
        collapse-tags
      />
      <CrystalSelect 
        v-model="value3" 
        :options="optionsWithIcons" 
        placeholder="多选带图标" 
        multiple
      />
      <CrystalSelect 
        v-model="value4" 
        :options="options" 
        placeholder="多选可清空" 
        multiple
        clearable
      />
    </div>
    <div class="input-values">
      <h4>选择值展示：</h4>
      <p>基本多选: {{ value1 }}</p>
      <p>折叠标签: {{ value2 }}</p>
      <p>多选带图标: {{ value3 }}</p>
      <p>多选可清空: {{ value4 }}</p>
    </div>
  </div>
</template>

<script setup>
import { CrystalSelect } from 'crystalplus-ui'
import { ref } from 'vue'

const value1 = ref([])
const value2 = ref([])
const value3 = ref([])
const value4 = ref([])

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
</script>

<style scoped>
.multiple-select-demo {
  max-width: 800px;
}

.multiple-select-demo h3 {
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

:deep(.el-select__wrapper:hover) {
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.1) !important;
}

:deep(.el-select__wrapper.is-focus) {
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2) !important;
}
</style>