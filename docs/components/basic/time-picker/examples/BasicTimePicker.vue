<template>
  <div class="time-picker-demo">
    <h4>基础时间选择</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">时间选择器</p>
        <CrystalTimePicker 
          v-model="timeValue" 
          placeholder="选择时间"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">时间范围选择器</p>
        <CrystalTimePicker 
          v-model="timeRangeValue" 
          :is-range="true" 
          range-separator="至" 
          start-placeholder="开始时间" 
          end-placeholder="结束时间"
        />
      </div>
    </div>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>选择值</h4>
      <p>时间: {{ timeValue }}</p>
      <p>时间范围: {{ timeRangeValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalTimePicker } from 'crystalplus-ui'

const timeValue = ref('')
const timeRangeValue = ref([])
</script>

<style scoped>
.time-picker-demo {
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
:deep(.el-time-editor) {
  width: 100%;
}
</style>
