<template>
  <div class="time-select-demo">
    <h4>自定义图标</h4>
    <div class="flex flex-wrap gap-4">
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">自定义前缀图标</p>
        <CrystalTimeSelect 
          v-model="prefixIconValue" 
          placeholder="选择时间（带时钟图标）"
          prefix-icon="Timer"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">自定义后缀图标</p>
        <CrystalTimeSelect 
          v-model="suffixIconValue" 
          placeholder="选择时间（带日历图标）"
          suffix-icon="Calendar"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">自定义清空图标</p>
        <CrystalTimeSelect 
          v-model="clearIconValue" 
          placeholder="选择时间（带清空图标）"
          clear-icon="Delete"
        />
      </div>
      <div>
        <p style="margin-bottom: 8px; font-size: 14px; color: #606266">全部自定义图标</p>
        <CrystalTimeSelect 
          v-model="allIconValue" 
          placeholder="选择时间（全自定义图标）"
          prefix-icon="Clock"
          suffix-icon="Time"
          clear-icon="Close"
        />
      </div>
    </div>
    
    <div class="value-display" style="margin-top: 20px;">
      <h4>选择值</h4>
      <p>自定义前缀图标: {{ prefixIconValue }}</p>
      <p>自定义后缀图标: {{ suffixIconValue }}</p>
      <p>自定义清空图标: {{ clearIconValue }}</p>
      <p>全部自定义图标: {{ allIconValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalTimeSelect } from 'crystalplus-ui'

const prefixIconValue = ref('')
const suffixIconValue = ref('')
const clearIconValue = ref('')
const allIconValue = ref('')
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
