<template>
  <div class="time-select-demo">
    <h4>基础时间选择</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">默认时间选择</p>
        <CrystalTimeSelect 
          v-model="defaultValue" 
          placeholder="选择时间"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">自定义时间范围</p>
        <CrystalTimeSelect 
          v-model="customRangeValue" 
          placeholder="选择时间（8:00-20:00）"
          start="08:00"
          end="20:00"
          step="00:15"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">不同尺寸</p>
        <div class="flex flex-col gap-2">
          <CrystalTimeSelect 
            v-model="largeValue" 
            placeholder="大尺寸"
            size="large"
          />
          <CrystalTimeSelect 
            v-model="defaultSizeValue" 
            placeholder="默认尺寸"
            size="default"
          />
          <CrystalTimeSelect 
            v-model="smallValue" 
            placeholder="小尺寸"
            size="small"
          />
        </div>
      </div>
    </div>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>选择值</h4>
      <p>默认时间选择: {{ defaultValue }}</p>
      <p>自定义时间范围: {{ customRangeValue }}</p>
      <p>大尺寸: {{ largeValue }}</p>
      <p>默认尺寸: {{ defaultSizeValue }}</p>
      <p>小尺寸: {{ smallValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalTimeSelect } from 'crystalplus-ui'

const defaultValue = ref('')
const customRangeValue = ref('')
const largeValue = ref('')
const defaultSizeValue = ref('')
const smallValue = ref('')
</script>

<style scoped>
.time-select-demo {
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
:deep(.el-time-select) {
  width: 240px;
}
</style>
