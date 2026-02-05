<template>
  <div class="filterable-select-demo">
    <h3>带搜索功能</h3>
    <div class="input-group">
      <CrystalSelect 
        v-model="value1" 
        :options="options" 
        placeholder="可搜索的选择器" 
        filterable
      />
      <CrystalSelect 
        v-model="value2" 
        :options="optionsWithDescription" 
        placeholder="搜索标签和描述" 
        filterable
      />
      <CrystalSelect 
        v-model="value3" 
        :options="options" 
        placeholder="自定义搜索方法" 
        filterable
        :filter-method="customFilterMethod"
      />
      <CrystalSelect 
        v-model="value4" 
        :options="options" 
        placeholder="搜索多选" 
        filterable
        multiple
      />
    </div>
    <div class="input-values">
      <h4>选择值展示：</h4>
      <p>基本搜索: {{ value1 }}</p>
      <p>搜索标签和描述: {{ value2 }}</p>
      <p>自定义搜索: {{ value3 }}</p>
      <p>搜索多选: {{ value4 }}</p>
    </div>
  </div>
</template>

<script setup>
import { CrystalSelect } from 'crystalplus-ui'
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref([])

const options = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3' },
  { value: 'option4', label: '选项4' },
  { value: 'option5', label: '选项5' }
]

const optionsWithDescription = [
  { value: 'option1', label: '选项1', description: '这是选项1的描述，包含关键词：测试' },
  { value: 'option2', label: '选项2', description: '这是选项2的描述，包含关键词：示例' },
  { value: 'option3', label: '选项3', description: '这是选项3的描述，包含关键词：演示' },
  { value: 'option4', label: '选项4', description: '这是选项4的描述，包含关键词：测试' },
  { value: 'option5', label: '选项5', description: '这是选项5的描述，包含关键词：示例' }
]

const customFilterMethod = (value, option) => {
  // 自定义搜索方法：只搜索选项的label，忽略描述
  const label = option?.label || ""
  return String(label).toLowerCase().includes(value.toLowerCase())
}
</script>

<style scoped>
.filterable-select-demo {
  max-width: 800px;
}

.filterable-select-demo h3 {
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