<template>
  <div class="date-picker-demo">
    <h4>基础日期选择</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">日期选择器</p>
        <CrystalDatePickerPane 
          v-model="dateValue" 
          placeholder="选择日期"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">日期范围选择器</p>
        <CrystalDatePickerPane 
          v-model="dateRangeValue" 
          type="daterange" 
          range-separator="至" 
          start-placeholder="开始日期" 
          end-placeholder="结束日期"
        />
      </div>
    </div>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>选择值</h4>
      <p>日期: {{ dateValue }}</p>
      <p>日期范围: {{ dateRangeValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalDatePickerPane } from 'crystalplus-ui'

const dateValue = ref('')
const dateRangeValue = ref([])
</script>

<style scoped>
.date-picker-demo {
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
:deep(.el-date-editor) {
  width: 100%;
}
</style>
