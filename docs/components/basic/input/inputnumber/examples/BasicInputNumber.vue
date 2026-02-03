<template>
  <div class="basic-input-number-demo">
    <h3>基础数字输入框</h3>
    <div class="input-group">
      <CrystalInputNumber v-model="value1" placeholder="请输入数字" />
      <CrystalInputNumber v-model="value2" placeholder="带步长" :step="5" />
      <CrystalInputNumber v-model="value3" placeholder="带精度" :precision="2" :step="0.1" />
      <CrystalInputNumber v-model="value4" placeholder="禁用状态" disabled />
      <CrystalInputNumber v-model="value5" placeholder="不同尺寸" size="large" />
      <CrystalInputNumber v-model="value6" placeholder="不同尺寸" size="small" />
    </div>
    <div class="input-values">
      <h4>输入值展示：</h4>
      <p>基本数字输入: {{ value1 }}</p>
      <p>带步长: {{ value2 }}</p>
      <p>带精度: {{ value3 }}</p>
      <p>禁用状态: {{ value4 }}</p>
      <p>大尺寸: {{ value5 }}</p>
      <p>小尺寸: {{ value6 }}</p>
    </div>
  </div>
</template>

<script setup>
import { CrystalInputNumber } from 'crystalplus-ui'
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(50)
const value5 = ref(0)
const value6 = ref(0)
</script>

<style scoped>
.basic-input-number-demo {
  max-width: 800px;
}

.basic-input-number-demo h3 {
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