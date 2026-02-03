<template>
  <div class="advanced-input-demo">
    <h3>高级输入框</h3>
    <div class="input-group">
      <div class="size-group">
        <h4>不同尺寸</h4>
        <div class="size-inputs">
          <CrystalInput v-model="inputValue1" placeholder="大尺寸" size="large" />
          <CrystalInput v-model="inputValue2" placeholder="默认尺寸" size="default" />
          <CrystalInput v-model="inputValue3" placeholder="小尺寸" size="small" />
        </div>
      </div>
      
      <CrystalInput v-model="inputValue4" placeholder="字数统计" maxlength="20" show-word-limit />
      <CrystalInput v-model="inputValue5" placeholder="邮箱输入" type="email" />
      <CrystalInput v-model="inputValue6" placeholder="密码输入" type="password" show-password />
      <CrystalInput v-model="inputValue7" placeholder="数字输入" type="number" />
    </div>
  </div>
</template>

<script setup>
import { CrystalInput } from 'crystalplus-ui'
import { ref } from 'vue'

const inputValue1 = ref('')
const inputValue2 = ref('')
const inputValue3 = ref('')
const inputValue4 = ref('')
const inputValue5 = ref('')
const inputValue6 = ref('')
const inputValue7 = ref('')
</script>

<style scoped>
.advanced-input-demo {
  max-width: 800px;
}

.advanced-input-demo h3 {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.size-group {
  margin-bottom: 8px;
}

.size-group h4 {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #606266;
}

.size-inputs {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.size-inputs :deep(.el-input) {
  flex: 1;
  min-width: 150px;
}

/* 美化输入框样式 */
:deep(.el-input__wrapper) {
  border-radius: 6px;
  transition: all 0.3s ease;
}


</style>