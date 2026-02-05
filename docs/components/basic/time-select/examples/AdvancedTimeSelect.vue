<template>
  <div class="time-select-demo">
    <h4>高级时间选择</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">禁用状态</p>
        <CrystalTimeSelect 
          v-model="disabledValue" 
          placeholder="选择时间（禁用）"
          :disabled="true"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">只读状态</p>
        <CrystalTimeSelect 
          v-model="readonlyValue" 
          placeholder="选择时间（只读）"
          :readonly="true"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">不可编辑</p>
        <CrystalTimeSelect 
          v-model="uneditableValue" 
          placeholder="选择时间（不可编辑）"
          :editable="false"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">不可清空</p>
        <CrystalTimeSelect 
          v-model="unclearableValue" 
          placeholder="选择时间（不可清空）"
          :clearable="false"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">时间限制</p>
        <CrystalTimeSelect 
          v-model="limitedValue" 
          placeholder="选择时间（9:30-17:30）"
          start="09:00"
          end="18:00"
          step="00:30"
          min-time="09:30"
          max-time="17:30"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">自定义步长</p>
        <CrystalTimeSelect 
          v-model="stepValue" 
          placeholder="选择时间（5分钟步长）"
          start="08:00"
          end="20:00"
          step="00:05"
        />
      </div>
    </div>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>选择值</h4>
      <p>禁用状态: {{ disabledValue }}</p>
      <p>只读状态: {{ readonlyValue }}</p>
      <p>不可编辑: {{ uneditableValue }}</p>
      <p>不可清空: {{ unclearableValue }}</p>
      <p>时间限制: {{ limitedValue }}</p>
      <p>自定义步长: {{ stepValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalTimeSelect } from 'crystalplus-ui'

const disabledValue = ref('')
const readonlyValue = ref('')
const uneditableValue = ref('')
const unclearableValue = ref('')
const limitedValue = ref('')
const stepValue = ref('')
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
</style>
