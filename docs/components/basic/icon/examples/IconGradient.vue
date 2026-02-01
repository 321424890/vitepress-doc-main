<template>
  <div class="icon-demo">
    <h3>颜色渐变</h3>
    <div class="icon-gradient-grid">
      <div class="icon-item">
        <CrystalIcon icon="Star" size="32" gradient />
        <span>默认渐变</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Heart" size="32" gradient gradientFrom="#ff4d4f" gradientTo="#ff7a45" />
        <span>红橙渐变</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Rocket" size="32" gradient gradientFrom="#1890ff" gradientTo="#722ed1" />
        <span>蓝紫渐变</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Sunny" size="32" gradient gradientFrom="#faad14" gradientTo="#fa8c16" />
        <span>黄橙渐变</span>
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

.icon-gradient-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
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
