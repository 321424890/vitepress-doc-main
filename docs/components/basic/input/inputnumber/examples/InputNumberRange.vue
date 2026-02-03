<template>
  <div class="input-number-range-demo">
    <h3>范围限制</h3>
    <div class="input-group">
      <CrystalInputNumber v-model="value1" placeholder="0-100范围" :min="0" :max="100" />
      <CrystalInputNumber v-model="value2" placeholder="10-50范围" :min="10" :max="50" :step="5" />
      <CrystalInputNumber v-model="value3" placeholder="负数范围" :min="-50" :max="50" />
      <CrystalInputNumber v-model="value4" placeholder="带范围提示" :min="0" :max="100" range-tip="输入值超出范围" @range-exceed="handleRangeExceed" />
      <CrystalInputNumber v-model="value5" placeholder="严格步进" :min="0" :max="100" :step="10" step-strictly />
    </div>
    <div class="input-values">
      <h4>输入值展示：</h4>
      <p>0-100范围: {{ value1 }}</p>
      <p>10-50范围: {{ value2 }}</p>
      <p>负数范围: {{ value3 }}</p>
      <p>带范围提示: {{ value4 }}</p>
      <p>严格步进: {{ value5 }}</p>
    </div>
    <div v-if="rangeMessage" class="range-message">
      {{ rangeMessage }}
    </div>
  </div>
</template>

<script setup>
import { CrystalInputNumber } from 'crystalplus-ui'
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(10)
const value3 = ref(0)
const value4 = ref(0)
const value5 = ref(0)
const rangeMessage = ref('')

const handleRangeExceed = (data) => {
  const [value, direction] = data
  rangeMessage.value = `值 ${value} 超出范围，${direction === 'min' ? '最小值为 0' : '最大值为 100'}`
  // 3秒后清除提示
  setTimeout(() => {
    rangeMessage.value = ''
  }, 3000)
}
</script>

<style scoped>
.input-number-range-demo {
  max-width: 800px;
}

.input-number-range-demo h3 {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.input-values {
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 6px;
  border-left: 4px solid #409eff;
  margin-bottom: 20px;
}

.input-values h4 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.input-values p {
  margin: 8px 0;
  font-size: 14px;
  color: #606266;
}

.range-message {
  background-color: #fce8e6;
  color: #f56c6c;
  padding: 12px;
  border-radius: 4px;
  border-left: 4px solid #f56c6c;
  margin-top: 10px;
  font-size: 14px;
}

/* 美化输入框样式 */
:deep(.el-input-number) {
  width: 100%;
}

:deep(.el-input__wrapper) {
  border-radius: 6px;
  transition: all 0.3s ease;
}

</style>