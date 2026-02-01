<template>
  <div class="icon-demo">
    <h3>组合使用</h3>
    <div class="icon-combined-grid">
      <div class="icon-item">
        <CrystalIcon 
          icon="Star" 
          size="48" 
          animate 
          animateType="bounce" 
          gradient 
          gradientFrom="#ff4d4f" 
          gradientTo="#722ed1" 
        />
        <span>动画+渐变</span>
      </div>
      <div class="icon-item">
        <CrystalIcon 
          icon="Heart" 
          size="48" 
          animate 
          animateType="pulse" 
          gradient 
          gradientFrom="#1890ff" 
          gradientTo="#52c41a" 
        />
        <span>脉冲+渐变</span>
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

.icon-combined-grid {
  display: flex;
  gap: 64px;
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
