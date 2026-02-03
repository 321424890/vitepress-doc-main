<template>
  <div class="input-group">
    <h3>基本属性示例</h3>
    <CrystalInput v-model="inputValue" placeholder="请输入内容" />
    <CrystalInput v-model="inputValue2" placeholder="禁用状态" disabled />
    <CrystalInput v-model="inputValue3" placeholder="可清空" clearable />
    <CrystalInput v-model="inputValue4" placeholder="带前缀图标"  :prefix-icon="Search" />
    <CrystalInput v-model="inputValue5" placeholder="带后缀图标" :suffix-icon="Calendar" />
    <CrystalInput v-model="inputValue6" placeholder="只读状态" readonly />
    <CrystalInput v-model="inputValue7" placeholder="自动获取焦点" autofocus />
  </div>
</template>

<script setup>
import { Calendar, Search } from '@element-plus/icons-vue'
import { CrystalInput } from 'crystalplus-ui'
import { ref } from 'vue'

const inputValue = ref('')
const inputValue2 = ref('')
const inputValue3 = ref('')
const inputValue4 = ref('')
const inputValue5 = ref('')
const inputValue6 = ref('只读内容')
const inputValue7 = ref('')
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
}

h3 {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
}
</style>