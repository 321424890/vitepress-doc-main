<template>
  <div class="icon-category">
    <h4>其他图标</h4>
    <div class="icon-grid">
      <crystal-icon icon="ChromeFilled" size="24" color="#1890ff" />
      <crystal-icon icon="Eleme" size="24" color="#ff4d4f" />
      <crystal-icon icon="ElemeFilled" size="24" color="#52c41a" />
      <crystal-icon icon="ElementPlus" size="24" color="#faad14" />
      <crystal-icon icon="Shop" size="24" color="#1890ff" />
      <crystal-icon icon="SwitchFilled" size="24" color="#ff4d4f" />
      <crystal-icon icon="WindPower" size="24" color="#52c41a" />
    </div>
  </div>
</template>

<script setup>
import { CrystalIcon } from 'crystalplus-ui'
</script>

<style scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  justify-items: center;
  align-items: center;
}

.icon-category h4 {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}
</style>