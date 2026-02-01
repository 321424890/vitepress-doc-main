<template>
  <div class="icon-category">
    <h4>天气图标</h4>
    <div class="icon-grid">
      <crystal-icon icon="Weather" size="24" color="#1890ff" />
      <crystal-icon icon="Sunrise" size="24" color="#ff4d4f" />
      <crystal-icon icon="Sunny" size="24" color="#52c41a" />
      <crystal-icon icon="Ship" size="24" color="#faad14" />
      <crystal-icon icon="MostlyCloudy" size="24" color="#1890ff" />
      <crystal-icon icon="PartlyCloudy" size="24" color="#ff4d4f" />
      <crystal-icon icon="Sunset" size="24" color="#52c41a" />
      <crystal-icon icon="Drizzling" size="24" color="#faad14" />
      <crystal-icon icon="Pouring" size="24" color="#1890ff" />
      <crystal-icon icon="Cloudy" size="24" color="#ff4d4f" />
      <crystal-icon icon="Moon" size="24" color="#52c41a" />
      <crystal-icon icon="MoonNight" size="24" color="#faad14" />
      <crystal-icon icon="Lightning" size="24" color="#1890ff" />
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