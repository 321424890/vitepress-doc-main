<template>
  <div class="icon-category">
    <h4>位置图标</h4>
    <div class="icon-grid">
      <crystal-icon icon="Traffic" size="24" color="#1890ff" />
      <crystal-icon icon="Location" size="24" color="#ff4d4f" />
      <crystal-icon icon="LocationInformation" size="24" color="#52c41a" />
      <crystal-icon icon="DeleteLocation" size="24" color="#faad14" />
      <crystal-icon icon="Coordinate" size="24" color="#1890ff" />
      <crystal-icon icon="Bicycle" size="24" color="#ff4d4f" />
      <crystal-icon icon="OfficeBuilding" size="24" color="#52c41a" />
      <crystal-icon icon="School" size="24" color="#faad14" />
      <crystal-icon icon="Guide" size="24" color="#1890ff" />
      <crystal-icon icon="AddLocation" size="24" color="#ff4d4f" />
      <crystal-icon icon="MapLocation" size="24" color="#52c41a" />
      <crystal-icon icon="Place" size="24" color="#faad14" />
      <crystal-icon icon="LocationFilled" size="24" color="#1890ff" />
      <crystal-icon icon="Van" size="24" color="#ff4d4f" />
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