<template>
  <div class="icon-demo">
    <h3>状态图标</h3>
    <div class="icon-grid">
      <CrystalIcon icon="Success" size="24" color="#52c41a" />
      <CrystalIcon icon="Warning" size="24" color="#faad14" />
      <CrystalIcon icon="Error" size="24" color="#ff4d4f" />
      <CrystalIcon icon="Info" size="24" color="#1890ff" />
      <CrystalIcon icon="Check" size="24" color="#52c41a" />
      <CrystalIcon icon="Close" size="24" color="#ff4d4f" />
      <CrystalIcon icon="Minus" size="24" color="#1890ff" />
      <CrystalIcon icon="Plus" size="24" color="#52c41a" />
      <CrystalIcon icon="Question" size="24" color="#1890ff" />
      <CrystalIcon icon="Help" size="24" color="#ff4d4f" />
      <CrystalIcon icon="Loading" size="24" color="#1890ff" />
      <CrystalIcon icon="Clock" size="24" color="#faad14" />
      <CrystalIcon icon="Calendar" size="24" color="#52c41a" />
    </div>
  </div>
</template>

<script setup>
import { CrystalIcon } from 'crystalplus-ui'
</script>

<style scoped>
.icon-demo {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-top: 16px;
}

.icon-grid .crystal-icon {
  transition: all 0.3s ease;
}

.icon-grid .crystal-icon:hover {
  transform: scale(1.1);
}
</style>
