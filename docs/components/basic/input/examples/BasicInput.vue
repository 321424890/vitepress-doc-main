<template>
  <div class="basic-input-demo">
    <h3>基本输入框</h3>
    <div class="input-group">
      <CrystalInput v-model="inputValue" placeholder="请输入内容" />
      <CrystalInput v-model="inputValue2" placeholder="禁用状态" disabled />
      <CrystalInput v-model="inputValue3" placeholder="可清空" clearable />
      <CrystalInput v-model="inputValue4" placeholder="带前缀图标" :prefix-icon="Search" />
      <CrystalInput v-model="inputValue5" placeholder="带后缀图标" :suffix-icon="Calendar" />
      
    </div>
  </div>
</template>

<script setup>
import { CrystalInput } from 'crystalplus-ui'
import { Calendar, Search } from "@element-plus/icons-vue"
import { ref } from 'vue'

const inputValue = ref('')
const inputValue2 = ref('')
const inputValue3 = ref('')
const inputValue4 = ref('')
const inputValue5 = ref('')
</script>

<style scoped>
.basic-input-demo {
  max-width: 800px;
}

.basic-input-demo h3 {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* 美化输入框样式 */
:deep(.el-input__wrapper) {
  border-radius: 6px;
  transition: all 0.3s ease;
}


</style>