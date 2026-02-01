<template>
  <div class="icon-demo">
    <h3>社交图标</h3>
    <div class="icon-grid">
      <CrystalIcon icon="User" size="24" color="#1890ff" />
      <CrystalIcon icon="User" size="24" color="#ff4d4f" />
      <CrystalIcon icon="Users" size="24" color="#52c41a" />
      <CrystalIcon icon="Message" size="24" color="#faad14" />
      <CrystalIcon icon="ChatDotRound" size="24" color="#1890ff" />
      <CrystalIcon icon="Mail" size="24" color="#ff4d4f" />
      <CrystalIcon icon="Phone" size="24" color="#52c41a" />
      <CrystalIcon icon="Star" size="24" color="#faad14" />
      <CrystalIcon icon="StarFilled" size="24" color="#1890ff" />
      <CrystalIcon icon="Heart" size="24" color="#ff4d4f" />
      <CrystalIcon icon="HeartFilled" size="24" color="#52c41a" />
      <CrystalIcon icon="Like" size="24" color="#faad14" />
      <CrystalIcon icon="Dislike" size="24" color="#1890ff" />
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