<template>
  <div class="input-number-thousands-demo">
    <h3>千分位格式化</h3>
    <div class="input-group">
      <CrystalInputNumber v-model="value1" placeholder="千分位格式化" thousands />
      <CrystalInputNumber v-model="value2" placeholder="千分位带精度" thousands :precision="2" :step="0.01" />
      <CrystalInputNumber v-model="value3" placeholder="千分位带范围" thousands :min="0" :max="10000" />
      <CrystalInputNumber v-model="value4" placeholder="自定义格式化" :formatter="customFormatter" :parser="customParser" />
    </div>
    <div class="input-values">
      <h4>输入值展示：</h4>
      <p>千分位格式化: {{ value1 }}</p>
      <p>千分位带精度: {{ value2 }}</p>
      <p>千分位带范围: {{ value3 }}</p>
      <p>自定义格式化: {{ value4 }}</p>
    </div>
  </div>
</template>

<script setup>
import { CrystalInputNumber } from 'crystalplus-ui'
import { ref } from 'vue'

const value1 = ref(1000)
const value2 = ref(1000.5)
const value3 = ref(5000)
const value4 = ref(1000)

// 自定义格式化函数
const customFormatter = (value) => {
  if (value === null || value === undefined) return ''
  return `￥ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}

// 自定义解析函数
const customParser = (value) => {
  if (!value) return 0
  return Number(value.replace(/[^\d.]/g, ''))
}
</script>

<style scoped>
.input-number-thousands-demo {
  max-width: 800px;
}

.input-number-thousands-demo h3 {
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

/* 美化输入框样式 */
:deep(.el-input-number) {
  width: 100%;
}

:deep(.el-input__wrapper) {
  border-radius: 6px;
  transition: all 0.3s ease;
}

</style>