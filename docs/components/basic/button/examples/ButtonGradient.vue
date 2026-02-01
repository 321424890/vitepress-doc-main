<template>
  <div class="button-group">
    <CrystalButton gradient>基础渐变</CrystalButton>
    <CrystalButton gradient gradient-from="#ff6b6b" gradient-to="#4ecdc4">自定义渐变</CrystalButton>
    <CrystalButton gradient gradient-from="#ff9a9e" gradient-to="#fad0c4" type="primary">渐变主要按钮</CrystalButton>
    <CrystalButton gradient disabled>禁用渐变</CrystalButton>
  </div>
</template>

<script setup>
import { CrystalButton } from 'crystalplus-ui'
</script>

<style scoped>
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>