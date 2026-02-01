<template>
  <div class="icon-demo">
    <h3>图标尺寸</h3>
    <div class="icon-size-grid">
      <div class="icon-item">
        <CrystalIcon icon="Star" size="16" />
        <span>16px</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Star" size="24" />
        <span>24px</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Star" size="32" />
        <span>32px</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Star" size="48" />
        <span>48px</span>
      </div>
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

.icon-size-grid {
  display: flex;
  gap: 32px;
  margin-top: 16px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.icon-item span {
  font-size: 14px;
  color: #666;
}
</style>
