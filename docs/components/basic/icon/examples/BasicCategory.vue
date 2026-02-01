<template>
  <div class="icon-demo">
    <h3>基础图标</h3>
    <div class="icon-grid">
      <CrystalIcon icon="Plus" size="24" />
      <CrystalIcon icon="Minus" size="24" />
      <CrystalIcon icon="CirclePlus" size="24" />
      <CrystalIcon icon="Search" size="24" />
      <CrystalIcon icon="Female" size="24" />
      <CrystalIcon icon="Male" size="24" />
      <CrystalIcon icon="Aim" size="24" />
      <CrystalIcon icon="House" size="24" />
      <CrystalIcon icon="FullScreen" size="24" />
      <CrystalIcon icon="Loading" size="24" />
      <CrystalIcon icon="Link" size="24" />
      <CrystalIcon icon="Service" size="24" />
      <CrystalIcon icon="Pointer" size="24" />
      <CrystalIcon icon="Star" size="24" />
      <CrystalIcon icon="Notification" size="24" />
      <CrystalIcon icon="Connection" size="24" />
      <CrystalIcon icon="ChatDotRound" size="24" />
      <CrystalIcon icon="Setting" size="24" />
      <CrystalIcon icon="Clock" size="24" />
      <CrystalIcon icon="Position" size="24" />
      <CrystalIcon icon="Discount" size="24" />
      <CrystalIcon icon="Odometer" size="24" />
      <CrystalIcon icon="ChatSquare" size="24" />
      <CrystalIcon icon="ChatRound" size="24" />
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
