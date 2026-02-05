<template>
  <div class="time-picker-demo">
    <h4>高级时间选择</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">箭头控制</p>
        <CrystalTimePicker 
          v-model="arrowValue" 
          placeholder="选择时间（箭头控制）"
          :arrow-control="true"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">禁用状态</p>
        <CrystalTimePicker 
          v-model="disabledValue" 
          placeholder="选择时间（禁用）"
          :disabled="true"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">不同尺寸</p>
        <div class="flex flex-col gap-2">
          <CrystalTimePicker 
            v-model="largeValue" 
            placeholder="大尺寸"
            size="large"
          />
          <CrystalTimePicker 
            v-model="defaultValue" 
            placeholder="默认尺寸"
            size="default"
          />
          <CrystalTimePicker 
            v-model="smallValue" 
            placeholder="小尺寸"
            size="small"
          />
        </div>
      </div>
    </div>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>选择值</h4>
      <p>箭头控制: {{ arrowValue }}</p>
      <p>禁用状态: {{ disabledValue }}</p>
      <p>大尺寸: {{ largeValue }}</p>
      <p>默认尺寸: {{ defaultValue }}</p>
      <p>小尺寸: {{ smallValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalTimePicker } from 'crystalplus-ui'

const arrowValue = ref('')
const disabledValue = ref('')
const largeValue = ref('')
const defaultValue = ref('')
const smallValue = ref('')
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

.flex-col {
  flex-direction: column;
}

.gap-4 {
  gap: 16px;
}

.gap-2 {
  gap: 8px;
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
