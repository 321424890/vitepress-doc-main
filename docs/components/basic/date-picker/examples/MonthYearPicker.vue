<template>
  <div class="date-picker-demo">
    <h4>月份和年份选择</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">月份选择器</p>
        <CrystalDatePickerPane 
          v-model="monthValue" 
          type="month" 
          placeholder="选择月份"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">年份选择器</p>
        <CrystalDatePickerPane 
          v-model="yearValue" 
          type="year" 
          placeholder="选择年份"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">月份范围选择器</p>
        <CrystalDatePickerPane 
          v-model="monthRangeValue" 
          type="monthrange" 
          range-separator="至" 
          start-placeholder="开始月份" 
          end-placeholder="结束月份"
        />
      </div>
    </div>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>选择值</h4>
      <p>月份: {{ monthValue }}</p>
      <p>年份: {{ yearValue }}</p>
      <p>月份范围: {{ monthRangeValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalDatePickerPane  } from 'crystalplus-ui'

const monthValue = ref('')
const yearValue = ref('')
const monthRangeValue = ref([])
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
