<template>
  <div class="icon-demo">
    <h3>动画效果</h3>
    <div class="icon-animation-grid">
      <div class="icon-item">
        <CrystalIcon icon="Refresh" size="32" animate animateType="rotate" />
        <span>旋转</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Star" size="32" animate animateType="pulse" />
        <span>脉冲</span>
      </div>
      <div class="icon-item">
        <CrystalIcon icon="Heart" size="32" animate animateType="bounce" />
        <span>弹跳</span>
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

.icon-animation-grid {
  display: flex;
  gap: 48px;
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
