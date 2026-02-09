<template>
  <div class="checkbox-basic-demo">
    <h3>基础复选框</h3>
    <div class="checkbox-group">
      <CrystalCheckbox v-model="defaultValue">默认复选框</CrystalCheckbox>
      <CrystalCheckbox v-model="checkedValue" :checked="true">默认选中</CrystalCheckbox>
      <CrystalCheckbox v-model="disabledValue" disabled>禁用状态</CrystalCheckbox>
      <CrystalCheckbox v-model="disabledCheckedValue" disabled :checked="true">禁用且选中</CrystalCheckbox>
    </div>
    
    <h3>带边框复选框</h3>
    <div class="checkbox-group">
      <CrystalCheckbox v-model="borderValue" border>带边框</CrystalCheckbox>
      <CrystalCheckbox v-model="borderCheckedValue" border :checked="true">带边框且选中</CrystalCheckbox>
      <CrystalCheckbox v-model="borderDisabledValue" border disabled>带边框且禁用</CrystalCheckbox>
    </div>
    
    <h3>不同尺寸</h3>
    <div class="checkbox-group">
      <CrystalCheckbox v-model="sizeLargeValue" size="large">大号</CrystalCheckbox>
      <CrystalCheckbox v-model="sizeDefaultValue">默认尺寸</CrystalCheckbox>
      <CrystalCheckbox v-model="sizeSmallValue" size="small">小号</CrystalCheckbox>
    </div>
    
    <h3>点亮点功能</h3>
    <div class="checkbox-group">
      <CrystalCheckbox v-model="highlightValue" highlight>点亮点功能</CrystalCheckbox>
      <CrystalCheckbox v-model="highlightCheckedValue" highlight :checked="true">点亮点且选中</CrystalCheckbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CrystalCheckbox } from 'crystalplus-ui'

// 绑定值
const defaultValue = ref(false)
const checkedValue = ref(true)
const disabledValue = ref(false)
const disabledCheckedValue = ref(true)
const borderValue = ref(false)
const borderCheckedValue = ref(true)
const borderDisabledValue = ref(false)
const sizeLargeValue = ref(false)
const sizeDefaultValue = ref(false)
const sizeSmallValue = ref(false)
const highlightValue = ref(false)
const highlightCheckedValue = ref(true)
</script>

<style scoped>
.checkbox-basic-demo {
  max-width: 800px;
}

.checkbox-basic-demo h3 {
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

/* 美化复选框样式 */
:deep(.el-checkbox) {
  margin-right: 0;
}

:deep(.el-checkbox__input .el-checkbox__inner) {
  border-radius: 2px;
  transition: all 0.3s ease;
}
</style>