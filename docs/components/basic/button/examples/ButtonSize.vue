<template>
  <div class="button-group">
    <CrystalButton size="large" type="primary">大型按钮</CrystalButton>
    <CrystalButton type="primary">默认尺寸</CrystalButton>
    <CrystalButton size="small" type="primary">小型按钮</CrystalButton>
    <CrystalButton size="large" disabled>禁用大按钮</CrystalButton>
    <CrystalButton disabled>禁用默认按钮</CrystalButton>
    <CrystalButton size="small" disabled>禁用小按钮</CrystalButton>
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