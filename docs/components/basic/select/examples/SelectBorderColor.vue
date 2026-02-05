<template>
  <div class="select-border-color-demo">
    <h4>自定义边框颜色和阴影效果</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">默认蓝色</p>
        <CrystalSelect 
          v-model="defaultValue" 
          :options="options" 
          placeholder="默认蓝色边框" 
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">红色</p>
        <CrystalSelect 
          v-model="redValue" 
          :options="options" 
          placeholder="红色边框" 
          border-theme-color="#ff4d4f" 
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">绿色</p>
        <CrystalSelect 
          v-model="greenValue" 
          :options="options" 
          placeholder="绿色边框" 
          border-theme-color="#389e0d" 
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">橙色</p>
        <CrystalSelect 
          v-model="orangeValue" 
          :options="options" 
          placeholder="橙色边框" 
          border-theme-color="#faad14" 
        />
      </div>
    </div>
    <p style="margin-top: 16px; font-size: 14px; color: #606266">
      提示：鼠标经过选择器时会显示阴影效果，点击选择器获得焦点时阴影效果会更加明显
    </p>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>选择值</h4>
      <p>默认蓝色: {{ defaultValue }}</p>
      <p>红色: {{ redValue }}</p>
      <p>绿色: {{ greenValue }}</p>
      <p>橙色: {{ orangeValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalSelect } from 'crystalplus-ui'
const defaultValue = ref('')
const redValue = ref('')
const greenValue = ref('')
const orangeValue = ref('')

const options = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3' },
  { value: 'option4', label: '选项4' },
  { value: 'option5', label: '选项5' }
]
</script>

<style scoped>
.select-border-color-demo {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #eaeaea;
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.gap-4 {
  gap: 16px;
}

.value-display {
  margin-top: 20px;
  padding-top: 20px;
}

.value-display h4 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}

.value-display p {
  margin: 5px 0;
  font-size: 14px;
  color: #606266;
}

/* 确保选择器占满宽度 */
:deep(.el-select) {
  width: 100%;
}
</style>
