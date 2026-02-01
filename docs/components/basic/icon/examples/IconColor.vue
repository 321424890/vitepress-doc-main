<template>
  <div class="icon-demo">
    <h3>图标颜色</h3>
    <div class="icon-color-grid">
      <div class="icon-item">
        <CrystalIcon icon="Star" size="24" color="#1890ff" />
        <span>蓝色</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Star" size="24" color="#52c41a" />
        <span>绿色</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Star" size="24" color="#faad14" />
        <span>黄色</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Star" size="24" color="#ff4d4f" />
        <span>红色</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Star" size="24" color="#722ed1" />
        <span>紫色</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Star" size="24" color="#fa8c16" />
        <span>橙色</span>
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

.icon-color-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
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
