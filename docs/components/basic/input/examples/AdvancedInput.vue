<template>
  <div class="input-group">
    <h3>高级属性示例</h3>
    <div class="size-group">
      <CrystalInput v-model="inputValue1" placeholder="大尺寸" size="large" />
      <CrystalInput v-model="inputValue2" placeholder="默认尺寸" size="default" />
      <CrystalInput v-model="inputValue3" placeholder="小尺寸" size="small" />
    </div>
    <CrystalInput v-model="inputValue4" placeholder="字数统计" maxlength="20" show-word-limit />
    <CrystalInput v-model="inputValue5" placeholder="自定义边框颜色" border-theme-color="#67c23a" />
    <CrystalInput v-model="inputValue6" placeholder="邮箱输入" type="email" />
    <CrystalInput v-model="inputValue7" placeholder="密码输入" type="password" show-password />
    <CrystalInput v-model="inputValue8" placeholder="数字输入" type="number" />
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
const inputValue8 = ref('')
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
}

.size-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

h3 {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
}
</style>