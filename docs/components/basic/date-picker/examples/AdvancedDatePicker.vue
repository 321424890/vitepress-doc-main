<template>
  <div class="date-picker-demo">
    <h4>高级日期选择</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">禁用日期</p>
        <CrystalDatePickerPane 
          v-model="disabledDateValue" 
          placeholder="选择日期（禁用今天之后）"
          :disabled-date="disabledDate"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">带快捷选项</p>
        <CrystalDatePickerPane 
          v-model="shortcutsValue" 
          type="daterange"
          range-separator="至" 
          start-placeholder="开始日期" 
          end-placeholder="结束日期"
          :shortcuts="shortcuts"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">自定义日期格式</p>
        <CrystalDatePickerPane 
          v-model="formatValue" 
          placeholder="选择日期（中文格式）"
          format="YYYY年MM月DD日"
        />
      </div>
    </div>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>选择值</h4>
      <p>禁用日期: {{ disabledDateValue }}</p>
      <p>快捷选项: {{ shortcutsValue }}</p>
      <p>自定义格式: {{ formatValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalDatePickerPane } from 'crystalplus-ui'

const disabledDateValue = ref('')
const shortcutsValue = ref([])
const formatValue = ref('')

// 禁用今天之后的日期
const disabledDate = (time) => {
  return time.getTime() > Date.now()
}

// 快捷选项
const shortcuts = [
  {
    text: '最近一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: '最近一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: '最近三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
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
