<template>
  <div class="time-select-demo">
    <h4>自定义时间选择</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">无颜色样式</p>
        <div class="no-color-select">
          <CrystalTimeSelect 
            v-model="noColorValue" 
            placeholder="选择时间（无颜色）"
          />
        </div>
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">自定义时间格式</p>
        <CrystalTimeSelect 
          v-model="formattedValue" 
          placeholder="选择时间（自定义格式）"
          :formatter="formatTime"
          :parser="parseTime"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">禁用特定时间范围</p>
        <CrystalTimeSelect 
          v-model="disabledRangeValue" 
          placeholder="选择时间（禁用12:00-14:00）"
          start="09:00"
          end="18:00"
          step="00:30"
          min-time="09:00"
          max-time="12:00"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">紧凑时间选择</p>
        <CrystalTimeSelect 
          v-model="compactValue" 
          placeholder="选择时间（紧凑格式）"
          start="08:00"
          end="20:00"
          step="01:00"
          fit-input-width
        />
      </div>
    </div>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>选择值</h4>
      <p>无颜色样式: {{ noColorValue }}</p>
      <p>自定义时间格式: {{ formattedValue }}</p>
      <p>禁用特定时间范围: {{ disabledRangeValue }}</p>
      <p>紧凑时间选择: {{ compactValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalTimeSelect } from 'crystalplus-ui'

const noColorValue = ref('')
const formattedValue = ref('')
const disabledRangeValue = ref('')
const compactValue = ref('')

// 自定义时间格式化函数
const formatTime = (value) => {
  if (!value) return ''
  return `${value} 时`
}

// 自定义时间解析函数
const parseTime = (value) => {
  if (!value) return ''
  return value.replace(' 时', '')
}
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
:deep(.el-time-select) {
  width: 240px;
}

/* 无颜色样式 */
.no-color-select {
  :deep(.el-time-select) {
    width: 240px;
  }
  
  :deep(.el-input__wrapper) {
    border-color: #dcdfe6 !important;
    box-shadow: none !important;
  }
  
  :deep(.el-input__wrapper:hover) {
    border-color: #c0c4cc !important;
    box-shadow: none !important;
  }
  
  :deep(.el-input__wrapper.is-focus) {
    border-color: #dcdfe6 !important;
    box-shadow: none !important;
  }
  
  :deep(.el-input__inner) {
    color: #303133 !important;
  }
  
  :deep(.el-time-select__item) {
    color: #303133 !important;
  }
  
  :deep(.el-time-select__item:hover) {
    background-color: #f5f7fa !important;
    color: #303133 !important;
  }
  
  :deep(.el-time-select__item.selected) {
    background-color: #f0f2f5 !important;
    color: #303133 !important;
  }
}
</style>
